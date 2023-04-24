import React, { useEffect, useState } from 'react'
import AdminServices from '../../Services/AdminServices'
import { useNavigate } from 'react-router-dom';
import './Index.css'
export default function () {
  let jwt = null;
  jwt = localStorage.getItem('adminauthenticate');
  jwt = "Bearer " + jwt;
  const config = {
      headers: {
          'Authorization': jwt
      }
  };
  const [scrapList, setScrapList] = useState([]);
  const navigate = useNavigate();
  const fetchData = () => {
  AdminServices.scrapList(config).then((response) => {
   //  console.log(response.data);
     let temp=[];
     response.data.map((e,index)=>{
      temp.push(e);
      console.log(temp[index]);
     })
    
      setScrapList(temp);
      // console.log(scrapList);
  }).catch((error) => { 
    console.log(error);
  });
  }

const deleteItem = (id) => {
   AdminServices.scrapListDelete(id,config).then((response) => {
         let temp=[...scrapList];
         temp=temp.filter((element) => element.id !== id);
         setScrapList(temp);
         console.log(response);
   }).catch((error) => {
      console.log(error);
   });

}

  useEffect(() => {
        
    fetchData();
    
}, []);
  return (
   <div className='admin-container'>
   <nav className="navbar navbar-dark bg-dark sell">
      <span className='text-white logo'>Junk Trade</span>
      <div>
      <button type="button" class="btn btn-outline-light" style={{marginRight:'10px'}}
      onClick={()=>{
        localStorage.removeItem('adminauthenticate');
        navigate('/');
      }}>Logout</button>
      </div>
    </nav>

   <div className='container'>

<table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone Number</th>
      <th scope="col">Pickup Date</th>
      <th scope="col">Pickup Time</th>
      <th scope="col">Total Price</th>
      <th scope="col">Address</th>
      <th scope="col">Scrap List</th>
      <th scope="col">Delete Item</th>
    </tr>
  </thead>
  <tbody>
   { scrapList.map((e) =>
    <tr>
      <td>{e.fname}</td>
      <td>{e.lname}</td>
      <td>{e.email}</td>
      <td>{e.phoneNumber}</td>
      <td>{e.pickupDate.split('T')[0]}</td>
      <td>{e.time}</td>
      <td>{e.price}</td>
      <td>
        {e.address}
      </td>
      <td><button type="button" onClick={()=>{navigate('/admin/scrapItem',{state:e.id})}} className="btn btn-primary">SCRAP ITEM</button></td>
      <td><button type="button" onClick={(event)=>{deleteItem(e.id)}} className="btn btn-primary">DELETE</button></td>
    </tr>
    )}
  </tbody>
</table>


</div>



</div> 
  )
}
