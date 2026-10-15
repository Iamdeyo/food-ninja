import { useState } from "react";

export default function CreatePost() {
  const [post, setPost] = useState({
    title: "",
    description: "",
    slug: "",
    image: "",
    tags: [],
    fullName: "",
    avatar: "",
  });

  const [tag, setTag] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const { title, tags, description, slug, image, fullName, avatar } = post;

    const body = {
      title,
      description,
      slug,
      image,
      tags,
      user: {
        name: fullName,
        avatar,
      },
    };

    try {
      const response = await fetch(`http://localhost:8080/api/blogs`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        return alert("Error!!!");
      }

      await response.json();

      alert("Good");

      setPost({
        title: "",
        description: "",
        slug: "",
        image: "",
        tags: [],
        fullName: "",
        avatar: "",
      });
    } catch (error) {
      console.log(error);
    }

    console.log(post);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="font-bold text-3xl">Add Post</h1>
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-2.5 mt-5 w-full max-w-2xl"
      >
        <div className="flex flex-col gap-1">
          <label>Title:</label>
          <input
            type="text"
            className="h-10 border"
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
          />{" "}
        </div>
        <div className="flex flex-col gap-1">
          <label>Description:</label>
          <textarea
            className="min-h-40 border"
            value={post.description}
            onChange={(e) => setPost({ ...post, description: e.target.value })}
          ></textarea>
        </div>
        <div className="flex flex-col gap-1">
          <label>slug:</label>
          <input
            type="text"
            className="h-10 border"
            value={post.slug}
            onChange={(e) => setPost({ ...post, slug: e.target.value })}
          />{" "}
        </div>
        <div className="flex flex-col gap-1">
          <label>image URL:</label>
          <input
            type="text"
            className="h-10 border"
            value={post.image}
            onChange={(e) => setPost({ ...post, image: e.target.value })}
          />{" "}
        </div>
        <div className="flex flex-col gap-1">
          <label>Tags:</label>
          <div className="flex">
            <input
              type="text"
              value={tag}
              className="h-10 border flex-1"
              onChange={(e) => setTag(e.target.value)}
            />
            <div
              className="p-2 bg-blue-600 text-white cursor-pointer active:scale-90 duration-300"
              onClick={() => {
                if (tag !== "") {
                  setPost((prev) => ({ ...prev, tags: [...prev.tags, tag] }));
                  setTag("");
                }
              }}
            >
              add
            </div>
          </div>
          <div>
            {post.tags.map((tg, i) => (
              <span
                key={i}
                className="rounded-4xl py-1 px-3 text-xs bg-amber-950 text-white"
              >
                {tg}
              </span>
            ))}
            <span
              onClick={() => setPost({ ...post, tags: [] })}
              className="rounded-4xl py-1 px-3 text-xs bg-red-900 text-white cursor-pointer"
            >
              Clear
            </span>
          </div>
        </div>

        <h2 className="font-bold text-xl text-center mt-4">User Info</h2>
        <div className="flex flex-col gap-1">
          <label>Full Name:</label>
          <input
            type="text"
            className="h-10 border"
            value={post.fullName}
            onChange={(e) => setPost({ ...post, fullName: e.target.value })}
          />{" "}
        </div>
        <div className="flex flex-col gap-1">
          <label>Avatar URL:</label>
          <input
            type="text"
            className="h-10 border"
            value={post.avatar}
            onChange={(e) => setPost({ ...post, avatar: e.target.value })}
          />{" "}
        </div>

        <button className="mt-5 bg-blue-800 text-white font-semibold py-2">
          {" "}
          Add Post{" "}
        </button>
      </form>
    </div>
  );
}

/**
 * {
  "title": "The Horizon of Tomorrow: Navigating the Intersections of Technology, Nature, and Society",
  "description":
   "slug": "The-Horizon",
  "image": "https://picsum.photos/seed/css-grid/800/450",
  "tags": [
    "frontend",
    "super",
    "web-design"
  ],
  "user": {
    "name": "Ada Eze",
    "avatar": "https://i.pravatar.cc/150?img=3"
  }
 */
