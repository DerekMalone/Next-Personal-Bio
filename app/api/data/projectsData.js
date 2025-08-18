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

const getProject = async (repoName) => {
  fetch(`${gitHubUrl}/repos/DerekMalone/${repoName}`)
    .then((response) => response.json)
    .then((res) => res);
};

export { getAllProjects, getProject };


// Will be using endpoints below once admin projects components are created


// const getProject = async (id) => {
//   const {data, error } = await supabase
//     .from('projects')
//     .select('*')
//     .eq('id', id)
//     .single();
//   return { data, error };
// }



/* 
const createProject = async (session, project) => {
  if (!session) {
    return { error: { message: 'Not authenticated' } };
  }
  const {data, error} = await supabase
    .from('projects')
    .insert([
      {
        ...project,
        userId: session.user.id
      }
    ])
    .select();
  return { data, error };
}
*/

/* 
const updateProject = async (session, id, project) => {
  if (!session) {
    return { error: { message: 'Not authenticated' } };
  }
  const {data, error} = await supabase
    .from('projects')
    .update({
      ...project,
      userId: session.user.id
    })
    .eq('id', id)
    .eq('userId', session.currentUser.id)
    .select()
    .single();
  return { data, error };
}
*/

/* 
const deleteProject = async (session, id) => {
  if (!session) {
    return { error: { message: 'Not authenticated' } };
  }
  const {data, error} = await supabase
    .from('projects')
    .delete()
    .eq('id', id)
    .eq('userId', session.currentUser.id);
  return { data, error };
}
*/
