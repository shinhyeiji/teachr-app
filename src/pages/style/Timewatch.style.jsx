import styled from 'styled-components';

export const Container = styled.div`
  width: 1100px;
  margin-top: 20px;
  text-align: center;
`;
export const NavDiv = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
export const Nav = styled.div`
  width: 200px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  border-radius: 10px;
  background-color: ${props => props.active ? '#F66' : '#F99'};
  color: ${props => props.active ? '#FFF' : '#000'};
  &:hover{
      background-color: #F66;
      color:#FFF;
      cursor: pointer;
  }
`
export const NavTitle = styled.h3`
  font-size: 30px;
  text-align: center;
`
export const Content = styled.div`
  width: 100%;
  margin: 20px;
`