import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainSearch from "./components/BasicOne";
import CompanySearchResults from "./components/CompanySearchResults";
import Favourites from "./components/Favourites";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import { Container } from "react-bootstrap";
import BasicOne from "./components/BasicOne";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Container>

        <Routes>
          <Route path="/" element={<BasicOne />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/:companyName" element={<CompanySearchResults />} />
        </Routes>
        </Container>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
