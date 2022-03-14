import React from "react";
import style from '../../styles/mainlayout.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faGlobe, faPhoneAlt, faSearch, faShoppingCart, faUser} from "@fortawesome/free-solid-svg-icons";
import zonLogo from '../../assets/icons/zon.png';
import Wrapper from "../UI/Wrapper";
import Menu from "./Menu";

function MainLayout() {

   return (
      <div className={style.navbar}>
         <Wrapper>
            <div className={style.container}>
               <ul>
                  <Menu />
                  <li><img src={zonLogo} alt="zon logo"/></li>
                  <li>
                     <div className={style.input}>
                        <input type="text" placeholder={"Поиск"}/><FontAwesomeIcon icon={faSearch} size={"lg"}/>
                     </div>
                  </li>
                  <li><FontAwesomeIcon icon={faShoppingCart} color={"#1BC5BD"} size={"lg"}/></li>
                  <li><p><FontAwesomeIcon icon={faGlobe} color={"#1BC5BD"} size={"lg"}/> Русский</p></li>
                  <li>
                     <a href="tel: +998998785628">
                        <FontAwesomeIcon icon={faPhoneAlt} color={"#1BC5BD"} size={"lg"}/> +998 99 878 56 28
                     </a>
                  </li>
                  <li><FontAwesomeIcon icon={faUser} color={"#1BC5BD"} size={"lg"}/></li>
               </ul>
            </div>
         </Wrapper>
      </div>
   )
}

export default MainLayout;