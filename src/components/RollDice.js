import styled from 'styled-components'

const RollDice = ({ rollDice, tenzies }) => {
  return <Button onClick={rollDice}>{tenzies ? 'New Game' : 'Roll'}</Button>
}

const Button = styled.button`
  background-color: #5035FF;
  color: white;
  font-size: 1.2rem;
  font-weight: 500;
  padding: 1rem;
  width: 9rem;
  border-radius: 0.7rem;
  box-shadow: 0px 3.2px 7.68px rgba(0, 0, 0, 0.18);

  @media (max-width: 850px) {
    width: 7rem;
    padding: 1;
    font-size: 1.2rem;
  }

  @media (max-width: 650px) {
    width: 5rem;
    padding: 0.7;
    font-size: 0.9rem;
  }

  @media (max-width: 550px) {
    width: 4rem;
    padding: 0.5rem 0.2rem;
    font-size: 0.7rem;
  }

`

export default RollDice
