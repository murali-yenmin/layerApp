import React from "react";

import Greeting from "../Greeting";

const HomePage: React.FC = () => {
  return (
    <div className="text-center">
      <header className="bg-gray-800 min-h-screen flex flex-col items-center justify-center text-white text-base md:text-lg lg:text-xl">
        <p>Hello from React with TypeScript and Webpack!</p>
        <Greeting name="Gemini" />
      </header>
    </div>
  );
};

export default HomePage;
