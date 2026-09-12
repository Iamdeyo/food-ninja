import PostCard from "./PostCard";

export default function Posts() {
  return (
    <>
      <section className="mt-16 flex flex-col md:flex-row gap-10">
        <PostCard />
        <PostCard />
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
