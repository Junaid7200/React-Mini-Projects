import styled from 'styled-components'
import Content from './components/Content'
import DaySection from './components/Section'

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #CCDDEE;
`

const Title = styled.h1`
    display: flex;
    justify-content: center;
    text-align: center;
    font-family: sans-serif;
    color: #b19cd9;
`

export default function App() {
  return (
      <Body>
        <Content />
        <Title>Progress Tracker</Title>
        <div>
          <DaySection text="M" progressvalue={40} day={1}/>
          <DaySection text="T" progressvalue={40} day={2}/>
          <DaySection text="W" progressvalue={40} day={3}/>
          <DaySection text="T" progressvalue={80} day={4}/>
          <DaySection text="F" progressvalue={80} day={5}/>
          <DaySection text="S" progressvalue={80} day={6}/>
          <DaySection text="S" progressvalue={100} day={7}/>
        </div>
      </Body>
  )
}