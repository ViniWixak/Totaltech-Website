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
      <Box
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
        <Box
          h="100%"
          w="18rem"
          display="flex"
          alignItems="center"
          justifyContent="right"
          gap="0.80rem"
        />
      </Box>
    </Box>
  );
}
