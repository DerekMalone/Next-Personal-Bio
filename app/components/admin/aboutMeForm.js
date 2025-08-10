'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { updateAboutMe, getAboutMe } from '../../api/data/aboutMeData';
import { useAuth } from "../../../contexts/AuthContext";
import { useEffect } from 'react';


export const AboutMeForm = () => {
    const [aboutMe, setAboutMe] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const session = useAuth();
    
    
    // useEffect(() => {
    //     const loadData = async () => {
    //         try {
    //             const { data } = await getAboutMe(session);
    //             setAboutMe(data || {});
    //         } catch (err) {
    //             setError('Failed to load data');
    //         }
    //     };
    //     loadData();
    // }, [session]);

    useEffect(() => {
        const loadData = async () => {
            try {
                const { data } = await getAboutMe();
                setAboutMe(data || {});
            } catch (err) {
                setError('Failed to load data');
            }
        };
        loadData();
    }, []);

    const handleChange = (e) => {
        setAboutMe({ ...aboutMe, [e.target.name]: e.target.value });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const { error } = await updateAboutMe(
                session, 
                aboutMe.id, 
                aboutMe.bio
            );
            if (error) throw error;
            router.push('/admin');
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
        router.push('/admin');
    };

    return (
        <div>
            <h2>About Me</h2>
            <form onSubmit={handleSubmit}>
                <textarea id={aboutMe.id} value={aboutMe.bio} rows={5} cols={50} name="bio" onChange={handleChange} placeholder="aboutMe.bio" />
                <button type="submit">Save</button>
            </form>
        </div>
    );
}