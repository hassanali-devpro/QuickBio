import Hblog from "./Hblog"
import Header from "../common/header/Header"


const products = () => {
  return (
    <>
      <Header bgColor="bg-[#226F6B]" heroText="Quick Products for Life"/>
      <Hblog isShow={false} />
    </>
  )
}

export default products
