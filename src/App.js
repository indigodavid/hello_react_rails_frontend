import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';

import './App.css';
import Greeting from './components/Greeting';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Greeting />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
