import { useState } from 'react'
import './index.css'
import NavBar from './NavBar';
import Content from './Content'
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main style={{"marginTop":"5em", "marginBottom":"2em"}}>
        <Content />
      </main>
      <footer>
        <Footer />
      </footer>
    </>

  )
}

export default App
