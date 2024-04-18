import { Box, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import Rating from "./Rating";

const PerfumeCard = ({ perfume }) => {
    return 
    <Link as={RouterLink} to={`/perfume/${perfume._id}`} _hover={{textDecor: 'none'}}>
    <Box borderRadius='lg' bgColor='white' _hover={{shadow: 'md'}}>
            <Image src={ perfume.image} alt={perfume.name} w='full' h='450px' objectFit='cover' borderTopLeftRadius='lg' borderTopRightRadius='lg' />
            <Flex py='5' px='4' direction='column' justifyContent='space-between'>
                <Heading as='h4' fontFamily='Montserrat' fontSize='md' mb='3'>{perfume.name}</Heading>
                <Flex alignItems='center' justifyContent='space-between'>
                    
                    <Rating value ={perfume.rating} color="yellow.500"/>
                    <Text fontSize='lg' fontFamily='Montserrat' >₹{perfume.price}</Text>

                </Flex>
            </Flex>
        </Box>
    </Link>
};

export default PerfumeCard;