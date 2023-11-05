import './App.css'
import '../src/css/base.css'
import { Route, Router} from 'react-router-dom'
import Header from './header/Header'
import Category from './category/Category'
import Container from './container/container'

function App() {
  return (
    <div className='app'>
      <Header/>
      <Category/>
      <Container/>
    </div>
  )
}

export default App
