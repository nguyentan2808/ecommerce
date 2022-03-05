import {
  Alert,
  AlertIcon,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  useDisclosure,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import Loading from "components/common/Loading";
import TableFooter from "components/common/TableFooter";
import AdminLayout from "components/layouts/Admin";
import CreateModal, {
  IFormValues,
} from "components/modules/category/CreateModal";
import { format } from "date-fns";
import { useGetCategoriesQuery } from "generated/graphql";
import { usePreviousNonNullish } from "hooks/usePreviousNonNullish ";
import Head from "next/head";
import React from "react";
import { useForm } from "react-hook-form";
import { AiOutlineDelete, AiOutlinePlus } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import * as Yup from "yup";

const schema = Yup.object({
  name: Yup.string().required("Name is required"),
  description: Yup.string().required("Detail is required."),
}).required();

export const formDefaultValues = {
  name: "",
  description: "",
};

const Category = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [limit, setLimit] = React.useState(10);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { loading, data, error } = useGetCategoriesQuery({
    variables: {
      page: currentPage,
      limit,
    },
  });
  const prevData = usePreviousNonNullish(data);
  const categoriesData = data?.categories ?? prevData?.categories;

  const form = useForm({
    defaultValues: formDefaultValues,
    resolver: yupResolver(schema),
  });

  const handleEdit = (category: IFormValues) => {
    const { name, description } = category;
    onOpen();
    form.reset({ name, description });
  };

  const emptyRows =
    categoriesData?.list.length && categoriesData.list.length % limit !== 0
      ? limit - (categoriesData.list.length % limit)
      : 0;

  return (
    <>
      <Head>
        <title>Admin - Categories</title>
      </Head>
      <div className="p-6 bg-white shadow-md rounded-md w-full flex flex-col gap-4 lg:flex-row justify-between items-center">
        <Loading isLoading={loading} />
        <div className="text-lg font-semibold">Categories</div>
        <div className="flex items-center gap-4 flex-col lg:flex-row">
          <InputGroup w={64}>
            <InputLeftElement>
              <BsSearch className="text-md mt-1 opacity-60" />
            </InputLeftElement>
            <Input placeholder="Search..." />
          </InputGroup>

          <Button
            pl={10}
            pr={12}
            py={4}
            w={{ base: "full", md: "auto" }}
            leftIcon={<AiOutlinePlus className="text-sm" />}
            onClick={onOpen}
          >
            <p className="text-sm">Add category</p>
          </Button>
        </div>
      </div>

      {error && (
        <Alert status="error" variant="left-accent" className="rounded-md my-4">
          <AlertIcon />
          {error?.message}
        </Alert>
      )}

      <span className="w-full overflow-x-auto overflow-y-hidden">
        <table className="w-full mt-6 shadow-md">
          <thead>
            <tr>
              <th className="text-left w-10">ID</th>
              <th className="text-left">Name</th>
              <th className="text-left w-1/3">Description</th>
              <th className="w-1/5 text-right">Create At</th>
              <th className="w-10">Action</th>
            </tr>
          </thead>
          <tbody>
            {categoriesData?.list.map((category, index) => (
              <tr key={index} className="bg-white hover:bg-gray-100 h-12">
                <td className="text-center">{category.id}</td>
                <td>{category.name}</td>
                <td>{category.description}</td>
                <td className="text-right">
                  {format(new Date(category.createdAt), "MM/dd/yyyy")}
                </td>
                <td className="flex justify-end gap-2">
                  <AiOutlineDelete className="text-red-500 text-lg cursor-pointer" />
                  <FiEdit
                    className="text-lg cursor-pointer opacity-70"
                    onClick={() => handleEdit(category)}
                  />
                </td>
              </tr>
            ))}
            {[...Array(emptyRows)].map((item) => (
              <tr key={item} className="bg-white hover:bg-gray-100 h-12">
                <td colSpan={5} />
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td className="text-right p-1" colSpan={5}>
                <TableFooter
                  count={categoriesData?.total || 10}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  limit={limit}
                  setLimit={setLimit}
                />
              </td>
            </tr>
          </tfoot>
        </table>
      </span>

      <CreateModal onClose={onClose} isOpen={isOpen} form={form} />
    </>
  );
};

Category.layout = AdminLayout;

export default Category;
