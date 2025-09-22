import { useState } from 'react';
import { Routes, Route, Form } from 'react-router-dom';
import Home from './pages/Home.jsx';
import ComponentsAndProps from './pages/ComponentsAndProps.jsx';
import HandlingEvents from './pages/HandlingEvents.jsx';
import Forms from './pages/Forms.jsx';
import { NameProvider } from './components/NameContext.jsx';

function App() {
	return (
		<NameProvider>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/comps-and-props" element={<ComponentsAndProps />} />
				<Route path="/handling-events" element={<HandlingEvents />} />
				<Route path="/forms" element={<Forms />} />
			</Routes>
		</NameProvider>
	)
}

export default App
