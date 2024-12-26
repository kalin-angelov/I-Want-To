import { Box, Container, Heading, VStack, Input, Button } from '@chakra-ui/react';
import { useColorModeValue } from '../ui/color-mode';
import { useState } from 'react';
import { useWhishStore } from '@/store/whish';
import { toaster } from '@/components/ui/toaster';
import { useNavigate } from 'react-router-dom';

const CreatePage = () => {
    const navigate = useNavigate();
    const [newWhish, setNewWhish] = useState({
        type: "",
        brand: "",
        model: "",
    });

    const { createWhish } = useWhishStore();

    const handleSubmit = async () => {

        const { success, message } = await createWhish(newWhish);

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

            setNewWhish({ type: "", brand: "", model: ""});
            navigate("/");
        }

    };

    return (
        <Container maxW={"container.sm"}>
            <VStack spacing={8}>
                <Heading as={"h1"} size={"2xl"} textAlign={"center"} m={8}>
                    Add new whish
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
                            value={newWhish.type}
                            onChange={(e) => setNewWhish({...newWhish, type: e.target.value})}
                        />
                        <Input 
                            placeholder={"Brand"} 
                            type={"text"}
                            value={newWhish.brand}
                            onChange={(e) => setNewWhish({...newWhish, brand: e.target.value})}
                        />
                        <Input
                            placeholder={"Model"} 
                            type={"text"}
                            value={newWhish.model}
                            onChange={(e) => setNewWhish({...newWhish, model: e.target.value})}
                        />
                        <Button 
                            bg={"green.500"}
                            colorScheme={"blue"} 
                            w={"full"} 
                            mt={4}
                            onClick={handleSubmit}
                        >
                            Add whish
                        </Button>

                    </VStack>
                </Box>
            </VStack>
        </Container>
    )
};

export default CreatePage;
