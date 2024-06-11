import React from "react";

const Header: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center text-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-pulse">
        InsightX
      </h1>
    </div>
  );
};

export default Header;
