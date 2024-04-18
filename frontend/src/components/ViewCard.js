import { Flex, Grid, Heading, Link, Image, Box } from "@chakra-ui/react";
// import { Link as RouterLink } from "react-router-dom";
// import HomeScreen from "../screens/HomeScreen";


// const ViewCard = ({ view }) => {
//     return (
//         <>
        
//         <Flex>
//         <Grid templateColumns='5fr 4fr 3fr' display = {{ base: 'contents', md: 'grid'}} gap='10'>
//         <Box borderRadius='lg' bgColor='white' _hover={{shadow: 'md'}}>
//         <Grid templateRows='1fr 1fr' display = {{ base: 'contents', md: 'grid'}} gap='8' w='200px' h='200px'>
//         <Image src={view.image} alt={view.name} borderRadius='md' />
//         <Heading as='h3' fontSize='sm' fontWeight='md' mb = '4' fontFamily='Montserrat'>
//                     {view.name}
//                 </Heading>
//         </Grid>

//         </Box>
//         </Grid>
//         </Flex>
//         </>
//     )
// }






const ViewCard = ({view} ) => {
  return (
    <Link href={`/home`}_hover={{textDecor: "none"}}>
        <Box borderRadius="md" _hover={{shadow: 'md'}}>
            <Image src={view.image} alt={view.name } w='full' h='400px'
            borderTopLeftRadius='xl' borderTopRightRadius='xl' objectFit='cover' />
        </Box>
        <Flex py='5' px='4' direction='column' justifyContent='space-between' >
          <Heading as='h5' fontSize='lg' mb='3' fontWeight= 'semibold' fontFamily='Montserrat'  >
            {view.name}
          </Heading>
          <Flex py='3' direction='column' justifyContent='space-between' >
          <Heading as='h5' fontSize='sm' mb='3' fontWeight='sm' fontFamily='Montserrat' textDecor='underline' >
            <p>Explore the Selection</p>
          </Heading>
          </Flex>
        </Flex>
    </Link>
  )
}

export default ViewCard;