import { Box, Container, Heading, VStack, Input, Button } from '@chakra-ui/icons';
import { useColorModeValue } from '../ui/color-mode';
import { useState } from 'react';

const CreatePage = () => {

  const [vehicle, setVehicle] = useState({
    type: "",
    brand: "",
    model: "",
  });

  const handleSubmit = () => {
    console.log("Hello");
  };

  return (
    <Container maxW={"container.sm"}>
      <VStack spacing={8}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} m={8}>
          Add new whish
        </Heading>

        <Box 
          w={"full"} 
          bg={useColorModeValue("gray.100", "gray.700")} 
          p={6}
          borderRadius={"md"}
        >
          <VStack spacing={4}>
            <Input 
              placeholder={"Type "} 
              type={"text"}
              value={vehicle.type}
              onChange={(e) => setVehicle({...vehicle, type: e.target.value})}
            />
            <Input 
              placeholder={"Brand"} 
              type={"text"}
              value={vehicle.brand}
              onChange={(e) => setVehicle({...vehicle, brand: e.target.value})}
              />
            <Input
              placeholder={"Model"} 
              type={"text"}
              value={vehicle.model}
              onChange={(e) => setVehicle({...vehicle, model: e.target.value})}
            />
            <Button 
              colorScheme={"blue"} 
              w={"full"} 
              mt={4}
              onSubmit={handleSubmit}
            >
              Add whish
            </Button>

          </VStack>
        </Box>
      </VStack>
    </Container>
  )
}

export default CreatePage
