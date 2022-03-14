import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight, faBars, faXmark} from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom';
import style from '../../styles/menu.module.css';

export default function Menu() {
   const [state, setState] = React.useState({left: false});

   const toggleDrawer = (anchor, open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
         return;
      }

      setState({...state, [anchor]: open});
   };


   const menus = [
      {
         id: 0,
         name: 'Смартфоны',
         link: '/category/smartfoni',
      },
      {
         id: 1,
         name: 'Ноутбуки',
         link: '/category/noutbuki'
      },
      {
         id: 2,
         name: 'Бытовые техники',
         link: '/category/bitoviye'
      },
      {
         id: 3,
         name: 'Оборудование',
         link: '/category/oborudovaniye'
      },
      {
         id: 4,
         name: 'Одежды',
         link: '/category/odejdi'
      },
   ]

   return (
      <div>
         {['left'].map((anchor) => (
            <React.Fragment key={anchor}>
               <li onClick={toggleDrawer(anchor, true)}><FontAwesomeIcon icon={faBars} color={"#011C47"} size={"lg"}/>
               </li>
               <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
               >
                  <Box
                     sx={{width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 300}}
                     role="presentation"
                     onKeyDown={toggleDrawer(anchor, false)}
                  >
                     <div className={style.container}>
                        <div className={style.title}>
                           <p>Меню <FontAwesomeIcon icon={faXmark} color={'#ff0000'}
                                                    onClick={toggleDrawer(anchor, false)}/></p>
                        </div>
                        {menus.map(el =>
                           <Link to={el.link} key={el.id}>
                              <p onClick={toggleDrawer(anchor, false)}>{el.name} <FontAwesomeIcon icon={faAngleRight}/></p>
                           </Link>
                        )}
                     </div>
                  </Box>
               </Drawer>
            </React.Fragment>
         ))}
      </div>
   );
}
