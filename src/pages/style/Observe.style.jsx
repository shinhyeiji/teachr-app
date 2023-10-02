import styled from 'styled-components';

export const Container = styled.div`
    width: 1218px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-left: 80px;
`
export const HeadWrapper = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    border-bottom: 5px solid #f0f0f0;
    justify-content: space-between;
    margin: 20px 0 0 0;
`
export const ButtonTitle = styled.h1`
    margin: 20px;
    color: gray;
`
export const ButtonWrapper = styled.div`
    margin: 20px;
    text-align: right;
`
export const SelectButton = styled.button`
    font-family: 'Gamja Flower', 'Hi Melody', 'Jua', cursive;
    width: 200px;
    height: 50px;
    border: none;
    margin: 0 20px;
    font-size: 25px;
    background-color: ${props => props.active ? '#FFF' : '#f0f0f0'};
    color: ${props => props.active ? '#FFF' : '#000'};
    &:hover{
        background-color: #a2a2a2;
        color:#FFF;
        cursor: pointer;
    }
`
export const MonthButton = styled.select`
    font-family: 'Gamja Flower', 'Hi Melody', 'Jua', cursive;    
    width: 200px;
    height: 50px;
    text-align: center;
    font-size: 25px;
    margin: 0 20px;
`
export const MonthOption = styled.option`
`
export const DevelopArray = styled.p`
    font-size: 20px;
    display: flex;
    justify-content: flex-end;
`
export const Context = styled.div`
    display: flex;
    justify-content: center;
`
export const Semester = styled.div`
`
export const ContextTitle = styled.h2`
    margin-bottom: 40px;
`
export const SemesterTable = styled.table`
`
export const SemesterThead = styled.thead`
    height: 50px;
    font-size: 25px;
`
export const SemesterTheadTr = styled.tr`
`
export const SemesterTheadTd = styled.td`
`
export const SemesterTbody = styled.tbody`
    height: 50px;
    font-size: 25px;
`
export const SemesterTbodyTr = styled.tr`
`
export const SemesterTbodyTd = styled.td`
`
export const Td = styled.td`
    padding: 0 20px 0 10px;
`
export const SemesterInput = styled.input`
    width: 160px;
    height: 30px;
`

export const ObserveForm = styled.form`
`;

export const FormTitle = styled.h2`
`;

export const FormTable1 = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    background-color: #f0f0f0;
`;
export const FormTable2 = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    border: 1px solid #f0f0f0;
`;

export const FormThead = styled.thead`
    height: 50px;
    font-size: 25px;
`;

export const FormTheadTr = styled.tr`
    font-weight: 700;
`;
    
export const FormTheadTd = styled.td`
    padding: 0 5px;
`;

export const FormTbody = styled.tbody`
    height: 50px;
    font-size: 25px;
`;

export const FormTbodyTr = styled.tr`
`;

export const FormTbodyTd = styled.td`
    font-size: 25px;
`;

export const FormTbodyTdName = styled.td`
    font-family: 'Gamja Flower', 'Hi Melody', 'Jua', cursive;
    width: 140px;
    height: 30px;
    border: none;
    text-align: center;
    font-size: 25px;
`;

export const FormTbodyTdDate = styled.td`
    width: 80px;
    height: 30px;
    font-size: 25px;
    text-align: center;
    margin-right: 3px;
`;

export const FormTbodyTdDivision = styled.td`
    width: 200px;
    height: 30px;
    border: none;
    text-align: center;
    font-size: 25px;
`;

export const FormTbodyTdContent = styled.td`
    font-family: 'Gamja Flower', 'Hi Melody', 'Jua', cursive;
    width: 600px;
    height: 30px;
    font-size: 25px;
`;

export const SelectName = styled.select`
    font-family: 'Gamja Flower', 'Hi Melody', 'Jua', cursive;
    width: 120px;
    height: 30px;
    border: none;
    text-align: center;
    font-size: 25px;
`;

export const SelectDivision = styled.select`
    font-family: 'Gamja Flower', 'Hi Melody', 'Jua', cursive;
    width: 150px;
    height: 30px;
    border: none;
    text-align: center;
    font-size: 25px;
`;

export const OptionDivision = styled.option`
`;

export const DateInput = styled.input`
    font-family: 'Gamja Flower', 'Hi Melody', 'Jua', cursive;
    width: 50px;
    height: 30px;
    font-size: 25px;
    text-align: center;
    margin-right: 3px;
`;

export const ContentInput = styled.input`
    font-family: 'Gamja Flower', 'Hi Melody', 'Jua', cursive;
    width: 600px;
    height: 30px;
    font-size: 25px;
`;

export const SubmitButton = styled.button`
    font-family: 'Gamja Flower', 'Hi Melody', 'Jua', cursive;
    width: 90px;
    height: 35px;
    border: none;
    background-color: #f0f0f0;
    font-size: 25px;
`;

export const DeleteButton = styled.button`
    font-family: 'Gamja Flower', 'Hi Melody', 'Jua', cursive;
    width: 90px;
    height: 35px;
    border: none;
    background-color: #f0f0f0;
    font-size: 25px;
`;
