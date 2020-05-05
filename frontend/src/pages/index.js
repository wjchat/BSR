import React,{useState} from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Main from "../components/Main.jsx"
import Background from '../components/Background.jsx'
import PageTransition from "../components/pageTransition.jsx"


const IndexPage = () => {
    const [trig, pullTrig] = useState(false) 
    return(
  <Layout>
    <SEO title="Home" />
    <Background />
    <Main pullTrig = {(bool)=>pullTrig(bool)} className = 'main' />
    <PageTransition trig = {trig} />
  </Layout>
)}

export default IndexPage
