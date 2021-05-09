import * as React from "react"
import * as Styles from "../scss/components/lowerMv.module.scss"

interface props {
  title: string;
  children?: any;
}

const LowerMv = (props: props) => {

  return (
    <section className={Styles.mv}>
      <h1 className={Styles.mv__title}>{props.title}</h1>
      {
        (props.children) &&
          (<figure className={Styles.mv__cover}>
            {props.children}
          </figure>)
      }
    </section>
  )
}

export default LowerMv;