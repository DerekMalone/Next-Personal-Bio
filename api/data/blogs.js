const blogs = [
  {
    id: 1,
    title: "Sample Title 1",
    text: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet est placerat in egestas erat. Rhoncus urna neque viverra justo nec ultrices dui. Nisl pretium fusce id velit ut tortor pretium. Leo vel fringilla est ullamcorper eget...",
  },
  {
    id: 2,
    title: "Sample Title 2",
    text: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet est placerat in egestas erat. Rhoncus urna neque viverra justo nec ultrices dui. Nisl pretium fusce id velit ut tortor pretium. Leo vel fringilla est ullamcorper eget...",
  },
  {
    id: 3,
    title: "Sample Title 3",
    text: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet est placerat in egestas erat. Rhoncus urna neque viverra justo nec ultrices dui. Nisl pretium fusce id velit ut tortor pretium. Leo vel fringilla est ullamcorper eget...",
  },
];

const getAllBlogs = () => {
  return structuredClone(blogs);
};

export default getAllBlogs;
