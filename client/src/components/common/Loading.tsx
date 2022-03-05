import React from "react";
import { BeatLoader } from "react-spinners";

interface ILoadingProps {
  isLoading: boolean;
}

const Loading: React.FC<ILoadingProps> = ({ isLoading }) => {
  return (
    <div className="fixed top-1/2 left-1/2">
      <BeatLoader loading={isLoading} color="var(--chakra-colors-teal-500)" />
    </div>
  );
};

export default Loading;
