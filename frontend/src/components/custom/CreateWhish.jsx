import { Box, Container, Heading, Textarea, VStack, Button, Text } from '@chakra-ui/react';
import { useColorModeValue } from '../ui/color-mode';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toaster } from '@/components/ui/toaster';
import { useWhishStore } from '@/store/whish';


const CreateWhish = () => {

    const navigate = useNavigate();
    const[newWhish, setNewWhish] = useState({ whish: "" });
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

            setNewWhish({ whish: ""});
            navigate("/");
        }
        
    };

    return (
        <Container maxW={"container.sm"}>
            <VStack spacing={8}>
                <Heading as={"h1"} textAlign={"left"} m={8} size={"2xl"}>
                    Add a whish
                </Heading>

                <Box 
                    bg={useColorModeValue("gray.100", "gray.700")} 
                    w={{ base: "100%", sm: "60%"}}
                    p={6}
                    borderRadius={"md"}    
                >
                    <Text mb={4}>Write your whish here:</Text>
                    <Textarea 
                        placeholder='I want to...'
                        type={"text"}
                        value={newWhish.whish}
                        onChange={(e) => setNewWhish({...newWhish, whish: e.target.value})}
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
                </Box>
            </VStack>
        </Container>
  );
};

export default CreateWhish;
