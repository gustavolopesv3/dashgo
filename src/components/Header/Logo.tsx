import { Text } from '@chakra-ui/react';

export function Logo() {
  return (
    <Text
      fontSize={['2xl', '3xl']}
      fontWeight="bold"
      latterSpacing="tight"
      w="64"
    >
      DashGo
      <Text as="span" ml="1" color="pink.500">
        .
      </Text>
    </Text>
  );
}
