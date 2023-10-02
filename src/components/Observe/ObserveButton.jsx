import * as S from './style/ObserveButton.style.jsx';


const ObserveButton = ({ semesters, handleChangeSemester, currentSemester, handleChangeMonth, currentMonth, months }) => {

    return (
        <S.ButtonWrapper>
                        {currentSemester === '월간' && (
                <S.MonthButton name="month" id="month" onChange={handleChangeMonth} value={currentMonth}>
                    {months.map((month, index) => (
                        <S.MonthOption key={`${index}_월`} value={month}>
                            {month}월
                        </S.MonthOption>
                    ))}
                </S.MonthButton>
            )}
            {semesters.map((semester, index) => (
                <S.SelectButton
                    key={`${index}_학기`}
                    value={semester}
                    onClick={() => handleChangeSemester(semester)}
                    active={currentSemester === semester ? 'selected' : ''}
                >
                    {semester}
                </S.SelectButton>
            ))}

        </S.ButtonWrapper>
    );
}
export default ObserveButton;