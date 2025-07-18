import { Box } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import { useColorModeValue } from './components/ui/color-mode';
import { Toaster } from "@/components/ui/toaster"

import Navbar from './components/custom/Navbar';
import HomePage from './components/custom/HomePage';
import CreateWish from './components/custom/CreateWish';

function App() {

  return (
    <Box minH={"100vh"} bg={useColorModeValue("gray.150", "gray.900")}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreateWish />} />
      </Routes>
      <Toaster />
    </Box>
  );
};

export default App;
