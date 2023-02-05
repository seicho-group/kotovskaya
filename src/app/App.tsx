import {Header} from "./header/header";
import './App.css';
import {Main} from "./main/main";
import { Routes, Route, Link } from 'react-router-dom';
import { Auth } from './auth/auth'
import {Registr} from "./registr/registr";
import {Contacts} from "./contacts/contacts";
function App() {
  return (
    <div className="App">
        <Header />
        < Routes >
            <Route path="/" element={<Main />} />;
            <Route path="/auth" element={<Auth />} />;
            <Route path="/registration" element={<Registr />} />;
            <Route path="/contacts" element={<Contacts />} />;
        </Routes>
    </div>
  );
}

export default App;
