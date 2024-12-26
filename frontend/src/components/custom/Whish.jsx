import { Card, CardBody, Flex, HStack, IconButton, Text } from '@chakra-ui/react';
import { FaRegTrashAlt, FaRegEdit  } from 'react-icons/fa';
import { useColorModeValue } from '../ui/color-mode';
import { useWhishStore } from '@/store/whish';
import { toaster } from '@/components/ui/toaster';

const Whish = ( { whish }) => {

    const { deleteWhish } = useWhishStore();

    const onDelete = async (id) => {
        const { success, message } = await deleteWhish(id);

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
                    <Text>{whish.whish}</Text>

                    <HStack>
                        <IconButton bg={"blue.300"}>
                            <FaRegEdit />
                        </IconButton>

                        <IconButton bg={"red.500"} onClick={() => onDelete(whish._id)}>
                            <FaRegTrashAlt />
                        </IconButton>
                    </HStack>
                </Flex>
            </CardBody>
    </Card.Root>
  );
};

export default Whish;
