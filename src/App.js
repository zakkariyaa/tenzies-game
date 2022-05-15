import { nanoid } from 'nanoid'
import Home from './components/Home'

const App = () => {
  const generateNewDice = () => {
    return ({ value: Math.ceil(Math.random() * 6), isHeld: false, id: nanoid() })
  }

  const allNewDice = () => {
    const randomElements = []
    for (let i = 1; i <= 10; i++) {
      randomElements.push(generateNewDice())
    }
    return randomElements
  }

  return (
    <Home
      allNewDice={allNewDice}
      generateNewDice={generateNewDice}
    />
  )
}

export default App