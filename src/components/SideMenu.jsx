import React, {useState} from 'react';
import './sidemenu.css';
import navListData from '../data/navListData';
import NavListItem from './NavListItem';
import socialsListData from '../data/socialsListData';
import SocialsListItem from './SocialsListItem';


export default function SideMenu() {
    const [navData, setNavData] = useState(navListData)
    const [socialData, setSocialData] = useState(socialsListData)
  return (
    <div className='sideMenu'>
      <a href="#" className="logo">
        <i className="bi bi-dpad-fill"></i>
        <span className='brand'>PlayZ</span>
        </a>
        <ul className="nav">
            {
                navData.map(item=>(
                    <NavListItem key={item._id} item={item} />
                ))
            }
        </ul>
            <ul className='social'>
                {
                   socialData.map(item=>(
                    <SocialsListItem key={item._ids} item={item}/>
                )) 
                }
            </ul>
    </div>
  )
}
