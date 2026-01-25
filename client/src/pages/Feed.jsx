import PostCard from "../components/PostCard";

const dummyPosts = [
  {
    id: 1,
    title: "How startups can get visibility without websites",
    author: "mikify",
    category: "Startup",
  },
  {
    id: 2,
    title: "Open platforms vs closed platforms",
    author: "community",
    category: "Discussion",
  },
  {
    id: 3,
    title: "India vs Pak Match platforms",
    author: "community",
    category: "Discussion",
  },
];

const Feed = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-semibold mb-6">All Posts</h1>

      <div className="space-y-4">
        {dummyPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
