const gitHubUrl = "https://api.github.com";

const projects = [
  {
    repoName: "Caffe-Cache",
    url: "https://github.com/DerekMalone/Caffe-Cache",
  },
  {
    repoName: "Minute-x-Minute",
    url: "https://github.com/DerekMalone/Minute-x-Minute",
  },
  {
    repoName: "Stark-MunderDifflin",
    url: "https://github.com/DerekMalone/Stark-MunderDifflin",
  },
  {
    repoName: "react-horder-squad-js",
    url: "https://github.com/DerekMalone/react-horder-squad-js",
  },
  {
    repoName: "hip-hop-pizza-and-wangs-to-hair-or-not-to-hair",
    url: "https://github.com/DerekMalone/hip-hop-pizza-and-wangs-to-hair-or-not-to-hair",
  },
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
