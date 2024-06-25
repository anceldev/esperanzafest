import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
      Home
      <Link to="/contacto" className="text-small-semibold ml-1 text-red-600">Ir a contacto</Link>
    </div>
  )
}

export default Home