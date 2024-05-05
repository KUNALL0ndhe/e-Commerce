import { 
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Grid,
    Heading,
    Image,
    Text,
    Textarea,
    Select, 
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link as RouterLink, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector} from 'react-redux';
import { 
    listProductDetails,
    createProductReview,
} from '../actions/productActions';
import Loader from "../components/Loader";
import Message from "../components/Message";
import Rating from "../components/Rating";
import { PRODUCT_REVIEW_CREATE_RESET } from "../constants/productConstants";


const ProductScreen = () => {

    const { id } =  useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [qty, setQty] = useState(1);
    const [rating, setRating] = useState(1);
    const [comment, setComment] = useState('');

    const productDetails = useSelector((state) => state.productDetails);
    const { loading, product, error } = productDetails;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const productReviewCreate = useSelector((state) => state.productReviewCreate);
    const { success: successProductReview , error: errorProductReview} = productReviewCreate;

    useEffect(() => {
        if (successProductReview) {
            alert('Review submitted');
            setRating(1);
            setComment('');
            dispatch({type: PRODUCT_REVIEW_CREATE_RESET });
        }
        dispatch(listProductDetails(id));
    }, [id, dispatch, successProductReview ]);

    const addToCartHandler = () => {
        navigate(`/cart/${id}?qty=${qty}`);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(createProductReview(id, {rating, comment}));
    }

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
            <>
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
                        {/* Review Display and Form */}

                        <Box
            p='10'
            bgColor='white'
            rounded='md'
            mt='10'
            borderColor='gray.300'>
                <Heading as='h3' size='lg' mb='6'>
                    Write a review
                </Heading>
                {product.reviews && product.reviews.length === 0 && (
                    <Message >No Reviews</Message>
                )}

                {product.reviews && product.reviews.length !== 0 && (
                    <Box p='4' bgColor='white' rounded='md' mb='1' mt='5'>
                        {product.reviews.map((review) => (
                            <Flex direction='column' key={review._id} mb='5'>
                                <Flex justifyContent='space-between' >
                                    <Text fontSize='lg'>
                                        <strong>{review.name}</strong>
                                    </Text>
                                    <Rating value={review.rating}/>
                                </Flex>
                                <Text mt='2' >{review.comment}</Text>
                            </Flex>
                        ))}
                    </Box>
                )}

                {errorProductReview && (
                    <Message type='error' >{errorProductReview}</Message>
                )}

                {userInfo ? (
                    <form onSubmit={submitHandler} >
                        <FormControl id="rating" mb='3' >
                            <FormLabel>Rating</FormLabel>
                            <Select
                            placeholder='Select Option'
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                            >
                            <option>Select...</option>
                            <option value='1' >1 - Poor</option>
                            <option value='2' >2 - Okay</option>
                            <option value='3' >3 - Good</option>
                            <option value='4' >4 - Very Good</option>
                            <option value='5' >5 - Excellent</option>
                            </Select>
                        </FormControl>

                        <FormControl id='comment' mb='3' >
                            <FormLabel>Comment</FormLabel>
                            <Textarea
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}></Textarea>
                        </FormControl>

                        <Button
                        color='white'
                        bgColor='black'
                        type='submit' 
                        >
                            Post
                        </Button>
                    </form>
                ) : (
                    <Message>Please login to write a review</Message>
                )}
            </Box>
        </>
        )}
        </>
    );
};

export default ProductScreen;