import * as React from "react"
import * as Styles from "../scss/foundation/header.module.scss"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header className={Styles.header}>
      <Link to="/" className={Styles.header__logo}>
        <StaticImage
          src="../images/common/logo_white.png"
          style={{
            height: `100%`
          }}
          alt="ロゴです" />
      </Link>
      <nav className={Styles.header__nav}>
        <ul className={Styles.header__list}>
          <li className={Styles.header__item}>
            <Link className={Styles.header__link} to="/">Top</Link>
          </li>
          <li className={Styles.header__item}>
            <Link className={Styles.header__link} to="">About</Link>
          </li>
          <li className={Styles.header__item}>
            <Link className={Styles.header__link} to="/gallery">Gallery</Link>
          </li>
          <li className={Styles.header__item}>
            <Link className={Styles.header__link} to="/article">Article</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;