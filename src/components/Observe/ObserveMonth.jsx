import * as S from './style/ObserveMonth.style.jsx';
import { useState, useEffect } from 'react';

const ObserveMonth = ({ classInfo, currentMonth }) => {
    function getLastDayOfMonth(year, month) {
        return new Date(year, month + 1, 0).getDate();
    }

    const [observeIndex, setObserveIndex] = useState(1);
    const [observeName, setObserveName] = useState(classInfo.우리반명단[0]);
    const [indivisual, setIndivisual] = useState({
        id: observeIndex,
        name: observeName,
        month: new Date().getMonth() + 1,
        date: new Date().getDate(),
        division: '신체운동',
        content: '',
    });
    const [observe, setObserve] = useState(() => {
        const savedObserveData = JSON.parse(localStorage.getItem('observeData')) || [];
        return savedObserveData;
    });

    useEffect(() => {
        localStorage.setItem('observeData', JSON.stringify(observe));
    }, [observe]);

    const handleDateChange = (e) => {
        const { name, value } = e.target;
        const lastDayOfMonth = getLastDayOfMonth(new Date().getFullYear(), new Date().getMonth());
        const parsedValue = parseInt(value, 10);

        if (!isNaN(parsedValue) && parsedValue >= 1 && parsedValue <= lastDayOfMonth) {
            setIndivisual((prevIndivisual) => ({
                ...prevIndivisual,
                [name]: parsedValue,
            }));
        }
    };

    const handleContentChange = (e) => {
        const { name, value } = e.target;

        setIndivisual((prevIndivisual) => ({
            ...prevIndivisual,
            [name]: value,
        }));
    };

    const handleNameChange = (e) => {
        const selectedName = e.target.value;
        const selectedIndex = classInfo.우리반명단.indexOf(selectedName) + 1;

        if (selectedIndex) {
            setIndivisual((prevIndivisual) => ({
                ...prevIndivisual,
                name: selectedName,
            }));
            setObserveName(selectedName);
            setObserveIndex(selectedIndex);
        }
    };

    const handleDivisionChange = (e) => {
        const selectedDivision = e.target.value;
        setIndivisual((prevIndivisual) => ({
            ...prevIndivisual,
            division: selectedDivision,
        }));
    };

    const handleAddOrUpdate = (e) => {
        e.preventDefault();
    
        // Find the index of the item with the same id and name
        const existingIndex = observe.findIndex(
            (item) => item.id === indivisual.id && item.name === indivisual.name
        );
    
        // Create a new observe data
        const observeData = {
            id: indivisual.id,
            name: indivisual.name,
            month: indivisual.month,
            date: indivisual.date,
            division: indivisual.division,
            content: indivisual.content,
        };
    
        if (existingIndex !== -1) {
            // If item with the same id and name exists, update it
            const updatedObserve = [...observe];
            updatedObserve[existingIndex] = observeData;
            setObserve(updatedObserve);
            console.log("Updated:", observeData);
        } else {
            // If not, add a new item to the array
            const updatedObserve = [...observe, observeData];
            setObserve(updatedObserve);
            console.log("Added:", observeData);
        }
    
        // Reset the form
        setIndivisual({
            id: observeIndex,
            name: observeName,
            month: new Date().getMonth() + 1,
            date: new Date().getDate(),
            division: '신체운동',
            content: '',
        });
    };
    const saveRegisterObserve = (e) => {
        e.preventDefault();
        console.log(observe);

    };

    const clickResetObserve = (index) => {
        const updatedObserve = [...observe];
        updatedObserve.splice(index, 1);

        setObserve(updatedObserve);
        localStorage.setItem('observeData', JSON.stringify(updatedObserve));
    };



    return(
        <S.ObserveForm onSubmit={saveRegisterObserve}>
            <S.FormTitle>{classInfo.교실명} {currentMonth}월 명단({classInfo.우리반명단.length}명)</S.FormTitle>
            <S.FormTable1>
                <S.FormThead>
                    <S.FormTheadTr>
                        <S.FormTheadTd>번호</S.FormTheadTd>
                        <S.FormTheadTd>유아명</S.FormTheadTd>
                        <S.FormTheadTd>날짜</S.FormTheadTd>
                        <S.FormTheadTd>발달영역</S.FormTheadTd>
                        <S.FormTheadTd>내용</S.FormTheadTd>
                        <S.FormTheadTd></S.FormTheadTd>
                        <S.FormTheadTd></S.FormTheadTd>
                    </S.FormTheadTr>
                </S.FormThead>
                <S.FormTbody>
                    <S.FormTbodyTr>
                        <S.FormTbodyTd
                            name="index" 
                            id="index" 
                            value={indivisual.id}
                        >{observeIndex}</S.FormTbodyTd>
                        <S.FormTbodyTd>
                            <S.SelectName
                                name="name" 
                                id="name" 
                                onChange={handleNameChange} 
                                value={indivisual.name}
                            >
                                {classInfo.우리반명단.map((item, index) => (
                                    <option key={index + 1} value={item}>{item}</option>
                                ))}
                            </S.SelectName>
                        </S.FormTbodyTd>
                        <S.FormTbodyTd>
                            <S.DateInput
                                type="number"
                                name="date"
                                placeholder={new Date().getDate()}
                                maxLength="2"
                                onChange={handleDateChange}
                                value={indivisual.date}
                            />일
                        </S.FormTbodyTd>
                        <S.FormTbodyTd>
                            <S.SelectDivision 
                                name="division" 
                                id="division"
                                onChange={handleDivisionChange}
                                value={indivisual.division}
                            >
                                <S.OptionDivision value="신체운동">신체운동</S.OptionDivision>
                                <S.OptionDivision value="의사소통">의사소통</S.OptionDivision>
                                <S.OptionDivision value="사회관계">사회관계</S.OptionDivision>
                                <S.OptionDivision value="예술경험">예술경험</S.OptionDivision>
                                <S.OptionDivision value="자연탐구">자연탐구</S.OptionDivision>
                            </S.SelectDivision>
                        </S.FormTbodyTd>
                        <S.FormTbodyTd>
                            <S.ContentInput 
                                type="text" 
                                name="content"
                                onChange={handleContentChange}
                                value={indivisual.content}
                            />
                        </S.FormTbodyTd>
                        <S.FormTbodyTd>
                            <S.SubmitButton onClick={handleAddOrUpdate}>추가</S.SubmitButton>
                        </S.FormTbodyTd>
                    </S.FormTbodyTr>
                </S.FormTbody>
            </S.FormTable1>
            <S.FormTable2>
                <S.FormThead>
                    <S.FormTheadTr>
                        <S.FormTheadTd>번호</S.FormTheadTd>
                        <S.FormTbodyTdName>유아명</S.FormTbodyTdName>
                        <S.FormTbodyTdDate>날짜</S.FormTbodyTdDate>
                        <S.FormTbodyTdDivision>발달영역</S.FormTbodyTdDivision>
                        <S.FormTbodyTdContent>내용</S.FormTbodyTdContent>
                        <S.FormTheadTd>
                            <S.SaveButton type="submit">저장</S.SaveButton>
                        </S.FormTheadTd>
                        <S.FormTheadTd></S.FormTheadTd>
                    </S.FormTheadTr>
                </S.FormThead>
                <S.FormTbody>
                {classInfo.우리반명단.map((itemName, index) => {
                    const observeData = observe.find(item => item.name === itemName);
                    // observe 배열에서 현재 아이템의 이름과 일치하는 데이터를 찾음

                    if (observeData) {
                        return (
                            <S.FormTbodyTr key={index}>
                                <S.FormTbodyTd>{index + 1}</S.FormTbodyTd>
                                <S.FormTbodyTdName>{itemName}</S.FormTbodyTdName>
                                <S.FormTbodyTdDate>{observeData.date}일</S.FormTbodyTdDate>
                                <S.FormTbodyTdDivision>{observeData.division}</S.FormTbodyTdDivision>
                                <S.FormTbodyTdContent>{observeData.content}</S.FormTbodyTdContent>
                                <S.FormTbodyTd>
                                    <S.DeleteButton onClick={() => clickResetObserve(index)}>삭제</S.DeleteButton>
                                </S.FormTbodyTd>
                            </S.FormTbodyTr>
                        );
                    }

                    return null; // 데이터가 없으면 렌더링하지 않음
                })}
                </S.FormTbody>
            </S.FormTable2>
        </S.ObserveForm>
    )
}
export default ObserveMonth;