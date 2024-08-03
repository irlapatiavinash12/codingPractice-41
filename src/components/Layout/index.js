// Write your code here

import './index.css'

import Header from '../Header'
import Body from '../Body'
import Footer from '../Footer'

const Layout = () => {
  return (
    <div className="layout-out-bg">
      <div className="layout-content-container">
        <Header />
        <Body />
        <Footer />
      </div>
    </div>
  )
}

export default Layout
