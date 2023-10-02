import { useState } from 'react';

const Observe = ({ classInfo, observe, setObserve }) => {
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
    const infantDevelop = ['신체운동', '기본생활', '의사소통', '사회관계', '예술경험', '자연탐구'];
    const childDevelop = ['신체운동', '의사소통', '사회관계', '예술경험', '자연탐구'];
    const developArray = age <= 2 ? `*영아발달영역: ${infantDevelop}` : `*유아발달영역: ${childDevelop}`;
    
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
            id: observeIndex + 1,
            name: observeName,
            month: currentMonth,
            date: '',
            division: '',
            content: '',
        });
        setObserveIndex(observeIndex + 1);
    };
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

    return (
        <div>
            <div>
                <div>
                    <h5>학기별 선택</h5>
                    {/* 학기별, 월별 선택버튼 */}
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
                {/* 관찰일지 */}
                <div>
                    {/* 학기별 */}
                    {currentSemester === '1학기' || currentSemester === '2학기' ? (
                        <div>
                            <h2>{currentSemester} 명단({classInfo.우리반명단.length}명)</h2>
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
                        // 월간 관찰일지 작성
                        <form onSubmit={handleSubmit}>
                            <h2>{classInfo.교실명} {currentMonth}월 명단({classInfo.우리반명단.length}명)</h2>
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
                                    <tr>
                                        <td>{observeIndex}</td>
                                        <td>
                                            <select name="name" 
                                            id="name" 
                                            onChange={handleNameChange} 
                                            value={indivisual.name}
                                            >
                                                {classInfo.우리반명단.map((item, index) => (
                                                    <option key={index + 1} value={item}>{item}</option>
                                                ))}
                                            </select>
                                        </td>
                                        <td>
                                            <input
                                                type="number"
                                                name="date"
                                                placeholder={new Date().getDate()}
                                                maxLength="2"
                                                onChange={handleChange}
                                            />일
                                        </td>
                                        <td>
                                            <select 
                                                name="division" 
                                                id="division"
                                                onChange={handleDivisionChange}
                                                value={indivisual.division}
                                            >
                                                <option value="신체운동">신체운동</option>
                                                <option value="의사소통">의사소통</option>
                                                <option value="사회관계">사회관계</option>
                                                <option value="예술경험">예술경험</option>
                                                <option value="자연탐구">자연탐구</option>
                                            </select>
                                        </td>
                                        <td>
                                            <input 
                                                type="text" 
                                                name="content"
                                                onChange={handleChange}
                                            />
                                        </td>
                                        <td>
                                            <button type="submit">추가</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
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
                                            <td>{item}</td>
                                            <td>{observe[index].date}</td>
                                            <td>{observe[index].division}</td>
                                            <td>{observe[index].content}</td>
                                            <td>
                                                <button onClick={clickResetObserve}>삭제</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Observe;
