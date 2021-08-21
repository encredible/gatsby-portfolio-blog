import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  const header = (
    <div>
      <h1 className="main-heading">{title}</h1>
      <hr className="my-4" />
      <div className="flex justify-around">
        <Link className="header-link-home" to="/">
          Home
        </Link>
        <Link className="header-link-home" to="/about">
          About
        </Link>
        <Link className="header-link-home" to="/portfolio">
          Portfolio
        </Link>
        <Link className="header-link-home" to="/blog">
          Blog
        </Link>
      </div>
    </div>
  )

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      {/*<footer>*/}
      {/*  © {new Date().getFullYear()}, Built with*/}
      {/*  {` `}*/}
      {/*  <a href="https://www.gatsbyjs.com">Gatsby</a>*/}
      {/*</footer>*/}
    </div>
  )
}

export default Layout
