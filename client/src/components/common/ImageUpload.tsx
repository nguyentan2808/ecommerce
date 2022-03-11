/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import React from "react";
import { useDropzone } from "react-dropzone";
import { useFormContext, useWatch } from "react-hook-form";
import { IoClose } from "react-icons/io5";
import Loading from "./Loading";

interface IImageUploadProps {
  isMultiple?: boolean;
}

const thumbnailUrl = (id: string) => {
  return `https://res.cloudinary.com/nguyentan2808/image/upload/c_thumb,w_200,g_face/${id}`;
};

export const fullSizeUrl = (id: string) => {
  return `https://res.cloudinary.com/nguyentan2808/image/upload/${id}`;
};

const ImageUpload: React.FC<IImageUploadProps> = ({ isMultiple = false }) => {
  const { setValue, getValues } = useFormContext();
  const [previews, setPreviews] = React.useState([]);
  const [isLoading, setLoading] = React.useState(false);

  const onDrop = React.useCallback(async (files) => {
    const url = "https://api.cloudinary.com/v1_1/nguyentan2808/image/upload";

    setLoading(true);
    const result = await axios.all(
      files.map((file: File) => {
        const form = new FormData();
        form.append("file", file);
        form.append("upload_preset", "pickbazar");
        return axios.post(url, form);
      })
    );
    const data = result.map((item: any) => item.data.public_id);
    setValue("images", data);
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: isMultiple,
  });

  const handleDelete = (url: string) => {
    const images = getValues("images");
    const newImages = images.filter((image: string) => image !== url);
    setValue("images", newImages);
  };

  const { control } = useFormContext();
  const watchImages = useWatch({ control, name: "images" });

  React.useEffect(() => {
    if (watchImages) {
      setPreviews(watchImages);
    }
  }, [watchImages]);

  console.log(previews);

  return (
    <>
      {isLoading && <Loading isLoading={isLoading} />}

      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <div className="w-full h-full py-8 flex flex-col gap-3 justify-center items-center border-dashed border-2 rounded-md">
          <div className={isDragActive ? "animate-bounce" : ""}>
            {uploadSvg}
          </div>
          <div className="text-xs text-center">
            <p>
              <span className="text-teal-500 font-semibold">
                Upload an image
              </span>{" "}
              or drag and drop
            </p>
            <p>PNG, JPG</p>
          </div>
        </div>

        <div className="flex mt-4">
          {previews.map((preview, index) => (
            <div
              key={index}
              className="relative w-1/4 p-2"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="absolute -right-2 -top-2 p-1 rounded-full bg-gray-100 shadow-mui-3 flex justify-center items-center"
                onClick={() => handleDelete(preview)}
              >
                <IoClose className="text-xl" />
              </div>
              <a href={fullSizeUrl(preview)} target="_blank" rel="noreferrer">
                <img
                  className="rounded-lg"
                  src={thumbnailUrl(preview)}
                  alt="Oke"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ImageUpload;

const uploadSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="41px"
    height="30px"
    viewBox="0 0 40.909 30"
    className="text-gray-300"
  >
    <g transform="translate(0 -73.091)">
      <path
        data-name="Path 2125"
        d="M39.129,89.827A8.064,8.064,0,0,0,34.58,86.94,5.446,5.446,0,0,0,30,78.546a5.207,5.207,0,0,0-3.537,1.321,10.921,10.921,0,0,0-10.1-6.776,10.511,10.511,0,0,0-7.713,3.2A10.508,10.508,0,0,0,5.454,84q0,.277.043.916A9.528,9.528,0,0,0,0,93.546a9.193,9.193,0,0,0,2.8,6.743,9.191,9.191,0,0,0,6.744,2.8H32.728a8.172,8.172,0,0,0,6.4-13.264Zm-12.06-.575a.656.656,0,0,1-.479.2H21.818v7.5a.691.691,0,0,1-.681.681H17.045a.691.691,0,0,1-.682-.681v-7.5H11.59a.655.655,0,0,1-.681-.681.8.8,0,0,1,.213-.512L18.6,80.783a.722.722,0,0,1,.98,0l7.5,7.5a.663.663,0,0,1,.191.49A.656.656,0,0,1,27.07,89.252Z"
        transform="translate(0)"
        fill="currentColor"
      ></path>
    </g>
  </svg>
);
