import styled from 'styled-components';

export const StopWatch = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const TimerWrapper = styled.div`
  width: 500px;  
  margin-right: 200px;
`
export const TimerTitle = styled.h1`
    font-size: 70px;
`
export const TimerDisplay = styled.div`
  font-size: 150px;
  margin-bottom: 10px;
`;

export const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

export const Button = styled.button`
  font-size: 40px;
  margin: 5px;
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
`;
export const LapWrapper = styled.div`
  width: 400px;  
  font-size: 70px;
`
export const LapTitle = styled.h2`
  font-size: 60px;
`
export const LapContent = styled.ol`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-size: 50px;
  margin-left: 50px;
`
export const LapList = styled.li`
`
export const DeleteButton = styled.button`
  width: 20px;
  height: 20px;
  margin-left: 10px;
  border: none;
  border-radius: 100%;
  font-size: 10px;
  background-color: #f0f0f0;
`