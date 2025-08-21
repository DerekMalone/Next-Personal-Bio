'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

const AuthContext = createContext({});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);


  // Fetch user profile
  const fetchUserProfile = async (userId) => {
    try {
      const {data, error } = await supabase.from('user').select('name').eq('id', userId).single();
      if (error) throw error
      return data;
    } catch (error) {
      console.error('Error fetching user profile:', error);
      return null;
    }
  }

  // Sign in function
  const login = async (email, password) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      
      if (error) {
        return { success: false, error: error.message };
      }

      const profile = await fetchUserProfile(data.user.id)
      setUserProfile(profile);
      
      return { success: true, user: data.user };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  // Sign out function
  const logout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      
      if (error) {
        return { success: false, error: error.message };
      }
      
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  // Check if user is admin (you can customize this logic)
  const isAdmin = () => {
    // For now, we'll check if the user is authenticated
    // In production, you might want to check specific email addresses or user roles
    return currentUser !== null;
  };


  useEffect(() => {
    // Get initial session
    const getInitialSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);
      const user = session?.user ?? null;
      setCurrentUser(user);

      if (user) {
        const profile = await fetchUserProfile(user.id);
        setUserProfile(profile);
      }
      setLoading(false);
    };

    getInitialSession();

    // Listen for auth changes  
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session);
        const user = session?.user ?? null;
        setCurrentUser(user);
        if (user) {
          const profile = await fetchUserProfile(user.id);
          setUserProfile(profile);
        }
        setLoading(false);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const value = {
    currentUser,
    userProfile,
    session,
    login,
    logout,
    isAdmin,
    loading,
    
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
