import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import style from '../../styles/product.module.css';
import Grid from "@mui/material/Grid";
import ReactImageMagnify from 'react-image-magnify';
import CircularProgress from "@mui/material/CircularProgress";
import {useSelector} from "react-redux";

export default function Product() {
   const [data, setData] = useState({});
   const [loading, setLoading] = useState(true);
   const params = useParams();
   const state = useSelector(state => state);

   useEffect(() => {
      axios.get(`https://fakestoreapi.com/products/${params.id}`)
         .then(res => {
            setData(res.data);
            setLoading(false);
         })
   }, [])

   console.log(state);
   if (!loading)
      return (
         <div className={style.container}>
            <Grid container spacing={2}>
               <Grid xs={5} sm={5} md={6} xl={5}>
                  <div className={style.productImage}>
                     <ReactImageMagnify {...{
                        smallImage: {
                           alt: data.title,
                           src: data.image,
                           width: 500,
                           height: 600
                        },
                        largeImage: {
                           src: data.image,
                           width: 750,
                           height: 900,
                        },
                        enlargedImagePosition: 'over'
                     }} />
                  </div>
               </Grid>
               <Grid xs={7} sm={7} md={6} xl={7}>
                  <div className={style.productDetail}>
                     <div className={style.priceName}>
                        <h3>{data.title}</h3>
                        <h3>{data.price}$</h3>
                     </div>
                     <hr/>
                     <p>{data.description}</p>
                     <hr/>
                     <div className={style.buy}>
                        <button>Купить</button>
                     </div>
                  </div>
               </Grid>
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