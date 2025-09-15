
import React from "react";

const SkeletonCard = () => {
  return (
    <div className="animate-pulse rounded-lg shadow-md bg-white p-4">
      <div className="h-40 bg-gray-300 rounded-md mb-4"></div>
      <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2"></div>
    </div>
  );
};

export default SkeletonCard;
