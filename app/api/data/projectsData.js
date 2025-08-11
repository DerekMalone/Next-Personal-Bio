import supabase from "../../../lib/supabase";

const gitHubUrl = "https://api.github.com";

const projects = [
  {
    repoName: "Caffe-Cache",
    url: "https://github.com/DerekMalone/Caffe-Cache",
    image:
      "/images/website-images/CafeCache.png"
  },
  {
    repoName: "Minute-x-Minute",
    url: "https://github.com/DerekMalone/Minute-x-Minute",
    image: "/images/website-images/MinuteXMinute.png"
  },
  {
    repoName: "Stark-MunderDifflin",
    url: "https://github.com/DerekMalone/Stark-MunderDifflin",
    image:
      "/images/website-images/MunderDifflin.png"
  },
  {
    repoName: "react-horder-squad-js",
    url: "https://github.com/DerekMalone/react-horder-squad-js",
    image: "/images/website-images/HoarderDashboard.png"
  },
  {
    repoName: "hip-hop-pizza-and-wangs-to-hair-or-not-to-hair",
    url: "https://github.com/DerekMalone/hip-hop-pizza-and-wangs-to-hair-or-not-to-hair",
    image: "/images/website-images/HipHopPizzaandWangs.png"
  }
];

const getAllProjects = () => {
  return structuredClone(projects);
};


const getProject = async (id) => {
  const {data, error } = await supabase
    .from('projects')
    .select('*')
    .single();
  return { data, error };a
}


const getProject = async (repoName) => {
  fetch(`${gitHubUrl}/repos/DerekMalone/${repoName}`)
    .then((response) => response.json)
    .then((res) => res);
};

export { getAllProjects, getProject };


// import supabase from "../../../lib/supabase";


// export const getAboutMe = async () => {
//     const { data, error } = await supabase
//         .from('aboutMe')
//         .select('*')
//         .single();
//     return { data, error };
// };

// export const createAboutMe = async (session, aboutMe) => {
    
//     if (!session) {
//         return { error: { message: 'Not authenticated' } };
//     }
    
//     return await supabase
//         .from('aboutMe')
//         .insert([{
//             ...aboutMe,
//             userId: session.user.id
//         }])
//         .select();
// };

// export const updateAboutMe = async (session, id, bio) => {
//     const { data, error } = await supabase
//         .from('aboutMe')
//         .update({ bio })
//         .eq('id', id)
//         .eq('userId', session.currentUser.id)
//         .select()
//         .single();
//     return { data, error };
// };

// export const deleteAboutMe = async (session, id) => {
//     if (!session) {
//         return { error: { message: 'Not authenticated' } };
//     }
    
//     return await supabase
//         .from('aboutMe')
//         .delete()
//         .eq('id', id)
//         .eq('user_id', session.user.id);
// };