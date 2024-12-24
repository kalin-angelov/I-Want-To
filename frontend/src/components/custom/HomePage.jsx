import { Container, Heading } from '@chakra-ui/react';

import WhishList from './WhishList';

const HomePage = () => {
  return (
    <Container>
        <Heading 
            as={"h1"} 
            size={{ base: "2xl", sm: "3xl" }} 
            textAlign={"center"} 
            m={8}
        >
            My whish list
        </Heading>
        
        <WhishList />   
    </Container>
  );
};

export default HomePage;
