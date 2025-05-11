import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Connect() {
  const [isLogin, setIsLogin] = useState(true);

  const panelVariants = {
    login: { x: "100%" },
    register: { x: "0%" },
  };

  return (
    <div className="relative w-[800px] h-[500px] overflow-hidden mx-auto  rounded-xl shadow-lg flex">
      {/* Sliding Panel */}
      <motion.div
        className="absolute w-1/2 h-full bg-[#007BFF] text-white flex flex-col justify-center items-center p-8 z-10 transition-all duration-500"
        variants={panelVariants}
        animate={isLogin ? "login" : "register"}
        transition={{ duration: 0.2 }}
      >
        {isLogin ? (
          <>
            <h2 className="text-3xl font-bold mb-2">Welcome Back</h2>
            <p className="mb-4">It’s nice to see you again</p>
            <button onClick={() => setIsLogin(false)} className="underline">
              Register Here
            </button>
          </>
        ) : (
          <>
            <h2 className="text-3xl font-bold mb-2">Welcome</h2>
            <p className="mb-4">It’s good to see you</p>
            <button onClick={() => setIsLogin(true)} className="underline">
              Login Here
            </button>
          </>
        )}
      </motion.div>

      {/* Forms Area */}
      <div className="w-full flex">
        {/* Login Form */}
        <div
          className={`w-1/2 h-full bg-white flex flex-col justify-center items-center transition-opacity duration-500 ${
            isLogin ? "opacity-100 z-0" : "opacity-0 -z-10"
          }`}
        >
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <input placeholder="email" className="mb-2 p-2 border w-3/4" />
          <input placeholder="password" className="mb-4 p-2 border w-3/4" />
          <button className="bg-blue-500 text-white px-6 py-2 rounded">Login</button>
        </div>

        {/* Register Form */}
        <div
          className={`w-1/2 h-full bg-white flex flex-col justify-center items-center transition-opacity duration-500 ${
            isLogin ? "opacity-0 -z-10" : "opacity-100 z-0"
          }`}
        >
          <h2 className="text-2xl font-bold mb-4">Register</h2>
          <input placeholder="email" className="mb-2 p-2 border w-3/4" />
          <input placeholder="name" className="mb-2 p-2 border w-3/4" />
          <input placeholder="password" className="mb-4 p-2 border w-3/4" />
          <button className="bg-blue-500 text-white px-6 py-2 rounded">Register</button>
        </div>
      </div>
    </div>
  );
}
