import React from "react";
import { BeatLoader } from "react-spinners";

interface ILoadingProps {
  isLoading: boolean;
}

const Loading: React.FC<ILoadingProps> = ({ isLoading }) => {
  if (isLoading)
    return (
      <>
        <div className="fixed top-0 left-0 w-screen h-screen bg-gray-500 opacity-10 z-[1600]" />
        <div className="fixed top-1/2 left-1/2 z-[1601]">
          <BeatLoader
            size={16}
            margin={4}
            loading={isLoading}
            color="var(--chakra-colors-teal-500)"
          />
        </div>
      </>
    );
  return <></>;
};

export default Loading;
