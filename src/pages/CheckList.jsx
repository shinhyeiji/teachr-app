import * as S from './style/CheckList.style.jsx';
import CheckListComponent from '../components/CheckList/CheckListComponent.jsx';
// import HeadComponent from '../components/CheckList/HeadComponent.jsx';
import { useState } from 'react';

const CheckList = ({ classInfo }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [checkListData, setCheckListData] = useState([]);
    // const [savedCheckList, setSavedCheckList] = useState(()=>{
    //     const savedCheckListData = JSON.parse(localStorage.getItem('checkListData')) || [];
    //     return savedCheckListData;
    // });

    // 페이지당 아이템 수
    const itemsPerPage = 1;
    
    // 현재 페이지의 첫 번째 아이템 인덱스와 마지막 아이템 인덱스 계산
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    
    // 총 페이지 수 계산
    const pageCount = checkListData.length;
    
    // 새로운 페이지 추가 핸들러
    const handleAddPage = (e) => {
        e.preventDefault();
        const newCheckListData = [...checkListData];
        newCheckListData.push({ items: [] });
        setCheckListData(newCheckListData);
        setCurrentPage(currentPage + 1);
    };
    
    // 체크리스트 아이템 업데이트 핸들러
    const updateChecklistItem = (pageIndex, itemIndex, value) => {
        const newCheckListData = [...checkListData];
        newCheckListData[pageIndex].items[itemIndex] = value;
        setCheckListData(newCheckListData);
    };
    // const handleSavePage = (e, data) => {
    //     e.preventDefault();
    //     if (data) {
    //         localStorage.setItem('checkListData', JSON.stringify(data));
    //         setSavedCheckList(data);
    //     } else {
    //         console.error('Invalid data to save');
    //     }
    // }
    
    return(
        <S.Container>
            <S.Head>
                <S.Title>{classInfo.교실명} 체크리스트</S.Title>
                <S.ButtonWrapper>
                    <S.Pagination>
                        <S.PrevButton
                            onClick={() => setCurrentPage(currentPage - 1)}
                            disabled={currentPage === 1}    
                        >
                            ◀
                        </S.PrevButton>
                        <S.CurrentPage>{currentPage}</S.CurrentPage>
                        <S.TotalPage>/{pageCount}</S.TotalPage>
                        <S.NextButton
                            onClick={() => setCurrentPage(currentPage + 1)}
                            disabled={currentPage >= pageCount}
                        >
                            ▶
                        </S.NextButton>
                    </S.Pagination>
                    <S.Save>CheckList저장</S.Save>
                    <S.AddButton onClick={handleAddPage}>CheckList추가</S.AddButton>
                </S.ButtonWrapper>
            </S.Head>
           {/* <HeadComponent 
                classInfo={classInfo} 
                currentPage={currentPage} 
                setCurrentPage={setCurrentPage} 
                pageCount={pageCount}
                handleAddPage={handleAddPage}
                handleSavePage={handleSavePage}
            /> */}
            {/* 현재 페이지의 아이템을 전달하여 체크리스트 컴포넌트 렌더링 */}
            {/* {checkListData.slice(startIndex, endIndex).map((page, pageIndex) => ( */}
                <CheckListComponent 
                    // key={pageIndex}
                    classInfo={classInfo}
                    // items={page.items}  // 현재 페이지의 아이템을 전달
                    currentPage={currentPage}
                    pageCount={pageCount}
                    // onUpdateItem={(itemIndex, value) => updateChecklistItem(pageIndex, itemIndex, value)}
                />
            {/* ))} */}
        </S.Container>
    )
}
export default CheckList;