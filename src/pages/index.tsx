import {
  Image,
  Box,
  Center,
  SimpleGrid,
  Flex,
  Text,
  Button,
} from '@chakra-ui/react';
import { Icon } from '@iconify/react';

export default function Home() {
  const handleClick = () => {
    const phoneNumber = '5521991197332';
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
    window.open(url, '_blank');
  };
  return (
    <SimpleGrid h="100vh" columns={[1, 1, 2]}>
      <Center>
        <Box>
          <Image
            src="/assets/logo.png"
            alt="Logo"
            width={250}
            // width="150px"
            objectFit="contain"
            mb="100px"
          />
          <Text fontSize="40px">
            Nosso novo site
            <br /> está chegando!
          </Text>
          <Text fontSize="18px" pt="24px">
            Entre em contato conosco!
          </Text>
          <Box pt="20px">
            <Button
              onClick={handleClick}
              leftIcon={<Icon icon="ic:baseline-whatsapp" width={30} />}
              colorScheme="green"
              variant="outline"
              w="100%"
              size="lg"
              mt="6"
            >
              Fale conosco
            </Button>
          </Box>
        </Box>
      </Center>

      <Flex
        backgroundImage="assets/image.png"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      />
    </SimpleGrid>
  );
}
