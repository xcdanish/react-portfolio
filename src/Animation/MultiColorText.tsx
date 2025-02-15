import React from "react";

const tailwindColors = {
  blue: [
    "text-blue-100",
    "text-blue-200",
    "text-blue-300",
    "text-blue-400",
    "text-blue-500",
    "text-blue-600",
    "text-blue-700",
    "text-blue-800",
    "text-blue-900",
  ],
  purple: [
    "text-purple-100",
    "text-purple-200",
    "text-purple-300",
    "text-purple-400",
    "text-purple-500",
    "text-purple-600",
    "text-purple-700",
    "text-purple-800",
    "text-purple-900",
  ],
};

const MultiColorText: React.FC = () => {
  return (
    <div className="p-6 text-center space-y-3 bg-gray-900 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-white text-3xl font-bold">
        Multi-Color Text Display
      </h1>

      {/* Blue Colors */}
      <div className="space-y-2">
        <h2 className="text-xl text-white">Blue Shades</h2>
        {tailwindColors.blue.map((color, index) => (
          <p key={index} className={`text-lg font-semibold ${color}`}>
            This is {color.replace("text-", "")}
          </p>
        ))}
      </div>

      {/* Purple Colors */}
      <div className="space-y-2 mt-6">
        <h2 className="text-xl text-white">Purple Shades</h2>
        {tailwindColors.purple.map((color, index) => (
          <p key={index} className={`text-lg font-semibold ${color}`}>
            This is {color.replace("text-", "")}
          </p>
        ))}
      </div>
    </div>
  );
};

export default MultiColorText;
