// Write your code here

import {Component} from 'react'
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => {
  return (
    <ConfigurationContext.Consumer>
      {value => {
        const {
          showContent,
          showLeftNavbar,
          showRightNavbar,
          onToggleShowContent,
          onToggleShowLeftNavbar,
          onToggleShowRightNavbar,
        } = value
        console.log(showContent, showLeftNavbar, showRightNavbar)

        const onChangeContent = () => {
          console.log('content trigger')
          onToggleShowContent(showContent)
        }

        const onChangeLeftNavbar = () => {
          console.log('content trigger')
          onToggleShowLeftNavbar()
        }

        const onChangeRightNavbar = () => {
          console.log('content trigger')
          onToggleShowRightNavbar()
        }

        return (
          <nav className="nav-Container">
            <div className="nav-content-container">
              <h1>Layout</h1>
              <label className="label-color">
                <input
                  type="checkbox"
                  onChange={onChangeContent}
                  checked={showContent}
                />
                Content
              </label>
              <label className="label-color">
                <input
                  type="checkbox"
                  onChange={onChangeLeftNavbar}
                  checked={showLeftNavbar}
                />
                Left Navbar
              </label>
              <label className="label-color">
                <input
                  type="checkbox"
                  onChange={onChangeRightNavbar}
                  checked={showRightNavbar}
                />
                Right Navbar
              </label>
            </div>
          </nav>
        )
      }}
    </ConfigurationContext.Consumer>
  )
}
export default ConfigurationController
