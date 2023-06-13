import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { Header } from '../header';

interface layoutProps {
  children: ReactNode;
}

export function Layout({ children }: layoutProps) {
  return (
    <Box w="100%" minH="100vh">
      <Header />
      <Box>{children}</Box>
    </Box>
  );
}
