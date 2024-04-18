import { Flex, Button } from '@chakra-ui/react';
import bgVideo from '../assets/bgVideo.mp4';

const Video = () => {
  return (
    <Flex
      className='main'
      style={{
        position: 'relative' ,
        width: '97.10vw',
        height: '80.33vh',
        overflow: 'hidden',
        zIndex: 9,
      }}
    >
      <video
        src={bgVideo}
        autoPlay
        loop
        muted
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 99

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
        zIndex= '999' // Ensure the text is above the video
      >
      SUMMER LOOK COLLECTIONS 2024. 
      </Button>
    </Flex>
  );
};

export default Video;


