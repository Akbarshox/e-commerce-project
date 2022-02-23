import React from "react";

function MainLayout(props) {

   const handleClick = () => {
      if (props.state === "light")
         props.setState("dark")
      else
         props.setState("light")
   }

   return (
      <div>
         <button onClick={handleClick}>chnage2</button>
      </div>
   )
}

export default MainLayout;