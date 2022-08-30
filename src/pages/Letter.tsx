import { Box, Button, Text, VStack } from '@chakra-ui/react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { ReactSketchCanvas, ReactSketchCanvasRef } from 'react-sketch-canvas';
import Page from '../components/Page';
import alphabets from '../constants/alphabets';
import useLetter from '../hooks/useLetter';
import useSound from '../hooks/useSound';

const Letter = () => {
  const refCanvas = useRef<ReactSketchCanvasRef>(null);
  const [showSound, setShowSound] = useState(false);
  const onClear = () => {
    if (!refCanvas.current) return;
    refCanvas.current.clearCanvas();
  };
  const { alphabet, setResult, remainings, letterMode } = useLetter();

  useEffect(() => {
    onClear();
    setShowSound(false);
  }, [alphabet]);
  const { readText } = useSound();
  const { vowelConsonant, consonant } = useMemo(() => {
    if (alphabet.type === 'consonant')
      return { vowelConsonant: '', consonant: { 'english-sound': '' } };
    const consonants = alphabets.filter((l) => l.type === 'consonant');
    const consonantIndex = Math.ceil(Math.random() * consonants.length);
    const consonant = alphabets[consonantIndex];
    return {
      vowelConsonant: alphabet.letter.replace('อ', consonant.letter),
      consonant,
    };
  }, [alphabet]);

  return (
    <Page className="page-letter">
      <VStack>
        <Text>Total Letters: {remainings}</Text>
        <Text>{alphabet.type}</Text>
        {(letterMode === 'all' || letterMode === 'traditional') && (
          <Text className="traditional-thai-font" fontSize="60px">
            {alphabet.letter}
          </Text>
        )}
        {(letterMode === 'all' || letterMode === 'modern') && (
          <Text className="modern-thai-font" fontSize="60px">
            {alphabet.letter}
          </Text>
        )}
        {showSound && (
          <>
            <Text fontSize="30px">/{alphabet['english-sound']}/</Text>
            <Button
              onClick={() => {
                readText(alphabet.letter);
              }}
            >
              Read Aloud
            </Button>
          </>
        )}
        {vowelConsonant !== '' && (
          <>
            <Text pt="10">consonant + vowel</Text>
            {(letterMode === 'all' || letterMode === 'traditional') && (
              <Text className="traditional-thai-font" fontSize="60px">
                {vowelConsonant}
              </Text>
            )}
            {(letterMode === 'all' || letterMode === 'modern') && (
              <Text className="modern-thai-font" fontSize="60px">
                {vowelConsonant}
              </Text>
            )}
          </>
        )}
        {showSound && vowelConsonant !== '' && (
          <>
            <Text fontSize="30px">
              /
              {[consonant['english-sound'], alphabet['english-sound']].join('')}
              /
            </Text>
            <Button
              onClick={() => {
                readText(vowelConsonant);
              }}
            >
              Read Aloud
            </Button>
          </>
        )}
        {!showSound && (
          <Button onClick={() => setShowSound(true)}>
            Click here to reveal sound
          </Button>
        )}

        <Text>try copy letter below</Text>
        <Box position="relative">
          <VStack
            position="absolute"
            pointerEvents="none"
            color="gray"
            opacity="0.3"
            width="100%"
            height="100%"
            justifyContent="center"
            sx={{
              '& > *': {
                pointerEvents: 'none',
                fontSize: '120px',
                touchAction: 'none',
                MozUserFocus: 'none',
                userSelect: 'none',
                WebkitUserSelect: 'none',
                WebkitUserModify: 'none',
              },
            }}
          >
            {(letterMode === 'all' || letterMode === 'traditional') && (
              <Text className="traditional-thai-font">{alphabet.letter}</Text>
            )}
            {(letterMode === 'all' || letterMode === 'modern') && (
              <Text className="modern-thai-font">{alphabet.letter}</Text>
            )}
          </VStack>
          <ReactSketchCanvas
            width="300px"
            height="400px"
            strokeWidth={4}
            strokeColor="black"
            ref={refCanvas}
            canvasColor="transparent"
          />
        </Box>
        <Button onClick={onClear} variant="outline">
          clear
        </Button>
        <Button onClick={() => setResult(true)}>✅I remeber this!</Button>
        <Button onClick={() => setResult(false)}>
          ❌ I don't know. ask it again
        </Button>
      </VStack>
    </Page>
  );
};

export default Letter;
