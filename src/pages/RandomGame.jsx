import * as S from './style/RandomGame.style.jsx';
import { useState } from 'react';

const RandomGame = () => {
    const [participate, setParticipate] = useState(2);
    const [per, setPer] = useState(1);
    const [kinds, setKinds] = useState(2);
    const [kindNames, setKindNames] = useState([]);
    const [amounts, setAmounts] = useState([]);
    const [showTable, setShowTable] = useState(true);
    const [selectedCards, setSelectedCards] = useState([]);
    const [clickedCards, setClickedCards] = useState([])

    const handleKindSetUp = () => {
        if (participate <= 1) {
            alert('참가인원은 2 이상의 값을 가져야 합니다.');
            return;
        }else if(per <= 0){
            alert('1인당 참여횟수는 1 이상의 값을 가져야 합니다.');
            return;
        }
        else if(kinds <= 1){
            alert('종류는 2 이상의 값을 가져야 합니다.');
            return;
        }
        const newKindNames = [];
        const newAmounts = [];
        for (let i = 0; i < kinds; i++) {
            newKindNames.push('');
            newAmounts.push(0);
          }
          setKindNames(newKindNames);
          setAmounts(newAmounts);
          setShowTable(true);
          setClickedCards([])
    }
    const randomGameStart = () => {
        const totalParticipants = participate * per;
        const totalAmounts = amounts.reduce((sum, amount) => sum + amount, 0);
    
        if (totalAmounts < totalParticipants) {
            alert(`종류별 갯수의 합(${totalAmounts})이 '참가인원(${participate}명) X 1인당 참여횟수(${per}번)=${participate * per}'보다 많아야합니다.`);
            return;
        }
    
        setShowTable(false);
    
        const selectedCards = [];
    
        // 각 종류별로 지정된 갯수만큼 카드를 생성합니다.
        for (let i = 0; i < kinds; i++) {
            for (let j = 0; j < amounts[i]; j++) {
                selectedCards.push(kindNames[i]);
            }
        }
    
        // 섞어줍니다.
        for (let i = selectedCards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [selectedCards[i], selectedCards[j]] = [selectedCards[j], selectedCards[i]];
        }
        setSelectedCards(selectedCards);
    };
    const handleCardClick = (index) => {
        const updatedClickedCards = [...clickedCards];
        updatedClickedCards[index] = true; // 해당 인덱스의 카드를 클릭한 상태로 변경
        setClickedCards(updatedClickedCards); // 클릭한 상태 업데이트
    };

    const cardImages = ['/imgs/card1.jpg', '/imgs/card2.jpg', '/imgs/card3.jpg', '/imgs/card4.jpg']
    const getRandomCardImage = () => {
        const randomIndex = Math.floor(Math.random() * cardImages.length);
        return cardImages[randomIndex];
    }

    return(
        <S.Container>
            <S.HeadWrapper>
                <S.Title>랜덤뽑기</S.Title>
                <S.SetUpDiv>
                    <S.SetUp1>
                        <S.SetUpText>참가인원</S.SetUpText>
                        <S.SetUpInput 
                            type="number" 
                            value={participate} 
                            onChange={(e)=>setParticipate(e.target.value)}
                            required
                        />
                        <S.SetUpText>명</S.SetUpText>
                    </S.SetUp1>
                    <S.SetUp2>
                        <S.SetUpText>1인당 참여횟수</S.SetUpText>
                        <S.SetUpInput 
                            type="number" 
                            value={per} 
                            onChange={(e)=>setPer(e.target.value)} 
                            required
                        />
                        <S.SetUpText>번</S.SetUpText>
                    </S.SetUp2>
                    <S.SetUp3>
                        <S.SetUpText>뽑기</S.SetUpText>
                        <S.SetUpInput 
                            type="number" 
                            value={kinds} 
                            onChange={(e)=>setKinds(e.target.value)} 
                            required
                        />                        
                        <S.SetUpText>종</S.SetUpText>
                    </S.SetUp3>
                    <S.SetUpButton onClick={handleKindSetUp}>설정하기</S.SetUpButton>
                </S.SetUpDiv>
            </S.HeadWrapper>
            <S.ContentWrapper>
                {showTable && (
                <S.SetUpTable>
                    <S.SetUpTableHead>
                        <S.Tr1>
                            <S.Td1></S.Td1>
                            <S.Td2>종류</S.Td2>
                            <S.Td3>갯수</S.Td3>
                            <S.Td4>
                                <S.StartButton onClick={randomGameStart}>시작하기</S.StartButton>
                            </S.Td4>
                        </S.Tr1>
                    </S.SetUpTableHead>
                    <S.SetUpTableBody>
                    {kindNames.map((name, index) => (
                        <S.Tr2 key={index}>
                            <S.Td1>
                                <S.TdIndex>{index + 1}</S.TdIndex>
                            </S.Td1>
                            <S.Td2>
                                <S.TdKind
                                    type="text"
                                    value={name}
                                    onChange={(e) => {
                                        const newNames = [...kindNames];
                                        newNames[index] = e.target.value;
                                        setKindNames(newNames);
                                    }}
                                />
                            </S.Td2>
                            <S.Td3>
                                <S.TdAmount
                                    type="number"
                                    value={amounts[index]}
                                    onChange={(e) => {
                                        const newAmounts = [...amounts];
                                        newAmounts[index] = parseInt(e.target.value, 10);
                                        setAmounts(newAmounts);
                                    }}
                                />
                            </S.Td3>
                            <S.Td4></S.Td4>
                        </S.Tr2>
                    ))}
                    </S.SetUpTableBody>
                </S.SetUpTable>)}
                {!showTable && (
                    <S.CardDiv>
                        {selectedCards.map((card, index) => (
                            <S.Card key={index}>
                                <S.CardInner
                                    clicked={clickedCards[index]} // 해당 카드의 클릭 상태를 전달
                                    onClick={() => handleCardClick(index)} // 클릭 이벤트 핸들러를 전달
                                >
                                    <S.Back>{card}</S.Back>
                                    <S.Front imageUrl={getRandomCardImage()}>
                                        <S.FrontText>{index + 1}</S.FrontText>
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

export default RandomGame;