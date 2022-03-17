import {
  Alert,
  AlertIcon,
  Button,
  FormControl,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
} from "@chakra-ui/react";
import CreateField from "components/common/CreateField";
import ImageUpload from "components/common/ImageUpload";
import InputField from "components/common/InputField";
import Loading from "components/common/Loading";
import SelectField from "components/common/SelectField";
import {
  useCreateProductMutation,
  useGetAllCategoryNameQuery,
} from "generated/graphql";
import React from "react";
import { FormProvider, UseFormReturn, useWatch } from "react-hook-form";
import { IoClose } from "react-icons/io5";
import { useQueryClient } from "react-query";
import { toast } from "react-toastify";

export interface IFormValues {
  name: string;
  description: string;
  images: string[];
  price: number;
  quantity: number;
  status: string;
  type: string;
  categories: string[];
}

export const formDefaultValues: IFormValues = {
  name: "",
  description: "",
  images: [],
  price: 0,
  quantity: 0,
  status: "",
  type: "",
  categories: [],
};

interface ICreateModal {
  onClose: () => void;
  isOpen: boolean;
  form: UseFormReturn<IFormValues, object>;
  formUpdate: number | null;
  setFormUpdate: React.Dispatch<React.SetStateAction<number | null>>;
}

const typeOptions = [
  { value: "AVAILABLE", label: "Available" },
  { value: "UNAVAILABLE", label: "Unavailable" },
];

const statusOptions = [
  { value: "PUBLISH", label: "Publish" },
  { value: "PRIVATE", label: "Private" },
];

const customLabel = (label: string) => (
  <span className="text-sm opacity-80">{label}</span>
);
const CreateModal: React.FC<ICreateModal> = ({
  onClose,
  isOpen,
  form,
  formUpdate,
  setFormUpdate,
}) => {
  const { mutate: create, isLoading, error } = useCreateProductMutation();
  const { data } = useGetAllCategoryNameQuery();
  const queryClient = useQueryClient();

  const [categories, setCategories] = React.useState<string[]>([]);

  const handleCloseModal = () => {
    onClose();
    setFormUpdate(null);
    form.reset(formDefaultValues);
  };

  const onSubmit = async (value: IFormValues) => {
    // form.setValue("categories", categories);

    // await createProduct({
    //   variables: { createProductInput: value },
    //   refetchQueries: ["getProducts"],
    //   onCompleted: () => {
    //     toast.success("Category created successfully");
    //     handleCloseModal();
    //   },
    //   onError: (err) => {
    //     console.log(err);
    //   },
    // });

    if (!formUpdate) {
      create(
        { createProductInput: value },
        {
          onSuccess: () => {
            queryClient.invalidateQueries("getProducts");
            toast.success("Product created successfully");
            handleCloseModal();
          },
        }
      );
    } else {
    }

    console.log(value);
  };

  const handleChangeCategories = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const index = categories.findIndex(
      (category) => category === e.target.value
    );

    if (index < 0) form.setValue("categories", [...categories, e.target.value]);
  };

  const handleRemoveCategory = (category: string) => {
    const newArray = categories.filter((item) => item !== category);

    form.setValue("categories", newArray);
  };

  const watchCategories = useWatch({
    control: form.control,
    name: "categories",
  });

  React.useEffect(() => {
    setCategories(watchCategories);
  }, [watchCategories]);

  return (
    <>
      <Loading isLoading={isLoading} />

      <Modal isOpen={isOpen} onClose={handleCloseModal} size="6xl">
        <ModalOverlay />
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <ModalContent>
              <ModalHeader>Create New Product</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <div className="bg-gray-100 w-full p-10 rounded-md flex flex-col">
                  <CreateField
                    title="Image"
                    description="Upload your product image heres"
                  >
                    <ImageUpload isMultiple={true} />
                  </CreateField>

                  <CreateField
                    title="Description"
                    description="Add your product details and necessary information from here"
                  >
                    <div className="flex flex-col gap-3">
                      <InputField
                        label={customLabel("Name")}
                        name="name"
                        isRequired
                      />
                      <InputField
                        label={customLabel("Description")}
                        name="description"
                        isRequired
                      />
                      <InputField
                        label={customLabel("Price")}
                        name="price"
                        type="number"
                        isRequired
                      />
                      <InputField
                        label={customLabel("Quantity")}
                        name="quantity"
                        type="number"
                        isRequired
                      />

                      <SelectField
                        handleSelect={() => {}}
                        label={customLabel("Status")}
                        list={statusOptions}
                        name="status"
                        placeholder="Select Status"
                      >
                        {(item) => (
                          <option key={item.value} value={item.value}>
                            {item.label}
                          </option>
                        )}
                      </SelectField>

                      <SelectField
                        handleSelect={() => {}}
                        label={customLabel("Type")}
                        list={typeOptions}
                        name="type"
                        placeholder="Select type"
                      >
                        {(item) => (
                          <option key={item.value} value={item.value}>
                            {item.label}
                          </option>
                        )}
                      </SelectField>

                      <FormControl>
                        <FormLabel>{customLabel("Categories")}</FormLabel>
                        <Select onChange={handleChangeCategories}>
                          {data?.categories?.list.map((item) => (
                            <option key={item.id} value={item.name}>
                              {item.name}
                            </option>
                          ))}
                        </Select>

                        {categories.length > 0 && (
                          <div className="border my-2 rounded-md flex">
                            {categories.map((category) => (
                              <div
                                key={category}
                                className="m-1 pl-1 rounded-sm flex gap-2 bg-gray-200"
                              >
                                <p>{category}</p>
                                <div
                                  onClick={() => handleRemoveCategory(category)}
                                  className="px-1 flex items-center justify-center hover:bg-teal-500 hover:text-white cursor-pointer"
                                >
                                  <IoClose />
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </FormControl>

                      {error && (
                        <Alert
                          status="error"
                          variant="left-accent"
                          className="rounded-md"
                        >
                          <AlertIcon />
                          {JSON.stringify(error)}
                        </Alert>
                      )}
                    </div>
                  </CreateField>
                </div>
              </ModalBody>

              <ModalFooter>
                <Button type="submit" className="mr-2" isLoading={isLoading}>
                  Create
                </Button>
                <Button mr={3} variant="ghost" onClick={handleCloseModal}>
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

export default CreateModal;
