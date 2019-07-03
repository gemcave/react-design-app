import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import Card from "../components/Card"
import SEO from "../components/seo"
import Section from "../components/Section"
import Wave from "../components/Wave"
import Cell from "../components/Cell"
import styled from "styled-components"
import staticdata from "../../staticdata.json"

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94a4ba;
  text-align: center;
`
const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  padding: 0 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1rf);
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="Hero">
      <div className="HeroGroup">
        <h1>
          Learn to <br />
          design to code React apps
        </h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div> */}
        <Link to="/page-2/">Go to page 2</Link>
        <div className="Logos">
          <img
            alt="logo-sketch"
            src={require("../images/logo-sketch.png")}
            width="50"
          />
          <img
            alt="logo-figma"
            src={require("../images/logo-figma.png")}
            width="50"
          />
          <img
            alt="logo-studio"
            src={require("../images/logo-studio.png")}
            width="50"
          />
          <img
            alt="logo-framer"
            src={require("../images/logo-framer.png")}
            width="50"
          />
          <img
            alt="logo-react"
            src={require("../images/logo-react.png")}
            width="50"
          />
          <img
            alt="logo-swift"
            src={require("../images/logo-swift.png")}
            width="50"
          />
        </div>
        <Wave />
      </div>
    </div>
    <div className="Cards">
      <h2>11 courses, more coming</h2>
      <div className="CardGroup">
        <Card
          title="Design Systems"
          text="10 sections"
          image={require("../images/wallpaper.jpg")}
        />
        <Card
          title="React for Designers"
          text="12 sections"
          image={require("../images/wallpaper2.jpg")}
        />
        <Card
          title="Sound Design"
          text="5 sections"
          image={require("../images/wallpaper3.jpg")}
        />
        <Card
          title="ARKit 2"
          text="10 sections"
          image={require("../images/wallpaper4.jpg")}
        />
      </div>
    </div>
    <Section
      image={require("../images/wallpaper2.jpg")}
      logo={require("../images/logo-react.png")}
      title="React for Designers"
      text="Robin Williams would never stop making people laugh. However demanding life gets, never lose your humor. Never be feverish about success, everything falls into its place."
    />
    <SectionCaption>12 sections - 6 hours</SectionCaption>
    <SectionCellGroup>
      {staticdata.cells.map(({ title, image }) => (
        <Cell key={title} title={title} image={image} />
      ))}
    </SectionCellGroup>
  </Layout>
)

export default IndexPage
