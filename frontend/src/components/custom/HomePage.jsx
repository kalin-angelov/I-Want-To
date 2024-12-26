import { Container, Heading, Span, Text } from '@chakra-ui/react';
import { useWhishStore } from '@/store/whish';
import { useEffect } from 'react';

import WhishList from './WhishList';
import { Link } from 'react-router-dom';

const HomePage = () => {

    const { fetchWhishes, whishes } = useWhishStore();

    useEffect(() => {
        fetchWhishes();
    },[fetchWhishes]);

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
            
            {whishes && <WhishList />}

            {whishes.length == 0 &&
                <Text textAlign={"center"}>
                    Whish list is empty. 
                    <Link to={"/create"}>
                        <Text as={"span"} p={1} color={"blue.400"}>
                            Make a whish🌠
                        </Text>
                    </Link>
                </Text>
            }
        </Container>
    );
};

export default HomePage;
