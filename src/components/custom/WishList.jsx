import { Container, VStack } from '@chakra-ui/react';

import Wish from './Wish';
import { useWishStore } from '@/store/wish';

const WishList = () => {

  const { wishes } = useWishStore();

  return (
    <Container>
        <VStack spacing={8}>

          {wishes.map(wish => (
            <Wish key={wish.id} wish={wish} />
          ))}

        </VStack>
    </Container>
  );
};

export default WishList;