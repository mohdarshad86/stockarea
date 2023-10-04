import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/action';
import { useNavigate } from 'react-router-dom';

function Homepage() {
  const navigate = useNavigate()
  const warehouses = useSelector((state) => state.warehouse.value);
  const [filteredWarehouse, setFilteredWarehouse] = useState([])
  const dispatch = useDispatch();
  const [filterData, setFilterData] = useState({
    city: "",
    cluster: "",
    space_available: 10000,
    search: ""
  })

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch]);

  useEffect(() => {
    setFilteredWarehouse(warehouses)
  }, [warehouses])

  const handleFilter = async (e) => {
    e.preventDefault();
    let newWH = warehouses;
    if (filterData.search !== '') {
      newWH = newWH.filter((ele) => ele.name.toLowerCase().includes(filterData.search.toLowerCase()))
    }

    if (filterData.city !== '') {
      newWH = newWH.filter((ele) => ele.city.toLowerCase() === filterData.city.toLowerCase())
    }

    if (filterData.cluster !== '') {
      newWH = newWH.filter((ele) => ele.cluster.toLowerCase() === filterData.cluster.toLowerCase())
    }

    newWH = newWH.filter((ele) => ele.space_available >= parseInt(filterData.space_available))

    setFilteredWarehouse(newWH)
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilterData({
      ...filterData,
      [name]: value
    });
  };

  return (
    <div>
      <div className="homepage-container">
        <h2>List of Warehouses</h2>
        <form>
          <input
            type="text"
            placeholder="Search in Warehouses"
            name='search'
            value={filterData.search}
            onChange={(e) => {
              handleChange(e)
              handleFilter(e)
            }}
          />
        </form>
        <button className='warehouse-btn' onClick={() => navigate('/add')}>
          Add New Warehouse
        </button>
      </div>
      <div style={{ display: "flex" }}>
        <div className='filter'>
          <form onSubmit={handleFilter}>
            <label htmlFor="city">City</label>
            <select name='city' id='city' onChange={handleChange}>
              <option value="">Select City</option>
              <option value="Delhi">Delhi</option>
              <option value="Chennai">Chennai</option>
              <option value="Indore">Indore</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Guwahati">Guwahati</option>
              <option value="Noida">Noida</option>
              <option value="New City">New City</option>
            </select>
            <label htmlFor="cluster">Cluster</label>
            <select name="cluster" id="cluster" onChange={handleChange}>
              <option value="">Select Cluster</option>
              <option value="cluster-x-1">cluster-x-1 </option>
              <option value="cluster-a-1">cluster-a-1 </option>
              <option value="cluster-a-34">cluster-a-34</option>
              <option value="cluster-a-21">cluster-a-21</option>
              <option value="cluster-a-20">cluster-a-20</option>
              <option value="cluster-v-2">cluster-v-2</option>
            </select>
            <label htmlFor="space_available">Available Space</label>
            <input value={filterData.space_available} type="range" id="space_available" name="space_available" min="0" max="10000" onChange={handleChange} />
            <span>{filterData.space_available}</span>
            <button type='submit'>Filter</button>
          </form>

        </div>
        <table className="warehouse-list">
          <thead>
            <tr>
              <th>Name</th>
              <th>City</th>
              <th>Space Available</th>
              <th>Cluster</th>
            </tr>
          </thead>
          <tbody>
            {filteredWarehouse && filteredWarehouse.map((warehouse) => (
              <tr className="warehouse-list-item" key={warehouse._id} onClick={() => navigate('/details/' + warehouse._id)}>
                <td>{warehouse.name}</td>
                <td>{warehouse.city}</td>
                <td>{warehouse.space_available}</td>
                <td>{warehouse.cluster}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Homepage;