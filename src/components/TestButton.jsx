import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

const TestButton = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <InteractiveHoverButton className="bg-blue-600 text-white">
        Test Hover
      </InteractiveHoverButton>
    </div>
  );
};

export default TestButton; 