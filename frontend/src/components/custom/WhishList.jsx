import { Container, VStack } from '@chakra-ui/icons';

import Whish from './Whish';
import { useWhishStore } from '@/store/whish';

const WhishList = () => {

  const { whishes } = useWhishStore();

  return (
    <Container>
        <VStack spacing={8}>

          {whishes.map(whish => (
            <Whish key={whish._id} whish={whish} />
          ))}

        </VStack>
    </Container>
  );
};

export default WhishList;
