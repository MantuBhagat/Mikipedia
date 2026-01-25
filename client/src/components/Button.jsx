const Button = ({ children, ...props }) => (
  <button
    {...props}
    className="w-full bg-black text-white py-3 rounded-md font-medium hover:bg-gray-900 transition"
  >
    {children}
  </button>
);

export default Button;
