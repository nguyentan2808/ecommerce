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
import DeleteModal from "components/modules/category/DeleteModal";
import CreateModal, {
  formDefaultValues,
} from "components/modules/product/CreateModal";
import { format } from "date-fns";
import { Product, useGetProductsQuery } from "generated/graphql";
import { usePreviousNonNullish } from "hooks/usePreviousNonNullish ";
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

const schema = Yup.object({
  name: Yup.string().required("Name is required"),
  description: Yup.string().required("Detail is required."),
  price: Yup.number().required("Price is required"),
  quantity: Yup.number().required("Quantity is required"),
  status: Yup.string().required("Status is required"),
  type: Yup.string().required("Type is required"),
  categories: Yup.array().required("Category is required"),
}).required();

const AdminProduct = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [limit, setLimit] = React.useState(10);
  const [formDelete, setFormDelete] = React.useState<IFormDelete>({
    id: NaN,
    name: "",
  });

  const modalCreate = useDisclosure();
  const modalDelete = useDisclosure();

  const form = useForm({
    defaultValues: formDefaultValues,
    resolver: yupResolver(schema),
  });

  const { loading, data, error } = useGetProductsQuery({
    variables: {
      page: currentPage,
      limit,
    },
  });
  const prevData = usePreviousNonNullish(data);
  const productsData = data?.products ?? prevData?.products;

  const handleEdit = (product: Product) => {
    const { images, categories, ...rest } = product;

    const _categories = product.categories.map((category) => category.name);
    const _images = images.map((image) => image.url);
    form.reset({ ...rest, images: _images, categories: _categories });

    modalCreate.onOpen();
  };

  const handleDelete = (product: { id: number; name: string }) => {
    setFormDelete({ id: product.id, name: product.name });
    modalDelete.onOpen();
  };

  const emptyRows =
    productsData?.list.length && productsData.list.length % limit !== 0
      ? limit - (productsData.list.length % limit)
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
            onClick={modalCreate.onOpen}
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
              <th className="text-left w-1/4">Description</th>
              <th className="text-left">Price</th>
              <th className="text-left">Quantity</th>
              <th className="text-center">Status</th>
              <th className="text-center">Type</th>
              <th className="text-right">Create At</th>
              <th className="w-10">Action</th>
            </tr>
          </thead>
          <tbody>
            {productsData?.list.map((product, index) => (
              <tr key={index} className="bg-white hover:bg-gray-100 h-12">
                <td className="text-center">{product.id}</td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td className="text-center">
                  <div className="bg-teal-500 inline-flex text-xs text-white font-semibold rounded-md items-center justify-center py-0.5 px-2">
                    {product.status}
                  </div>
                </td>
                <td className="text-center">
                  <div className="bg-teal-500 inline-flex text-xs text-white font-semibold rounded-md items-center justify-center py-0.5 px-2">
                    {product.type}
                  </div>
                </td>
                <td className="text-right">
                  {format(new Date(product.createdAt), "MM/dd/yyyy")}
                </td>
                <td>
                  <div className="flex justify-end gap-2">
                    <AiOutlineDelete
                      className="text-red-500 text-lg cursor-pointer"
                      onClick={() => handleDelete(product)}
                    />
                    <FiEdit
                      className="text-lg cursor-pointer opacity-70"
                      onClick={() => handleEdit(product as Product)}
                    />
                  </div>
                </td>
              </tr>
            ))}
            {[...Array(emptyRows)].map((_item, index) => (
              <tr key={index} className="bg-white hover:bg-gray-100 h-12">
                <td colSpan={9} />
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td className="text-right p-1" colSpan={9}>
                <TableFooter
                  count={productsData?.total || 10}
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
      />
      <DeleteModal
        isOpen={modalDelete.isOpen}
        onClose={modalDelete.onClose}
        formDelete={formDelete}
      />
    </>
  );
};

AdminProduct.layout = AdminLayout;

export default AdminProduct;
