import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Grid,
    Heading,
    Input,
    Select,
    Spacer,
}from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveShippingAddress } from '../actions/cartAction';
import { getUserDetails } from '../actions/userActions';
import CheckoutSteps from '../components/CheckoutSteps';
import FormContainer from '../components/FormContainer';
import countries from '../data/countries';

const ShippingScreen = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const cart = useSelector((state) => state.cart);
    const { shippingAddress } = cart;

    const [ address, setAddress ] = useState(shippingAddress.address || '');
    const [ city, setCity ] = useState(shippingAddress.city || '');
    const [ postalCode, setPostalCode ] = useState(shippingAddress.postalCode || '');
    const [country, setCountry ] = useState(shippingAddress.country || '');

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    useEffect(() => {
        if ( !userInfo ) {
            navigate('/login')
        }else {
            dispatch(getUserDetails)
        }
    },[userInfo, navigate, getUserDetails])


    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveShippingAddress({ address, city, postalCode, country }));
        navigate('/payment');
    };
    
    return (
        <Flex w='full' alignItems='center' fontFamily='Montserrat' justifyContent='center' py='5' >
          
        <FormContainer>
         <Grid templateColumns='0.3fr 1fr'>
            <Flex pr='4'>
            <CheckoutSteps currentPage="Shipping" />
            </Flex>
        <form onSubmit={submitHandler}>
        <Heading as='h2' mb='8' fontSize='3xl' >
                Shipping
            </Heading>
            {/* Address */}
            <FormControl id='address'>
                <FormLabel htmlFor='address'>
                    Address
                </FormLabel>
                <Input
                id='address'
                type='text'
                placeholder='Your Address'
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                />
            </FormControl>

            <Spacer h='3' />

            {/* City */}

            <FormControl id='city'>
                <FormLabel htmlFor='city'>
                    City
                </FormLabel>
                <Input 
                id='city'
                type='text'
                _placeholder='Your City'
                value={city}
                onChange={(e) => setCity(e.target.value)}
                />
            </FormControl>

            {/* Postal Code */}
            <FormControl id='postalCode'>
                <FormLabel htmlFor='postalCode'>
                    Postal Code
                </FormLabel>
                <Input 
                id='postalCode'
                type='text'
                _placeholder='Your Postal Code'
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                />
            </FormControl>

            {/* Country */}

            <FormControl id='country'>
                <FormLabel htmlFor='country' >
                    Country
                </FormLabel>
                <Select 
                _placeholder='Your Country'
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                >
                    {countries.map((country) => (
                        <option key={country} value={country}>
                            {country}
                        </option>
                    ))}
                </Select>
            </FormControl>

            <Spacer h='3' />

            <Button type='submit' bgColor='black' color='white' mt='4' _hover={{bgColor:'white', color:'black'}}>
                Continue
            </Button>

        </form>
        </Grid>
        </FormContainer>
        
    </Flex>  
    );
};

export default ShippingScreen;