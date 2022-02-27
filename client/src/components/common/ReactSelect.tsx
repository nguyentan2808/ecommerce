import React from "react";
import Select from "react-select";

interface ICustomSelectProps {
  options: any[];
  placeholder: string;
}

const CustomSelect: React.FC<ICustomSelectProps> = ({
  options,
  placeholder,
}) => {
  const teal500 = "#009f7f";
  const gray300 = "#CBD5E0";

  const style = {
    control: (base: any, state: any) => ({
      ...base,
      border: state.isFocused ? `1px solid ${teal500}` : `1px solid ${gray300}`,
      outline: "none",
      boxShadow: "none",
      borderRadius: "6px",
      paddingTop: "0.1rem",
      paddingBottom: "0.1rem",
      overflow: "hidden",
      "&:hover": {
        border: `1px solid ${teal500}`,
        boxShadow: "none",
      },
    }),
  };

  return (
    <Select
      styles={style}
      options={options}
      placeholder={<div className="text-sm opacity-70">{placeholder}</div>}
    />
  );
};

export default CustomSelect;
