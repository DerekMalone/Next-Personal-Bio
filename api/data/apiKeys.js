const cloudinaryConfig = {
  cloud_name: process.env.NEXT_PUBLIC_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUD_API_KEY,
  api_secret: process.env.NEXT_PUBLIC_CLOUD_API_SECRET,
};

const githubConfig = {
  githubToken: process.env.NEXT_PUBLIC_GITHUB_TOKEN,
};

export { cloudinaryConfig, githubConfig };
