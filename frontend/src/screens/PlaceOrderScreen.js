import {
    Box,
    Button,
    Flex,
    Heading,
    Image,
    Link,
    Text,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { createOrder } from '../actions/orderAction';
import CheckoutSteps from '../components/CheckoutSteps';
import Message from '../components/Message';

const PlaceOrderScreen = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const cart = useSelector((state) => state.cart);

    const { name } = cart.cartItems;

    cart.itemsPrice = cart.cartItems.reduce((acc, currVal) => acc + currVal.price * +currVal.qty,
    0
    );

    cart.shippingPrice = cart.itemsPrice < 100000 ? 10000 : 5000;
    cart.taxPrice = (28 * cart.itemsPrice) / 100;
    cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;

    const orderCreate = useSelector((state) => state.orderCreate);
	const { order, success } = orderCreate;

	useEffect(() => {
		if (success) {
			navigate(`/order/${order._id}`);
		}
	}, [success, navigate, order]);

	const placeOrderHandler = () => {
		dispatch(
			createOrder({
				orderItems: cart.cartItems,
				shippingAddress: cart.shippingAddress,
				paymentMethod: cart.paymentMethod,
				itemsPrice: cart.itemsPrice,
				shippingPrice: cart.shippingPrice,
				taxPrice: cart.taxPrice,
				totalPrice: cart.totalPrice,
			})
		);
	};

     
    return (
        
    <Flex>
        <Flex direction='column'>
            <CheckoutSteps  currentPage='Place Order'/>
            <Button bgColor='gray.500' color='black' onClick={() => {
                navigate('/payment')
            }}
        >
        Back
        </Button>
            </Flex>
        <Flex w='full' fontFamily='Montserrat' py='5'>
                {/* Column 1 */}
                <Flex direction='column' ml='4' display={{base: 'none', md: 'block'}}>
                    {/* Shipping */}
                    <Box borderBottom='1px' py='6' mt='-5' borderColor={'gray.300'}>
                        <Heading as='h2' mb='3' fontSize='2xl' fontWeight='semibold'>
                            Shipping
                        </Heading>
                        <Text>
                            <strong>Address:</strong>
                            {cart.shippingAddress.address}, {cart.shippingAddress.city}, {' '}
                            {cart.shippingAddress.postalCode}, {cart.shippingAddress.country}
                        </Text>
                    </Box>

                    {/* Payment Method */}
                    <Box borderBottom='1px' py='6' borderColor='gray.300'>
                        <Heading as='h2' mb='3' fontSize='2xl' fontWeight='semiBold'>
                            Payment Method
                        </Heading>
                        <Text>
                            <strong>Method:</strong>
                            {cart.paymentMethod}
                        </Text>
                    </Box>

                    {/* Order Items */}
                    
                    <Box borderBottom='1px' py='6' borderColor='gray.300' >
                        <Heading as='h2' mb='3' fontSize='2xl' fontWeight='semibold'>
                            Order Items
                        </Heading>
                        <Text>{name}</Text>

                        <Box>
                            {cart.cartItems.length === 0 ? (
                                <Message> Your cart is empty</Message>
                            ): (
                                <Box>
                                    {cart.cartItems.map((item, idx) => (
                                        <Flex key={idx}
                                        alignItems='center'
                                        justifyContent='space-between'>
                                            <Flex  alignItems='center' >
                                                <Image
                                                src={item.image}
                                                alt={item.name}
                                                w='12'
                                                h='12'
                                                objectFit='cover'
                                                mr='3' />
                                                <Link
                                                fontWeight='bold'
                                                fontSize='xl'
                                                mr='10'
                                                as={RouterLink}
                                                to={`/home/product/${item.product}`} 
                                                >
                                                {item.name}
                                                </Link>
                                                <Text fontSize='md' fontWeight='normal'>
                                                {item.qty} x  ₹{item.price} = ₹{+item.qty * item.price}
                                                </Text>
                                                
                                                </Flex>                                                
                                        </Flex>
                                    ))}
                                    </Box>
                            )}
                        </Box>

                    </Box>
                </Flex>
        </Flex>
        {/* Column 2 */}
        <Flex
                                        direction='column'
                                        bgColor='white'
                                        justifyContent='space-between'
                                        py='8'
                                        px='8'
                                        shadow='md'
                                        rounded='lg'
                                        w='full'
                                        borderColor='gray.300'>
                                            <Box>
                                                <Heading  mb='6' as='h2' fontSize='3xl' >
                                                    Order Summary                                       
                                                </Heading>
                                                
                                                {/* Item Price */}
                                                <Flex
                                                borderBottom='1px'
                                                py='2'
                                                borderColor='gray.200'
                                                alignItems='center'
                                                justifyContent='space-between'>
                                                    <Text fontSize='xl'>Items</Text>
                                                    <Text fontSize='xl'>
                                                    ₹{cart.itemsPrice}
                                                    </Text>
                                                </Flex>

                                                {/* Shipping Price */}
                                                <Flex 
                                                    borderBottom='1px'
                                                    py='2'
                                                    borderColor='gray.200'
                                                    alignItems='center'
                                                    justifyContent='space-between'>
                                                        <Text fontWeight='xl'> Shipping</Text>
                                                        <Text fontSize='xl'>
                                                        ₹{cart.shippingPrice}
                                                        </Text>
                                                    </Flex>

                                                {/* Tax Price */}
                                                <Flex
                                                borderBottom='1px'
                                                py='2'
                                                borderColor='gray.200'
                                                alignItems='center'
                                                justifyContent='space-between'>
                                                    <Text fontSize='xl'>Tax</Text>
                                                    <Text fontSize='xl'>
                                                    ₹{cart.taxPrice}
                                                    </Text>
                                                </Flex>

                                                {/* Total price */}
                                                <Flex 
                                                    borderBottom='1px'
                                                    py='2'
                                                    borderColor='gray.200'
                                                    alignItems='center'
                                                    justifyContent='space-between'>
                                                        <Text fontSize='xl'>Total</Text>
                                                        <Text fontSize='x-large'>
                                                        ₹{cart.totalPrice}
                                                        </Text>
                                                    </Flex>
                                            </Box>
                                            <Button
                                            size='lg'
                                            textTransform='uppercase'
                                            bgColor='black'
                                            color='white'
                                            type='button'
                                            w='full'
                                            _hover={{color: "black", bgColor: 'white'}}
                                            onClick={placeOrderHandler}
                                            disabled={cart.cartItems === 0}>
                                                Place Order
                                            </Button>
                                           
        </Flex>           
        </Flex>
        
        
    );
};

export default PlaceOrderScreen;