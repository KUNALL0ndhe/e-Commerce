import { Flex, Button } from '@chakra-ui/react';
import bgsecond from '../assets2/bgsecond.mp4';

const SecondVideo = () => {
  return (
    <Flex
      className='main'
      style={{
        position: 'relative' ,
        width: '97.10vw',
        height: '80.33vh',
        overflowY: 'auto',
        zIndex: 2
        }}
    >
      <video
        src={bgsecond}
        autoPlay
        loop
        muted
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 9,

        }}
      />
      {/* Overlay Content */}
      {/* <Text
        position="absolute"
        up="10px"
        left="50%"
        transform="translateX(-50%)"
        textAlign="center"
        color="white"
        fontSize="2xl"
        zIndex="1" // Ensure the text is above the video
      >
        Louis Vuitton
      </Text> */}

      <Button
        colorScheme='whiteAlpha'
        variant='outline'
        position="absolute"
        bottom="10px"
        left="50%"
        transform="translateX(-50%)"
        textAlign="center"
        color="white"
        fontSize="xl"
        zIndex="999" // Ensure the text is above the video
      >
      FORMALS COLLECTIONS 2024. 
      </Button>
    </Flex>
  );
};

export default SecondVideo;


