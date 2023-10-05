import * as S from './style/ObserveMonth.style.jsx';
import { useState, useEffect } from 'react';

const ObserveMonth = ({ classInfo, currentMonth, observe, setObserve, formData = { observe: [] }, setFormData }) => {
    function getLastDayOfMonth(year, month) {
        return new Date(year, month + 1, 0).getDate();
    }

    const [observeIndex, setObserveIndex] = useState('');
    const [observeName, setObserveName] = useState('');
    const [observeDate, setObserveDate] = useState('');
    const [observeDivision, setObserveDivision] = useState('');
    const [observeContent, setObserveContent] = useState('');
    const [indivisual, setIndivisual] = useState({
        id: observeIndex,
        name: observeName,
        date: observeDate,
        division: observeDivision,
        content: observeContent,
    });

    useEffect(() => {
        const savedData = localStorage.getItem('observeData');
        if (savedData) {
            try {
                const parsedData = JSON.parse(savedData);
                // 저장된 데이터를 기반으로 observe 상태 업데이트
                setObserve(parsedData.observe || []);
                // 저장된 데이터를 기반으로 formData 상태 업데이트
                setFormData({
                    ...formData,
                    observe: parsedData.observe || []
                });
            } catch (error) {
                console.error("Error parsing observeData from localStorage:", error);
                // 파싱 에러 시 초기값으로 빈 배열 설정
                setObserve([]);
                setFormData({
                    ...formData,
                    observe: []
                });
            }
        }
        console.log(formData.observe);
    }, []); 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setIndivisual({
            ...indivisual,
            [name]: value,
        })
    }

    const updateDisplayedObserve = () => {
        const updatedObserve = [...observe];
        const index = updatedObserve.findIndex(item => item.id === indivisual.id && item.name === indivisual.name);
        const updatedItem = observe.push({
            id: indivisual.id,
            name: indivisual.name,
            monthsData: {
                ...updatedObserve[index]?.monthsData, // 안전한 옵셔널 체이닝 연산자 사용
                [currentMonth]: {
                    date: indivisual.date,
                    division: indivisual.division,
                    content: indivisual.content
                }
            }
        })
        updatedObserve[index] = updatedItem;
        setObserve(updatedObserve);
    }
    const pushField = (field, value) => {
        updateDisplayedObserve(field, value);
        console.log(observe);
    }
    const saveRegisterObserve = (e) => {
        e.preventDefault();
            setFormData({
                ...formData,
                observe: observe
            })
            localStorage.setItem('formData', JSON.stringify(formData));    
    }
    const clickResetObserve = (indivisual) => {
        const updatedObserve = [...observe];
        const index = updatedObserve.findIndex(item => item.id ===  indivisual.id && item.name ===  indivisual.name)
        updatedObserve[index] = {
            id: indivisual.id,
            name: indivisual.name,
            monthsData: {
                ...updatedObserve[index].monthsData,
                [currentMonth]: {
                    date: '',
                    division: '',
                    content: ''
                }
            }
        };
        // 업데이트된 observe 상태를 설정
        setObserve(updatedObserve);
    }

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
                        <S.FormTbodyTd>
                            {classInfo.우리반명단.map((item, index) => {
                                const observeIndex = observe.findIndex(observedItem => observedItem.name === observeName);
                                const displayedIndex = observeIndex !== -1 ? observeIndex + 1 : ''; // 해당 이름의 아이가 observe에 존재하면 번호를 표시, 아니면 빈 문자열
                                return (
                                    <S.FormTbodyTd
                                        key={index}
                                        name="index" 
                                        id="index" 
                                        value={item}
                                    >
                                        {displayedIndex}
                                    </S.FormTbodyTd>
                                );
                            })}
                        </S.FormTbodyTd>
                        <S.FormTbodyTd>
                            <S.SelectName
                                name="name" 
                                id="name" 
                                onChange={handleChange} 
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
                                onChange={handleChange}
                            />일
                        </S.FormTbodyTd>
                        <S.FormTbodyTd>
                            <S.SelectDivision 
                                name="division" 
                                id="division"
                                onChange={handleChange}
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
                                onChange={handleChange}
                            />
                        </S.FormTbodyTd>
                        <S.FormTbodyTd>
                            <S.SubmitButton onClick={pushField}>추가</S.SubmitButton>
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
                    {formData.observe && formData.observe.map((item) => (
                        <S.FormTbodyTr key={item.id}>
                            <S.FormTbodyTd>{item.id}</S.FormTbodyTd>
                            <S.FormTbodyTdName>{item.name}</S.FormTbodyTdName>
                            <S.FormTbodyTdDate>{item.monthsData?.[currentMonth]?.date}일</S.FormTbodyTdDate>
                            <S.FormTbodyTdDivision>{item.monthsData?.[currentMonth]?.division}</S.FormTbodyTdDivision>
                            <S.FormTbodyTdContent>{item.monthsData?.[currentMonth]?.content}</S.FormTbodyTdContent>
                            <S.FormTbodyTd>
                                <S.DeleteButton onClick={() => clickResetObserve(item)}>삭제</S.DeleteButton>
                            </S.FormTbodyTd>
                        </S.FormTbodyTr>
                    ))}
                    </S.FormTbody>
            </S.FormTable2>
        </S.ObserveForm>
    )
}
export default ObserveMonth;