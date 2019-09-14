import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Socials from '../components/socials'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{
      textAlign: 'center',
      paddingTop: '50px',
      paddingBottom: '20px'
    }}>
    <h1>Hi, I'm Joanna!</h1>
    <p>I'm a Javascript front-end developer located in Toronto, Canada.</p>
    <Socials />
    </div>
   
  </Layout>
)

export default IndexPage
