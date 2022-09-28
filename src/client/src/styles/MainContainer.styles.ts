import styled from 'styled-components'

interface IAppContainer {
    dark: boolean
}

export const AppContainer = styled.div`
    max-width: 1440px;
    margin: auto;
    padding: 0;
    height: 100vh;
`
export const RootContainer = styled.div<IAppContainer>`
    background-color: ${(p: IAppContainer) => (p.dark ? '#3d3d3d' : '#ffffff')};
`
