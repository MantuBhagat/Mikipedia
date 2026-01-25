import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiGlobe,
  FiUsers,
  FiLayers,
  FiArrowRight,
  FiEdit,
  FiEye,
} from "react-icons/fi";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          One profile.
          <br />
          <span className="text-gray-400">Endless possibilities.</span>
        </motion.h1>

        <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
          Mikify is your digital identity — showcase work, connect with people,
          and grow globally without building a website or app.
        </p>

        <div className="mt-10 flex justify-center flex-wrap gap-4">
          <Link
            to="/register"
            className="px-8 py-4 bg-blue-600 text-white rounded-full flex items-center gap-2"
          >
            Create your profile <FiArrowRight />
          </Link>

          <Link to="/explore" className="px-8 py-4 border rounded-full">
            Explore
          </Link>
        </div>
      </section>

      {/* PLATFORM VALUE */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <ValueCard
            icon={<FiLayers />}
            title="One Digital Space"
            text="Website, portfolio, services, and contact — all in one profile."
          />
          <ValueCard
            icon={<FiUsers />}
            title="Communities"
            text="Join communities, collaborate, and share ideas with people like you."
          />
          <ValueCard
            icon={<FiGlobe />}
            title="Global Reach"
            text="Get discovered by clients, teams, and opportunities worldwide."
          />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-12">
            How Mikify works
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <StepCard
              icon={<FiEdit />}
              title="Create your profile"
              text="Sign up and build your Mikify space in minutes."
            />
            <StepCard
              icon={<FiEye />}
              title="Share & showcase"
              text="Add services, links, media, and your work."
            />
            <StepCard
              icon={<FiUsers />}
              title="Connect & grow"
              text="Join communities and get discovered."
            />
          </div>
        </div>
      </section>

      {/* COMMUNITIES PREVIEW */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-semibold">Explore Communities</h2>
            <Link to="/communities" className="text-sm text-gray-600">
              View all →
            </Link>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {["Startups", "Creators", "Business", "Government"].map((c) => (
              <CommunityBox key={c} name={c} />
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-28 text-center">
        <h2 className="text-3xl font-semibold">
          Build your digital identity today
        </h2>
        <p className="mt-4 text-gray-500">
          No code. No complexity. Just one powerful profile.
        </p>

        <Link
          to="/register"
          className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-blue-600 text-white rounded-full"
        >
          Get started free <FiArrowRight />
        </Link>
      </section>

      {/* FOOTER NAV */}
      <footer className="border-t py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap gap-6 justify-between text-sm text-gray-600">
          <span>© {new Date().getFullYear()} Mikify</span>
          <div className="flex gap-6">
            <Link to="/about">About</Link>
            <Link to="/communities">Communities</Link>
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

/* ---------- Components ---------- */

const ValueCard = ({ icon, title, text }) => (
  <motion.div
    whileHover={{ y: -6 }}
    className="bg-white border rounded-2xl p-6"
  >
    <div className="text-2xl mb-4 text-blue-600">{icon}</div>
    <h3 className="font-semibold text-lg">{title}</h3>
    <p className="mt-2 text-gray-600">{text}</p>
  </motion.div>
);

const StepCard = ({ icon, title, text }) => (
  <div className="border rounded-2xl p-6 text-center">
    <div className="text-3xl mb-4 text-blue-600 flex justify-center">
      {icon}
    </div>
    <h3 className="font-semibold text-lg">{title}</h3>
    <p className="mt-2 text-gray-600">{text}</p>
  </div>
);

const CommunityBox = ({ name }) => (
  <Link
    to={`/communities/${name.toLowerCase()}`}
    className="border rounded-xl p-6 hover:bg-white hover:border-blue-500 transition"
  >
    <h3 className="font-semibold">{name}</h3>
    <p className="text-sm text-gray-600 mt-1">Posts & discussions</p>
  </Link>
);
