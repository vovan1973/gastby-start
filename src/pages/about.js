// Step 1: Import React
import { Link } from 'gatsby'
import * as React from 'react'
import Layout from '../component/laout'

// Step 2: Define your component
const AboutPage = () => {
  return (
   <Layout pageTitle="О нас">
    <p>Привет! Я гордый создатель этого сайта, который я создал вместе с Гэтсби.</p>
   </Layout>
  )
}

export const Head = () => <title>О Нас</title>

// Step 3: Export your component
export default AboutPage