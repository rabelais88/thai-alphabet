import { Box, Button, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import Page from '../components/Page';
import confusing from '../constants/confusing';
import alphabets from '../constants/alphabets';
import { useState } from 'react';
const LettersConfusing = () => {
  const [showHints, setShowHints] = useState(
    Array.from({ length: confusing.length }).map(() => false)
  );
  return (
    <Page className="page-letters-confusing">
      <Heading textAlign="center">Confusing Letters</Heading>
      <VStack justifyContent="center">
        {confusing.map((c, ci) => (
          <Box key={ci}>
            {c.letters.map((l, li) => (
              <HStack key={`letter${ci}-${li}`} justifyContent="center">
                <Text className="modern-thai-font" fontSize="60px">
                  {alphabets[l].letter}
                </Text>
                <Text className="classic-thai-font" fontSize="60px">
                  {alphabets[l].letter}
                </Text>
                {showHints[ci] && <Text>{alphabets[l]['english-sound']}</Text>}
              </HStack>
            ))}
            {!showHints[ci] && (
              <Button
                onClick={() => {
                  const newHints = [...showHints];
                  newHints[ci] = true;
                  setShowHints(newHints);
                }}
              >
                👀Reveal differences
              </Button>
            )}
            {showHints[ci] && (
              <Button
                onClick={() => {
                  const newHints = [...showHints];
                  newHints[ci] = false;
                  setShowHints(newHints);
                }}
              >
                😎Hide differences
              </Button>
            )}
          </Box>
        ))}
      </VStack>
    </Page>
  );
};

export default LettersConfusing;
