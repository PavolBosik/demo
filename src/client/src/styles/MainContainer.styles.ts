import styled from "styled-components";

interface IAppContainer {
    dark: boolean
}

export const AppContainer = styled.div<IAppContainer>`
  max-width: 1400px;
  margin: auto;
  padding: 0;
  background-color: ${(p: IAppContainer) => p.dark?'#3d3d3d':'#ffffff'};
`