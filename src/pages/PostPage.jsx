import { useParams } from "react-router";

export default function PostPage() {
  const params = useParams();

  return (
    <div className="font-merriweather text-7xl text-center pt-10">
      PostPage with slug: {params.slug}
    </div>
  );
}
