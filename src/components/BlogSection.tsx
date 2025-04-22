import { component$, useSignal, useTask$ } from "@builder.io/qwik";
import { Button } from "./button";
import type { Blog } from "~/types/blog";

export const BlogSection = component$(() => {
  const blogs = useSignal<Blog[]>([
    {
      id: 1,
      title: "Exploring the Future of AI",
      content:
        "An in-depth analysis of how artificial intelligence is shaping industries globally.",
      tags: "AI, Technology, Innovation",
      author: "Jane Doe",
      date: "2025-04-15",
      imageUrl: "/blogs/recent/1.jpg",
      count: 3,
    },
    {
      id: 2,
      title: "Mastering Remote Work Strategies",
      content:
        "Effective tips and tools for improving productivity while working remotely.",
      tags: "Remote Work, Productivity, Business",
      author: "John Smith",
      date: "2025-04-14",
      imageUrl: "/blogs/recent/2.jpg",
      count: 3,
    },
    {
      id: 3,
      title: "The Rise of Electric Vehicles",
      content:
        "A comprehensive look at the growth of electric vehicles and their impact on the environment.",
      tags: "Electric Vehicles, Sustainability, Environment",
      author: "Alice Johnson",
      date: "2025-04-13",
      imageUrl: "/blogs/recent/3.jpg",
      count: 3,
    },
  ]);

  const currentIndex = useSignal<number>(0);
  const currentBlog = useSignal<Blog | null>(null);

  // **Track the blog state mutation using useTask$**
  useTask$(async ({ track }) => {
    track(currentIndex); // Ensures tracking of index changes
    currentBlog.value = blogs.value[currentIndex.value]; // Set initial blog

  });

  return (
    <div class="relative flex h-full w-full flex-col justify-end overflow-hidden rounded-4xl bg-white p-4 shadow-md">
      {/* eslint-disable-next-line qwik/jsx-img */}
      <img
        src={currentBlog.value?.imageUrl}
        alt={currentBlog.value?.title}
        class="absolute top-0 left-0 z-0 h-full w-full object-cover"
      />
      <div class="relative bottom-0 left-0 z-10 flex w-9/12 flex-col justify-around space-x-4 md:flex-row">
        <div class="flex max-w-full flex-col gap-2 md:max-w-6/12">
          <div class="flex flex-row gap-2">
            {currentBlog.value?.tags.split(",").map((tag, index) => (
              <div key={index} class="w-fit rounded-full border px-4 py-2">
                <p>{tag}</p>
              </div>
            ))}
          </div>
          <h2 class="text-xl font-semibold">{currentBlog.value?.title}</h2>
        </div>
        <div class="flex max-w-full md:max-w-5/12 items-start flex-col gap-2">
          <p class="text-sm text-black">
            {currentBlog.value?.content.slice(0, 200)}...
          </p>
          <Button
            text="Read More"
            link={`/blogs/${currentBlog.value?.id}`}
            theme="dark"
          />
          {/* <button>
            <a href={`/blogs/${currentBlog.value?.id}`}>Read More</a>
          </button> */}
        </div>
      </div>
      <div
        class="absolute right-0 bottom-0 z-20 h-3/12 w-3/12 cursor-pointer"
        onClick$={() => {
          currentIndex.value = (currentIndex.value + 1) % blogs.value.length;
        }}
      >
      {/* eslint-disable-next-line qwik/jsx-img */}
        <img
          src={
            blogs.value[(currentIndex.value + 1) % blogs.value.length].imageUrl
          }
          alt={blogs.value[(currentIndex.value + 1) % blogs.value.length].title}
          class="absolute top-0 left-0 z-0 h-full w-full object-cover"
        />
      </div>
    </div>
  );
});
