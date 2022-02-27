import React from "react";

interface ICreateField {
  title: string;
  description: string;
  children: React.ReactNode;
}

const CustomDivider = () => (
  <div className="w-full h-1 border-dotted border-t-2 border-gray-300" />
);

const CreateField: React.FC<ICreateField> = ({
  title,
  description,
  children,
}) => {
  return (
    <>
      <div className="flex py-8">
        <div className="flex flex-col gap-2 w-1/3 pr-8">
          <p className="text-sm font-semibold">{title}</p>
          <p className="text-xs">{description}</p>
        </div>
        <div className="w-2/3 bg-white shadow rounded-md p-6">{children}</div>
      </div>
      <CustomDivider />
    </>
  );
};

export default CreateField;
