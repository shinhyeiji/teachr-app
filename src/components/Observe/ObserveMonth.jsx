import * as S from './style/ObserveMonth.style.jsx';
import { useState } from 'react';


const ObserveMonth = ({ classInfo, observe, setObserve, currentMonth }) => {
    // 관찰 입력 폼과 관련된 상태 변수
    const [observeIndex, setObserveIndex] = useState(1); // observeIndex 상태 변수 정의
    const [observeName, setObserveName] = useState(classInfo.우리반명단[0]);
    const [indivisual, setIndivisual] = useState({
        id: observeIndex,
        name: observeName,
        month: new Date().getMonth()+1,
        date: new Date().getDate(),
        division: '신체운동',
        content: '',
    })

    const clickResetObserve = () => {
        setIndivisual({
            id: observe.length + 1, // 새로운 아이템을 추가하므로 현재 아이템 개수 + 1을 아이디로 설정
            name: classInfo.우리반명단[0], // 첫 번째 아이의 이름으로 초기화
            month: currentMonth,
            date: 0,
            division: '',
            content: '',
        });
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setIndivisual((prevIndivisual) => ({
            ...prevIndivisual,
            [name]: value,
        }));
    };
    
    const handleNameChange = (e) => {
        const selectedName = e.target.value;
        const selectedIndex = classInfo.우리반명단.indexOf(selectedName)+1;
    
        if (selectedIndex) {
            setIndivisual((prevIndivisual) => ({
                ...prevIndivisual,
                name: selectedName, // 선택된 이름을 업데이트합니다.
            }));
            setObserveName(selectedName); // observeName도 업데이트합니다.
            setObserveIndex(selectedIndex);
        }
    };
    
    const handleDivisionChange = (e) => {
        const selectedDivision = e.target.value;
        setIndivisual((prevIndivisual) => ({
            ...prevIndivisual,
            division: selectedDivision, // 선택된 부서를 업데이트합니다.
        }));
    };
        // 관찰 저장 핸들러
        const handleSubmit = (e) => {
            e.preventDefault();
            // 기존 관찰 일지 데이터를 가져옴
            const savedObserveData = localStorage.getItem('observeData') || '[]';
            const observeData = JSON.parse(savedObserveData);
        
            // 새로운 관찰 항목 생성
            const newObservation = {
                id: observeIndex,
                name: observeName,
                month: currentMonth,
                date: indivisual.date,
                division: indivisual.division,
                content: indivisual.content,
            };
        
            // 이미 존재하는 아이템을 찾아 업데이트
            const existingIndex = observe.findIndex((item) => item.id === newObservation.id && item.name === newObservation.name);
            if (existingIndex !== -1) {
                // 이미 있는 아이템을 업데이트
                const updatedObservations = [...observe];
                updatedObservations[existingIndex] = newObservation;
                setObserve(updatedObservations);
                // 관찰 일지 데이터를 업데이트
                observeData[existingIndex] = newObservation;
                localStorage.setItem('observeData', JSON.stringify(observeData));
            } else {
                // 존재하지 않는 경우 새로운 아이템 추가
                setObserve([...observe, newObservation]);
                // 관찰 일지 데이터를 추가
                localStorage.setItem('observeData', JSON.stringify([...observeData, newObservation]));
            }
        
            // 입력 필드 초기화
            setIndivisual({
                id: observeIndex,
                name: observeName,
                month: new Date().getMonth()+1,
                date: new Date().getDate(),
                division: '신체운동',
                content: '',
            });
            setObserveIndex(observeIndex);
        };

    return(
        <S.ObserveForm onSubmit={handleSubmit}>
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
                        <S.FormTbodyTd>{observeIndex}</S.FormTbodyTd>
                        <S.FormTbodyTd>
                            <S.SelectName name="name" 
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
                                onChange={handleChange}
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
                                onChange={handleChange}
                            />
                        </S.FormTbodyTd>
                        <S.FormTbodyTd>
                            <S.SubmitButton type="submit">추가</S.SubmitButton>
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
                        <S.FormTheadTd></S.FormTheadTd>
                        <S.FormTheadTd></S.FormTheadTd>
                    </S.FormTheadTr>
                </S.FormThead>
                <S.FormTbody>
                    {classInfo.우리반명단.map((item, index) => (
                        <S.FormTbodyTr key={index}>
                            <S.FormTbodyTd>{index + 1}</S.FormTbodyTd>
                            <S.FormTbodyTdName>{item}</S.FormTbodyTdName>
                            <S.FormTbodyTdDate>{observe[index].date}</S.FormTbodyTdDate>
                            <S.FormTbodyTdDivision>{observe[index].division}</S.FormTbodyTdDivision>
                            <S.FormTbodyTdContent>{observe[index].content}</S.FormTbodyTdContent>
                            <S.FormTbodyTd>
                                <S.DeleteButton onClick={clickResetObserve}>삭제</S.DeleteButton>
                            </S.FormTbodyTd>
                        </S.FormTbodyTr>
                    ))}
                </S.FormTbody>
            </S.FormTable2>
        </S.ObserveForm>
    )
}
export default ObserveMonth;