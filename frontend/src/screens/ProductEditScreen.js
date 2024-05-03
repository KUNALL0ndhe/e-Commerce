import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Spacer,
} from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink, useNavigate, useParams } from 'react-router-dom';
import { listProductDetails, updateProduct } from '../actions/productActions';
import FormContainer from '../components/FormContainer';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { PRODUCT_UPDATE_RESET } from '../constants/productConstants';

const ProductEditScreen = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { id: productId } = useParams();

    const [name, setName ] = useState('');
    const [price, setPrice] = useState('0');
    const [image, setImage] = useState('')
    const [imag, setImag] = useState('');
    const [img, setImg] = useState('');
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [countInStock, setCountInStock] = useState('');

    const productDetails = useSelector((state) => state.productDetails);
    const { loading, error, product } = productDetails;

    const productUpdate = useSelector((state) => state.productUpdate);
    const {
        loading: loadingUpdate,
        error: errorUpdate,
        success: successUpdate,
    } = productUpdate;

   useEffect(()=> {
    if ( successUpdate ) {
        dispatch ({
            type: PRODUCT_UPDATE_RESET
        });
        navigate(`/admin/productlist`);
    } else {
        if (!product.name || product._id !== productId ) {
            dispatch(listProductDetails(productId));
        } else {
            setName(product.name);
            setPrice(product.price);
            setImag(product.imag);
            setImage(product.image);
            setImg(product.img);
            setBrand(product.brand);
            setCategory(product.category);
            setCountInStock(product.countInStock);
            setDescription(product.description);
        }
    }
   },[successUpdate, dispatch, navigate, product, productId,]);

   const submitHandler = (e) => {
    e.preventDefault();

    dispatch(updateProduct({
        _id: productId,
        name,
        price,
        image,
        imag,
        img,
        brand,
        category,
        description,
        countInStock,
    })
    );
   };

   const uploadImageHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('image', file);

    try {
     const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
     };
     
     const { data } = await axios.post(`/api/uploads`, formData, config);
     setImage(data);
    } catch (err) {
        console.error(err);        
    }
   };

   const uploadImagHandler = async(e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('image', file);

    try {
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
            },
        };

     const { data } = await axios.post('/api/uploads', formData, config);
     setImag(data);
    } catch (err) {
        console.error(err);
        
    }
   };

   const uploadImgHandler = async(e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('image', file);

    try {
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
            },
        };

    const { data } = await axios.post(`/api/uploads`, formData, config);
     setImg(data);
    } catch (err) {
        console.error(err);        
    }
   }
return (
    <>
    <Link as={RouterLink} to='/admin/productlist'>
        Go Back
    </Link>

    <Flex w='full' alignItems='center' justifyContent='center' py='5' >
        <FormContainer>
            <Heading as='h1' mb='8' fontSize='3xl'>
                Edit Product
            </Heading>

            {loadingUpdate && <Loader />}
            {errorUpdate && <Message type='error'>{errorUpdate}</Message>}

            {loading ? (
                <Loader />
            ) : error ? (
                <Message type='error'>{error}</Message>
            ) : (
                <form onSubmit={submitHandler} >
                    {/* NAME */}
                    <FormControl id='name' isRequired>
                        <FormLabel>Name</FormLabel>
                        <Input
                        type='text'
                        placeholder='Enter name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        />
                    </FormControl>
                    <Spacer h='3' />
                    {/* Price */}
                    <FormControl id='price' isRequired>
                        <FormLabel>Price</FormLabel>
                        <Input 
                        type='number'
                        placeholder='Enter Price'
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        />
                    </FormControl>
                    <Spacer h='3' />

                    {/* Image */}
                    <FormControl id='image' isRequired>
                        <FormLabel>1st Product Image </FormLabel>
                        <Input 
                        type='text'
                        placeholder='Enter 1st Image url'
                        value={image}
                        onChange={(e) => setImage(e.target.value)}/>
                        <Input type='file' onChange={uploadImageHandler} />
                    </FormControl>
                    <Spacer h='3'/>

                    {/* Imag */}
                    <FormControl id='imag' isRequired>
                        <FormLabel>
                            2nd Product Image
                        </FormLabel>
                        <Input
                         type='text'
                         placeholder='Enter 2nd Image url'
                         value={imag}
                         onChange={(e) => setImag(e.target.value)}
                        />
                        <Input type='file' onChange={uploadImagHandler} />
                    </FormControl>
                    <Spacer h='3'/>

                    {/* Img */}
                    <FormControl id='img' isRequired >
                        <FormLabel>
                            3rd Product Image
                        </FormLabel>
                        <Input 
                        type='text'
                        placeholder='Enter 3rd Image url'
                        value={img}
                        onChange={(e) => setImg(e.target.value)}
                        />
                        <Input type='file' onChange={uploadImgHandler} />
                    </FormControl>
                    <Spacer h='3' />

                    {/* Brand */}

                    <FormControl id='brand' isRequired >
                        <FormLabel >
                            Brand
                        </FormLabel>
                        <Input 
                        type='text'
                        placeholder='Enter Brand'
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}
                        />
                    </FormControl>
                    <spacer h='3'/>

                    {/* Category */}
                    <FormControl id='category' isRequired>
                        <FormLabel>Category</FormLabel>
                        <Input
                        type='text'
                        placeholder='Enter Category'
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        />
                    </FormControl>
                    <Spacer h='3' />

                    {/* COUNT IN STOCK */}

                    <FormControl id='countInStock' isRequired>
                        <FormLabel> Count In Stock</FormLabel>
                        <Input 
                        type='number'
                        placeholder='Product in stock'
                        value={countInStock}
                        onChange={(e) => setCountInStock(e.target.value)}
                        />
                    </FormControl>
                    <Spacer h='3'/>
                     {/* Description */}

                     <FormControl id='description' is isRequired>
                        <FormLabel>Description</FormLabel>
                        <Input
                        type='text'
                        placeholder='Description'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        />

                     </FormControl>
                    <Button
                    type='submit'
                    isLoading={loading}
                    color='white'
                    bgColor='black'
                    _hover={{color: 'black', bgColor: 'white'}}
                    mt='4'
                    >
                        Update Product
                    </Button>
                </form>
            )}
        </FormContainer>
    </Flex>
    </>
   );
};

export default ProductEditScreen;