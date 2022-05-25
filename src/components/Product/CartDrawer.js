import {useContext} from "react";
import * as React from 'react';
import style from '../../styles/product.module.css';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {Store} from "../../Store";

export default function CartDrawer() {
   const {state, dispatch} = useContext(Store);
   const [drawerState, setDrawerState] = React.useState({
      right: false,
   });

   const toggleDrawer = (anchor, open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
         return;
      }

      setDrawerState({...drawerState, [anchor]: open});
   };

   const increment = (data) => {
      dispatch({type: 'INCREMENT_CART', payload: data});
   }

   const decrement = (data) => {
      dispatch({type: 'DECREMENT_CART', payload: data});
   }

   const deleteFromCart = (data) => {
      dispatch({type: 'REMOVE_FROM_CART', payload: data});
   }

   const list = (anchor) => (
      <Box
         sx={{width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 400}}
         role="presentation"
         onKeyDown={toggleDrawer(anchor, false)}
      >
         <List>
            {state.cart.map((el, index) => (
               <ListItem key={el} disablePadding>
                  <div className={style.cartDetail}>
                     <img src={el.image} alt=""/>
                     <p className={style.cartTitle}>{el.title}</p>
                     <div className={style.cartAmount}>
                        <button onClick={() => increment(el)}>+</button>
                        <span>{el.amount}</span>
                        <button onClick={() => decrement(el)} disabled={el.amount === 1}>-</button>
                        <button onClick={() => deleteFromCart(el)}>x</button>
                     </div>
                  </div>
               </ListItem>
            ))}
         </List>
      </Box>
   );

   return (
      <div>
         {['right'].map((anchor) => (
            <React.Fragment key={anchor}>
               <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  sx={{mr: 2}}
                  onClick={toggleDrawer(anchor, true)}
               >
                  <Badge badgeContent={state.cart.length} color="secondary">
                     <ShoppingCartIcon/>
                  </Badge>
               </IconButton>
               <Drawer
                  anchor={anchor}
                  open={drawerState[anchor]}
                  onClose={toggleDrawer(anchor, false)}
               >
                  {list(anchor)}
               </Drawer>
            </React.Fragment>
         ))}
      </div>
   );
}