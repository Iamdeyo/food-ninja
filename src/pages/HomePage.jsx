import PostCard from "../components/PostCard";
import Posts from "../components/Posts";

export default function HomePage() {
  return (
    <div>
      <header className="flex flex-col items-center pt-10">
        <h1 className="font-merriweather text-4xl md:text-5xl font-black text-primary">
          The Food Ninja Blog
        </h1>
        <p className="mt-3 md:text-xl text-gray-600">
          A blog about food, experiences, and recipes.
        </p>

        <div className="relative mt-10 w-full max-w-100">
          <input
            type="text"
            placeholder="Search for articles"
            className="w-full max-w-100 h-14 border border-[#DDDDDD] rounded-lg pl-4 pr-12"
          />
        </div>
      </header>
      <Posts />
    </div>
  );
}
