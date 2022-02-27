import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "components/common/InputField";
import AdminLayout from "components/layouts/Admin";
import CreateField from "components/common/CreateField";
import ImageUpload from "components/common/ImageUpload";
import ReactSelect from "components/common/ReactSelect";
import Head from "next/head";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { AiOutlinePlus } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import * as Yup from "yup";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const Category = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const schema = Yup.object({
    name: Yup.string().required("Name is required"),
    detail: Yup.string().required("Detail is required."),
  }).required();

  const methods = useForm({
    defaultValues: {
      name: "",
      detail: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (value: any) => {
    alert(JSON.stringify(value));
  };

  return (
    <>
      <Head>
        <title>Admin - Categories</title>
      </Head>

      <div className="p-6 bg-white shadow-md rounded-md w-full flex flex-col gap-4 lg:flex-row justify-between items-center">
        <div className="text-lg font-semibold">Categories</div>
        <div className="flex items-center gap-4 flex-col lg:flex-row">
          <InputGroup w={64}>
            <InputLeftElement>
              <BsSearch className="text-md mt-1 opacity-60" />
            </InputLeftElement>
            <Input placeholder="Search..." />
          </InputGroup>

          <div className="w-64">
            <ReactSelect options={options} placeholder="Filter by group..." />
          </div>

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

      <Modal isOpen={isOpen} onClose={onClose} size="6xl">
        <ModalOverlay />
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <ModalContent>
              <ModalHeader>Create New Category</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <div className="bg-gray-100 w-full p-10 rounded-md flex flex-col">
                  <CreateField
                    title="Image"
                    description="Upload your category image heres"
                  >
                    <ImageUpload />
                  </CreateField>

                  <CreateField
                    title="Description"
                    description="Add your category details and necessary information from here"
                  >
                    <div className="flex flex-col gap-3">
                      <InputField
                        label={
                          <span className="text-sm  opacity-80">Name</span>
                        }
                        name="name"
                        placeholder=""
                        type="text"
                        isRequired
                      />
                      <InputField
                        label={
                          <span className="text-sm  opacity-80">Detail</span>
                        }
                        name="detail"
                        placeholder=""
                        type="text"
                        isRequired
                      />
                    </div>
                  </CreateField>
                </div>
              </ModalBody>

              <ModalFooter>
                <Button type="submit" className="mr-2">
                  Create
                </Button>
                <Button mr={3} variant="ghost" onClick={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </form>
        </FormProvider>
      </Modal>
    </>
  );
};

Category.layout = AdminLayout;

export default Category;
