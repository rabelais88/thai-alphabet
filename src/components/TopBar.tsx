import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import useMemorize from '../hooks/useMemorize';

const TopBar = () => {
  const { showList, tryNewLetter, showStats, tryConfusingLetters } =
    useMemorize();
  return (
    <Box
      className="top-bar"
      display="flex"
      alignItems="center"
      p="3"
      bgColor="yellow.400"
    >
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="menu"
          icon={<HamburgerIcon />}
        />
        <MenuList>
          <MenuItem onClick={showList}>All Letters</MenuItem>
          <MenuItem onClick={tryNewLetter}>Try Memorize Letters</MenuItem>
          <MenuItem onClick={tryConfusingLetters}>
            Check Confusing Letters
          </MenuItem>
          <MenuItem onClick={showStats}>Stats & Options</MenuItem>
        </MenuList>
      </Menu>
      <Box flex="1" textAlign="center">
        <Heading fontSize="20px">Thai Letters</Heading>
      </Box>
    </Box>
  );
};

export default TopBar;
