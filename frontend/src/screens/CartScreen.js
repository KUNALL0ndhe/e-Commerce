import {
    Box,
    Button,
    Flex,
    Grid,
    Heading,
    Icon,
    Image,
    Link,
    Select,
    Text,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { IoTrashBinSharp } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import {
    Link as RouterLink,
    useNavigate,
    useParams,
    useSearchParams,
} from 'react-router-dom';
import { addToCart, removeFromCart } from '../actions/cartAction';
import Message from '../components/Message';

const CartScreen = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();

    const [searchParams] = useSearchParams();
    let qty = searchParams.get('qty');

    const cart =  useSelector((state) => state.cart);
    const { cartItems } = cart;

    useEffect(() => {
        if (id) {
            dispatch(addToCart(id, qty));
        }
    }, [dispatch, id, qty]);

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
    };

    const checkoutHandler = () => {
        navigate(`/login?redirect=/shipping`);
    };

    return (
        <Grid fontFamily='Montserrat'>
            <Box>
                <Heading mb='8' fontFamily='Montserrat'> Shopping Cart</Heading>
                <Flex>
                    {cartItems.length === 0 ? (
                        <Message>
                            Your cart is empty. {' '}
                            <Link as={RouterLink} to='/home'>
                                Go Back
                            </Link>
                        </Message>
                    ): ( < Grid >
                    <Grid display={{base: 'none', md:'block', lg:'block'}} justifyContent='space-between' >
                        <Grid templateColumns='4fr 2fr'  gap='130' w='full'>
                            {/* First Column */}
                            <Flex 
                            direction='column'>
                                {cartItems.map((item) => (
                                    <Grid
                                        key={item.product}
                                        size='100%'
                                        alignItems='center'
                                        justifyContent='space-between'
                                        borderBottom='1px'
                                        borderColor='gray.200'
                                        py='4'
                                        px='2'
                                        rounded='lg'
                                        _hover={{bgColor: 'gray.50' }}
                                        templateColumns='1fr 4fr 2fr 2fr 2fr'
                                        >
                                            {/* Product Image */}
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            borderRadius='lg'
                                            h='14'
                                            w='14'
                                            objectFit='cover'
                                            gap='10'
                                        />
                                            {/* Product Name */}
                                        <Text fontWeight='semibold' fontFamily='Montserrat' fontSize='lg' gap='10'>
                                            <Link as={RouterLink} to={`/home/product/${item.product}`} >
                                                {item.name}
                                            </Link>
                                        </Text>
                                            {/* Product Price */}
                                        <Text fontWeight='semibold' fontFamily='Montserrat' fontSize='lg' gap='10'>
                                        ₹{item.price}
                                        </Text>

                                        {/* Quantity Select Box */}
                                        <Select
                                            value={item.qty}
                                            onChange={(e) =>
                                            dispatch(addToCart(item.product, +e.target.value))
                                        }
                                        w='20'>
                                            {[...Array(item.countInStock).keys().map((i)=>(
                                                <option key={i+1}>
                                                    {i+1}
                                                </option>
                                            ))]}
                                        </Select>

                                        {/* Delete Button */}
                                        <Button
                                        type='button'
                                        bgColor='#B42024'
                                        colorScheme='red'
                                        onClick={() => removeFromCartHandler(item.product)}
                                        >
                                            <Icon as={IoTrashBinSharp} />
                                        </Button>
                                    </Grid>
                                ))}

                            </Flex>

                            {/* Second Column */}
                            <Flex
                                direction='column'
                                bgColor='ghostwhite'
                                rounded='md'
                                padding='5'
                                h='48'
                                width='80vh'
                                justifyContent='space-between'
                            ><Heading as='h2' fontSize='2xl' mb='2'>
                                SubTotal (
                                    {cartItems.reduce((acc, currVal) =>
                                    acc + +currVal.qty, 0)}{' '}
                                    items)

                            </Heading>
                                    <Text fontWeight='bold' fontSize='3xl' fontFamily='Montserrat' color='blue.600' mb='4'
                                    >
                                       ₹{cartItems.reduce(
                                        (acc, currVal) => acc + currVal.price * +currVal.qty,0)} 
                                    </Text>

                                <Button
                                    type='button'
                                    disabled={cartItems.length===0}
                                    size='lg'
                                    colorScheme='teal'
                                    bgColor='gray.800'
                                    onClick={checkoutHandler}
                                >
                                    Proceed to Checkout
                                </Button>
                            </Flex>
                        </Grid> 
                        </Grid>
                        
                        <Grid display={{base: 'Contents', md:'none'}} >
                        <Grid templateColumns='1fr'  gap='10' w='full'>
                            {/* First Column */}
                            <Flex 
                            direction='column'>
                                {cartItems.map((item) => (
                                    <Grid
                                        key={item.product}
                                        size='100%'
                                        alignItems='center'
                                        justifyContent='space-between'
                                        borderBottom='1px'
                                        borderColor='gray.200'
                                        py='4'
                                        px='2'
                                        rounded='lg'
                                        _hover={{bgColor: 'gray.50' }}
                                        templateColumns='1fr 4fr 2fr 2fr 2fr'
                                        >
                                            {/* Product Image */}
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            borderRadius='lg'
                                            h='14'
                                            w='14'
                                            objectFit='cover'
                                        />
                                            {/* Product Name */}
                                        <Text fontWeight='semibold' fontFamily='Montserrat' fontSize='lg'>
                                            <Link as={RouterLink} to={`/home/product/${item.product}`} >
                                                {item.name}
                                            </Link>
                                        </Text>
                                            {/* Product Price */}
                                        <Text fontWeight='semibold' fontFamily='Montserrat' fontSize='lg'>
                                        ₹{item.price}
                                        </Text>

                                        {/* Quantity Select Box */}
                                        <Select
                                            value={item.qty}
                                            onChange={(e) =>
                                            dispatch(addToCart(item.product, +e.target.value))
                                        }
                                        w='20'>
                                            {[...Array(item.countInStock).keys().map((i)=>(
                                                <option key={i+1}>
                                                    {i+1}
                                                </option>
                                            ))]}
                                        </Select>

                                        {/* Delete Button */}
                                        <Button
                                        type='button'
                                        bgColor='#B42024'
                                        colorScheme='red'
                                        onClick={() => removeFromCartHandler(item.product)}
                                        >
                                            <Icon as={IoTrashBinSharp} />
                                        </Button>
                                        
                                    </Grid>
                                ))}
                                <Flex
                                direction='column'
                                bgColor='ghostwhite'
                                rounded='md'
                                padding='5'
                                h='48'
                                width='fit-content'
                                justifyContent='space-between'
                            ><Heading as='h2' fontSize='2xl' mb='2'>
                                SubTotal (
                                    {cartItems.reduce((acc, currVal) =>
                                    acc + +currVal.qty, 0)}{' '}
                                    items)

                            </Heading>
                                    <Text fontWeight='bold' fontSize='3xl' fontFamily='Montserrat' color='blue.600' mb='4'
                                    >
                                       ₹{cartItems.reduce(
                                        (acc, currVal) => acc + currVal.price * +currVal.qty,0)} 
                                    </Text>

                                <Button
                                    type='button'
                                    disabled={cartItems.length===0}
                                    size='lg'
                                    colorScheme='teal'
                                    bgColor='gray.800'
                                    onClick={checkoutHandler}
                                >
                                    Proceed to Checkout
                                </Button>
                            </Flex>
                            </Flex>                            
                        </Grid>
                        </Grid>
                        </Grid>
                    )}
                </Flex>
            </Box>
        </Grid>
    )
};

export default CartScreen;