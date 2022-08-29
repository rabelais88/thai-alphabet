import {
  Box,
  Button,
  Container,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import alphabets from '../constants/alphabets';
import useMemorize from '../hooks/useMemorize';

const Main = () => {
  const onStartMemorize = useMemorize();
  return (
    <Container className="page-main">
      <Heading>Thai Letters</Heading>
      <Button onClick={onStartMemorize}>Start Spaced Repetition</Button>
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
    </Container>
  );
};

export default Main;
