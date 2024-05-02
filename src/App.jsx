import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'
import Main from './views/Main'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        {/* Other routes */}
      </Routes>
    </Router>
  );
}

export default App;

