import { useEffect, useState } from 'react'
import Confetti from 'react-confetti'
import Die from './Die'
import RollDice from './RollDice'
import styled from 'styled-components'

const Home = ({ allNewDice, generateNewDice }) => {
    const [allDices, setAllDices] = useState(allNewDice())
    const [tenzies, setTenzies] = useState(false)

    useEffect(() => {
        const won = allDices.every(dice => dice.isHeld === true && dice.value === allDices[0].value)
        if (won) {
            setTenzies(true)
            console.log('You\'ve won the game!')
        }
    }, [allDices])

    const rollDice = () => {
        if (!tenzies) {
            setAllDices(prevDices => prevDices.map(
                dice => dice.isHeld ? dice : generateNewDice()
            ))
        } else {
            setTenzies(false)
            setAllDices(allNewDice())
        }
    }

    const holdDice = (id) => {
        setAllDices(dices => dices.map(dice => dice.id === id ? { ...dice, isHeld: !dice.isHeld } : dice))
    }

    const diceComponents = allDices.map(dice => <Die
        key={dice.id}
        id={dice.id}
        value={dice.value}
        isHeld={dice.isHeld}
        hold={holdDice}
    />)

    return (
        <Container>
            {tenzies && <Confetti />}
            <h1 className="title">Tenzies</h1>
            <p className="instructions">
                Roll until all dice are the same. Click each die to
                freeze it at its current value between rolls.
            </p>
            <Dices>
                {diceComponents}
            </Dices>
            <RollDice rollDice={rollDice} tenzies={tenzies} />
        </Container>
    )
}

const Container = styled.main`
  background-color: #F5F5F5;
  width: 50vw;
  height: 60vh;
  border-radius: 2rem;
  display: grid;
  place-items: center;
  h1 {
    font-size: 2rem;
    margin: 0;
  }
  p {
    font-weight: 400;
    margin-top: 0;
    text-align: center;
  }
`

const Dices = styled.section`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;
  place-items: center;
`

export default Home