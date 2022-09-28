import styled from 'styled-components'

interface IAppContainer {
    dark: boolean
}

export const WeatherContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 2px 2px;
    @media (max-width: 760px) {
        grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 375px) {
        grid-template-columns: 1fr;
    }
`
export const WeatherElement = styled.div<IAppContainer>`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding-block: 20px;
    color: ${(props) => (props.dark ? 'white' : 'black')};
`
