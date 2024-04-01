import { useState } from 'react'
import { Link  } from 'react-router-dom'
import axios from 'axios';

export default function Content() {
  const [dataservers,GetDataServer] = useState([])
  
  
    axios
      .get("http://localhost:8088/api/v1/allProduct")
      .then((res) => GetDataServer(res.data))
  
  console.log(dataservers)
  return (
    <div className='Container_Content'>
      <br />
       <div className='Container_crud_search'>
       <div className='Container_crud_search2'>
             <label > Recherche </label>  <input type="text" placeholder='Recherche produit'/>
          </div>
          <div className='Container_crud_search1'>
            <Link to="/Ajouter">Ajouter nouveaux produits</Link> 
          </div>
         
      </div>
      <br /><br /><br />
        <h1>Gestion de vente</h1>
        <table>
          <thead>
            <tr>
              <td>Designation</td>
              <td>Prix</td>
              <td>Quantité</td>
              <td>Montant</td>
             
            </tr>
          </thead>
          <tbody>
          {
              dataservers.map((ite) =>(<tr key={ite.id}>
                                      <td>{ite.design}</td>
                                      <td> {ite.price} </td>
                                      <td> {ite.quantity} </td>
                                      <td> {ite.amount}$</td>
                                      
              
            </tr> ))
            }
            
          </tbody>
        </table>
        <br />
    </div>
  )
}