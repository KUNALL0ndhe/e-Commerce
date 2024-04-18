import { Box, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import Rating from "./Rating";
import { Link as RouterLink } from "react-router-dom";

const ProductCard = ({ product }) => {
    return <Link as={RouterLink} to={`/home/product/${product._id}`} _hover={{textDecor: 'none'}}>
        <Box borderRadius='lg' bgColor='white' _hover={{shadow: 'md'}}>
            <Image src={ product.image} alt={product.name} w='full' h='450px' objectFit='cover' borderTopLeftRadius='lg' borderTopRightRadius='lg' />
            <Flex py='5' px='4' direction='column' justifyContent='space-between'>
                <Heading as='h4' fontFamily='Montserrat' fontSize='md' mb='3'>{product.name}</Heading>
                <Flex alignItems='center' justifyContent='space-between'>
                    
                    <Rating value ={product.rating} color="yellow.500"/>
                    <Text fontSize='lg' fontFamily='Montserrat' >₹{product.price}</Text>

                </Flex>
            </Flex>
        </Box>
    </Link>
};

export default ProductCard;  