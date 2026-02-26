import React from "react";

const TechUsed = ({techName} : {techName: string}) => {
  return (
    <div className="flex items-center justify-center bg-gray-700/10 dark:bg-white/10 text-textcolorless py-[5px] px-3 rounded-md">
      {techName}
    </div>
  );
};

export default TechUsed;
