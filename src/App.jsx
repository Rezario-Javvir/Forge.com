import './App.css'
import Header from './components/Header'
import Banner from './components/Banner'
import Main from './components/Main'
import Futa from './components/Footer'
import Content from './components/Content'
import Card from './components/Card'

function App() {

  return (
    <section className='min-h-screen'>
      <Header/>
      <Banner/>
      <Main/>
      <Content/>
      <Futa/>
    </section>
  )
}

export default App
