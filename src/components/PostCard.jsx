import post1 from "../assets/post1.png";

export default function PostCard() {
  return (
    <div className="">
      <img
        src={post1}
        alt="post one image"
        className="max-h-69.5 w-full object-cover"
      />
      <div className="pt-5">
        <div>
          <span className="bg-primary text-white inline-block px-4 py-1 rounded-lg text-sm">
            Travel
          </span>
        </div>
        <h2 className="mt-2 text-xl md:text-2xl font-merriweather font-bold">
          What Traveling Greece For 2 Weeks Taught Me About Life
        </h2>
        <p className="text-sm text-gray-600 mt-1">Jun 21, 2021 • 11 min read</p>
        <p className="text-gray-600 mt-2 line-clamp-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam mollis
          Diam mollis lectus vitae nulla malesuada amet purus sed. A condimentum
          tempus a egestas sodales diam cras. egestas sodales diam cras. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Diam mollis lectus
          vitae nulla malesuada amet purus sed. A condimentum tempus a egestas
          sodales diam cras.
        </p>
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
    </div>
  );
}
