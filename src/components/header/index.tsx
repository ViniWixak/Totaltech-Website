import { Box, Center, Divider, Flex, Text, Image } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import Link from 'next/link';

export function Header() {
  return (
    <Box
      w="100%"
      h="5.5rem"
      boxShadow="base"
      display="flex"
      alignItems="center"
      top={0}
      bg="#FFF"
      zIndex={2}
    >
      <Flex
        w="100%"
        display="flex"
        justifyContent="space-between"
        maxW="1200px"
        mx="auto"
        px={{ base: '10px', md: '40px' }}
      >
        <Image
          src="/assets/logo.png"
          width="200px"
          objectFit="contain"
          alt="logo"
        />
        <Flex display={['none', 'none', 'flex']} justify="space-between">
          <Text
            w="280px"
            h="45px"
            mr="10px"
            borderRadius="45px"
            borderColor="#242C3F"
            color="#242C3F"
            fontSize="22px"
            fontWeight={400}
            _hover={{ bg: '#e6e6e66b' }}
            _active={{
              bg: '#E6E6E6 ',
              transform: 'scale(0.99)',
            }}
          
          >
            Download Android
          </Text>
          <Text
            w="280px"
            h="45px"
            mr="10px"
            borderRadius="45px"
            fontSize="22px"
            fontWeight={400}
            color="#FFF"
            backgroundColor="#242C3F"
            _hover={{ bg: '#20376a' }}
            _active={{
              bg: '#212d48',
              transform: 'scale(0.99)',
            }}
            fontFamily="Helvetica Neue Bold, Arial, sans-serif"
            onClick={() =>
              window.open('https://testflight.apple.com/join/QNmp2Kdg')
            }
          >
            Download IOS
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}
