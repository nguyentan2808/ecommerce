import React from "react";

export const usePreviousNonNullish = <T>(value: T): T => {
  const ref = React.useRef<T>(value);
  React.useEffect(() => {
    if (value !== null && value !== undefined) {
      ref.current = value;
    }
  });
  return ref.current;
};
