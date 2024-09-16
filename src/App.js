import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CountryCard from './componets/CountryCard';
import CountryDetails from './componets/CountryDetails';
import CountrySearch from './componets/CountrySearch';
import LoadingSpinner from './componets/LoadingSpinner';
import ErrorNotification from './componets/ErrorNotification';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>

    <Route path="/" element={<CountrySearch/>} />
    <Route path="/card" element={<CountryCard/>} />
    <Route path="/details" element={<CountryDetails/>} />
    <Route path='/loading' element={<LoadingSpinner/>} />
    <Route path='/error' element={<ErrorNotification/>} />

    </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
