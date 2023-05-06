import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const App = () => {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/login')
  }, [])
  return (
    <div className="bg-primary h-screen text-accent">
      HomePage
      <button className='btn text-secondary mx-auto tracking-widest bg-primary-light hover:bg-primary-dark shadow-lg hover:shadow-xl active:shadow-lg'>Button</button>
    </div>
  )
}

export default App
