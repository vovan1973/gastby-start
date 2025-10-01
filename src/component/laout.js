import * as React from 'react'
import { Link } from 'gatsby'
import {container, heading} from './laout.module.css'

const Layout = ({ pageTitle, nameTitle, children }) => {
  return (
    <div className={container}>
      <nav>
        <ul className={nav-links}>
          <li className={nav-link-item}>
            <Link to="/" className={nav-link-text}>Главная</Link>
            </li>
          <li className={nav-link-item}>
            <Link to="/about" className={nav-link-text}>О нас</Link>
            </li>
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