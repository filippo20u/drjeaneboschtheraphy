import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"


export default function Home() {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 600 }}>
    
    <Header headerText="Dr. Jeane Bosch Therapy" /> 
    {/* <Header/>  */}

    
     <h2>Netlify</h2>
      <p>version 0.1 Gatsby no CMS</p>
      <img src="https://source.unsplash.com/random/" alt="" />

      <Footer footerText="filippo20u 2021" /> 
    </div>
  )
}