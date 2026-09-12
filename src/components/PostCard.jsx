import { Link } from "react-router";
import post1 from "../assets/post1.png";

export default function PostCard({ post }) {
  return (
    <Link to={`/post/${post.id}`} className="">
      <img
        src={post1}
        alt="post one image"
        className="max-h-69.5 w-full object-cover"
      />
      <div className="pt-5">
        <div className="flex gap-1">
          {post.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-primary text-white inline-block px-4 py-1 rounded-lg text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <h2 className="mt-2 text-xl md:text-2xl font-merriweather font-bold">
          {post.title}
        </h2>
        <p className="text-sm text-gray-600 mt-1">Jun 21, 2021 • 11 min read</p>
        <p className="text-gray-600 mt-2 line-clamp-4">{post.body}</p>
        <div className="mt-2 flex items-center gap-3">
          <img
            src={post1}
            alt="George Costanza photo"
            className="size-10 rounded-full"
          />
          <span className="text-sm font-bold font-merriweather">
            George Costanza
          </span>
        </div>
      </div>
    </Link>
  );
}
