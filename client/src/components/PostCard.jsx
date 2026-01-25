const PostCard = ({ post }) => {
  return (
    <div className="p-4 border rounded-lg shadow">
      <h2 className="text-xl font-bold">{post.title}</h2>
      <p className="text-gray-600">{post.content}</p>
    </div>
  );
};

export default PostCard;
