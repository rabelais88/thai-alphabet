import {
  Button,
  Checkbox,
  Heading,
  Link,
  Switch,
  Text,
  VStack,
} from '@chakra-ui/react';
import Page from '../components/Page';
import useMemorize from '../hooks/useMemorize';

const Stats = () => {
  const { orders, resetOrders, filters, saveFilters } = useMemorize();
  return (
    <Page className="page-stats">
      <VStack alignItems="flex-start">
        <Heading>Statistics</Heading>
        <Text>Total remaining letters to be remembered: {orders.length}</Text>
        <Button onClick={() => resetOrders()}>Reset Word Stats</Button>
        <Heading>Letters to Memorize</Heading>
        <VStack alignItems="flex-start">
          <Switch
            isChecked={filters.shortVowels}
            onChange={(e) => saveFilters({ shortVowels: e.target.checked })}
          >
            short vowels
          </Switch>
          <Switch
            isChecked={filters.longVowels}
            onChange={(e) => saveFilters({ longVowels: e.target.checked })}
          >
            long vowels
          </Switch>
          <Switch
            isChecked={filters.consonantsHigh}
            onChange={(e) => saveFilters({ consonantsHigh: e.target.checked })}
          >
            consonants with high occurance(10%)
          </Switch>
          <Switch
            isChecked={filters.consonantsLow}
            onChange={(e) => saveFilters({ consonantsLow: e.target.checked })}
          >
            consonants with low occurance(1%)
          </Switch>
          <Switch
            isChecked={filters.consonantsRare}
            onChange={(e) => saveFilters({ consonantsRare: e.target.checked })}
          >
            consonants with rare occurance(less than 1%)
          </Switch>
        </VStack>
        <Text>*changing categories will reset stats</Text>
        <Link href="https://github.com/rabelais88">by Park Sungryeol</Link>
      </VStack>
    </Page>
  );
};
export default Stats;
