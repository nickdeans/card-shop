import './App.css';
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Switch, Route } from 'react-router-dom'
import PaymentForm from './PaymentForm'


function App() {
  return (
  <>
    <Switch>
      <Route path='/' exact>
        <PaymentForm />
      </Route>
    </Switch>
    {/* <Header />
    <Main />
    <Footer /> */}
  </>
  );
}

export default App;
