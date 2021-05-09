import * as React from "react"
import * as Styles from "../scss/foundation/footer.module.scss"

const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <p>引用元：<a target="_blank" href="https://ja.wikipedia.org/wiki/%E5%B9%B3%E9%96%93%E5%AF%BA#%E4%BA%A4%E9%80%9A">Wikipedia</a></p>
      <p>WebSite：RenZentoYuzawa（lovandate1@gamail.com）</p>
    </footer>
  )
}

export default Footer;