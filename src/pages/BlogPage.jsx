import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { format, parseISO } from "date-fns";

export default function BlogPage() {
  const [data, setData] = useState(null);
  const [isloading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const params = useParams();

  useEffect(() => {
    const fetchPost = () => {
      fetch("http://127.0.0.1:8080/api/blogs/" + params.slug)
        .then((res) => {
          if (!res.ok) {
            throw new Error(`HTTP error: ${res.status}`);
          }

          return res.json();
        })
        .then((data) => {
          setData(data.data);
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
      <p className="text-sm text-gray-600 mt-3">
        {format(parseISO(data.createdAt), "MMM dd, yyyy")} •{" "}
        {getReadingTime(`${data.title} ${data.description}`)}
      </p>

      <img
        src={data.image}
        alt="post one image"
        className="max-h-200 w-full object-cover mt-5"
      />

      <div className="mt-5 flex items-center gap-3">
        <img
          src={data.user.avatar}
          alt="George Costanza photo"
          className="size-10 rounded-full"
        />
        <span className="text-sm font-bold font-merriweather">
          {data.user.name}
        </span>
      </div>

      <p className="text-gray-600 mt-10">{data.description}</p>
    </div>
  );
}

// utils/readingTime.js
export function getReadingTime(text) {
  const WPM = 200; // Average reading speed
  const wordCount = text.trim().split(/\s+/).length;
  const time = Math.ceil(wordCount / WPM);

  return `${time} min read`;
}
