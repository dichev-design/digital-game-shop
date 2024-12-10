import React from 'react'
import './main.css';
import SideMenu from '../components/SideMenu';
import Header from '../components/Header';

export default function Main() {
  return (
    <main>
        <SideMenu/>
        <div className="banner">
          <Header/>
        </div>
    </main>
  )
}

