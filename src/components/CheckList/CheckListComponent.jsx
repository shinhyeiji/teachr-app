import * as S from './style/CheckListComponent.style.jsx';
import { useState, useEffect } from 'react';

const CheckListComponent = ({ classInfo, items, currentPage, pageCount, onUpdateItem }) => {
    // const [totalPages, setTotalPages] = useState(1);
    const [fieldIndex, setFieldIndex] = useState(1);
    const [month, setMonth] = useState('');
    const [date, setDate] = useState('');
    const [context, setContext] = useState('');
    const [valueText, setValueText] = useState('');
    const [infoValue, setInfoValue] = useState(
        classInfo.우리반명단.map((child, index) => ({
            index: index + 1,
            child: child,
            value: valueText,
        }))
    );
    
    const handleIndexChange = (e) => {
        setFieldIndex(e.target.value);
    };
    const handleMonthChange = (e) => {
        setMonth(e.target.value);
    };
    const handleDateChange = (e) => {
        setDate(e.target.value);
    };
    const handleContextChange = (e) => {
        setContext(e.target.value);
    };
    const handleValueChange = (e, index) => {
        setValueText(e.target.value);
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
        for (let i = 0; i < 4; i++) {
            const dataField = {
                id: `${currentPage}-${fieldIndex + i}`,
                page: currentPage,
                index: fieldIndex + 1,
                month: month,
                date: date,
                context: context,
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
        console.log('Month:', month);
        console.log('Date:', date);
        console.log('Context:', context);
        console.log('InfoValue:', infoValue);
    }, [month, date, context, infoValue]);


    return(
            <S.FormTable>
                <S.FormThead>
                    <S.FormTheadTr1>
                        <S.FormTheadTdPage>
                            <S.PageCount>{currentPage}</S.PageCount>
                        </S.FormTheadTdPage>
                        <S.FormTbodyTdName>내용</S.FormTbodyTdName>
                        <S.FormTbodyTdText>
                            <S.TextInput 
                                type="text"
                                onChange={handleContextChange}
                            />
                        </S.FormTbodyTdText>
                        <S.FormTbodyTdText>
                            <S.TextInput 
                                type="text"
                                onChange={handleContextChange}
                            />
                        </S.FormTbodyTdText>
                        <S.FormTbodyTdText>
                            <S.TextInput 
                                type="text"
                                onChange={handleContextChange}
                            />
                        </S.FormTbodyTdText>
                        <S.FormTbodyTdText>
                            <S.TextInput 
                                type="text"
                                onChange={handleContextChange}
                            />
                        </S.FormTbodyTdText>
                    </S.FormTheadTr1>
                    <S.FormTheadTr2>
                        <S.FormTheadTd>번호</S.FormTheadTd>
                        <S.FormTbodyTdName>유아명</S.FormTbodyTdName>
                        <S.FormTbodyTdDate>
                            <S.DateInput
                                type="number"
                                onChange={handleMonthChange}
                            />월
                            <S.DateInput
                                type="number"
                                onChange={handleDateChange}
                            />일
                        </S.FormTbodyTdDate>
                        <S.FormTbodyTdDate>
                            <S.DateInput
                                type="number"
                                onChange={handleMonthChange}
                            />월
                            <S.DateInput
                                type="number"
                                onChange={handleDateChange}
                            />일
                        </S.FormTbodyTdDate>
                        <S.FormTbodyTdDate>
                            <S.DateInput
                                type="number"
                                onChange={handleMonthChange}
                            />월
                            <S.DateInput
                                type="number"
                                onChange={handleDateChange}
                            />일
                        </S.FormTbodyTdDate>
                        <S.FormTbodyTdDate>
                            <S.DateInput
                                type="number"
                                onChange={handleMonthChange}
                            />월
                            <S.DateInput
                                type="number"
                                onChange={handleDateChange}
                            />일
                        </S.FormTbodyTdDate>
                    </S.FormTheadTr2>
                </S.FormThead>
                <S.FormTbody>
                {classInfo.우리반명단.map((itemName, index) => {
                    // observe 배열에서 현재 아이템의 이름과 일치하는 데이터를 찾음
                    return (
                        <S.FormTbodyTr key={index}>
                            <S.FormTbodyTd>{index + 1}</S.FormTbodyTd>
                            <S.FormTbodyTdName>{itemName}</S.FormTbodyTdName>
                            <S.FormTbodyTdContext>
                                <S.TextInput
                                    type="text"
                                    onChange={(e) => handleValueChange(e, index)}
                                />
                            </S.FormTbodyTdContext>
                            <S.FormTbodyTdContext>
                                <S.TextInput
                                    type="text"
                                    onChange={(e) => handleValueChange(e, index)}
                                />
                            </S.FormTbodyTdContext>
                            <S.FormTbodyTdContext>
                                <S.TextInput
                                    type="text"
                                    onChange={(e) => handleValueChange(e, index)}
                                />
                            </S.FormTbodyTdContext>
                            <S.FormTbodyTdContext>
                                <S.TextInput
                                    type="text"
                                    onChange={(e) => handleValueChange(e, index)}
                                />
                            </S.FormTbodyTdContext>
                        </S.FormTbodyTr>
                    );
                })}
            </S.FormTbody>
            </S.FormTable>
        );
}
export default CheckListComponent;