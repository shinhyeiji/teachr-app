import { useState } from 'react';

const Observe = ({ classInfo, observe, setObserve }) => {
    // 관찰 입력 폼과 관련된 상태 변수
    const [observeName, setObserveName] = useState('');
    const [observeDate, setObserveDate] = useState(new Date().getDate());
    const [observeDivision, setObserveDivision] = useState('신체운동');
    const [observeContent, setObserveContent] = useState('');

    // 학기와 월 선택과 관련된 상태 변수
    const [currentSemester, setCurrentSemester] = useState('1학기');
    const semesters = ['1학기', '2학기', '월간'];
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
    const months = ['3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '1', '2'];

    // 학기 변경 핸들러
    const handleChangeSemester = (semester) => {
        setCurrentSemester(semester);
    };

    // 월 변경 핸들러
    const handleChangeMonth = (e) => {
        setCurrentMonth(e.target.value);
    };

    // 연령에 따른 발달 영역 배열 설정
    const age = classInfo.연령;
    const infantDevelop = ['기본생활', '신체운동', '의사소통', '사회관계', '예술경험', '자연탐구'];
    const childDevelop = ['신체운동', '의사소통', '사회관계', '예술경험', '자연탐구'];
    const developArray = age <= 2 ? `*영아발달영역: ${infantDevelop}` : `*유아발달영역: ${childDevelop}`;

    // 관찰 저장 핸들러
    const clickSaveObserve = () => {
        // 기존 관찰 일지 데이터를 가져옴
        const savedObserveData = localStorage.getItem('observeData') || '[]';
        const observeData = JSON.parse(savedObserveData);
    
        // 사용자 입력 값으로 관찰 일지 데이터를 업데이트
        const newObserve = {
            id: Date.now(),
            name: observeName,
            month: currentMonth,
            date: observeDate,
            division: observeDivision,
            content: observeContent,
        };
    
        observeData.push(newObserve);
    
        // 관찰 일지 데이터를 localStorage에 저장
        localStorage.setItem('observeData', JSON.stringify(observeData));
    
        // 관찰 일지 입력 폼 초기화
        setObserve({
            ...newObserve,
        });
        console.log(observe);
    };

    // 날짜 변경 핸들러
    const handleDateChange = (e) => {
        // 최대 2자까지 입력 허용
        if (e.target.value.length <= 2) {
            setObserveDate(e.target.value);
        }
    };
    const handleNameChange = (e) => {
        // 최대 2자까지 입력 허용
            setObserveName(e.target.value);
    };
    // 발달영역 변경 핸들러
    const handleDivisionChange = (e) => {
        setObserveDivision(e.target.value);
    };

    // 내용 변경 핸들러
    const handleContentChange = (e) => {
        setObserveContent(e.target.value);
    };

    return (
        <div>
            <div>
                <div>
                    <h5>학기별 선택</h5>
                    <div>
                        {semesters.map((semester, index) => (
                            <button
                                key={`${index}_학기`}
                                value={semester}
                                onClick={() => handleChangeSemester(semester)}
                                className={currentSemester === semester ? 'selected' : ''}
                            >
                                {semester}
                            </button>
                        ))}
                        <select name="month" id="month" onChange={handleChangeMonth} value={currentMonth}>
                            {months.map((month, index) => (
                                <option key={`${index}_월`} value={month}>
                                    {month}월
                                </option>
                            ))}
                        </select>
                    </div>
                    {developArray}
                </div>
                <div>
                    {currentSemester === '1학기' || currentSemester === '2학기' ? (
                        <div>
                            <h2>{currentSemester} 명단</h2>
                            <table>
                                <thead>
                                    <tr>
                                        <td>번호</td>
                                        <td>유아명</td>
                                        {currentSemester === '1학기'
                                            ? months.slice(0, 6).map((month, index) => (
                                                  <td key={`${index}_${currentSemester}_월`}>{month}월</td>
                                              ))
                                            : months.slice(6, 12).map((month, index) => (
                                                  <td key={`${index}_${currentSemester}_월`}>{month}월</td>
                                              ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {classInfo.우리반명단.map((item, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{item}</td>
                                            {currentSemester === '1학기'
                                                ? months.slice(0, 6).map((month, index) => (
                                                      <td key={`${index}_${currentSemester}_${month}월`}>
                                                          <input type="text" readOnly />
                                                      </td>
                                                  ))
                                                : months.slice(6, 12).map((month, index) => (
                                                      <td key={`${index}_${currentSemester}_${month}월`}>
                                                          <input type="text" readOnly />
                                                      </td>
                                                  ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div>
                            <h2>{classInfo.교실명} {currentMonth}월 명단</h2>
                            <table>
                                <thead>
                                    <tr>
                                        <td>번호</td>
                                        <td>유아명</td>
                                        <td>날짜</td>
                                        <td>발달영역</td>
                                        <td>내용</td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {classInfo.우리반명단.map((item, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td onChange={handleNameChange}>{item}</td>
                                            <td>
                                                <input
                                                    type="number"
                                                    placeholder={new Date().getDate()}
                                                    maxLength="2"
                                                    value={observeDate}
                                                    onChange={handleDateChange}
                                                />
                                            </td>
                                            <td key={`${index}_division`}>
                                                <select 
                                                    name="division" 
                                                    id="division"
                                                    value={observeDivision}
                                                    onChange={handleDivisionChange}
                                                >
                                                    <option value="신체운동">신체운동</option>
                                                    <option value="의사소통">의사소통</option>
                                                    <option value="사회관계">사회관계</option>
                                                    <option value="예술경험">예술경험</option>
                                                    <option value="자연탐구">자연탐구</option>
                                                </select>
                                            </td>
                                            <td key={`${index}_content`}>
                                                <input 
                                                    type="text" 
                                                    value={observeContent}
                                                    onChange={handleContentChange}
                                                />
                                            </td>
                                            <td>
                                                <button onClick={clickSaveObserve}>저장</button>
                                            </td>
                                            <td>
                                                <button>삭제</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Observe;
