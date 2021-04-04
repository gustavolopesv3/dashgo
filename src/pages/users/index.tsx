import {
  Box,
  Flex,
  Heading,
  Button,
  Icon,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Checkbox,
  Td,
  Text,
} from '@chakra-ui/react';
import { Header } from '../../components/Header';
import { SideBar } from '../../components/SideBar';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';

export default function UserList() {
  return (
    <Box>
      <Header />
      <Flex m="100%" my="6" maxWidth={1280} mx="auto" px="6">
        <SideBar />
        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justifyContent="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuarios
            </Heading>
            <Button
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="pink"
              leftIcon={<Icon as={RiAddLine} fontSize="20" />}
            >
              Criar novo
            </Button>
          </Flex>
          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th>
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuario</Th>
                <Th>Data de Cadastro</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Gustavo Lopes</Text>
                    <Text fontSize="small" color="gray.300">
                      gustavo@lopesit.com.br
                    </Text>
                  </Box>
                </Td>
                <Td>04 de Abril, 2021</Td>
                <Td>
                  {' '}
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Gustavo Lopes</Text>
                    <Text fontSize="small" color="gray.300">
                      gustavo@lopesit.com.br
                    </Text>
                  </Box>
                </Td>
                <Td>04 de Abril, 2021</Td>
                <Td>
                  {' '}
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Gustavo Lopes</Text>
                    <Text fontSize="small" color="gray.300">
                      gustavo@lopesit.com.br
                    </Text>
                  </Box>
                </Td>
                <Td>04 de Abril, 2021</Td>
                <Td>
                  {' '}
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Gustavo Lopes</Text>
                    <Text fontSize="small" color="gray.300">
                      gustavo@lopesit.com.br
                    </Text>
                  </Box>
                </Td>
                <Td>04 de Abril, 2021</Td>
                <Td>
                  {' '}
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </Flex>
    </Box>
  );
}
