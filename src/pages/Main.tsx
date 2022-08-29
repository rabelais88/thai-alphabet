import {
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  VStack,
} from '@chakra-ui/react';
import Page from '../components/Page';
import alphabets from '../constants/alphabets';
import useMemorize from '../hooks/useMemorize';

const Main = () => {
  const { orders } = useMemorize();
  return (
    <Page className="page-main">
      <VStack>
        <Heading textAlign="center">All Letters</Heading>
        <TableContainer>
          <Table>
            <Thead>
              <Tr>
                <Th>type</Th>
                <Th>letter</Th>
                <Th>modern letter</Th>
                <Th>sound</Th>
                <Th>memorizing</Th>
              </Tr>
            </Thead>
            <Tbody>
              {alphabets.map((alphabet, i) => (
                <Tr key={i}>
                  <Td>{alphabet.type}</Td>
                  <Td fontSize="30px" className="traditional-thai-font">
                    {alphabet.letter}
                  </Td>
                  <Td fontSize="30px" className="modern-thai-font">
                    {alphabet.letter}
                  </Td>
                  <Td>{alphabet['english-sound']}</Td>
                  <Td>{orders.includes(i) ? '✅' : '❌'}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </VStack>
    </Page>
  );
};

export default Main;
