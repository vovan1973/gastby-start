// Step 1: Import React
import { Link } from 'gatsby'
import * as React from 'react'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <main>
      <h1>О Нас</h1>
      <Link to="/">Главная</Link>
      <p>Привет! Я гордый создатель этого сайта, который я создал вместе с Гэтсби.</p>
    </main>
  )
}

export const Head = () => <title>О Нас</title>

// Step 3: Export your component
export default AboutPage