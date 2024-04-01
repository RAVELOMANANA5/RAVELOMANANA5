import{ useState} from 'react'
import Header from './Header'
import axios from 'axios';
import toast from 'react-hot-toast';
import { FiEdit3 } from "react-icons/fi";
import { TiDelete } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';

export default function Affichage() {
  const setNavigate = useNavigate()
  //const [donneeEdit,setdonneeEdit] = useState([]);
  const [dataservers,GetDataServer] = useState([])
  const [dataservers1,GetDataServer1] = useState([])


  axios
    .get("http://localhost:8088/api/v1/allProduct")
    .then((res) => GetDataServer(res.data))
  axios
    .get("http://localhost:8088/api/v1/priceMin")
    .then((res) => GetDataServer1(res.data))


  function Edit(id){

    setNavigate(`/Affichage/${id}`)

  }

 

  function deleteCompte(tr){
    axios
    .delete(`http://localhost:8088/api/v1/delete/${tr}`)
    .then(() => {
      toast.success('Compte bancire a ete Suprimer!')
    })
  }

  return (
    <>
        <div>
         <div className='Container_App'>
            <Header/>

            <div className='Container_Affichage'>    
              <h1>Affichage</h1>
            <table>
            <thead>
              <tr>
                <td> Designation </td>
                <td>Prix</td>
                <td>Quantité</td>
                <td>Montant</td>
                
                <td>Modificatoion</td>
                <td>Suppresion</td>
              </tr>
            </thead>
            <tbody>
              {
                dataservers.map((item) => (<tr key={item.numProduct}>
                                        <td>{item.design}</td>
                                        <td> {item.price}$ </td>
                                        <td> {item.quantity} </td>
                                        <td> {item.amount}$</td>
                                        
                <td > <FiEdit3 onClick={(() => Edit(item.numProduct))} className="Edit"/>   </td>
                <td > 
                <TiDelete  className="Delete" onClick={() => deleteCompte(item.numProduct)}/>
                </td>
              </tr> ))
              }
            
              
            </tbody>
          </table>
          <br /><br />
          <table>
            <thead>
              <tr>
                <td>Minimal</td>
                <td>Maximum</td>
                <td>Motant A payer Total</td>
                
                
            
              </tr>
            </thead>
            <tbody>
            <tr>
                <td>{dataservers1[0]}</td>
                <td>{dataservers1[1]}</td>
                <td> {dataservers1[2]}</td>
              
              </tr>
              
            </tbody>
          </table>
          <h1>{/*donneeEdit.numProduct */}</h1>
{/*           
          <div className={hide + data}>

              <EditPage donneeEdit={donneeEdit} laEditHide={EditHide}/>
          </div> */}
          
          </div>
     
         </div>
        
        </div> 


          
        
        
      
    </>
  )
}
