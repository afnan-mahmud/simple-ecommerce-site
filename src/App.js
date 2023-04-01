import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Review from './components/Review/Review';
import Manage from './components/Manage/Manage';
import NotFound from './components/NotFound/NotFound';
import ProductDetail from './components/ProductDetail/ProductDetail';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
        <Routes>
          <Route path='/' element={<Shop />}>
          </Route>
          <Route path='/review' element={<Review />}>
          </Route>
          <Route path='/manage' element={<Manage />}>
          </Route>
          <Route path='/product/:productkey' element={<ProductDetail />}>
          </Route>
          <Route path='*' element={<NotFound />}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
