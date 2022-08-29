import { Box, Button, Container, Text, VStack } from '@chakra-ui/react';
import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import alphabets from '../constants/alphabets';
import { ReactSketchCanvas, ReactSketchCanvasRef } from 'react-sketch-canvas';
import useMemorize from '../hooks/useMemorize';

const Letter = () => {
  const { letter } = useParams();
  const alphabet = alphabets[Number(letter)];
  const refCanvas = useRef<ReactSketchCanvasRef>(null);
  const onClear = () => {
    if (!refCanvas.current) return;
    refCanvas.current.clearCanvas();
  };

  useEffect(() => {}, []);
  const onNext = useMemorize();

  return (
    <Container className="page-letter">
      <VStack>
        <Text>{alphabet.type}</Text>
        <Text className="classic-thai-font" fontSize="60px">
          {alphabet.letter}
        </Text>
        <Text className="modern-thai-font" fontSize="60px">
          {alphabet.letter}
        </Text>
        <Text fontSize="30px">/{alphabet['english-sound']}/</Text>
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
            <Text fontSize="80px" className="modern-thai-font">
              {alphabet.letter}
            </Text>
            <Text fontSize="80px" className="classic-thai-font">
              {alphabet.letter}
            </Text>
          </VStack>
          <ReactSketchCanvas
            width="300px"
            height="300px"
            strokeWidth={4}
            strokeColor="black"
            ref={refCanvas}
            canvasColor="transparent"
          />
        </Box>
        <Button onClick={onClear} variant="outline">
          clear
        </Button>
        <Button onClick={onNext}>next letter</Button>
      </VStack>
    </Container>
  );
};

export default Letter;
