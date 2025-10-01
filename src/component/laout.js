import * as React from 'react'
import { Link } from 'gatsby'

const Layout = ({ pageTitle, nameTitle, children }) => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Главная</Link></li>
          <li><Link to="/about">О нас</Link></li>
        </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        <h2>{nameTitle}</h2>
        {children}
      </main>
    </div>
  )
}

export default Layout