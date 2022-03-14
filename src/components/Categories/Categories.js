import React, {useState} from 'react';
import {useParams} from "react-router-dom";

export default function Categories() {
   const params = useParams();
   const [data, setData] = useState([]);
   const [error, setError] = useState(false);

   React.useEffect(() => {
      products.map(el => {
         if (el.slug === params.name) {
            setData(el.products);
         }
      })
   }, [params.name])

   const products = [
      {
         name: 'Смартфоны',
         slug: 'smartfoni',
         products: [
            {
               name: 'Samsung',
            },
            {
               name: 'Red Mi',
            },
            {
               name: 'Iphone',
            }
         ]
      },
      {
         name: 'Ноутбуки',
         slug: 'noutbuki',
         products: [
            {
               name: 'Acer'
            },
            {
               name: 'HP'
            },
            {
               name: 'Omen'
            },
            {
               name: 'Lenovo'
            }
         ]
      }
   ]

   return (
      <div style={{margin: 20}}>
         <h1>{params.name}</h1>
         {data.map(el => <h4>{el.name}</h4>)}
      </div>
   )
}