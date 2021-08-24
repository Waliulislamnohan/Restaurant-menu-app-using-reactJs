import React, { useState } from 'react';
import MenuCard from '../MenuCard';
import Menu from "./menuApi";
import NavBar from './NavBar';
import './style.css';


const uniqueList = [...new Set(
    Menu.map((curElem)=>{
    return curElem.category;
})
),
 "All",
];

const Resturent = () => {
    const[menuData, setmenuData] = useState(Menu);
    const[menuList, setmenuList] = useState(uniqueList);

    const filterItem = (category)=>{
        if(category === "All"){
            setmenuData(Menu);
            return;
        }
        const updatedList = Menu.filter((curElem)=>{
            return curElem.category === category;
        });
        setmenuData(updatedList);
    }
    return <>

        <NavBar filterItem={filterItem} menuList={menuList} />

        <MenuCard menuData={menuData} />
        </> ;
}

export default Resturent;
