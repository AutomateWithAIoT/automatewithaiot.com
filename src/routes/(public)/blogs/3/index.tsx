import { component$, useSignal } from "@builder.io/qwik";
import type { Blog } from "~/types/blog";


export default component$(() => {
  const blog = useSignal<Blog[]>(
    [
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
    ]
  ); 
const blogId = useSignal<number>(2);
  return (
    <div class="relative px-4 pt-40 pb-20 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold">Blog Details</h1>
      {/* {blogData ? ( */}
        <>
          <div class="mt-4 rounded-4xl border bg-white p-4 shadow-md">
            {/* eslint-disable-next-line qwik/jsx-img */}
            <img
              src={blog.value[blogId.value].imageUrl}
              alt={blog.value[blogId.value].title}
              class="mb-4 h-64 w-full rounded-3xl object-cover"
            />
            <div class="mt-[-10px] flex w-full flex-col gap-2 rounded-3xl border border-emerald-400 bg-emerald-50 px-4 py-8">
              <p class="text-sm text-emerald-500">{blog.value[blogId.value].date}</p>
              <div class="mt-2 flex flex-row gap-2">
                {blog.value[blogId.value].tags.split(",").map((tag, index) => (
                  <div key={index} class="w-fit rounded-full border px-2 py-1">
                    <p>{tag}</p>
                  </div>
                ))}
              </div>
              <p class="text-sm text-emerald-500">
                Author: {blog.value[blogId.value].author}
              </p>
              <h2 class="mt-2 text-xl font-semibold">{blog.value[blogId.value].title}</h2>
              <p class="mt-2 text-sm text-black">{blog.value[blogId.value].content}</p>
            </div>
          </div>
          {blogId.value !== 0 && (
            <button
              class="absolute bottom-0 left-0 z-10 m-4 flex cursor-pointer items-center justify-center space-x-2 rounded-full bg-emerald-950 px-4 py-2 text-white"
              onClick$={() => {
                window.location.href = `/blogs/${Number(blogId.value) - 1}`;
              }}
            >
              <i class="material-icons text-emerald-50">arrow_back</i>
              <p>Previous</p>
            </button>
          )}
          {Number(blogId.value) !== blog.value[blogId.value].count && (
            <button
              class="absolute right-0 bottom-0 z-10 m-4 flex cursor-pointer items-center justify-center space-x-2 rounded-full bg-emerald-950 px-4 py-2 text-white"
              onClick$={() => {
                window.location.href = `/blogs/${Number(blogId.value)}`;
              }}
            >
              <p>Next </p>
              <i class="material-icons text-emerald-50">arrow_forward</i>
            </button>
          )}
        </>
      {/* ) : ( */}
        {/* <p>Loading...</p> */}
      {/* )} */}
    </div>
  );
});


