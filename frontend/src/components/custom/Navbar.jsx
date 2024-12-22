import { PlusSquareIcon } from '@chakra-ui/icons';
import { Button, Container, Flex, HStack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaSun, FaMoon  } from "react-icons/fa";
import { useColorMode } from '../ui/color-mode';

const Navbar = () => {

    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Container maxW={"1140px"} p={5}>
            <Flex
                h={16}
                gap={4}
                alignItems={"center"}
                justify={"space-between"}
                flexDir={{
                    base: "column",
                    sm: "row"
                }}
            >
                <Text
                    fontSize={{ base: "2xl", sm: "3xl" }}
                    fontWeight={"bold"}
                    textTransform={"uppercase"}
                    textAlign={"center"}
                >
                    <Link to={"/"}>I Want To...</Link>
                </Text>

                <HStack spacing={2} alignItems={"center"} >
                    <Link to={"/create"}>
                        <Button>
                            <PlusSquareIcon fontSize={20}/>
                        </Button>
                    </Link>
                    <Button onClick={toggleColorMode}>
                        {colorMode === "light" ? <FaMoon /> : <FaSun />}
                    </Button>
                </HStack>
            </Flex>
        </Container>
    );
};

export default Navbar;
