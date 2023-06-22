import { Outlet } from "react-router-dom"
import ErrorPage from "./ErrorPage/ErrorPage"
import Header from "./SharePage.jsx/Header"
import Footer from "./SharePage.jsx/Footer"

function App() {


  return (
    <>
    <Header></Header>
    <Outlet></Outlet>
    <Footer></Footer>
    </>
  )
}

export default App
