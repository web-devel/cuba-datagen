import React from 'react';
import './header.scss';

export interface HeaderProps {
  apiUrl: string
}

export default function Header(props: HeaderProps) {
  return (
    <div className="header">
      <h2>{props.apiUrl}</h2>
      <a className="pure-button">Logout</a>
    </div>
  )
}