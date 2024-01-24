import React from "react"
import Index from "./Index"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Matteo Guadrini - Devops && Rust/Python Developer"
      description="Curriculum Vitae Matteo Guadrini"
    />
    <Index />
  </Layout>
)

export default IndexPage
