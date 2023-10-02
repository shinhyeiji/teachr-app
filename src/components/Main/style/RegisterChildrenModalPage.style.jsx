import styled from 'styled-components';

export const RegisterChildrenModalPage = styled.form`
    height: 820px;
    display: flex;
    flex-direction: column;
    background-color: #f0f0f0;
    border-radius: 10px;
`;

export const ModalHead = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ModalTitle = styled.h1`
    width: 100%;
    text-align: center;
`;

export const ButtonDiv = styled.div`
    width: 100%;
    margin-top: 750px;
    text-align: center;
    position: absolute;
`;

export const ModalSave = styled.button`
    width: 60px;
    height: 40px;
    margin: 5px;
    border: none;
    border-radius: 5px;
    background-color: #fff;
`;

export const ModalOff = styled.button`
    width: 60px;
    height: 40px;
    border: none;
    background-color: #fff;
    border-radius: 5px;
`;

export const RegisterInfo1 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const Register = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 50px;
`;

export const RegisterTitle = styled.h1`
    width: 100%;
    margin-bottom: 20px;
    color: gray;
`;

export const RegisterTable = styled.table``;

export const TableLine = styled.tr`
    width: 100%;
    height: 45px;
    font-size: 30px;
    font-weight: 700;
`;

export const TableLineBox = styled.td`
    text-align: left;
`;

export const TableLineInput = styled.input`
    width: 300px;
    height: 25px;
    border-radius: 5px;
    margin: 10px;
    padding: 5px 10px;
    font-size: 18px;
`;

export const TableLineButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 27px;
    height: 27px;
    border: none;
    background-color: #fff;
    border-radius: 100%;
    font-size: 10px;
`;

export const TableLine2 = styled.tr`
    display: flex;
    align-items: center; /* 줄 내에서 세로 중앙 정렬을 위해 추가 */
    font-size: 20px;
`;

export const TableLineInfoBox1 = styled.td`
    width: 90px;
    font-weight: 700;
    font-size: 25px;
    text-align: left;
    padding-right: 20px;
`;

export const TableLineInfoBox2 = styled.td`
    flex: 1;
    text-align: left;
    display: flex; /* 내부 컨텐츠를 가로로 정렬하기 위해 추가 */
    align-items: center; /* 세로 중앙 정렬을 위해 추가 */
`;

export const TableLineInfo = styled.p`
    font-size: 22px;
`;

export const Confirm = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 20px;
`;

export const ConfirmTitle = styled.h1`
    width: 100%;
    margin-bottom: 10px;
    color: gray;
`;

export const ConfirmTable = styled.table``;

export const ConfirmTableHead = styled.thead``;

export const ConfirmTableBody = styled.tbody``;

export const RegisterInfo2 = styled.div`
    display: flex;
    flex-direction: column;
`;
export const Table = styled.table`
    width: 100%;
`;

export const Children = styled.tbody`
    display: flex;
    padding: 0 10px;
    flex-wrap: wrap;
    gap: 10px;
`;

export const ChildBox = styled.tr`
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Child = styled.td`
    height: 25px;
    padding: 5px 5px 5px 15px;
    border-radius: 10px 0 0 10px;
    font-size: 20px;
    background-color: #fff;
`;

export const ChildDeleteWrapper = styled.td`
    height: 25px;
    padding: 5px 5px 5px 15px;
    border-radius: 10px 0 0 10px;
    font-size: 20px;
    background-color: #fff;
`;

export const ChildDelete = styled.button`
    width: 25px;
    height: 25px;
    padding: 5px;
    border-radius: 0 10px 10px 0;
    font-size: 20px;
    background-color: #fff;
`;