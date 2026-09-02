import ReactDOM from 'react-dom/client';
import './i18n';           // ← måste komma före <App />
import App from './App.jsx';
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
