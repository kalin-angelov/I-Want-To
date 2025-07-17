import { Box, Container, Heading, Textarea, VStack, Button, Text } from '@chakra-ui/react';
import { useColorModeValue } from '../ui/color-mode';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toaster } from '@/components/ui/toaster';
import { useWishStore } from '@/store/wish';


const CreateWish = () => {

    const navigate = useNavigate();
    const[newWish, setNewWish] = useState({ wish: "" });
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

            setNewWish({ wish: ""});
            navigate("/");
        }
        
    };

    return (
        <Container maxW={"container.sm"}>
            <VStack spacing={8}>
                <Heading as={"h1"} textAlign={"left"} m={8} size={"2xl"}>
                    Add a wish
                </Heading>

                <Box 
                    bg={useColorModeValue("gray.100", "gray.700")} 
                    w={{ base: "100%", sm: "60%"}}
                    p={6}
                    borderRadius={"md"}    
                >
                    <Text mb={4}>Write your wish here:</Text>
                    <Textarea 
                        size={"xl"}
                        placeholder='I want to...'
                        type={"text"}
                        value={newWish.wish}
                        onChange={(e) => setNewWish({...newWish, wish: e.target.value})}
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
                </Box>
            </VStack>
        </Container>
  );
};

export default CreateWish;
