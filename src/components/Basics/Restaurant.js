import React, { useState } from 'react'
import "./style.css";
import Menu from './menuApi.js';
import MenuCard from "./MenuCard.js";
import Navbar from './Navbar.js';
 


const uniqueList=[...new Set(Menu.map((curElem)=>{
return curElem.category;
})), "ALL",];

const Restaurant = () => {
     const [menuData,setMenuData]=useState(Menu);
     const [menuList,setMenuList]=useState(uniqueList);

     const filterItem=(category)=>{
      if(category==="ALL")
      {
         setMenuData(Menu);
         return;
      }
      const updatedList=Menu.filter((curElem)=>{
        return curElem.category===category;
      });
      setMenuData(updatedList);
     }
    
  return (
    <div>

  <Navbar filterItem={filterItem} menuList={menuList}/>      
 <MenuCard menuData={menuData}/>
    </div>
  )
}

export default Restaurant
