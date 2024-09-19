
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CountryCard from './componets/CountryCard';
import CountryDetails from './componets/CountryDetails';
import CountrySearch from './componets/CountrySearch';
import LoadingSpinner from './componets/LoadingSpinner';
import ErrorNotification from './componets/ErrorNotification';
import CountryList from './componets/CountryList';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>

    <Route path="/" element={<CountrySearch/>} />
    <Route path="/card" element={<CountryCard/>} />
    <Route path="/card/details" element={<CountryDetails/>} />
    <Route path='/loading' element={<LoadingSpinner/>} />
    <Route path='/error' element={<ErrorNotification/>} />
    <Route path='/allcountries' element={<CountryList/>} />
    </Routes>
    </BrowserRouter>

    </>

  );
}

export default App;
