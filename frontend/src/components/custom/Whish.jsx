import { Button, Card, CardBody, Flex, HStack, Text } from '@chakra-ui/react';
import { FaRegTrashAlt, FaRegEdit  } from 'react-icons/fa';
import { useColorModeValue } from '../ui/color-mode';

const Whish = () => {
  return (
    <Card.Root w={"full"} bg={useColorModeValue("gray.100", "gray.700")}>
            <CardBody >
                <Flex
                    flexDir={{ base: "column", sm: "row" }}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    gap={4}
                >
                    <Text>I want to drive Honda Gold Wing, it's a type of motorcycle.</Text>

                    <HStack>
                        <Button 
                            bg={"blue.300"}
                        >
                            <FaRegEdit />
                        </Button>

                        <Button 
                            bg={"red.500"}
                        >
                            <FaRegTrashAlt />
                        </Button>
                    </HStack>
                </Flex>
            </CardBody>
    </Card.Root>
  );
};

export default Whish;
