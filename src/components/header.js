import React, { Component } from "react"
import { Link } from "gatsby"
import StripeCheckout from "react-stripe-checkout"
import PropTypes from "prop-types"
import "./Header.css"

class Header extends Component {
  state = {
    hasScrolled: false,
  }

  handleScroll = event => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }
  handlePurchase = token => {
    const amount = 2000
    const description = "My original producs"
    const bodyObject = {
      tokenId: token.id,
      email: token.email,
      name: token.name,
      description,
      amount,
    }

    fetch("http://localhost:9000/stripe-charge", {
      method: "POST",
      body: JSON.stringify(bodyObject),
    })
  }
  render() {
    return (
      <div
        className={this.state.hasScrolled ? "Header HeaderScrolled" : "Header"}
      >
        <div className="HeaderGroup">
          <Link to="/">
            <img src={require("../images/logo-designcode.svg")} width="30" />
          </Link>
          <Link to="/courses">Courses</Link>
          <Link to="/downloads">Downloads</Link>
          <Link to="/workshops">Workshops</Link>
          <StripeCheckout
            amount={2000}
            image={"https://i.imgur.com/srGgnJX.png"}
            token={this.handlePurchase}
            stripeKey={"pk_test_dL34r3iUkXmcNsuPIrbVKruk00rDIerpnA"}
          >
            <button>Buy</button>
          </StripeCheckout>
        </div>
      </div>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
