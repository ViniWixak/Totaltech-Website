import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface layoutProps {
  children: ReactNode;
}

export function Layout({ children }: layoutProps) {
  return (
    <Box w="100%" minH="100vh">
      <Box>{children}</Box>
    </Box>
  );
}
