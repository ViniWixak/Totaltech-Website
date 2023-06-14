import {
  Image,
  Center,
  Box,
  SimpleGrid,
  Flex,
  Text,
  Button,
  Link,
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
          <Text fontSize="40px">Obrigado por preencher o formulário!</Text>
          <Text fontSize="18px" pt="24px">
            Entraremos em contato!
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
          <Box pt="20px">
            <Link href="/home">
              <Button
                colorScheme="blue"
                variant="outline"
                w="100%"
                size="lg"
                mt="6"
              >
                Voltar ao site
              </Button>
            </Link>
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
