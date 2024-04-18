import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Radio,
    RadioGroup,
    Spacer,
    Icon,
    Grid,
} from '@chakra-ui/react';
import { RiVisaFill } from "react-icons/ri";
import { SlPaypal } from "react-icons/sl";
import { FaHandHoldingUsd } from "react-icons/fa";
import { useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { savePaymentMethod } from '../actions/cartAction';
import CheckoutSteps from '../components/CheckoutSteps';
import FormContainer from '../components/FormContainer';

const PaymentScreen = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const cart = useSelector((state) => state.cart);
    const { shippingAddress, paymentMethod } = cart;

    const [ paymentMethodRadio, setPaymentMethodRadio ] = useState(
        paymentMethod || 'paypal'
    );

    useEffect(() => {
        if (!shippingAddress) {
            navigate('/shipping');
        }
    },[shippingAddress, navigate ]);

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethodRadio));
        navigate('/placeorder');
    };

    return (
        <Flex alignContent='center' alignItems='center' justifyContent='center' py='5'>
        <FormContainer>
            <Grid templateColumns='0.3fr 1fr'>
                {/* Column 1 */}
            <Flex direction='column' w='20' pr='100' fontFamily='Montserrat' >
                <CheckoutSteps currentPage="Payments"  />
                </Flex>
                <Flex>
               {/* Column 2 */}
                
                <form onSubmit={submitHandler}>
                <Heading as='h2' mb='8' justifyContent='center' w='100' fontSize='3xl'>
                    Payment Method
                </Heading>
                    <FormControl mt='30' as='fieldset' w='10' >
                    <Spacer h='15' />
                        <FormLabel as='legend' mb='8'>
                            Select Payment Gateway
                        </FormLabel>
                        <RadioGroup mb='15' value={paymentMethodRadio}
                        onChange={setPaymentMethodRadio} >
                            <HStack space='24px' direction='column' w='60'>
                                <Radio value ='Paypal'> Paypal <Icon as={SlPaypal} justifySelf='end' mt='1' h='5' w='5' /></Radio>
                                <Radio value='Card'>Visa Card<Icon as={RiVisaFill} justifySelf='end' mt='1' h='5' w='5' /></Radio>
                                <Radio value='cod'>COD<Icon as={FaHandHoldingUsd} justifySelf='end' mt='1' h='5' w='5' /></Radio>
                            </HStack>
                        </RadioGroup>
                    </FormControl>
                    <Spacer h='6' />
                    <Button onClick={() => {
                        navigate('/shipping')
                     }} bgColor='gray.300' color='black' >Back</Button>

                    <Button type='submit' marginLeft='100' bgColor='black' color='white' _hover={{bgColor: 'white', color:'black'}}>
                        Continue
                    </Button>

                </form>             
                </Flex>
                </Grid>
                
            </FormContainer>
        </Flex>
    );
};

export default PaymentScreen;