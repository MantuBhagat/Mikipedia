import { Link } from "react-router-dom";
import { FiCheckCircle } from "react-icons/fi";
import { VscSave } from "react-icons/vsc";
import { LiaShareSolid } from "react-icons/lia";

const ProfileCard = () => {
  return (
    <div className="bg-white rounded-2xl p-5 shadow hover:shadow-xl transition">
      {/* Top */}
      <div className="flex items-center gap-4">
        <img
          src="https://i.pravatar.cc/100"
          className="w-14 h-14 rounded-full object-cover"
        />

        <div>
          <div className="flex items-center gap-1">
            <h3 className="font-semibold text-gray-900">Rahul Design Studio</h3>
            <FiCheckCircle className="text-blue-500 text-sm" />
          </div>
          <p className="text-sm text-gray-500">UI/UX Designer</p>
        </div>
      </div>

      {/* Info */}
      <p className="text-sm text-gray-600 mt-4 line-clamp-2">
        Helping startups build clean, conversion-focused digital experiences.
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-4">
        <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">
          Designer
        </span>
        <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">
          Freelancer
        </span>
        <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">
          India
        </span>
      </div>

      <div className="catelog py-3 flex items-center justify-center gap-2">
        <div>
          <img
            src="https://i.pravatar.cc/100"
            className="h-36 w-40 rounded-md object-cover"
          />
          <p className="title-product flex items-center justify-center mt-2">
            Title of product
          </p>
        </div>
        <div>
          <img
            src="https://i.pravatar.cc/100"
            className="h-36 w-40 rounded-md object-cover"
          />
          <p className="title-product flex items-center justify-center mt-2">
            Title of product
          </p>
        </div>
        <div>
          <img
            src="https://i.pravatar.cc/100"
            className="h-36 w-40 rounded-md object-cover"
          />
          <p className="title-product flex items-center justify-center mt-2">
            Title of product
          </p>
        </div>
        <div>
          <img
            src="https://i.pravatar.cc/100"
            className="h-36 w-40 rounded-md object-cover"
          />
          <p className="title-product flex items-center justify-center mt-2">
            Title of product
          </p>
        </div>
      </div>

      {/* CTA */}

      <div className="flex gap-2 mt-4">
        <Link
          to="/profile"
          className="block mt-5 py-2 px-4 text-center bg-gray-100 text-black rounded-full text-sm font-medium"
        >
          View Profile
        </Link>
        <Link
          to="/rahul"
          className="block mt-5 py-2 px-4 text-center bg-gray-100 text-black rounded-full text-sm font-medium"
        >
          <LiaShareSolid />
        </Link>
        <Link
          to="/rahul"
          className="block mt-5 py-2 px-4 text-center bg-gray-100 text-black rounded-full text-sm font-medium"
        >
          <VscSave />
        </Link>
      </div>
    </div>
  );
};

export default ProfileCard;
