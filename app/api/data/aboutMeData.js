import supabase from "../../../lib/supabase";

// export const getAboutMe = async (session) => {
//     const { data, error } = await supabase
//         .from('aboutMe')
//         .select('*')
//         .eq('userId', session.currentUser.id)
//         .single();
    
//     return { data, error };
// };

export const getAboutMe = async () => {
    const { data, error } = await supabase
        .from('aboutMe')
        .select('*')
        .single();
    return { data, error };
};

export const createAboutMe = async (session, aboutMe) => {
    
    if (!session) {
        return { error: { message: 'Not authenticated' } };
    }
    
    return await supabase
        .from('aboutMe')
        .insert([{
            ...aboutMe,
            userId: session.user.id
        }])
        .select();
};

export const updateAboutMe = async (session, id, bio) => {
    const { data, error } = await supabase
        .from('aboutMe')
        .update({ bio })
        .eq('id', id)
        .eq('userId', session.currentUser.id)
        .select()
        .single();
    return { data, error };
};

export const deleteAboutMe = async (session, id) => {
    if (!session) {
        return { error: { message: 'Not authenticated' } };
    }
    
    return await supabase
        .from('aboutMe')
        .delete()
        .eq('id', id)
        .eq('user_id', session.user.id);
};

// current progress, Need to update adminDashboard to be able to create, update, delete, and view aboutMe.
// then I will need to update the Profile and AboutMe component to be able to display the aboutMe data.