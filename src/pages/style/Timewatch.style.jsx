import styled from 'styled-components';

export const Container = styled.div`
  width: 1238px;
  height: 810px;
  padding: 20px;
  font-family: 'Gamja Flower', 'Hi Melody', 'Jua', cursive;
`;
export const HeadWrapper = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    border-bottom: 5px solid #f0f0f0;
    justify-content: space-between;
    margin: 20px 0 0 0;
`
export const Title = styled.h1`
    margin: 20px 400px 20px 20px;
    color: gray;
`
export const NavDiv = styled.div`
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