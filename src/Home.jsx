import Layout from './Layout'
// import Button from './Button'
// import Table from './Table'
import { useState } from "react"
import { useContext } from "react"

import './style/index.css'


// Home page
const Home = () => {

  // set useState
  const [sector, setSector] = useState("");
  const [employees, setEmployees] = useState("");

  // setOnClick event function
  const handleClick = (value) => {
    setSector(value);
    setEmployees(value);
  };

  return (
    <div>
      <Layout>
        <div className='mainDisplay'>
          <HeadChanger sector={sector}/>
        </div>
        <div className='change-button'>
          <button onClick={() => handleClick("user")}>User Home Sector</button>
          <button onClick={() => handleClick("admin")}>Admin Home Sector</button>
        </div>
        <CreateUser employees={employees}/>
        <div className='table-section'>
          <Table employees={employees}/>
        </div>
      </Layout>
    </div>
  )
}

// set Header changer component
const HeadChanger = (props) => {
  let topicChange = <div></div>;
  if (props.sector === 'user') {
    topicChange = <h1>Generation Thailand<br/>Home - User Sector</h1>;
} else if (props.sector === 'admin') {
    topicChange = <h1>Generation Thailand<br/>Home - Admin Sector</h1>;
} else {
    topicChange = <h1>Generation Thailand<br/>React-Assessment</h1>;
}

  return (
    <div>
      {topicChange}
    </div>
  );
}

// set Creat User inputs
const CreateUser = (props) => {
  
  //set state for get inputs
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [position, setPosition] = useState('');
  const [data, setData] = useState([]);

  // set onClick handler
  const handleSubmit = (event) => {
    event.preventDefault();
    setData([...data, { name, lastName, position }]);
    setName('');
    setLastName('');
    setPosition('');
  };


  let adminTool = (
    <div>
        <h4>Create User Here</h4>
      <form onClick={ handleSubmit }>
        <input name='name' type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} required/>
        <input name='lastName' type='text' placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} required/>
        <input name='position' type='text' placeholder='Position' value={position} onChange={(e) => setPosition(e.target.value)} required/>
        <button>Save</button>
      </form>
    </div>
    )

  let showInput = "";
    if (props.employees === 'user') {
      showInput = "";
    } else if (props.employees === 'admin') {
      showInput = adminTool;
    }
    
    
  return (
    <div className='all-input'>
      {showInput}
    </div>
  );
  
}
// set Show tables component
const Table = (props) => {
  
  const mockEmployees = [
      {
        id: 0,
        name: "mock",
        lastname: 'mocklastname',
        position: "Manager"
      },
      {
        id: 1,
        name: "employee 1",
        lastname: "em",
        position: "Engineer"
      },
      {
        id: 2,
        name: "employee 2",
        lastname: "lord",
        position: "Designer"
      },
    ]

  let tableUser = ( 
      <div className='table-user'>
         <table>
              <thead>
                  <tr>
                      <th>Name</th>
                      <th>Last Name</th>
                      <th>Position</th>
                  </tr>
              </thead>
              <tbody>
                  {mockEmployees.map((item) => 
                      <tr key={item.id}>
                          <td>{item.name}</td>
                          <td>{item.lastname}</td>
                          <td>{item.position}</td>
                      </tr>
                  )}
              </tbody>
              {/* { ถ้าเป็นแอดมิน ให้เพิ่ม column Action} */}
          </table>

      </div>
  )

  let tableAdmin = ( 
    <div className='table-admin'>
       <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Last Name</th>
                    <th>Position</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {mockEmployees.map((item) => 
                    <tr key={item.index}>
                        <td>{item.name}</td>
                        <td>{item.lastname}</td>
                        <td>{item.position}</td>
                        <td><button id='delete-button' onClick={"#"}>Delete</button></td>
                    </tr>
                )}
                {/* {props.data.map((item) => 
                    <tr key={item.index}>
                        <td>{item.name}</td>
                        <td>{item.lastname}</td>
                        <td>{item.position}</td>
                        <td><button id='delete-button' onClick={"#"}>Delete</button></td>
                    </tr>
                )} */}
            </tbody>
        </table>

      </div>
  )

  let showTable = <div></div>;
    if (props.employees === 'user') {
      showTable = tableUser;
    } else if (props.employees === 'admin') {
      showTable = tableAdmin;
    }

  return (
    <div>
      {showTable}
    </div>
  )
}



export default Home


