import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 1440px;
    height: 810px;
    padding: 20px;
`
export const AppContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
`
export const NavDiv = styled.div`
    width: 202px;
    height: 100%;
    align-self: center;
    justify-self: center;
`
export const Nav = styled.div`
    width: 200px;
    height: 100px;
    border: 1px solid #fff;
    border-radius: 10px;
    background-color: #f0f0f0;
    color: #000;
    &:hover{
        background-color: #999fff;
        color: #fff;
        cursor: pointer;
    }
`;


export const StyledLink = styled(Link)`
    width: 162px;
    height: 100px;
    background-color: #f0f0f0;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    margin: 20px 0;
    text-decoration: none;
    color: #000;
    &:hover{
        color: #fff;
    }
`;
export const AppTitle = styled.h2`
    width: 100%;
    height: 70px;
    border: 10px solid white;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 40px;
    padding: 10px;
`
export const NavTitle = styled.h2`
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Content = styled.div`
    width: 1200px;
    height: 100%;
    display: flex;
    align-items: flex-start;
    margin: 10px 20px 0 40px;
    padding: 10px;
`
export const MainContent = styled.div`

`
export const MainWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`