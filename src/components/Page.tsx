import { Container, ContainerProps } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

const Page: React.FC<PropsWithChildren<ContainerProps>> = ({
  children,
  ...props
}) => {
  return (
    <Container {...props} paddingTop="30px" paddingBottom="30px">
      {children}
    </Container>
  );
};

export default Page;
