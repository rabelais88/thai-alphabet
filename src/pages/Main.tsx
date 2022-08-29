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

const Main = () => {
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
