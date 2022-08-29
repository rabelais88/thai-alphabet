import { Box, Button, Text, VStack } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import { ReactSketchCanvas, ReactSketchCanvasRef } from 'react-sketch-canvas';
import useMemorize from '../hooks/useMemorize';
import Page from '../components/Page';
import useLetter from '../hooks/useLetter';

const Letter = () => {
  const refCanvas = useRef<ReactSketchCanvasRef>(null);
  const [showSound, setShowSound] = useState(false);
  const onClear = () => {
    if (!refCanvas.current) return;
    refCanvas.current.clearCanvas();
  };
  const { alphabet, setResult } = useLetter();

  useEffect(() => {
    onClear();
    setShowSound(false);
  }, [alphabet]);

  return (
    <Page className="page-letter">
      <VStack>
        <Text>{alphabet.type}</Text>
        <Text className="classic-thai-font" fontSize="60px">
          {alphabet.letter}
        </Text>
        <Text className="modern-thai-font" fontSize="60px">
          {alphabet.letter}
        </Text>
        {!showSound && (
          <Button onClick={() => setShowSound(true)}>
            Click here to reveal sound
          </Button>
        )}
        {showSound && (
          <Text fontSize="30px">/{alphabet['english-sound']}/</Text>
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
          >
            <Text fontSize="120px" className="classic-thai-font">
              {alphabet.letter}
            </Text>
            <Text fontSize="120px" className="modern-thai-font">
              {alphabet.letter}
            </Text>
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
        <Button onClick={() => setResult(true)}>✅I remeber this word!</Button>
        <Button onClick={() => setResult(false)}>
          ❌ I don't know. ask it again
        </Button>
      </VStack>
    </Page>
  );
};

export default Letter;
