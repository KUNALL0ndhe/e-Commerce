import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'


const ProductDecs = () => {
    const [size, setSize] = React.useState('')
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const handleClick = (newSize) => {
      setSize(newSize)
      onOpen()
    }
  
    const sizes = ['sm']
  
    return (
      <>
        {sizes.map((size) => (
          <Button
            onClick={() => handleClick(size)}
            key={size}
            m={1}
            bgColor={'transparent'}
            _hover= {'none'}
          >{`Product details`}</Button>
        ))}
  
        <Drawer onClose={onClose} isOpen={isOpen} size={size}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>{`Product Detail`}</DrawerHeader>
            <DrawerBody>
              <p>
                A whisper of petals opens up new horizons in Rose Des Vents, our best-selling and most versatile scent.
  A navigator’s indispensable tool, the rose des vents – or compass – is the traveler’s faithful companion. An olfactory guide, Master Perfumer Jacques Cavallier Belletrud transports us to the middle of a field of roses in Grasse. Buffeted by the wind, this singular flower seems to breathe. Sleek and stately thanks to iris and cedar, this perfume takes on glazed accents as it comes into contact with pepper. Gradually, the composition becomes as delicate as the skin of a velvety fruit. As golden as the first light of day. Immerse yourself or your loved one in the journey that is Rose des Vents.
  
  The bottle is refillable in stores equipped with a perfume fountain.
  
  Order your Louis Vuitton fragrance and receive a complimentary sample so you can discover the fragrance before wearing or gifting it. That way, should you wish to, you can return your unopened bottle for reimbursement.
  <br />
  <br />
  <strong>Discover the Men's Fragrances collection.</strong>
  <br />
  <br />
  Key notes:
  <ul>
  <li>Centifolia rose absolute</li>
  <li>Turkish rose essence</li>
  <li>Bulgarian rose essence</li>
  <li>Italian iris</li>
  <li>Virginia cedar</li>
  </ul>
  <br />
  <br />
  
  Other Available Formats:
  Spray 100ml and Spray 200ml.
  Travel Spray.Created to accompany any trip, this set includes a travel bottle as well as four 7.5ml cartridges. Designed with magnetic closures, these novel refills clip instinctively onto the atomizer. In moments, the travel bottle is primed and ready for a new adventure.
  Travel Spray refills. Refills to be used exclusively with the Louis Vuitton Travel Spray.
  <br />
  <br />
  Ingredients:
  
  ALCOHOL, PARFUM (FRAGRANCE), AQUA (WATER), LINALOOL, HYDROXYCITRONELLAL, CITRONELLOL, ETHYLHEXYL METHOXYCINNAMATE, PEG-40 HYDROGENATED CASTOR OIL, HEXYL CINNAMAL, BUTYL METHOXYDIBENZOYLMETHANE, BUTYLENE GLYCOL DICAPRYLATE/DICAPRATE, EUGENOL, GERANIOL, BHT, LIMONENE, AMYL CINNAMAL, BENZYL BENZOATE, BENZYL ALCOHOL, ISOEUGENOL, FARNESOL, CITRAL, TOCOPHEROL, CI 14700 (RED 4), CI 19140 (YELLOW 5), CI 60730 (EXT. VIOLET 2)
  <br />
  <br />
  Disclaimer: Louis Vuitton product ingredient listings are updated periodically. Before using a Louis Vuitton product, please read the ingredient list on the packaging of your product to be sure that the ingredients are appropriate for your personal use.
              </p>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  };

export default ProductDecs;