import {
	Button,
	Flex,
	FormControl,
	FormLabel,
	Grid,
	Heading,
	Input,
	Link,
	Spacer,
	Text,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { getUserDetails, updateUserProfile } from '../actions/userActions';
import FormContainer from '../components/FormContainer';
import Message from '../components/Message';
import { USER_DETAILS_RESET } from '../constants/userConstants';

const ProfileScreen = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [message, setMessage] = useState('');

	const userDetails = useSelector((state) => state.userDetails);
	const { loading, error, user } = userDetails;

	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	useEffect(() => {
		if (!userInfo) {
			navigate('/login');
		} 
			
		if (user && !user.name) {
				dispatch(getUserDetails());
			} 
		
		if (user && user.name){
				setName(user.name);
				setEmail(user.email);
				}
			
		
	}, [dispatch, navigate, getUserDetails, user, userInfo]);

	const submitHandler = (e) => {
		e.preventDefault();

		if (password !== confirmPassword) {
			setMessage('Passwords do not match');
		} else {
			dispatch(updateUserProfile({ name, email, password}));
			dispatch({ type: USER_DETAILS_RESET });
		}
	};

	return (
		<Grid templateColumns={{ sm: '1fr', md: '1fr 1fr' }} py='5' gap='10'>
			<Flex w='full' fontFamily='Montserrat' alignItems='center' justifyContent='center' py='5'>
				<FormContainer>
					<Heading as='h1' mb='8' fontSize='3xl'>
						User Profile
					</Heading>

					{error && <Message type='error'>{error}</Message>}
					{message && <Message type='error'>{message}</Message>}

					<form onSubmit={submitHandler}>
						<FormControl id='name'>
							<FormLabel htmlFor='name'>Your Name</FormLabel>
							<Input
								id='name'
								type='text'
								placeholder='Your full name'
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</FormControl>

						<Spacer h='3' />

						<FormControl id='email'>
							<FormLabel htmlFor='email'>Email address</FormLabel>
							<Input
								id='email'
								type='email'
								placeholder='username@domain.com'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</FormControl>

						<Spacer h='3' />

						<FormControl id='password'>
							<FormLabel htmlFor='password'>Password</FormLabel>
							<Input
								id='password'
								type='password'
								placeholder='************'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</FormControl>

						<Spacer h='3' />

						<FormControl id='confirmPassword'>
							<FormLabel htmlFor='confirmPassword'>Confirm Password</FormLabel>
							<Input
								id='confirmPassword'
								type='password'
								placeholder='************'
								value={confirmPassword}
								onChange={(e) => setConfirmPassword(e.target.value)}
							/>
						</FormControl>

						<Button type='submit' bgColor='black' color='white' _hover={{color: 'black', bgColor: 'white'}} mt='4' isLoading={loading}>
							UPDATE
						</Button>
					</form>
				</FormContainer>
			</Flex>
		</Grid>
	);
};

export default ProfileScreen;
