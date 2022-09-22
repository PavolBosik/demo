import styled from 'styled-components'

interface IAppContainer {
    dark: boolean
}

export const CounterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    &:not(:last-child) {
        margin-bottom: 16px;
    }
`
export const CounterButton = styled.button<IAppContainer>`
    appearance: none;
    font-size: 32px;
    padding-left: 12px;
    padding-right: 12px;
    outline: none;
    border: 2px solid transparent;
    color: ${(props) => (props.dark ? 'rgb(255,255,255)' : 'rgb(238 22 31)')};
    padding-bottom: 4px;
    cursor: pointer;
    background-color: ${(p: IAppContainer) =>
        p.dark ? 'rgba(238,22,31,0.79)' : 'rgba(238, 22, 31, 0.1)'};
    border-radius: 2px;
    transition: all 0.15s;
    margin: 15px;
    &:hover,
    :focus {
        border: 2px solid rgba(238, 22, 31, 0.4);
    }
`

export const CounterInputTextBox = styled.input`
    font-size: 32px;
    padding: 2px;
    width: 64px;
    text-align: center;
    margin-right: 4px;
`

export const CounterText = styled.span<IAppContainer>`
    font-size: 32px;
    padding: 2px;
    text-align: center;
    font-weight: 400;
    color: ${(props) => (props.dark ? 'rgb(255,255,255)' : 'rgb(238 22 31)')};
`
