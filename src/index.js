import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';

import store from './store';

import './index.css';
import App from './App';
import { AuthProvider } from './context/auth-context';

ReactDOM.render(<Provider store={store}><BrowserRouter><AuthProvider><App /></AuthProvider></BrowserRouter></Provider>, document.getElementById('root'));
