import React from "react"
import styled from "styled-components"
import GlobalStyles from "../styles/GlobalStyles"
import Footer from "./Footer"

const StandardPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const ContentWrapper = styled.main`
  flex: 1 0 auto;
  padding: 20px 40px;
`

const StandardPage = ({ children }) => {
  return (
    <StandardPageWrapper>
      <GlobalStyles />
      <ContentWrapper>{children}</ContentWrapper>
      <Footer />
    </StandardPageWrapper>
  )
}

export default StandardPage
