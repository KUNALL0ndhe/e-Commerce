import { 
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Spacer,
    Text,
 } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector} from 'react-redux'
import { 
    Link as RouterLink,
    useNavigate,
    useSearchParams,
} from 'react-router-dom';
import { login } from "../actions/userActions";
import FormContainer from "../components/FormContainer";
import Message from '../components/Message';

const LoginScreen = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [searchParams] = useSearchParams();
    let redirect = searchParams.get('redirect') || '/home'; // here if in search params if it is redirect via checkout then post login go to redirected page or if no other than go to root '/home' page

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const userLogin =  useSelector((state) => state.userLogin); // to read from store we use useselector and from that userLogin state is read and which is userLoginReducer's Key in combine reducer
    const { loading, error, userInfo } = userLogin; // from above state is traversed userLogin is Destructed from userLoginReducer or userLogin which has these action.type

    useEffect(()=>{
        if (userInfo) {
            navigate(redirect);
        }
    },[userInfo, navigate, redirect]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password))
    }
    return (
        <Flex w='full' fontFamily='Montserrat' alignItems='center' justifyContent='center' py='5'>
            <FormContainer>
                <Heading as='h1' mb='8' fontSize='3xl'>
                    Login
                </Heading>
                {error && <Message type='error'>{error}</Message>}
                <form onSubmit={submitHandler}>
                    <FormControl id='email'>
                        <FormLabel htmlFor='email'>Email address</FormLabel>
                        <Input id='email'
                                type='email'
                                placeholder='username@domain.com'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                      />
                    </FormControl>
                    <Spacer h='3'/>
                    <FormControl id='password'>
                        <FormLabel htmlFor='password'>Password</FormLabel>
                        <Input
                            id='password'
                            type='password'
                            placeholder='***********'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            />
                    </FormControl>

                    <Button type='submit' bgColor='black' color='white' mt='4' _hover={{color: 'black' ,bgColor: 'white'}} isLoading={loading}>
                        Login
                    </Button>
                </form>

                <Flex pt='10'>
                    <Text fontWeight='semibold'>
                        <Link as={RouterLink} to='/register'>
                            Click here to register
                        </Link>
                    </Text>
                </Flex>
            </FormContainer>
        </Flex>
    );
};

export default LoginScreen;