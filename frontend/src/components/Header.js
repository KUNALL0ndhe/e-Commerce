import { 
  Box,
  Button, 
  Heading, 
  Flex,
  Icon,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { Link  as RouterLink, useNavigate } from "react-router-dom";
import { HiUser, HiShoppingBag, HiOutlineMenuAlt3 } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { IoChevronDown } from 'react-icons/io5';
import { useDispatch, useSelector} from 'react-redux';
import { useState } from "react";
import HeaderMenuItem from "./HeaderMenuItem";
import { logout } from '../actions/userActions';




const Header = () => {

  const dispatch = useDispatch();
  const navigate =  useNavigate();

  const [show, setShow] =useState(false);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;


  const logoutHandler = () => {
    dispatch(logout());
    navigate('/login')
  };

  return (
    <Flex
      as="header"
      // align="center"

      justifyContent="space-between"
      wrap="wrap"
      py="6"
      px="6"
      bgColor='black'
      // bgGradient='linear(to-r, gray.300, yellow.400, pink.200)'
      w="100%"
      position= 'sticky'
      top= "0"
      left= "0"
      zIndex="9999"
    >
{/*                  *                * LOGO  *                 *                              */             }
      <Link as={RouterLink} to="/home">
        <Heading
          as="h1"
          // color= '#7928CA'
          color='white'
          size='xl'
          fontSize="3xl"
          letterSpacing="wide"
          alignItems='start'
          alignContent='center'
          justifyItems='center'
          align='center'
          justifyContent='center'
          fontFamily='Montserrat'
          fontWeight="small"
          _hover={{textDecor: 'none'}}
        >
          LUXE
        </Heading>
      </Link>


{/*                   *                * HAMBURGER MENU *                  *                              */           }
<Box display = {{ base: 'block', md: 'none'}} onClick={()=> setShow(!show)}> 
  <Icon as={HiOutlineMenuAlt3} display='flex' color='white' w='6' h='6' />
</Box>


{/*                   *                * MENU *                  *                              */           }
      <Box display={{base: show ? 'block' : 'none' , md: 'flex'}} width={{base: 'full', md: 'auto'}} mt={{base: '3', md: '0'}}>
        <HeaderMenuItem url='/cart' icon={HiShoppingBag}>
          cart
        </HeaderMenuItem>
        
        {userInfo ? (
          <Menu>
            
            <MenuButton
            as={Button}
            colorScheme='blackAlpha'
            fontFamily='Montserrat'
            rightIcon={<IoChevronDown />}
            _hover={{ textDecor: 'none', opacity: '0.7'}}
            > {userInfo.name}
            </MenuButton>
            <MenuList bgColor='white'>
                <MenuItem
            as={RouterLink} to='/profile' >
              Profile  <CgProfile />
                </MenuItem>
            <MenuItem onClick={logoutHandler}>
              Logout
            </MenuItem>
            </MenuList>
          </Menu>
        ): (
          <HeaderMenuItem url='/login' icon={HiUser}>
          login
        </HeaderMenuItem >
        )}

        {userInfo && userInfo.isAdmin && (
          <Menu>
            <MenuButton 
            as={Button}
            rightIcon={<IoChevronDown />}
            colorScheme='blackAlpha'
            _hover={{ textDecor: 'none', opacity: '0.7' }}
            >
              Manage
            </MenuButton>
            <MenuList>
              <MenuItem as={RouterLink} to='/admin/userlist'>
                User List
              </MenuItem>
              <MenuItem as={RouterLink} to='/admin/productlist' >
              Product List
              </MenuItem>
              <MenuItem as={RouterLink} to='/admin/orderlist' >
                Order List
              </MenuItem>
            </MenuList>
          </Menu>
        ) } 
      </Box>
    </Flex>
  );
};

export default Header;
