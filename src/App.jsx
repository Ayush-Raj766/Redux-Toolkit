import './App.css'
import"bootstrap/dist/css/bootstrap.min.css"
import Header from './component/Header'
import DisplayCounter from './component/DisplayCounter'
import Container from './component/Container'
import Control from './component/Control'
import { useSelector } from 'react-redux'
import Privecy from './component/Privecy'

function App() {
  const privacy = useSelector(state => state.privacy);

  return (
    <>
      <div className="px-4 py-5 my-5 text-center">
        <Container>
    <Header></Header>
    <div className="col-lg-6 mx-auto">
      {privacy ? <Privecy/>:<DisplayCounter/>}
      <Control></Control>
    </div>
    </Container>
  </div>
    </>
  )
}

export default App
