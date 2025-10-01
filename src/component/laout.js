import * as React from 'react'
import { Link } from 'gatsby'
import {container, heading, navLinks, navLinkItem, navLinkText} from './laout.module.css'

const Layout = ({ pageTitle, nameTitle, children }) => {
  return (
    <div className={container}>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>Главная</Link>
            </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>О нас</Link>
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