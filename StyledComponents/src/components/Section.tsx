import styled from "styled-components"

const Section = styled.div`
    background-color: #ffffff;
    border: solid 3px grey;
    margin: 4px;
    width: 300px;
    height: 50px;
    border-radius: 10px;
    display: flex;
    font-size: 40px;
    color: #ff6961;
`

const WeekdayTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    border-right: solid 3px lightgrey;
`

const WeekendTitle = styled(WeekdayTitle)`
    color: blue;
`

const ProgressBar = styled.div<{ progressvalue?: number }>`
    height: 50px;
    border-radius: 0 8px 8px 0;
    background-color: red;
    background-color: ${({progressvalue = 0}) => 
    progressvalue > 80 ? "green" : 
    progressvalue > 50 ? "blue" : 
    "red"
};
    width: ${props => props.progressvalue ? `${props.progressvalue}%` : '0%'};
    box-sizing: border-box;
`


const TodayProgressBar = styled(ProgressBar)`
border: solid 5px orange;
`


export default function DaySection({text, progressvalue, day}: {text: string, progressvalue?: number, day: number}) {
    let date = new Date();
    let currentDay = date.getDay();
    const isToday = day === currentDay;
    
    return (
        <Section>
            {text === "S" ? <WeekendTitle>{text}</WeekendTitle> : <WeekdayTitle>{text}</WeekdayTitle>}
            {isToday ? <TodayProgressBar progressvalue={progressvalue}></TodayProgressBar> : <ProgressBar progressvalue={progressvalue}></ProgressBar>}
        </Section>
    )
}