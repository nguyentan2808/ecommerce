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
import DeleteModal from "components/common/DeleteModal";
import Loading from "components/common/Loading";
import TableFooter from "components/common/TableFooter";
import CreateModal from "components/modules/Admin/category/CreateModal";
import { format } from "date-fns";
import {
  Category,
  useGetCategoriesQuery,
  useRemoveCategoryMutation,
} from "generated/graphql";
import Head from "next/head";
import React from "react";
import { useForm } from "react-hook-form";
import { AiOutlineDelete, AiOutlinePlus } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import * as Yup from "yup";

export interface IFormDelete {
  id: number;
  name: string;
}

const FormSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  description: Yup.string().required("Detail is required."),
}).required();

export const FormDefaultValues = {
  name: "",
  description: "",
};

const Category: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [limit, setLimit] = React.useState(10);
  const [formDelete, setFormDelete] = React.useState<IFormDelete>({
    id: -1,
    name: "",
  });
  const [formUpdate, setFormUpdate] = React.useState<number | null>(null);

  const modalCreate = useDisclosure();
  const modalDelete = useDisclosure();

  const { isLoading, data, error } = useGetCategoriesQuery(
    {
      page: currentPage,
      limit,
    },
    { keepPreviousData: true }
  );

  const removeMutation = useRemoveCategoryMutation();

  const form = useForm({
    defaultValues: FormDefaultValues,
    resolver: yupResolver(FormSchema),
  });

  const handleEdit = (category: Category) => {
    const { name, description } = category;
    modalCreate.onOpen();
    form.reset({ name, description });
    setFormUpdate(category.id);
  };

  const handleDelete = (category: {
    id: number;
    name: string;
    createdAt: any;
    description: string;
  }) => {
    setFormDelete({ id: category.id, name: category.name });
    modalDelete.onOpen();
  };

  const emptyRows =
    data?.categories.list.length && data?.categories.list.length % limit !== 0
      ? limit - (data?.categories.list.length % limit)
      : 0;

  return (
    <>
      <Head>
        <title>Admin - Categories</title>
      </Head>
      <div className="p-6 bg-white shadow-md rounded-md w-full flex flex-col gap-4 lg:flex-row justify-between items-center">
        <Loading isLoading={isLoading} />
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
            onClick={modalCreate.onOpen}
          >
            <p className="text-sm">Add category</p>
          </Button>
        </div>
      </div>
      {error && (
        <Alert status="error" variant="left-accent" className="rounded-md my-4">
          <AlertIcon />
          {error}
        </Alert>
      )}
      <span className="w-full overflow-x-auto overflow-y-hidden">
        <table className="w-full mt-6 shadow-md">
          <thead>
            <tr>
              <th className="text-left w-10">STT</th>
              <th className="text-left">Name</th>
              <th className="text-left w-1/3">Description</th>
              <th className="w-1/5 text-right">Create At</th>
              <th className="w-10">Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.categories?.list.map((category, index) => (
              <tr key={index} className="bg-white hover:bg-gray-100 h-12">
                <td className="text-center fon-bold">
                  {/* {(currentPage - 1) * limit + index + 1}
                   */}
                  {category.id}
                </td>
                <td>{category.name}</td>
                <td>
                  <div className="max-h-12 line-clamp-2">
                    {category.description}
                  </div>
                </td>
                <td className="text-right">
                  {format(new Date(category.createdAt), "MM/dd/yyyy")}
                </td>
                <td>
                  <div className="flex justify-end gap-2">
                    <AiOutlineDelete
                      className="text-red-500 text-lg cursor-pointer"
                      onClick={() => handleDelete(category)}
                    />
                    <FiEdit
                      className="text-lg cursor-pointer opacity-70"
                      onClick={() => handleEdit(category as Category)}
                    />
                  </div>
                </td>
              </tr>
            ))}
            {[...Array(emptyRows)].map((_item, index) => (
              <tr key={index} className="bg-white hover:bg-gray-100 h-12">
                <td colSpan={5} />
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td className="text-right p-1" colSpan={5}>
                <TableFooter
                  count={data?.categories.total || 10}
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
      <CreateModal
        onClose={modalCreate.onClose}
        isOpen={modalCreate.isOpen}
        form={form}
        formUpdate={formUpdate}
        setFormUpdate={setFormUpdate}
      />
      <DeleteModal
        isOpen={modalDelete.isOpen}
        onClose={modalDelete.onClose}
        formDelete={formDelete}
        cacheKey="getCategories"
        mutation={removeMutation}
      />
    </>
  );
};

export default Category;
