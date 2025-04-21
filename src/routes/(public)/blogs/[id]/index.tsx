import { component$, useSignal, useTask$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";

export default component$(() => {
  const location = useLocation();
  const blogId = location.params.id; // Extract "id" from the URL
  const blogData = useSignal<Blog | null>(null);

  useTask$(async () => {
    try {
      const response = await fetch(
        `${location.url.origin}/api/blogs/${blogId}`,
      );
      if (response.ok) {
        blogData.value = await response.json();
      } else {
        console.error("Failed to fetch blog data:", response.status);
      }
    } catch (error) {
      console.error("Error fetching blog data:", error);
    }
  });
  return (
    <div class="relative px-4 pt-40 pb-20 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold">Blog Details</h1>
      {blogData.value ? (
        <>
          <div class="mt-4 rounded-4xl border bg-white p-4 shadow-md">
            {/* eslint-disable-next-line qwik/jsx-img */}
            <img
              src={blogData.value.imageUrl}
              alt={blogData.value.title}
              class="mb-4 h-64 w-full rounded-3xl object-cover"
            />
            <div class="mt-[-10px] flex w-full flex-col gap-2 rounded-3xl border border-emerald-400 bg-emerald-50 px-4 py-8">
              <p class="text-sm text-emerald-500">{blogData.value.date}</p>
              <div class="mt-2 flex flex-row gap-2">
                {blogData.value.tags.split(",").map((tag, index) => (
                  <div key={index} class="w-fit rounded-full border px-2 py-1">
                    <p>{tag}</p>
                  </div>
                ))}
              </div>
              <p class="text-sm text-emerald-500">
                Author: {blogData.value.author}
              </p>
              <h2 class="mt-2 text-xl font-semibold">{blogData.value.title}</h2>
              <p class="mt-2 text-sm text-black">{blogData.value.content}</p>
            </div>
          </div>
          {blogId !== "1" && (
            <button
              class="absolute bottom-0 left-0 z-10 m-4 flex cursor-pointer items-center justify-center space-x-2 rounded-full bg-emerald-950 px-4 py-2 text-white"
              onClick$={() => {
                window.location.href = `/blogs/${Number(blogId) - 1}`;
              }}
            >
              <i class="material-icons text-emerald-50">arrow_back</i>
              <p>Previous</p>
            </button>
          )}
          {Number(blogId) !== blogData.value.count && (
            <button
              class="absolute right-0 bottom-0 z-10 m-4 flex cursor-pointer items-center justify-center space-x-2 rounded-full bg-emerald-950 px-4 py-2 text-white"
              onClick$={() => {
                window.location.href = `/blogs/${Number(blogId) + 1}`;
              }}
            >
              <p>Next </p>
              <i class="material-icons text-emerald-50">arrow_forward</i>
            </button>
          )}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
});

interface Blog {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
  tags: string;
  imageUrl: string;
  count?: number;
}
