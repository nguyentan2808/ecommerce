import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
} from "@chakra-ui/react";
import Loading from "components/common/Loading";
import { useRemoveCategoryMutation } from "generated/graphql";
import { IFormDelete } from "./Category";
import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useQueryClient } from "react-query";

interface IDeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  formDelete: IFormDelete;
}

const DeleteModal: React.FC<IDeleteModalProps> = ({
  isOpen,
  onClose,
  formDelete,
}) => {
  const { mutate: remove, isLoading } = useRemoveCategoryMutation();
  const queryClient = useQueryClient();

  const handleDelete = async () => {
    remove(
      { id: formDelete.id },
      {
        onSuccess: () => {
          onClose();
          queryClient.invalidateQueries("getCategories");
        },
      }
    );
  };

  return (
    <>
      <Loading isLoading={isLoading} />

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody className="mt-6 flex justify-center flex-col items-center gap-2">
            <AiOutlineDelete className="text-5xl text-teal-500" />
            <h3 className="text-xl font-bold">Delete</h3>
            <p className="flex  items-baseline">
              Are you sure, you want to delete category {formDelete.name}?
            </p>
          </ModalBody>

          <ModalFooter>
            <Button w="full" colorScheme="teal" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button w="full" colorScheme="red" onClick={handleDelete}>
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DeleteModal;
