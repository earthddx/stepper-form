import type { Post, PostFormData } from "./types";

const db: Post[] = [
  {
    id: 1,
    title: "Getting started with React",
    body: "React is a UI library...",
    category: "TECH",
    author: "Alice",
    pinned: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    title: "Design systems explained",
    body: "A design system is...",
    category: "DESIGN",
    author: "Alice",
    pinned: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    title: "Data structures 101",
    body: "It is not an easy topic to begin with.",
    category: "TECH",
    author: "John",
    pinned: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: 4,
    title: "Algorithms for beginners",
    body: "Algorithms are a set of instructions to solve a problem or perform a task.",
    category: "TECH",
    author: "Carol",
    pinned: false,
    createdAt: new Date().toISOString(),
  },
];
let nextId = db.length + 1;

export const api = {
  getPosts: (): Promise<Post[]> =>
    new Promise((res) => setTimeout(() => res([...db]), 500)),

  createPost: (data: PostFormData): Promise<Post> =>
    new Promise((res) =>
      setTimeout(() => {
        const post = {
          ...data,
          id: nextId++,
          createdAt: new Date().toISOString(),
        };
        db.push(post);
        res(post);
      }, 700),
    ),
};
