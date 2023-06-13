import React from 'react';
import { Input as ChackraInput, Text, Box } from '@chakra-ui/react';

interface InputProps {
  field: string;
  placeholder: string;
  password?: boolean;
}

export const Input = ({ field, placeholder, password }: InputProps) => {
  return (
    <Box>
      <Text
        mb="-8px"
        zIndex={2}
        bg="#FFF"
        w="fit-content"
        mx="8px"
        px="8px"
        fontSize="14.4px"
        fontWeight="600"
        position="relative"
      >
        {field}
      </Text>
      <ChackraInput
        type={password ? 'password' : 'text'}
        zIndex={1}
        height="48px"
        borderRadius="10px"
        placeholder={placeholder}
        size="sm"
      />
    </Box>
  );
};
