import * as S from './style/ChildTeacher.style.jsx';
import { useState, useEffect } from 'react';
import { setPageTitle } from '../util';


const ChildTeacher = () => {
    const [participate, setParticipate] = useState(1);
    const [names, setNames] = useState([]);
    const [showTable, setShowTable] = useState(false);
    const [selectedCards, setSelectedCards] = useState([]);
    const [clickedCards, setClickedCards] = useState([]);

    useEffect(() => {
        const storedNames = localStorage.getItem('names');
        if (storedNames) {
            const parsedNames = JSON.parse(storedNames);
            setNames(parsedNames);
            setShowTable(parsedNames.length > 0); // 데이터가 있을 때만 showTable을 true로 설정
        }
        
        setPageTitle("HappyDay :: Child Teacher");

    }, []); 

    const handleKindSetUp = () => {
        localStorage.removeItem('names');
        
        if (participate <= 0) {
            alert('인원은 1 이상의 값을 가져야 합니다.');
            return;
        }

        const newNames = Array.from({ length: participate }, () => '');
        setNames(newNames);
        setShowTable(true);
        setClickedCards([]);
    };

    const start = () => {
        setShowTable(false);

        if (participate <= 0) {
            alert('인원은 1 이상의 값을 가져야 합니다.');
            return;
        }

        const sortedNames = names.slice(0, participate).sort();
        const cards = sortedNames.flatMap(card => [card]);

        setSelectedCards(cards);
        localStorage.setItem('names', JSON.stringify(sortedNames));
    };

    const handleCardClick = (index) => {
        const updatedClickedCards = [...clickedCards];
        updatedClickedCards[index] = true;
        setClickedCards(updatedClickedCards);
    };
    return(
        <S.Container>
            <S.HeadWrapper>
                <S.Title>꼬마선생님</S.Title>
                <S.SetUpDiv>
                    <S.SetUp1>
                        <S.SetUpText>인원</S.SetUpText>
                        <S.SetUpInput 
                            type="number" 
                            value={participate} 
                            onChange={(e)=>setParticipate(e.target.value)}
                            required
                        />
                        <S.SetUpText>명</S.SetUpText>
                    </S.SetUp1>
                    <S.SetUpButton onClick={handleKindSetUp}>설정하기</S.SetUpButton>
                </S.SetUpDiv>
            </S.HeadWrapper>
            <S.ContentWrapper>
                {showTable && (
                    <S.SetUpTable>
                        <S.SetUpTableHead>
                            <S.Tr1>
                                <S.Td1></S.Td1>
                                <S.Td2>이름</S.Td2>
                                <S.Td3>
                                    <S.StartButton onClick={start}>시작하기</S.StartButton>
                                </S.Td3>
                            </S.Tr1>
                        </S.SetUpTableHead>
                        <S.SetUpTableBody>
                        {names.map((name, index) => (
                            <S.Tr2 key={index}>
                                <S.Td1>
                                    <S.TdIndex>{index + 1}</S.TdIndex>
                                </S.Td1>
                                <S.Td2>
                                    <S.TdKind
                                        type="text"
                                        value={name}
                                        onChange={(e) => {
                                            const newNames = [...names];
                                            newNames[index] = e.target.value;
                                            setNames(newNames);
                                        }}
                                    />
                                </S.Td2>
                                <S.Td3></S.Td3>
                            </S.Tr2>
                        ))}
                        </S.SetUpTableBody>
                    </S.SetUpTable>
                )}
                {!showTable && names.length > 0 && (
                    <S.CardDiv>
                        {selectedCards.map((card, index) => (
                            <S.Card key={index}>
                                <S.CardInner
                                    clicked={clickedCards[index] ? 'true' : ''}
                                    onClick={() => handleCardClick(index)}
                                >
                                    <S.Back>{card}</S.Back>
                                    <S.Front
                                        clicked={clickedCards[index] ? 'true' : ''}
                                    >
                                        <S.FrontText>꼬마선생님{index + 1}</S.FrontText>
                                    </S.Front>
                                </S.CardInner>
                            </S.Card>
                        ))}
                    </S.CardDiv>
                )}
            </S.ContentWrapper>
        </S.Container>
    )

}
export default ChildTeacher;