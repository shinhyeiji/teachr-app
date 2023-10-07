import * as S from './style/CheckListComponent.style.jsx';
import { useState, useEffect } from 'react';

const CheckListComponent = ({ classInfo, items, currentPage, pageCount, onUpdateItem }) => {
    // const [totalPages, setTotalPages] = useState(1);
    const field = [0, 1, 2, 3];
    const [months, setMonths] = useState(Array(field.length).fill(''));
    const [dates, setDates] = useState(Array(field.length).fill(''));
    const [contexts, setContexts] = useState(Array(field.length).fill(''));
    const [valueTexts, setValueTexts] = useState(Array(field.length).fill(''));

    const [infoValue, setInfoValue] = useState(
        classInfo.우리반명단.map((child, index) => ({
            index: index + 1,
            child: child,
            value: valueTexts[index],
        }))
    );

    const calculateIndex = (fieldIndex) => {
        return (currentPage - 1) * field.length + fieldIndex;
    };

    const handleMonthChange = (e, fieldIndex) => {
        const index = calculateIndex(fieldIndex);
        const updatedMonths = [...months];
        updatedMonths[index] = e.target.value;
        setMonths(updatedMonths)
    };
    const handleDateChange = (e, fieldIndex) => {
        const index = calculateIndex(fieldIndex);
        const updatedDates = [...dates];
        updatedDates[index] = e.target.value;
        setDates(updatedDates)
    };
    const handleContextChange = (e, fieldIndex) => {
        const index = calculateIndex(fieldIndex);
        const updatedContexts = [...contexts];
        updatedContexts[index] = e.target.value;
        setContexts(updatedContexts)
    };
    const handleValueChange = (e, fieldIndex) => {
        const index = calculateIndex(fieldIndex); // 각 필드의 키값을 기반으로 인덱스 계산
        const updatedValueTexts = [...valueTexts];
        updatedValueTexts[index] = e.target.value;
        setValueTexts(updatedValueTexts);

        const updatedInfoValue = infoValue.map((item, i) => {
            if (i === index) {
                return { ...item, value: e.target.value };
            }
            return item;
        });

        setInfoValue(updatedInfoValue);
    };
    const checkListFormData = (currentPage) => {
        const formDataArray = [];
        for (let i = 0; i < field.length; i++) {
            const dataField = {
                id: `${currentPage}-${i}`,
                page: currentPage,
                field: (currentPage-1) * 4 + i + 1,
                month: months[i],
                date: dates[i],
                context: contexts[i],
                info: infoValue,
            };
            formDataArray.push(dataField);
        }
        return formDataArray;
    };

    const pageDataArray = [];
    for (let page = 1; page <= pageCount; page++) {
        const pageData = checkListFormData(page);
        pageDataArray.push(pageData);
    }
    useEffect(() => {
        console.log('Month:', months);
        console.log('Date:', dates);
        console.log('Context:', contexts);
        console.log('InfoValue:', infoValue);
    }, [months, dates, contexts, infoValue]);

    const saveField = (e, fieldIndex) => {
        e.preventDefault();
        const index = calculateIndex(fieldIndex);
        const monthValue = months[fieldIndex];
        const dateValue = dates[fieldIndex];
        const contextValue = contexts[fieldIndex];
        const valueTextValue = valueTexts[fieldIndex];
        const dataField = {
            id: `${currentPage}-${index}`,
            page: currentPage,
            field: (currentPage - 1) * 4 + index + 1,
            month: monthValue,
            date: dateValue,
            context: contextValue,
            info: valueTextValue,
        };

        // 로컬 스토리지에 데이터 저장
        localStorage.setItem(`dataField-${currentPage}-${index}`, JSON.stringify(dataField));
    };
    
    return(
            <S.FormTable>
                <S.FormThead>
                <S.FormTheadTr1>
                        <S.FormTheadTdPage></S.FormTheadTdPage>
                        <S.FormTbodyTdName></S.FormTbodyTdName>
                        {field.map((fieldIndex)=>(
                            <S.FormTbodyTdText key={fieldIndex}>
                                <S.fieldSave onClick={(e, fieldIndex) => saveField(e, fieldIndex)}>save</S.fieldSave>
                            </S.FormTbodyTdText>
                        ))}
                    </S.FormTheadTr1>
                    <S.FormTheadTr1>
                        <S.FormTheadTdPage>
                            <S.PageCount>{currentPage}</S.PageCount>
                        </S.FormTheadTdPage>
                        <S.FormTbodyTdName>내용</S.FormTbodyTdName>
                        {field.map((fieldIndex)=>(
                            <S.FormTbodyTdText key={fieldIndex}>
                                <S.TextInput 
                                    type="text"
                                    onChange={(e) => handleContextChange(e, fieldIndex)}
                                />
                            </S.FormTbodyTdText>
                        ))}
                        </S.FormTheadTr1>
                    <S.FormTheadTr2>
                        <S.FormTheadTd>번호</S.FormTheadTd>
                        <S.FormTbodyTdName>유아명</S.FormTbodyTdName>
                        {field.map((fieldIndex)=>(
                            <S.FormTbodyTdDate key={fieldIndex}>
                                <S.DateInput
                                    type="number"
                                    onChange={(e) => handleMonthChange(e, fieldIndex)}
                                />월
                                <S.DateInput
                                    type="number"
                                    onChange={(e) => handleDateChange(e, fieldIndex)}                                />일
                            </S.FormTbodyTdDate>
                        ))}
                    </S.FormTheadTr2>
                </S.FormThead>
                <S.FormTbody>
                {classInfo.우리반명단.map((itemName, itemIndex) => {
                    // observe 배열에서 현재 아이템의 이름과 일치하는 데이터를 찾음
                    return (
                        <S.FormTbodyTr key={itemIndex}>
                            <S.FormTbodyTd>{itemIndex + 1}</S.FormTbodyTd>
                            <S.FormTbodyTdName>{itemName}</S.FormTbodyTdName>
                            {field.map((fieldIndex) => (
                                <S.FormTbodyTdContext key={fieldIndex}>
                                    <S.TextInput
                                        type="text"
                                        onChange={(e) => handleValueChange(e, itemIndex * 4 + fieldIndex)}
                                    />
                                </S.FormTbodyTdContext>
                            ))}
                        </S.FormTbodyTr>
                    );
                })}
            </S.FormTbody>
            </S.FormTable>
        );
}
export default CheckListComponent;