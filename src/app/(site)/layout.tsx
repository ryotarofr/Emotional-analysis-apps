import "./styles.css"
import NavBar from "../components/Navbar/site-navbar"
import { DataFetch } from "../components/DataFetch"

const SiteLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {

  return (
    <div>
      <NavBar />
      <DataFetch />
      {children}
    </div>
  )
}

export default SiteLayout