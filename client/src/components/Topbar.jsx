import UserMenu from "./UserMenu";

const Topbar = ({ user }) => {
  return (
    <header className="w-full h-16 bg-white shadow flex items-center justify-between px-6">
      <h2 className="font-semibold text-lg">Dashboard</h2>
      <UserMenu user={user} />
    </header>
  );
};

export default Topbar;
