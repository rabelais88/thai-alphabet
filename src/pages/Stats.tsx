import { Button, Heading, Text } from '@chakra-ui/react';
import Page from '../components/Page';
import useMemorize from '../hooks/useMemorize';

const Stats = () => {
  const { orders, resetOrders } = useMemorize();
  return (
    <Page className="page-stats">
      <Heading>Statistics</Heading>
      <Text>
        Total Remaining words that needs to be remembered: {orders.length}
      </Text>
      <Button onClick={resetOrders}>Reset Word Stats</Button>
    </Page>
  );
};
export default Stats;
