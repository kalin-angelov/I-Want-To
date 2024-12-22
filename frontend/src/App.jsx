import { Box } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/custom/Navbar';
import HomePage from './components/custom/HomePage';
import CreatePage from './components/custom/CreatePage';
import { useColorModeValue } from './components/ui/color-mode';

function App() {

  return (
    <Box minH={"100vh"} bg={useColorModeValue("gray.150", "gray.900")}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Box>
  );
};

export default App;
