import logo from './logo.svg';
import './App.css';
import React, {Component, useState} from 'react';

function App() {

  // Container where content displayed is gotten
  var content = [
    {
      name: "Jude Pasco",
      age: 23,
      designation: "DevOps",
      dateHired: "January 16, 2023"
    },
    {
      name: "John Doe",
      age: 25,
      designation: "Java Stack",
      dateHired: "January 24, 2021"
    },
    {
      name: "Zypa Guy",
      age: 23,
      designation: "Game Development",
      dateHired: "March 03, 2020"
    },
    {
      name: "Elon Musk",
      age: 35,
      designation: "Space Rockets",
      dateHired: "June 11, 2006"
    },
    {
      name: "Peter Parker",
      age: 27,
      designation: "MCU",
      dateHired: "September 30, 2016"
    },
  ];

  // Content displayed
  const [data, setData] = useState([]);

  // Init Table - get random records
  const initTable = () => {
    setData(content);

  }

  // Remove from list
  const removeItem = (index) => {
    let temp = data.filter((item, idx) => idx != index)
    setData(temp);
  }


  // Change designation of an employee - randomized
  const changeDesignation = (index) => {
    let designations = content.map((item) => {
      return item.designation;
    });
    let selected = designations[Math.floor(Math.random() * designations.length)];
    while(selected == data[index].designation) {
      selected = designations[Math.floor(Math.random() * designations.length)];
    }
    let temp = data.map(item => item);
    temp[index].designation = selected;
    setData(temp);
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is Jude's assignment (Day 1)
        </p>
        <p>Click on Initialize Table button to fill in the Employees table</p>
        <div className="employees-header"> 
          <h2> Employees </h2>
          <button onClick={initTable} className="btn reset-table-btn">Initialize Table</button>
        </div>
        <table className="table-employees">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Designation</th>
              <th>Date Hired</th>
            </tr>
          </thead>
          <tbody>

            {data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.designation}</td>
                  <td>{item.dateHired}</td>
                  <td> 
                    <button onClick={() => changeDesignation(index)} className="btn"> Change Designation </button> 
                    <button onClick={() => removeItem(index)} className="btn remove-btn"> Remove Me D: </button> 
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
