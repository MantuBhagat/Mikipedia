import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const LoggedInHome = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Navbar />

      <main className="pt-24 px-6 max-w-7xl mx-auto">
        {/* Welcome */}
        <section className="mb-10">
          <h1 className="text-3xl font-bold">Welcome back, {user.name} 👋</h1>
          <p className="text-gray-600 mt-2 max-w-xl">
            This is your Mikify space — manage your identity, showcase your
            work, and grow globally from one place.
          </p>
        </section>

        {/* Primary Actions */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <ActionCard
            title="Your Mikify Page"
            desc="View how your profile looks to the world"
            link="/profile"
          />
          <ActionCard
            title="Edit Profile"
            desc="Update bio, links, services and media"
            link="/account"
          />
          <ActionCard
            title="Create Section"
            desc="Add services, posts or showcases"
            link="/create"
          />
        </section>

        {/* Secondary */}
        <section
          className="grid grid-cols-1 md:grid-cols-2 gap-6 py-8
        "
        >
          <SecondaryCard
            title="Explore Creators"
            desc="Discover businesses & creators on Mikify"
            link="/explore"
          />
          <SecondaryCard
            title="Communities"
            desc="Join niche communities & collaborations"
            link="/communities"
          />
        </section>
      </main>
    </>
  );
};

export default LoggedInHome;

/* Components */

const ActionCard = ({ title, desc, link }) => (
  <Link to={link} className="border rounded-xl p-6 hover:shadow-md transition">
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="text-gray-600 mt-2">{desc}</p>
  </Link>
);

const SecondaryCard = ({ title, desc, link }) => (
  <Link to={link} className="border rounded-xl p-6 hover:bg-gray-50 transition">
    <h3 className="font-semibold">{title}</h3>
    <p className="text-gray-600 text-sm mt-1">{desc}</p>
  </Link>
);
