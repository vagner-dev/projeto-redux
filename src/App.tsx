import Dragons from './pages/Dragons/';
import GlobalStyles from './styles/GlobalStyles';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/Login';
import DragonContexProvaider from './contexts/DragonContex/';
import Routes from './Routes';
const App = () => {
  return (
    <DragonContexProvaider>
      <BrowserRouter>
        <GlobalStyles />
        <Routes />
      </BrowserRouter>
    </DragonContexProvaider>
  );
};

export default App;
