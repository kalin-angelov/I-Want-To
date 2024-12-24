import { Container, VStack } from '@chakra-ui/icons';

import Whish from './Whish';

const WhishList = () => {
  return (
    <Container>
        <VStack spacing={8}>
            <Whish />
            <Whish />
            <Whish />
        </VStack>
    </Container>
  );
};

export default WhishList;
