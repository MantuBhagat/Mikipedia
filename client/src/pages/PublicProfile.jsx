import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api/axios";
import {
  FaGlobe,
  FaLinkedin,
  FaTwitter,
  FaUserPlus,
  FaEdit,
  FaShare,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const PublicProfile = () => {
  const { username } = useParams();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get(`/profile/${username}`)
      .then((res) => setProfile(res.data))
      .catch(() => setProfile(null))
      .finally(() => setLoading(false));
  }, [username]);

  if (loading) return null;

  if (!profile) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-6xl font-semibold">Profile not found</h2>

        <Link
          to="/profile-setup"
          className="flex gap-2 text-blue-600 mt-7 items-center justify-center"
        >
          <FaUserPlus />
          Create Profile
        </Link>
      </div>
    );
  }

  const { userId, bio, avatar, socialLinks, keywords } = profile;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HEADER */}
      <div className="bg-white border-b">
        <div className="max-w-5xl mx-auto px-6 py-10 flex gap-6 items-center">
          <img
            src={avatar || "https://i.pravatar.cc/100"}
            className="w-28 h-28 rounded-full object-cover border"
            alt={userId.name}
          />

          <div className="flex-1">
            <p className="text-gray-600">{userId.username}</p>
            <h1 className="text-3xl font-bold text-gray-900">{userId.name}</h1>

            <p className="text-gray-500 mt-1 capitalize">{userId.role}</p>

            <div className="flex gap-4 mt-4">
              {socialLinks?.website && (
                <a href={socialLinks.website} target="_blank">
                  <FaGlobe />
                </a>
              )}
              {socialLinks?.linkedin && (
                <a href={socialLinks.linkedin} target="_blank">
                  <FaLinkedin />
                </a>
              )}
              {socialLinks?.twitter && (
                <a href={socialLinks.twitter} target="_blank">
                  <FaTwitter />
                </a>
              )}
            </div>
          </div>

          {/* CTA */}
          <a
            href={socialLinks?.website || "#"}
            className="bg-black text-white px-6 py-3 rounded-xl font-medium"
          >
            Contact
          </a>
          <Link>
            <FaEdit />
          </Link>
          <Link>
            <FaShare />
          </Link>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto px-6 py-10 space-y-10">
        {/* ABOUT */}
        <section>
          <h2 className="text-xl font-semibold mb-3">About</h2>
          <p className="text-gray-700 leading-relaxed">
            {bio || "No bio provided."}
          </p>
        </section>

        {/* SERVICES / KEYWORDS */}
        {keywords?.length > 0 && (
          <section>
            <h2 className="text-xl font-semibold mb-3">Services</h2>
            <div className="flex flex-wrap gap-2">
              {keywords.map((tag, i) => (
                <span
                  key={i}
                  className="bg-gray-200 px-4 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Product or Services  */}
        <div className="flex justify-center items-center gap-4">
          <div className="max-h-80 max-w-56 bg-gray-800">
            <img src="https://i.pravatar.cc/100" className="object-cover" />
          </div>
          <div className="max-h-80 max-w-56 bg-gray-800">
            <img src="https://i.pravatar.cc/100" className="object-cover" />
          </div>
          <div className="max-h-80 max-w-56 bg-gray-800">
            <img src="https://i.pravatar.cc/100" className="object-cover" />
          </div>
          <div className="max-h-80 max-w-56 bg-gray-800">
            <img src="https://i.pravatar.cc/100" className="object-cover" />
          </div>
          <div className="max-h-80 max-w-56 bg-gray-800">
            <img src="https://i.pravatar.cc/100" className="object-cover" />
          </div>
          <div className="max-h-80 max-w-56 bg-gray-800">
            <img src="https://i.pravatar.cc/100" className="object-cover" />
          </div>
          <div className="max-h-80 max-w-56 bg-gray-800">
            <img src="https://i.pravatar.cc/100" className="object-cover" />
          </div>
          <div className="max-h-80 max-w-56 bg-gray-800">
            <img src="https://i.pravatar.cc/100" className="object-cover" />
          </div>
          <div className="max-h-80 max-w-56 bg-gray-800">
            <img src="https://i.pravatar.cc/100" className="object-cover" />
          </div>
          <div className="max-h-80 max-w-56 bg-gray-800">
            <img src="https://i.pravatar.cc/100" className="object-cover" />
          </div>
        </div>

        {/* TRUST STRIP */}
        <section className="bg-white p-6 rounded-xl border flex justify-between items-center">
          <p className="text-gray-600">Verified profile on Mikify</p>
          <span className="text-sm text-gray-400">mikify.in/{username}</span>
        </section>
      </div>
    </div>
  );
};

export default PublicProfile;
