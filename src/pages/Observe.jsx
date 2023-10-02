import { useState } from 'react';
import * as S from './style/Observe.style';
import ObserveSemester from '../components/Observe/ObserveSemester';
import ObserveButton from '../components/Observe/ObserveButton';
import ObserveMonth from '../components/Observe/ObserveMonth';


const Observe = ({ classInfo, observe, setObserve }) => {

    // 학기와 월 선택과 관련된 상태 변수
    const [currentSemester, setCurrentSemester] = useState('월간');
    const semesters = ['월간', '1학기', '2학기'];
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
    const developArray = age <= 2 
    ? `*영아발달영역: ${infantDevelop}` 
    : `*유아발달영역: ${childDevelop}`;
    
    return (
        <S.Container>
                <S.HeadWrapper>
                    <S.ButtonTitle>학기별 선택</S.ButtonTitle>
                    {/* 학기별, 월별 선택버튼 */}
                    <ObserveButton
                        semesters={semesters}
                        handleChangeSemester={handleChangeSemester}
                        currentSemester={currentSemester}
                        handleChangeMonth={handleChangeMonth}
                        currentMonth={currentMonth}
                        months={months}
                    />
                </S.HeadWrapper>
                <S.DevelopArray>
                    {developArray}
                </S.DevelopArray>
                {/* 관찰일지 */}
                <S.Context>
                    {/* 학기별 */}
                    {currentSemester === '1학기' || currentSemester === '2학기' ? (
                        <ObserveSemester 
                            currentSemester={currentSemester}
                            classInfo={classInfo}
                            months={months}
                        />
                    ) : (
                        // 월간 관찰일지 작성
                        <ObserveMonth 
                            classInfo={classInfo}
                            observe={observe}
                            setObserve={setObserve}
                            currentMonth={currentMonth}
                        />
                    )}
                </S.Context>
        </S.Container>
    );
};

export default Observe;
