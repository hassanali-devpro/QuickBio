import Header from "../common/header/Header"
import Hblog from "../Products/Hblog"
import FAQ from "./FAQ"

const Home = () => {
  return (
    <>
      <Header bgColor="bg-[#99BCC2]" heroText="We are your health partners"/>
      <Hblog isShow={true} />
      <FAQ />
    </>
  )
}

export default Home
