import { useEffect, useState } from "react";
import PostCard from "./PostCard";
import BlogCard from "./BlogCard";

export default function Blogs() {
  const [data, setData] = useState(null);
  const [isloading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [skip, setSkip] = useState(0);
  const limit = 10;
  const [totalPages, setTotalPages] = useState(0);

  const nextPage = () => {
    setPage((prev) => (prev < totalPages ? prev + 1 : prev));
    setSkip((prev) => (prev < totalPages ? prev + limit : prev));
  };

  const prevPage = () => {
    setPage((prev) => (prev > 1 ? prev - 1 : prev));
    setSkip((prev) => (prev > 0 ? prev - limit : prev));
  };

  const handleChange = (e) => {
    const value = e.target.value;
    if (value.length < 1) {
      return;
    }

    if (value > totalPages || value < 0) {
      return;
    }

    setPage(value);
    console.log((value - 1) * limit);
    setSkip((value - 1) * limit);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // setIsLoading(true);
        setIsError(false);

        const response = await fetch(`http://localhost:8080/api/blogs`);

        if (!response.ok) {
          throw new Error("Error!");
        }

        const resData = await response.json();

        // console.log(resData);

        setData(resData);

        // console.log(
        //   Math.floor(resData.total / limit) +
        //     (resData.total % limit > 0 ? 1 : 0),
        // );

        // setTotalPages(Math.ceil(resData.total / limit));

        // if (data !== null) {
        //   setData((prev) => ({
        //     ...prev,
        //     posts: [...resData.posts],
        //   }));
        // } else {
        //   setData(resData);
        // }
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, [limit, skip]);

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
          data.data.map((post) => <BlogCard post={post} key={post._id} />)}
        {/* <PostCard /> */}
      </section>

      <ul className="mt-10 flex items-end justify-center gap-6 hidden">
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
        <li>
          <input
            type="number"
            onChange={handleChange}
            className="h-10.5 w-24 border border-gray-950"
          />
        </li>
      </ul>
    </>
  );
}
