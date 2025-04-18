import { RequestHandler } from "@builder.io/qwik-city";

const blogs = [
  {
    id: 1,
    title: "Exploring the Future of AI",
    content:
      "An in-depth analysis of how artificial intelligence is shaping industries globally.",
    tags: "AI, Technology, Innovation",
    author: "Jane Doe",
    date: "2025-04-15",
    imageUrl: "?blogs/recent/1.jpg",
  },
  {
    id: 2,
    title: "Mastering Remote Work Strategies",
    content:
      "Effective tips and tools for improving productivity while working remotely.",
    tags: "Remote Work, Productivity, Business",
    author: "John Smith",
    date: "2025-04-14",
    imageUrl: "?blogs/recent/2.jpg",
  },
  {
    id: 3,
    title: "The Rise of Electric Vehicles",
    content:
      "A comprehensive look at the growth of electric vehicles and their impact on the environment.",
    tags: "Electric Vehicles, Sustainability, Environment",
    author: "Alice Johnson",
    date: "2025-04-13",
    imageUrl: "?blogs/recent/3.jpg",
  },
];

export const onGet: RequestHandler = async ({ json }) => {
  json(200, blogs); // Return the list of blogs as a JSON response
};
