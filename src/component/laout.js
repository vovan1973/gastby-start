import * as React from 'react'
import { Link } from 'gatsby'
import {container, heading} from './laout.module.css'

const Layout = ({ pageTitle, nameTitle, children }) => {
  return (
    <div className={container}>
      <nav>
        <ul>
          <li><Link to="/">Главная</Link></li>
          <li><Link to="/about">О нас</Link></li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        <h2>{nameTitle}</h2>
        {children}
      </main>
    </div>
  )
}

export default Layout