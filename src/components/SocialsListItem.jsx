import React from 'react'

export default function SocialsListItem({ item }) {
  return (
    <li>
        <a href="#">
            <i className={`bi ${item.icon}`}></i>
        </a>
    </li>
  )
}
