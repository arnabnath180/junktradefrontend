import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import AdminServices from '../../Services/AdminServices';

function Index() {
    
    const [scrapList, setScrapList] = useState([]);
    const location=useLocation();
    const navigate=useNavigate();
    const id=location.state;
    let jwt = null;
    jwt = localStorage.getItem('adminauthenticate');
    jwt = "Bearer " + jwt;
    const config = {
        headers: {
            'Authorization': jwt
        }
    };
    const fetchData = () => {
        AdminServices.scrapListItem(id,config).then((response) => {
          console.log(response.data);
          let temp=[];
          response.data.map((e,index)=>{
           temp.push(e);
            console.log(temp[index]);
           })
          
            setScrapList(temp);
            console.log(scrapList);
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
      <th scope="col">Scrap Item</th>
      <th scope="col">Item Rate</th>
      <th scope="col">Quantity</th>
    </tr>
  </thead>
  <tbody>
   { scrapList.map((e) =>
    <tr>
      <td>{e.item}</td>
      <td>{e.rate}</td>
      <td>{e.quantity}</td>
     </tr>
    )}
  </tbody>
</table>

</div>


</div>
  )
}

export default Index