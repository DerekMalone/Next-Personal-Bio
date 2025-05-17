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
