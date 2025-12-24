import React from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

const Home = () => {
  let token = localStorage.getItem("token");
  if (token) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="min-h-screen grid md:grid-cols-2 place-items-center p-8 bg-gray-50">
      <div className="w-full text-center mb-12">
        <h1 className="text-5xl font-light mb-4">
          Build, share, and verify your knowledge together.
        </h1>

        <div className="flex-col flex my-10 gap-2">
          <p className="border-2 border-black rounded-full p-2">Google login</p>
          <p className="border-2 border-black rounded-full p-2">
            Microsoft login
          </p>

          <div className="flex items-center my-2">
            <hr className="flex-grow border-t border-gray-400" />
            <span className="mx-2 text-gray-500">or</span>
            <hr className="flex-grow border-t border-gray-400" />
          </div>

          <Link
            to="/login"
            className="bg-black text-white rounded-full p-2 block"
          >
            Continue with email
          </Link>
        </div>

        <p className="text-sm font-light mb-8">
          By clicking Continue to join or sign in, you agree to Mikify’s{" "}
          <span className="text-blue-500">
            User <br /> Agreement
          </span>
          , <span className="text-blue-500">Privacy Policy</span>, and{" "}
          <span className="text-blue-500">Cookie Policy</span>.
        </p>

        <p>
          New to Mikify?
          <Link to="/create" className="flex-1 text-blue-500 hover:underline">
            Join now
          </Link>
        </p>
      </div>

      <div className="flex justify-center">
        <img
          src="https://static.licdn.com/aero-v1/sc/h/dxf91zhqd2z6b0bwg85ktm5s4"
          alt="Illustration 1"
          className="w-1/2 h-auto"
        />
      </div>
    </div>
  );
};

export default Home;
