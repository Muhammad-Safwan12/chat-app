import React, { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    bio: "", // Added bio field
  });

  const { signup, login } = useContext(AuthContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      login({ email: formData.email, password: formData.password });
      return;
    }
    signup(formData);
    // Add your form submission logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md p-8 rounded-2xl backdrop-blur-xl bg-white/10 shadow-2xl border border-white/20">
        {/* Toggle Buttons */}
        <div className="flex mb-8 bg-white/5 rounded-lg p-1">
          <button
            className={`flex-1 py-2 rounded-md text-white text-sm font-medium transition-all duration-300 ${
              isLogin ? "bg-purple-600/80" : ""
            }`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`flex-1 py-2 rounded-md text-white text-sm font-medium transition-all duration-300 ${
              !isLogin ? "bg-purple-600/80" : ""
            }`}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {!isLogin && (
            <>
              <input
                type="text"
                name="fullName"
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300"
                placeholder="Full Name"
              />
              <textarea
                name="bio"
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300 resize-none h-24"
                placeholder="Write something about yourself..."
              />
            </>
          )}

          <input
            type="email"
            name="email"
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300"
            placeholder="Email Address"
          />

          <input
            type="password"
            name="password"
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300"
            placeholder="Password"
          />

          <button
            type="submit"
            className="w-full py-3 px-4 bg-purple-600/80 hover:bg-purple-700/80 text-white rounded-lg font-medium transition-all duration-300 hover:scale-[1.02]"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        {/* Forgot Password Link */}
        {isLogin && (
          <p className="mt-4 text-center">
            <Link
              to="/forgot-password"
              className="text-white/70 hover:text-white text-sm transition-colors duration-300"
            >
              Forgot Password?
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default LoginPage;