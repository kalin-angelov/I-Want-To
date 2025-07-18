import { Container, Heading, Span, Text } from '@chakra-ui/react';
import { useWishStore } from '@/store/wish';
import { useEffect } from 'react';

import WishList from './WishList';
import { Link } from 'react-router-dom';

const HomePage = () => {

    const { fetchWishes, wishes } = useWishStore();

    useEffect(() => {
        fetchWishes();
    },[wishes]);

    return (
        <Container pb={5}>
            <Heading 
                as={"h1"} 
                size={{ base: "2xl", sm: "3xl" }} 
                textAlign={"center"} 
                m={8}
            >
                My wish list
            </Heading>
            
            {wishes && <WishList />}

            {wishes.length == 0 &&
                <Text textAlign={"center"}>
                    Wish list is empty. 
                    <Link to={"/create"}>
                        <Text as={"span"} p={1} color={"blue.400"}>
                            Make a wish🌠
                        </Text>
                    </Link>
                </Text>
            }
        </Container>
    );
};

export default HomePage;
