
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import UserPage from '../pages/UserPage';

import NotFound from '../pages/NotFound';

function AppRoutes() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<UserPage />} />
        
        <Route path="*" element={<NotFound />} />


        
          
      </Routes>
    </Router>
  );
}

export default AppRoutes;
