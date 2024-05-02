const gitHubUrl = "https://api.github.com";

const getProject = async (repoName) => {
  const repo = await fetch(`${gitHubUrl}/repos/DerekMalone/${repoName}`);
  const repoData = await repo.json();
  return repoData;
};

export default getProject;
