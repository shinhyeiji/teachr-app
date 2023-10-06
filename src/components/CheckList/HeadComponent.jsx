import * as S from './style/HeadComponent.style.jsx';

const HeadComponent = ({ classInfo, currentPage, setCurrentPage, pageCount, handleAddPage, handleSavePage }) => {

    return(
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
                <S.Save onClick={handleSavePage}>CheckList저장</S.Save>
                <S.AddButton onClick={handleAddPage}>CheckList추가</S.AddButton>
            </S.ButtonWrapper>
        </S.Head>
    )
}
export default HeadComponent;