import * as React from "react"
import { Link } from "gatsby"
import * as Styles from "../scss/components/btn.module.scss"

interface props {
  url: string;
  text: string;
}

const Btn = (props: props) => {
  return (
    <div className={Styles.btn}>
      <Link to={props.url} className={Styles.btn__link}><span className={Styles.btn__text}>{props.text}</span></Link>
    </div>
  )
}

export default Btn;