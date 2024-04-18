import { Grid, Heading , Text} from "@chakra-ui/react";
import { useEffect} from "react";
import ProductCard from "../components/ProductCard";
import { useDispatch, useSelector} from 'react-redux'
import { listProducts } from "../actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/Message";

const HomeScreen = () => {
    const dispatch =  useDispatch();


    const productList = useSelector((state) => state.productList);
    const { loading, products, error } = productList;

    useEffect(( ) => {
        dispatch(listProducts());
    }, [dispatch]);

    return (
        <>
            <Heading as='h2' mb='8'
 fontFamily='Montserrat'fontSize='xl'>
                Ready-To-Wear
            </Heading>

           {loading ? (
            <Loader />
           ) : error ? (
            <Message type='error'>{error}</Message>
           ) : (
            
            <Grid templateColumns={{ base: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr' }} gap={15}>
            {products.map((prod) => {
            return <ProductCard key={prod._id} product={prod} />;
            })}
            </Grid>

           )
        }
  </>
    );
};

export default HomeScreen;