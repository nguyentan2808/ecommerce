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
import InputField from "components/common/InputField";
import Loading from "components/common/Loading";
import { useCreateCategoryMutation } from "generated/graphql";
import React from "react";
import { FormProvider, UseFormReturn } from "react-hook-form";
import { useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { FormDefaultValues } from "./Category";

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
  const {
    mutate: create,
    isLoading,
    error,
  } = useCreateCategoryMutation<Error>();

  const queryClient = useQueryClient();

  const handleCloseModal = () => {
    onClose();
    form.reset(FormDefaultValues);
  };

  const onSubmit = async (value: IFormValues) => {
    create(
      { createCategoryInput: value },
      {
        onSuccess: () => {
          queryClient.invalidateQueries("getCategories");
          handleCloseModal();
          toast.success("Category created successfully");
        },
      }
    );
  };

  return (
    <>
      <Loading isLoading={isLoading} />

      <Modal isOpen={isOpen} onClose={handleCloseModal} size="6xl">
        <ModalOverlay />
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <ModalContent>
              <ModalHeader>Create New Category</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <div className="bg-gray-100 w-full p-10 rounded-md flex flex-col">
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
                      {error && (
                        <Alert
                          status="error"
                          variant="left-accent"
                          className="rounded-md"
                        >
                          <AlertIcon />
                          {error.message}
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
