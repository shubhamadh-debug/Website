import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Wedding from './pages/Wedding';
import WeddingDayGuest from './pages/WeddingDayGuest';

const App: React.FC = () => {
	return (
		<Router>
			<Routes>
				<Route path='/invite-stay' element={<Wedding />} />
				<Route path='/invite-day' element={<WeddingDayGuest />} />
				<Route path='*' element={<Navigate to='/invite-stay' replace />} />
			</Routes>
		</Router>
	);
};

export default App;
