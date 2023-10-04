import './App.css';
import WarehouseForm from './components/WarehouseForm';
import Homepage from './components/Homepage';
import { Route, Routes } from 'react-router-dom';
import WareHouseDetails from './components/WareHouseDetails';
import EditWarehouse from './components/EditWarehouse';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' exact element={<Homepage />} />
        <Route path='/add' exact element={<WarehouseForm />} />
        <Route path='/details/:id' exact element={<WareHouseDetails />} />
        <Route path='/edit/:id' exact element={<EditWarehouse />} />
      </Routes>
    </div>
  );
}

export default App;
