import { useParams } from "react-router";
import post1 from "../assets/post1.png";
import { useEffect, useState } from "react";

export default function PostPage() {
  const [data, setData] = useState(null);
  const [isloading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const params = useParams();

  useEffect(() => {
    const fetchPost = () => {
      fetch("https://dummyjson.com/posts/" + params.slug)
        .then((res) => {
          if (!res.ok) {
            throw new Error(`HTTP error: ${res.status}`);
          }

          return res.json();
        })
        .then((data) => {
          setData(data);
        })
        .catch((err) => {
          setIsError(true);
        })
        .finally(() => {
          setIsLoading(false);
        });
    };

    fetchPost();
  }, []);

  if (isloading) {
    return (
      <div className="py-20 font-merriweather text-5xl text-center">
        <div className="animate-pulse">Loading......</div>
      </div>
    );
  }

  if (data === null || isError) {
    return (
      <>
        <div> Post Not Found! </div>
      </>
    );
  }

  return (
    <div className="max-w-5xl mx-auto pt-10">
      <div className="flex gap-3">
        {data.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-primary text-white inline-block px-4 py-1 rounded-lg text-sm"
          >
            {tag}
          </span>
        ))}
      </div>

      <h2 className="mt-4 text-4xl md:text-5xl font-merriweather font-bold">
        {data.title}
      </h2>
      <p className="text-sm text-gray-600 mt-3">Jun 21, 2021 • 11 min read</p>

      <img
        src={post1}
        alt="post one image"
        className="max-h-200 w-full object-cover mt-5"
      />

      <div className="mt-5 flex items-center gap-3">
        <img
          src={post1}
          alt="George Costanza photo"
          className="size-10 rounded-full"
        />
        <span className="text-sm font-bold font-merriweather">
          George Costanza
        </span>
      </div>

      <p className="text-gray-600 mt-10 line-clamp-4">{data.body}</p>
    </div>
  );
}
