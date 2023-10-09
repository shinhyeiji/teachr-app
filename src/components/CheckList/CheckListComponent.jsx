import * as S from './style/CheckListComponent.style.jsx';
import { useState, useEffect } from 'react';

const CheckListComponent = ({ classInfo, currentPage, pageCount }) => {
    const field = [0, 1, 2, 3];
    const [pageData, setPageData] = useState(Array(pageCount).fill(null).map(() => ({
        months: Array(field.length).fill(''),
        dates: Array(field.length).fill(''),
        contexts: Array(field.length).fill(''),
        valueTexts: Array(field.length).fill(''),
    })));

    const calculateIndex = (fieldIndex) => {
        return fieldIndex;
    };

    const handleMonthChange = (e, fieldIndex, pageIndex) => {
        const index = calculateIndex(fieldIndex);
        const updatedPageData = [...pageData];
        updatedPageData[pageIndex].months[index] = e.target.value;
        setPageData(updatedPageData);
        saveField(e, fieldIndex, pageIndex);
    };

    const handleDateChange = (e, fieldIndex, pageIndex) => {
        const index = calculateIndex(fieldIndex);
        const updatedPageData = [...pageData];
        updatedPageData[pageIndex].dates[index] = e.target.value;
        setPageData(updatedPageData);
        saveField(e, fieldIndex, pageIndex);
    };

    const handleContextChange = (e, fieldIndex, pageIndex) => {
        const index = calculateIndex(fieldIndex);
        const updatedPageData = [...pageData];
        updatedPageData[pageIndex].contexts[index] = e.target.value;
        setPageData(updatedPageData);
        saveField(e, fieldIndex, pageIndex);
    };

    const handleValueChange = (e, fieldIndex, pageIndex) => {
        const index = calculateIndex(fieldIndex);
        const updatedPageData = [...pageData];
        updatedPageData[pageIndex].valueTexts[index] = e.target.value;
        setPageData(updatedPageData);
        saveField(e, fieldIndex, pageIndex);
    };

    const saveField = (e, fieldIndex, pageIndex) => {
        e.preventDefault();
        const index = calculateIndex(fieldIndex);
        const monthValue = pageData[pageIndex].months[index] || '';
        const dateValue = pageData[pageIndex].dates[index] || '';
        const contextValue = pageData[pageIndex].contexts[index] || '';
        const valueTextValue = pageData[pageIndex].valueTexts[index] || '';
    
        const dataField = {
            id: `${currentPage}-${index}`,
            page: currentPage,
            field: (currentPage - 1) * 4 + index + 1,
            month: monthValue,
            date: dateValue,
            context: contextValue,
            info: valueTextValue,
        };
    
        // pageData 업데이트
        const updatedPageData = [...pageData];
        updatedPageData[pageIndex].months[index] = monthValue;
        updatedPageData[pageIndex].dates[index] = dateValue;
        updatedPageData[pageIndex].contexts[index] = contextValue;
        updatedPageData[pageIndex].valueTexts[index] = valueTextValue;
        setPageData(updatedPageData);
    
        // 로컬 스토리지에 데이터 저장
        localStorage.setItem(`pageData-${currentPage}`, JSON.stringify(updatedPageData));
    
    };

    useEffect(() => {
        // 페이지가 로드될 때 로컬 스토리지에서 데이터를 검색하여 해당 페이지 및 필드 번호에 해당하는 데이터를 불러옵니다.
        const loadDataFromLocalStorage = (pageIndex) => {
            const loadedPageData = {
                months: Array(field.length).fill(''),
                dates: Array(field.length).fill(''),
                contexts: Array(field.length).fill(''),
                valueTexts: Array(field.length).fill(''),
            };
            for (let fieldIndex = 0; fieldIndex < field.length; fieldIndex++) {
                const index = calculateIndex(fieldIndex);
                const storedData = localStorage.getItem(`pageData-${currentPage}`);
                if (storedData) {
                    const data = JSON.parse(storedData);
                    loadedPageData.months[index] = data.month;
                    loadedPageData.dates[index] = data.date;
                    loadedPageData.contexts[index] = data.context;
                    loadedPageData.valueTexts[index] = data.info;
                }
            }
            const updatedPageData = [...pageData];
            updatedPageData[pageIndex] = loadedPageData;
            setPageData(updatedPageData);
        };

        // 모든 페이지에 대한 데이터를 로드합니다.
        for (let pageIndex = 0; pageIndex < pageCount; pageIndex++) {
            loadDataFromLocalStorage(pageIndex);
        }
    }, [currentPage, pageCount, field.length]);

    return (
        <S.FormTable>
            <S.FormThead>

                <S.FormTheadTr1>
                    <S.FormTheadTdPage>
                        <S.PageCount>{currentPage}</S.PageCount>
                    </S.FormTheadTdPage>
                    <S.FormTbodyTdName>내용</S.FormTbodyTdName>
                    {field.map((fieldIndex) => (
                        <S.FormTbodyTdText key={fieldIndex}>
                            <S.TextInput
                                type="text"
                                onChange={(e) => handleContextChange(e, fieldIndex, currentPage - 1)}
                            />
                        </S.FormTbodyTdText>
                    ))}
                </S.FormTheadTr1>
                <S.FormTheadTr2>
                    <S.FormTheadTd>번호</S.FormTheadTd>
                    <S.FormTbodyTdName>유아명</S.FormTbodyTdName>
                    {field.map((fieldIndex) => (
                        <S.FormTbodyTdDate key={fieldIndex}>
                            <S.DateInput
                                type="number"
                                onChange={(e) => handleMonthChange(e, fieldIndex, currentPage - 1)}
                            />월
                            <S.DateInput
                                type="number"
                                onChange={(e) => handleDateChange(e, fieldIndex, currentPage - 1)}
                            />일
                        </S.FormTbodyTdDate>
                    ))}
                </S.FormTheadTr2>
            </S.FormThead>
            <S.FormTbody>
                {classInfo.우리반명단.map((itemName, itemIndex) => {
                    return (
                        <S.FormTbodyTr key={itemIndex}>
                            <S.FormTbodyTd>{itemIndex + 1}</S.FormTbodyTd>
                            <S.FormTbodyTdName>{itemName}</S.FormTbodyTdName>
                            {field.map((fieldIndex) => (
                                <S.FormTbodyTdContext key={fieldIndex}>
                                    <S.TextInput
                                        type="text"
                                        onChange={(e) =>
                                            handleValueChange(e, fieldIndex, currentPage - 1)
                                        }
                                    />
                                </S.FormTbodyTdContext>
                            ))}
                        </S.FormTbodyTr>
                    );
                })}
            </S.FormTbody>
        </S.FormTable>
    );
};

export default CheckListComponent;
