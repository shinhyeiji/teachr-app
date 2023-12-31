import * as S from './style/RandomGame.style';
import { useState, useEffect } from 'react';
import { setPageTitle } from '../util';

const RandomGame = () => {
    const [participate, setParticipate] = useState(2);
    const [per, setPer] = useState(1);
    const [kinds, setKinds] = useState(2);
    const [kindNames, setKindNames] = useState([]);
    const [amounts, setAmounts] = useState([]);
    const [showTable, setShowTable] = useState(false);
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
    
        for (let i = 0; i < kinds; i++) {
            for (let j = 0; j < amounts[i]; j++) {
                selectedCards.push(kindNames[i]);
            }
        }

        const shuffleArray = (array) => {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        };
    
        const shuffledCards = shuffleArray(selectedCards);
        setSelectedCards(shuffledCards);
    };
    const handleCardClick = (index) => {
        const updatedClickedCards = [...clickedCards];
        updatedClickedCards[index] = true;
        setClickedCards(updatedClickedCards);
    };

    useEffect(() => {
        setPageTitle("HappyDay :: Random Game")
    }, [])

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
                                    clicked={clickedCards[index] ? 'true' : ''}
                                    onClick={() => handleCardClick(index)}
                                >
                                    <S.Back>{card}</S.Back>
                                    <S.Front>
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