import React from "react"
import SEO from "../components/seo"
import StandardPage from "../components/layouts/StandardPage"

const NotFoundPage = () => (
  <StandardPage>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </StandardPage>
)

export default NotFoundPage
