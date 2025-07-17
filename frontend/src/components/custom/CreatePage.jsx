import { Box, Container, Heading, VStack, Input, Button } from '@chakra-ui/react';
import { useColorModeValue } from '../ui/color-mode';
import { useState } from 'react';
import { useWishStore } from '@/store/wish';
import { toaster } from '@/components/ui/toaster';
import { useNavigate } from 'react-router-dom';

const CreatePage = () => {
    const navigate = useNavigate();
    const [newWish, setNewWish] = useState({
        type: "",
        brand: "",
        model: "",
    });

    const { createWish } = useWishStore();

    const handleSubmit = async () => {

        const { success, message } = await createWish(newWish);

        if (!success) {
            toaster.error({
                title: "Error",
                description: message,
                status: "error",
            })
        } else {
            toaster.success({
                title: "Success",
                description: message,
                status: "success",
            })

            setNewWish({ type: "", brand: "", model: ""});
            navigate("/");
        }

    };

    return (
        <Container maxW={"container.sm"}>
            <VStack spacing={8}>
                <Heading as={"h1"} size={"2xl"} textAlign={"center"} m={8}>
                    Add new wish
                </Heading>

                <Box 
                    w={{ base: "100%", sm: "50%" }} 
                    bg={useColorModeValue("gray.100", "gray.700")} 
                    p={6}
                    borderRadius={"md"}
                >
                    <VStack spacing={4}>
                        <Input 
                            placeholder={"Type "} 
                            type={"text"}
                            value={newWish.type}
                            onChange={(e) => setNewWish({...newWish, type: e.target.value})}
                        />
                        <Input 
                            placeholder={"Brand"} 
                            type={"text"}
                            value={newWish.brand}
                            onChange={(e) => setNewWish({...newWish, brand: e.target.value})}
                        />
                        <Input
                            placeholder={"Model"} 
                            type={"text"}
                            value={newWish.model}
                            onChange={(e) => setNewWish({...newWish, model: e.target.value})}
                        />
                        <Button 
                            bg={"green.500"}
                            colorScheme={"blue"} 
                            w={"full"} 
                            mt={4}
                            onClick={handleSubmit}
                        >
                            Add wish
                        </Button>

                    </VStack>
                </Box>
            </VStack>
        </Container>
    )
};

export default CreatePage;
