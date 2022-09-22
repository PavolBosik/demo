import styled from "styled-components";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const SwitchThemeButton = styled.div`
  box-shadow: inset 0 1px 0 0 #ffffff;
  background: linear-gradient(to bottom, #f9f9f9 5%, #e9e9e9 100%);
  border-radius: 6px;
  border: 1px solid #dcdcdc;
  display: inline-block;
  cursor: pointer;
  color: #666666;
  font-size: 15px;
  font-weight: bold;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0 1px 0 #ffffff;
  &:hover {
    background: linear-gradient(to bottom, #e9e9e9 5%, #f9f9f9 100%);
  }
  &:active {
    position: relative;
    top: 1px;
  }
`