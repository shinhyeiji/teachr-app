import * as S from './style/Header.style';

const Header = ({ title, leftChild, rightChild }) => {
    return(
        <S.HeadWrapper>
            <S.Title>하루 메모장</S.Title>
            <S.HeadButton>
                <S.HeadLeft>{leftChild}</S.HeadLeft>
                <S.HeadTitle>{title}</S.HeadTitle>
                <S.HeadRight>{rightChild}</S.HeadRight>
            </S.HeadButton>
        </S.HeadWrapper>
    )
}
export default Header;