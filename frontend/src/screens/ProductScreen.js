import { Box, Button, Flex, Grid, Heading, Image, Text, Select } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link as RouterLink, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector} from 'react-redux';
import { listProductDetails } from '../actions/productActions';
import Loader from "../components/Loader";
import Message from "../components/Message";
import Rating from "../components/Rating";


const ProductScreen = () => {

    const { id } =  useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [qty, setQty] = useState(1);

    const productDetails = useSelector((state) => state.productDetails);
    const { loading, product, error } = productDetails;

    useEffect(() => {
        dispatch(listProductDetails(id));
    }, [id, dispatch ]);

    const addToCartHandler = () => {
        navigate(`/cart/${id}?qty=${qty}`);
    };

    return (
        <>
        <Flex mb='5' >
            <Button as={RouterLink} to = '/home' color={"black"} colorScheme="gray.800" >
               <Text> ↩︎ Back </Text>
            </Button>
        </Flex>

        {loading ? (
            <Loader />
        ) : error ? (
            <Message type='error'>{error}</Message>
        ) : (
        <Grid templateColumns='5fr 4fr 3fr' display = {{ base: 'contents', md: 'grid'}} gap='10'>
{/*                  *                * Column 1  *                 *                              */             }
            <Image src={product.image} alt={product.name} borderRadius='md' />
            
{/*                  *                * Column 2  *                 *                              */             }

            <Grid templateRows='1fr 1fr' display = {{ base: 'contents', md: 'grid'}} gap='8' w='400px' h='200px'>
            < Image src={product.img} alt={product.name} borderRadius='sm' h='350px' w='400px' objectFit='cover'/>
            < Image src={product.imag} alt={product.name} borderRadius='sm'  h='350px' w='400px' objectFit='cover'/>
            </Grid>

{/*                  *                * Column 3  *                 *                              */             }
            
            <Grid templateRows={'auto'} display={{ base: 'contents', md: 'grid'}} >
            <Heading as='h5' fontSize='4xl'  fontWeight='md' color='gray.500' fontFamily='Montserrat'
>
                    {product.brand}
                </Heading>
                <Heading as='h2' fontSize='2xl' fontWeight='lg' mb = '4' fontFamily='Montserrat'>
                    {product.name}
                </Heading>
                <Rating value={product.rating}
                color="yellow.500"
                text={`{${product.numReviews} reviews}`} 
                />
                <Heading 
                    as='h5'
                    fontSize='4xl'
                    fontWeight='md'
                    my='5'
                    mb='4'
                    fontFamily='Montserrat'
                >
                    ₹{product.price}
                    <Text fontWeight='xs' fontFamily='Montserrat' fontSize='15'>
                    (M.R.P. incl. of all taxes)
                    </Text>
                </Heading>
                <Text fontFamily='Montserrat' textAlign='center' >{product.description}</Text>
                <Flex justifyContent='space-between' py='2'>
                    <Text fontFamily='Montserrat' >Price:</Text>
                    <Text fontSize='medium' fontFamily='Montserrat' >₹{product.price}</Text>
                </Flex>
            <Flex justifyContent='space-between' py='2'>
                <Text fontFamily='Montserrat' > Status :</Text>
                <Text fontWeight='bold' >
                    {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                </Text>
            </Flex>

            {
                product.countInStock > 0 && (
                    <Flex justifyContent='space-between' py='2'>
                        <Text>Quantity</Text>
                        <Select
                        value={qty}
                        onChange={(e) => setQty(e.target.value)}
                        width='30%'>
                            {[...Array(product.countInStock).keys()].map((i) => (
                                <option value={i+1} key={i+1}>
                                    {i+1}
                                </option>
                            ))}
                        </Select>
                    </Flex>
                )
            }

            <Button
            onClick={addToCartHandler}
            bg='gray.800'
            colorScheme="teal"
            my='2'
            textTransform='uppercase'
            letterSpacing='wide'
            isDisabled={product.countInStock === 0}
            >
                Add to Cart
            </Button>
            </Grid>
        </Grid>
        )}
        </>
    );
};

export default ProductScreen;