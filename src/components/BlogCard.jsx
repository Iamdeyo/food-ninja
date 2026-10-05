import { Link } from "react-router";
import { getReadingTime } from "../pages/BlogPage";
import { format, parseISO } from "date-fns";

export default function BlogCard({ post }) {
  return (
    <Link to={`/blog/${post._id}`} className="">
      <img
        src={post.image}
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
        <p className="text-sm text-gray-600 mt-1">
          {format(parseISO(post.createdAt), "MMM dd, yyyy")} •
          {getReadingTime(`${post.title} ${post.description}`)}
        </p>
        <p className="text-gray-600 mt-2 line-clamp-4">{post.description}</p>
        <div className="mt-2 flex items-center gap-3">
          <img
            src={post.user.avatar}
            alt="George Costanza photo"
            className="size-10 rounded-full"
          />
          <span className="text-sm font-bold font-merriweather">
            {post.user.name}
          </span>
        </div>
      </div>
    </Link>
  );
}
