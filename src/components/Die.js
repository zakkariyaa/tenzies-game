import styled from 'styled-components'

const Die = ({ id, value, isHeld, hold }) => {
  return (
    <Container
      isHeld={isHeld}
      className='die'
      onClick={() => hold(id)}
    >{value}
    </Container>
  )
}

const Container = styled.div`
  background-color: ${({ isHeld }) => isHeld ? '#59E391' : 'white'};
  font-weight: bold;
  font-size: 1.4rem;
  padding: 2rem;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.6);
  border: 1px solid gainsboro;
  border-radius: 0.7rem;
  cursor: pointer;
`

export default Die