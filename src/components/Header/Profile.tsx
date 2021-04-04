import { Box, Flex, Text, Avatar } from '@chakra-ui/react';

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Gustavo Lopes</Text>
        <Text color="gray.300" fontSize="small">
          gustavo@lopesit.com.br
        </Text>
      </Box>
      <Avatar
        size="md"
        name="Gustavo Lopes"
        src="https://github.com/gustavolopesv3.png"
      />
    </Flex>
  );
}
