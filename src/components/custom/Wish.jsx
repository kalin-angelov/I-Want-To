import { Card, CardBody, Flex, HStack, IconButton, Text } from '@chakra-ui/react';
import { FaRegTrashAlt, FaRegEdit  } from 'react-icons/fa';
import { useColorModeValue } from '../ui/color-mode';
import { useWishStore } from '@/store/wish';
import { toaster } from '@/components/ui/toaster';

import EditWish from './EditWish';
import { useState } from 'react';

const Wish = ( { wish }) => {

    const { deleteWish } = useWishStore();
    const [open, setOpen] = useState(false);

    const openEditModal = () => {
        setOpen(true);
    };

    const onDelete = async (id) => {
        const { success, message } = await deleteWish(id);

        if (!success) {
            toaster.error({
                title: "Error",
                description: message,
            })
        } else {
            toaster.success({
                title: "Success",
                description: message,
            })
        }
          
    };

  return (
    <Card.Root w={"full"} bg={useColorModeValue("gray.100", "gray.700")}>
        <CardBody >
            <Flex
                flexDir={{ base: "column", sm: "row" }}
                alignItems={"center"}
                justifyContent={"space-between"}
                gap={4}
            >
                <Text>{wish.description}</Text>

                <HStack>
                    <IconButton bg={"blue.300"} onClick={openEditModal}>
                        <FaRegEdit />
                    </IconButton>

                    <IconButton bg={"red.500"} onClick={() => onDelete(wish.id)}>
                        <FaRegTrashAlt />
                    </IconButton>
                </HStack>
            </Flex>
        </CardBody>

        <EditWish open={open} setOpen={setOpen} wish={wish} />
    </Card.Root>
  );
};

export default Wish;
