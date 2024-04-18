
import { 
    Grid,
    Heading,
    Text,
    Card,
    CardHeader,
    CardBody,
    Box,
} from "@chakra-ui/react";
import Video from '../components/Video';
import SecondVideo from "../components/SecondVideo";
import ViewCard from "../components/ViewCard";
import views from "../views";

const ViewScreen = () => {
    return(
        <>
            <Heading>
                <Video display='flex' />
            </Heading>
            <Heading justifyContent='center' display='flex' alignItems='center' justifyItems='center' fontFamily= 'Montserrat' mb={4}>Women's Spring-Summer 2024 Show  </Heading>

 <Heading fontSize='smaller' justifyContent='center' display='flex' alignItems='center' justifyItems='center' fontFamily= 'Montserrat'>
 <Card>
  <CardHeader>
    <Heading size='md' display='flex' justifyContent='center' alignItems='center' alignContent='center' >Nicolas Ghesquière presented his LV's Women’s Spring-Summer 2024 Collection in Paris on Tuesday 4th April 7.30pm (IST)</Heading>
  </CardHeader>
  <CardBody>
      <Box alignItems='center' alignContent='center'>
        <Heading size='sm' display='flex' justifyContent='center' fontWeight='normal'  >
          Looks
        </Heading >
        <Text pt='2' fontSize='small' display='flex' fontWeight='normal' fontFamily= 'Montserrat' justifyContent='center' textAlign='center' alignContent='center'>
          View a summary of all your clients over the last month.Putting femininity in the spotlight, <br/> the Spring-Summer 2023 Collection changes the play of proportions, using <br/>emphasis as of a figure of style, where the infinitely large and infinitely small<br/> come together in one silhouette. The Maison’s<br/> signatures that have become ingrained in Louis Vuitton’s DNA take on a <br/>disproportionate quality, becoming integral to the collection’s narrative. Finding <br/>this new balance in scale, zippers and snaps are outsized, clasps become belt <br/>buckles, and a scrap of leather is turned into an outfit.
        </Text>
      </Box>  
  </CardBody>
</Card>
    </Heading> 
        <Grid templateColumns= "1fr 1fr 1fr" gap="2">
        {views.map((vue)=> {
            return <ViewCard key={vue._id} view={vue} />  
        })}
        </Grid>
        

            <Heading>
                < SecondVideo />
            </Heading>
            
        </>
    )
};

export default ViewScreen;
