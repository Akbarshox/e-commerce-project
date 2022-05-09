import React, {useEffect, useState} from 'react';
import axios from "axios";
import style from '../../styles/dashboard.module.css';
import Grid from '@mui/material/Grid';
import {Link} from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';

export default function DashboardProducts() {
   const [products, setProducts] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      axios.get('https://fakestoreapi.com/products')
         .then(res => {
            setProducts(res.data);
            setLoading(false);
         })
   }, [])

   if (!loading)
      return (
         <div className={style.container}>
            <Grid container spacing={2}>
               {products.map(el =>
                  <Grid item xl={3} md={4} sm={6} xs={6}>
                     <Link to={`/product/${el.id}`}>
                        <div className={style.product}>
                           <img src={el.image} alt=""/>
                           <div className={style.productDetail}>
                              <p>{el.title}</p>
                              <p>{el.price}$</p>
                           </div>
                        </div>
                     </Link>
                  </Grid>
               )}
            </Grid>
         </div>
      )
   else
      return (
         <div className={style.container}>
            <CircularProgress/>
         </div>
      )
}