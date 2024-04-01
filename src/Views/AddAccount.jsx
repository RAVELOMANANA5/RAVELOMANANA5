import Header from './Header';
import Footer from './Footer';
import { useForm } from "react-hook-form"
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


export default function AddAccount() {
    const setNavigate = useNavigate()

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()

      const onSubmit = (data) => {
        console.log(data)
        axios 
        .post("http://localhost:8088/api/v1/addProduct",data)
        .then((res) => 
        { 
        console.log(res) 
        toast.success('Compte bancire a ete envoyer!')
        setNavigate("/Affichage")
        }
        )  
    }   
       
        
return (
    <>
          <div>
            <div className='Container_App'>
                <Header/>
                
                <div className='Container_ajoute'>
                <h1>Ajouter Une Produit</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="">Numero De Produit :</label>
                        <input type="text" {...register("numProduct")} placeholder='Entrez Votre Numero de Produit'/>        
                        
                    </div>
                    <br />


                    <div>
                        <label htmlFor=""> Designation : </label>
                        <input type="text" {...register("design")} placeholder='Entrez Votre Designation'/>
                    </div>
                    <br />
                
                  
                    
                    <div>
                        <label htmlFor="">price : </label>
                        <input type="text" {...register("price")} placeholder='Entrez Votre price'/>        
                    </div>
                    <br />
                    
                    <div>      
                        <label htmlFor="">quantity :</label>
                        <input type="text" {...register("quantity")} placeholder='Entrez Votre quantity'/>
                    </div>
                        <br />
                        {errors.exampleRequired && <span>This field is required</span>}
                    <input  className='Submit' type="submit" value="ajouter"/>
                </form>
                </div>  
        
            </div>
                <Footer/>
         </div>
       

    </>
    )
}
