import { Icon, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const HeaderMenuItem = ({ url, children, icon }) => {
    return (
        <Link as={RouterLink}
        to={url}
        fontSize='sm'
        fontWeight='semibold'
        fontFamily='Montserrat'
        letterSpacing='wide'
        textTransform='uppercase'
        mr='5'
        gap='1'
        mt={{base: '2' ,md: '0'}}
        display='flex'
        alignItems='center'
        // color='#7928CA'
        color='white'
        _hover={{textDecor:'none', color: '#FF0080'}}>
            <Icon as={icon} ml='1' w='4' h='4'/>
            {children}
        </Link>
    );
};

export default HeaderMenuItem;