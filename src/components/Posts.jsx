import { useEffect, useState } from "react";
import PostCard from "./PostCard";

export default function Posts() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const responce = await fetch("https://dummyjson.com/posts", {
        method: "GET",
      });

      const resData = await responce.json();
      setData(resData);
      console.log(resData);
    };

    fetchPosts();
  }, []);

  return (
    <>
      <section className="mt-16 flex flex-col md:grid grid-cols-2 gap-10">
        {data &&
          data.posts.map((post) => <PostCard post={post} key={post.id} />)}
        {/* <PostCard /> */}
      </section>
      <ul className="mt-10 flex items-end justify-center gap-6">
        <li className="font-bold size-10.5 text-white bg-primary flex justify-center items-center rounded-full">
          1
        </li>
        <li className="font-bold size-10.5 text-gray-600 bg-gray-300 flex justify-center items-center rounded-full">
          2
        </li>
        <li className="font-bold size-10.5 text-gray-600 bg-gray-300 flex justify-center items-center rounded-full">
          3
        </li>
        ....
        <li className="font-bold size-10.5 text-gray-600 bg-gray-300 flex justify-center items-center rounded-full">
          13
        </li>
      </ul>
    </>
  );
}
