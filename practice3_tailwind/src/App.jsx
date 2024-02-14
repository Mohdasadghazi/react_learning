
import './App.css'
import Card from './component/cardui'

function App() {

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl' > Test Tailwind</h1>
      <Card username="Asad" btnclick="visit me"/>
      <Card username="khali" />
    </>
  )
}

export default App
