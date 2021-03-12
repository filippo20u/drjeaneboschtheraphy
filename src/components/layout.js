import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Brain from "../images/shutterstock_671483350.png"


const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)


export default function Layout({ children }) {
  return (

    
    <div style={{ margin: `3rem auto`, maxWidth: 1980, padding: `0 1rem`, 
  
    
     }}>
     
      <header style={{ marginBottom: `1.5rem`, color: "#006d77",
      backgroundColor: "white"
    }}>

        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h1 style={{ display: `inline` }}>
              Jeane Bosch Ph.D MPH</h1> <h4>Clinical Psychologist</h4>
             
        </Link>
        <ul style={ {  listStyle: `none`, float: `right` }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/about/">Services</ListLink>
          {/* <ListLink to="/publications/">Publications</ListLink> */}
          {/* <ListLink to="/resume/">Resume</ListLink> */}
          
          <ListLink to="/about/">Get Started</ListLink>
          <ListLink to="/resources/">Resources</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
          {/* <ListLink to="/about-css-modules/">css modules</ListLink> */}
        </ul>
         <img src={Brain} alt="brain img" />
      </header>


      {children}


      <footer>
      <h3 style={{ backgroundColor: "#ff9470", color: "#006d77" }}>Footer</h3>
      </footer>
    </div>
  )
}





