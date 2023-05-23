import { Center, SimpleGrid, Flex } from '@chakra-ui/react';

export default function Home() {
  return (
    <SimpleGrid h="100vh" columns={[1, 1, 2]}>
      <Center>a</Center>

      <Flex
        backgroundImage="assets/image.png"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      />
    </SimpleGrid>
  );
}
