// Write your code here

import './index.css'

import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body-content-container">
          {showLeftNavbar ? (
            <div className="left-nav-container">
              <h3 className="nav-head-styling">Left Navbar Menu</h3>
              <ul className="unordered-list-styling">
                <li className="list-item-color">Item 1</li>
                <li className="list-item-color">Item 2</li>
                <li className="list-item-color">Item 3</li>
                <li className="list-item-color">Item 4</li>
              </ul>
            </div>
          ) : null}

          {showContent ? (
            <div className="content-container">
              <h3 className="content-head-styling">Content</h3>
              <p>
                Lorem ipsum dolor sitamet,consectetur adipiscing elit,sed to
                elusmod tempor Incididunt ut labore et dolore magna aliqua. Ut
                enim ad minum veniam.
              </p>
            </div>
          ) : null}
          {showRightNavbar ? (
            <div className="right-nav-container">
              <h3 className="nav-head-styling">Right Navbar Menu</h3>
              <div className="small-container">
                <p>Ad 1</p>
              </div>
              <div className="small-container">
                <p>Ad 2</p>
              </div>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
