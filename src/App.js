import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SearchByCategory from './component/SearchByCategory';
import SearchByName from './component/SearchByName';
import SearchEngine from './component/SearchEngine';


function App() {
  return (
    <BrowserRouter>
       <Routes>
        <Route path="/" element={ <SearchEngine />} />
         <Route path="/:company_name" element={<SearchByName />} />
         <Route path="/:category" element={<SearchByCategory/>} />
       </Routes>
     </BrowserRouter>
  );
}

export default App;
