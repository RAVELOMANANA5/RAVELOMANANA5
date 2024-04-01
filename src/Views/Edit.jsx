import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import axios from 'axios';
import toast from 'react-hot-toast';
import { useParams, useNavigate } from 'react-router-dom'

export default function Edit() {
    const {id} = useParams()
    const [dataservers,GetDataServer] = useState(null)
    const setNavigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
      } = useForm()
    
      useEffect(()  => {
        axios
            .get(`http://localhost:8088/api/v1/allProduct/${id}`)
            .then( (res) => {
                GetDataServer(res.data)
            })
      },[] )

      setTimeout(() => {
        if(dataservers != null){
            setValue("design",dataservers[0].design)
            setValue("price",dataservers[0].price)
            setValue("quantity",dataservers[0].quantity)
          }
      }, "500");
      
    function btnDeleteEdit(){
        setNavigate("/affichage")
    }
        const onSubmit = (data) => {
        axios 
            .put(`http://localhost:8088/api/v1/edit/${id}`,data)
            .then((res) => {console.log(res) 
               
                toast.success('Produit a ete Modifier!') 
            
            setNavigate("/affichage")
        })
    }
    return (
    <>
    
    <div className='Container_App'>
         
            <div className='Container_edit'>
            
                <h1>Modifier un produit</h1>
               
                <form onSubmit={handleSubmit(onSubmit)}>
                <button onClick={btnDeleteEdit}>x</button>
                    <div>
                        <label htmlFor=""> Désignation : </label>
                        <input type="text" {...register("design")}  placeholder='Entrez votre designation'/>
                    </div>
                    <br />
                
                  
                    
                    <div>
                        <label htmlFor="">Prix : </label>
                        <input type="text" {...register("price")}  placeholder='Entrez votre prix'/>        
                    </div>
                    <br />
                    
                    <div>      
                        <label htmlFor="">Quantité :</label>
                        <input type="text" {...register("quantity")} placeholder='Entrez votre quantité'/>
                    </div>
                        <br />
                        {errors.exampleRequired && <span>This field is required</span>}
                    <input  className='Submit' type="submit" value="ajouter"/>
                </form>
            </div>
            </div>
       
  




    </>
    )
}
