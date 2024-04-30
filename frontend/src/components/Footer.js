import { Flex, Grid, Image, Link, Text} from '@chakra-ui/react'

const Footer = () => {
    return <div>
        <Flex borderTop='1px' py='10' mt='80px' fontFamily='Montserrat' px='6' fontSize='sm' justifyContent='center' >
        <Grid templateColumns='repeat(6, 1fr)' justifyContent='space-between' gap='6' display={{base: 'none', md:'grid'}} >
<Grid templateRows='repeat(2, 1fr)' gap='6' >

<Text alignContent='start' mb='4' fontSize='xs' textDecor = 'underline'>
                    HELP
                </Text>
                
                <Text alignItems='start' mb='4' _hover={{textDecor: 'underline'}}>
                Stores
                </Text>
                </Grid>
<Grid templateRows='repeat(2, 1fr)' gap='6' >
                
                <Text justifyContent='start' mb='4' textDecor = 'underline'>
                    FAQ'S
                </Text>
                <Text justifyContent='start' mb='4' _hover={{textDecor: 'underline'}}>
                    Product Care
                </Text>
                
</Grid>
<Grid templateRows='repeat(2, 1fr)' gap='6'>

<Text justifyContent='center' mb='6' px= '9' fontSize='xs' textDecor = 'underline'>
                    ABOUT LUXE
                </Text>
                <Text justifyContent='center' mb='1' px= '6'  _hover={{textDecor: 'underline'}}>
                    Fashion Show
                </Text>
                </Grid>
                <Grid templateRows='repeat(2, 1fr)' gap='6'  >

                <Text justifyContent='center' mb='4' px= '7'  textDecor = 'underline'>
                    Art & Culture
                </Text>
                <Text justifyContent='center' mb='4' px= '5'  _hover={{textDecor: 'underline'}}>
                    About LUXE
                </Text>
</Grid>


<Grid templateRows='repeat(2, 1fr)' gap='1' >
<Text> Ship to IND<Image src='https://cdn-icons-png.flaticon.com/128/14063/14063181.png' h='20px'  /></Text>
 <Text mb='4' > Connect Me
                <Link href='https://www.linkedin.com/in/kunal-londhe-a72292232?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
                <Image h='17px'src='https://imgs.search.brave.com/6MvRNdVuY_T8V3nR7OMalAPA0U6O5EVauKyQH6hSKkU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/ZWRpZ2l0YWxhZ2Vu/Y3kuY29tLmF1L3dw/LWNvbnRlbnQvdXBs/b2Fkcy9MaW5rZWRp/bi1sb2dvLXBuZy5w/bmc' />
                </Link>
                </Text>
</Grid>
<Grid templateRows='repeat(2, 1fr)' gap='6'  >
               <Text>Product Rights <br/>Reserved by <br/>Louis Vuitton</Text>
              <Link href='https://github.com/KUNALL0ndhe/e-Commerce'><Image src='https://pngimg.com/d/github_PNG65.png'  h='35px'/>
              </Link>
  </Grid>
</Grid>

{/* --------------------------------------------------base screen---------------------------------- */}

<Grid templateColumns='repeat(3, 1fr)' justifyContent='space-between' gap='8' display={{base: 'flex', md:'none'}} >
<Grid templateRows='repeat(3, 1fr)' gap='6'  >

<Text justifyContent='left' mb='4' px= '1'  textDecor = 'underline'>
    Art & Culture
</Text>
<Text justifyContent='left' mb='4' px= '1'  _hover={{textDecor: 'underline'}}>
    About LUXE
</Text>
<Text justifyContent='left' mb='4' px= '1'  _hover={{textDecor: 'underline'}}>
    About LUXE
</Text>
</Grid>
<Grid templateRows='repeat(3, 1fr)' gap='6'  >

<Text justifyContent='left' mb='4' px= '1'  textDecor = 'underline'>
HELP
</Text>
<Text justifyContent='left' mb='4' px= '1'  _hover={{textDecor: 'underline'}}>
Stores
</Text>
<Text justifyContent='left' mb='4' px= '1'  _hover={{textDecor: 'underline'}}>
FAQ'S
</Text>
</Grid>
<Grid templateRows='repeat(3, 1fr)' gap='6'  >
<Text> Ship to IND<Image src='https://cdn-icons-png.flaticon.com/128/14063/14063181.png' h='20px'  /></Text>
 <Text mb='4' > Connect Me
                <Link href='https://www.linkedin.com/in/kunal-londhe-a72292232?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
                <Image h='17px'src='https://imgs.search.brave.com/6MvRNdVuY_T8V3nR7OMalAPA0U6O5EVauKyQH6hSKkU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/ZWRpZ2l0YWxhZ2Vu/Y3kuY29tLmF1L3dw/LWNvbnRlbnQvdXBs/b2Fkcy9MaW5rZWRp/bi1sb2dvLXBuZy5w/bmc' />
                </Link>
                </Text>
                <Text>Product Rights Reserved by <br/>Louis Vuitton</Text>


</Grid>

</Grid>
        </Flex>
        <Flex as='footer' justifyContent='center' >
        
            <Text>
                Copyright © 2024 LUXE STORE. All Rights Reserved BY KUNAL LONDHE
            </Text>
        </Flex>
    </div>
}

export default Footer;