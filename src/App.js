import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import SimpleForm from './components/SimpleForm';

function App() {
  return (
    <Box>
          <Navbar />
      <div className='App'>
        <SimpleForm />
      </div>
    </Box>
  );
}

export default App;
