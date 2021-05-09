import * as React from "react"
import Header from "../foundation/header"
import Footer from "../foundation/footer"

interface props {
  children: React.ReactNode;
}

const Layout = (props: props) => {
  return (
    <>
      <Header />
      <main>
        {props.children}
      </main>
      <Footer/>
    </>
  )

}

export default Layout;