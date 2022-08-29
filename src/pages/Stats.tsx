import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Link,
  Select,
  Switch,
  SwitchProps,
  Text,
  VStack,
} from '@chakra-ui/react';
import { PropsWithChildren } from 'react';
import Page from '../components/Page';
import useMemorize from '../hooks/useMemorize';

const LabelledSwitch: React.FC<
  PropsWithChildren<
    { id: string } & Pick<SwitchProps, 'isChecked' | 'onChange'>
  >
> = ({ children, id, isChecked, onChange }) => {
  return (
    <FormControl display="flex" flexDir="row">
      <Switch isChecked={isChecked} onChange={onChange} id={id} mr="2" />
      <FormLabel htmlFor={`#${id}`}>{children}</FormLabel>
    </FormControl>
  );
};

const Stats = () => {
  const {
    orders,
    resetOrders,
    filters,
    saveFilters,
    letterMode,
    setLetterMode,
  } = useMemorize();
  return (
    <Page className="page-stats">
      <VStack alignItems="flex-start">
        <Heading>Statistics</Heading>
        <Text>Total remaining letters to be remembered: {orders.length}</Text>
        <Button onClick={() => resetOrders()}>Reset Word Stats</Button>
        <Heading>Letters to Memorize</Heading>
        <VStack alignItems="flex-start">
          <LabelledSwitch
            id="short-vowel"
            isChecked={filters.shortVowels}
            onChange={(e) => saveFilters({ shortVowels: e.target.checked })}
          >
            short vowels
          </LabelledSwitch>

          <LabelledSwitch
            id="long-vowel"
            isChecked={filters.longVowels}
            onChange={(e) => saveFilters({ longVowels: e.target.checked })}
          >
            long vowels
          </LabelledSwitch>

          <LabelledSwitch
            id="consonants-high"
            isChecked={filters.consonantsHigh}
            onChange={(e) => saveFilters({ consonantsHigh: e.target.checked })}
          >
            consonants with high occurance(10%)
          </LabelledSwitch>

          <LabelledSwitch
            id="consonants-low"
            isChecked={filters.consonantsLow}
            onChange={(e) => saveFilters({ consonantsLow: e.target.checked })}
          >
            consonants with high occurance(1%)
          </LabelledSwitch>

          <LabelledSwitch
            id="consonants-rare"
            isChecked={filters.consonantsRare}
            onChange={(e) => saveFilters({ consonantsRare: e.target.checked })}
          >
            consonants with high occurance(1%)
          </LabelledSwitch>
        </VStack>
        <Text>*changing categories will reset stats</Text>
        <Heading>Fonts</Heading>
        <Select
          value={letterMode}
          onChange={(e) => setLetterMode(e.target.value as LetterMode)}
        >
          <option value="all">all fonts</option>
          <option value="modern">modern font only</option>
          <option value="traditional">traditional font only</option>
        </Select>
        <Link href="https://github.com/rabelais88">
          by Park Sungryeol
          <br />
          while staying in 🏝Chiang Mai, Thailand
        </Link>
      </VStack>
    </Page>
  );
};
export default Stats;
