import React from "react";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

const TestButton = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <InteractiveHoverButton className="bg-blue-600 text-white">
        Test Hover Button
      </InteractiveHoverButton>
    </div>
  );
};

export default TestButton; 