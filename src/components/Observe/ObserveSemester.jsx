import * as S from './style/ObserveSemester.style';


const ObserveSemester = ({ currentSemester, classInfo, months }) => {

    return(
        <S.Semester>
            <S.ContextTitle>{currentSemester} 명단({classInfo.우리반명단.length}명)</S.ContextTitle>
            {classInfo.우리반명단.length >= 1 && (
            <S.SemesterTable>
                <S.SemesterThead>
                    <S.SemesterTheadTr>
                        <S.SemesterTheadTd>번호</S.SemesterTheadTd>
                        <S.Td>유아명</S.Td>
                        {currentSemester === '1학기'
                            ? months.slice(0, 6).map((month, index) => (
                                <S.SemesterTheadTd key={`${index}_${currentSemester}_월`}>{month}월</S.SemesterTheadTd>
                            ))
                            : months.slice(6, 12).map((month, index) => (
                                <S.SemesterTheadTd key={`${index}_${currentSemester}_월`}>{month}월</S.SemesterTheadTd>
                            ))}
                    </S.SemesterTheadTr>
                </S.SemesterThead>
                <S.SemesterTbody>
                    {classInfo.우리반명단.map((item, index) => (
                        <S.SemesterTbodyTr key={index}>
                            <S.SemesterTbodyTd>{index + 1}</S.SemesterTbodyTd>
                            <S.Td>{item}</S.Td>
                            {currentSemester === '1학기'
                                ? months.slice(0, 6).map((month, index) => (
                                    <S.SemesterTbodyTd key={`${index}_${currentSemester}_${month}월`}>
                                        <S.SemesterInput type="text" readOnly />
                                    </S.SemesterTbodyTd>
                                ))
                                : months.slice(6, 12).map((month, index) => (
                                    <S.SemesterTbodyTd key={`${index}_${currentSemester}_${month}월`}>
                                        <S.SemesterInput type="text" readOnly />
                                    </S.SemesterTbodyTd>
                                ))}
                        </S.SemesterTbodyTr>
                    ))}
                </S.SemesterTbody>
            </S.SemesterTable>
            )}
        </S.Semester>
    )
}
export default ObserveSemester;