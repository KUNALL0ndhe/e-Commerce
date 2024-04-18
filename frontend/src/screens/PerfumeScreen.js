import { Grid, Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import perfumes from "../perfumes";
import PerfumeCard from "../components/PerfumeCard";
import views from "../views";


const PerfumeScreen = () => {
  return (
    <>
    <Heading as='h2' mb='8' fontFamily='Montserrat' fontSize='xl'>
    Eau-de-Parfum
    </Heading>

    <Grid templateColumns='1fr 1fr 1fr ' gap='8'>
{perfumes.map(perfume => {
    return <PerfumeCard key={perfume.name}></PerfumeCard>
})}


</Grid>
    </>
  )
}

export default PerfumeScreen  