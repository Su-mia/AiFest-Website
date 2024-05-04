import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'
import Main from './views/Main'
import RegistrationView from './views/RegistrationView';
import ThankYouView from './views/ThankYouView';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<RegistrationView />} /> 
        <Route path="/thank-you" element={<ThankYouView />} />
        {/* Other routes */}
      </Routes>
    </Router>
  );
}

export default App;

