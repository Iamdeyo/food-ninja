import { useEffect, useState } from "react";
import PostCard from "./PostCard";

export default function Posts() {
  const [data, setData] = useState(null);
  const [isloading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [skip, setSkip] = useState(0);
  const limit = 10;

  const nextPage = () => {
    setPage((prev) => prev + 1);
    setSkip((prev) => prev + limit);
  };

  const prevPage = () => {
    setPage((prev) => (prev > 1 ? prev - 1 : prev));
    setSkip((prev) => (prev > 0 ? prev - limit : prev));
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // setIsLoading(true);
        setIsError(false);

        const response = await fetch(
          `https://dummyjson.com/posts?limit=${limit}&skip=${skip}`,
        );

        if (!response.ok) {
          throw new Error("Error!");
        }

        const resData = await response.json();

        if (data !== null) {
          setData((prev) => ({
            ...prev,
            posts: [...resData.posts, ...prev.posts],
          }));
        } else {
          setData(resData);
        }
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, [limit, skip]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const pageHeight = document.documentElement.scrollHeight;

      // if (scrollPosition >= pageHeight) {
      //   console.log("Reached the bottom!");

      //   nextPage();
      // }
      if (window.scrollY === 0) {
        nextPage();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
        <div> Posts Not Found! </div>
      </>
    );
  }

  return (
    <>
      <section className="mt-16 flex flex-col md:grid grid-cols-2 gap-10">
        {data &&
          data.posts.map((post) => <PostCard post={post} key={post.id} />)}
        {/* <PostCard /> */}
      </section>
      skip: {skip}
      <ul className="mt-10 flex items-end justify-center gap-6">
        <li
          onClick={prevPage}
          className="font-bold size-10.5 text-gray-600 bg-gray-300 flex justify-center items-center rounded-full cursor-pointer"
        >
          {"<"}
        </li>
        <li className="font-bold size-10.5 text-white bg-primary flex justify-center items-center rounded-full">
          {page}
        </li>
        <li
          onClick={nextPage}
          className="font-bold size-10.5 text-gray-600 bg-gray-300 flex justify-center items-center rounded-full cursor-pointer"
        >
          {">"}
        </li>
      </ul>
    </>
  );
}
