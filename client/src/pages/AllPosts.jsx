import { useEffect, useState } from "react";
import { fetchAllPosts } from "../api/postApi";
import PostCard from "../components/PostCard";
import MikifyLoader from "../components/MikifyLoader";

const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllPosts()
      .then(setPosts)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <MikifyLoader />;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {posts.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  );
};

export default AllPosts;
