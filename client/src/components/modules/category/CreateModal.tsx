import {
  Alert,
  AlertIcon,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import CreateField from "components/common/CreateField";
import ImageUpload from "components/common/ImageUpload";
import InputField from "components/common/InputField";
import { useCreateCategoryMutation } from "generated/graphql";
import React from "react";
import { FormProvider, UseFormReturn } from "react-hook-form";
import BeatLoader from "react-spinners/BeatLoader";
import { toast } from "react-toastify";
import { formDefaultValues } from "pages/admin/category";
import Loading from "components/common/Loading";

export interface IFormValues {
  name: string;
  description: string;
}

interface ICreateModal {
  onClose: () => void;
  isOpen: boolean;
  form: UseFormReturn<{ name: string; description: string }, object>;
}

const CreateModal: React.FC<ICreateModal> = ({ onClose, isOpen, form }) => {
  const [createCategory, createMutation] = useCreateCategoryMutation();

  const handleCloseModal = () => {
    onClose();
    createMutation.reset();
    form.reset(formDefaultValues);
  };

  const onSubmit = async (value: IFormValues) => {
    await createCategory({
      variables: { createCategoryInput: value },
      refetchQueries: ["getCategories"],
      onCompleted: () => {
        toast.success("Category created successfully");
        form.reset(formDefaultValues);
      },
      onError: () => {},
    });
  };

  return (
    <>
      <Loading isLoading={createMutation.loading} />

      <Modal isOpen={isOpen} onClose={onClose} size="6xl">
        <ModalOverlay />
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <ModalContent>
              <ModalHeader>Create New Category</ModalHeader>
              <ModalCloseButton onClick={handleCloseModal} />
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
                        label={<span className="text-sm opacity-80">Name</span>}
                        name="name"
                        isRequired
                      />
                      <InputField
                        label={
                          <span className="text-sm opacity-80">
                            Description
                          </span>
                        }
                        name="description"
                        isRequired
                      />
                      {createMutation?.error && (
                        <Alert
                          status="error"
                          variant="left-accent"
                          className="rounded-md"
                        >
                          <AlertIcon />
                          {createMutation?.error.message}
                        </Alert>
                      )}
                    </div>
                  </CreateField>
                </div>
              </ModalBody>

              <ModalFooter>
                <Button
                  type="submit"
                  className="mr-2"
                  disabled={createMutation.loading}
                >
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
