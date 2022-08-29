import { Button, Heading } from '@chakra-ui/react';
import useMemorize from '../hooks/useMemorize';
import Page from './Page';

const NoLetter = () => {
  const { showStats } = useMemorize();
  return (
    <Page className="page-no-letter">
      <Heading>You've got no letter to remember!</Heading>
      <Button onClick={() => showStats()}>Change options</Button>
    </Page>
  );
};
export default NoLetter;
