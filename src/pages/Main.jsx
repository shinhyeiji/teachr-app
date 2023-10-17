import * as S from './style/Main.style';
import { useState, useEffect } from 'react';
import {useNavigate } from 'react-router-dom';
// import MonthCalendar from './MonthCalendar';
// import Idea from './Idea';
// import Observe from './Observe';
import Play from './Play';
import TodoList from './TodoList';
// import CheckList from './CheckList';
import TodayPlay from './TodayPlay';
import Timewatch from './Timewatch';
import RandomGame from './RandomGame.jsx';
import Quiz from './Quiz.jsx';
import Memo from './Memo.jsx';
import WeatherComponent from '../components/Main/WeatherComponent';
import RegisterChildren from '../components/Main/RegisterChildren';

const Main = () => {
    const navigate = useNavigate();
    const [tab, setTab] = useState('');
    // const tabList = [{category: '오늘 할 일'}, {category: '하루일과'}, {category: '활동'}, {category: '알람'}, {category: '랜덤뽑기'}, {category: 'QUIZ'}, {category: '메모장'}, {category: '유아관찰일지'}, {category: '체크리스트'} ]
    const tabList = [{category: '오늘 할 일', path: '/todo'}, {category: '하루 메모장', path: '/memo'}, {category: '하루일과', path: '/today'}, {category: '활동', path: '/active'}, {category: '알람', path: '/clock'}, {category: '랜덤뽑기', path: '/card'}, {category: 'QUIZ', path: '/quiz'}]
    const tabReset = async () => {
        setTab('');
        await new Promise((resolve) => setTimeout(resolve, 0)); // 비동기 대기
        navigate('/');
    }
    const savedclassInfoData = localStorage.getItem('classInfoData');
    const initialclassInfoData = savedclassInfoData
    ? JSON.parse(savedclassInfoData) 
    : {
        원명: '',
        교실명: '',
        교사명: '',
        연령: '',
        유아등록: '',
        우리반명단: [],
    };
    const [classInfo, setClassInfo] = useState(initialclassInfoData);
    const currentMonth = new Date().getMonth() + 1;
    
    const childrenNames = initialclassInfoData.우리반명단;
    const [initialObserveData, setInitialObserveData] = useState([]);
    const observe = initialObserveData;

    useEffect(() => {
        const data = classInfo.우리반명단.map((childName, index) => ({
            id: '',
            index: index + 1,
            name: childName,
            monthsData: {
                [currentMonth]: {
                    date: '',
                    division: '',
                    content: '',
                }
            }
        }));
        setInitialObserveData(data);
    }, [classInfo.우리반명단, currentMonth]);
    const [formData, setFormData] = useState({
        kindergarten: initialclassInfoData.원명,
        className: initialclassInfoData.교실명,
        teacher: initialclassInfoData.교사명,
        age: initialclassInfoData.연령,
        child: '',
        children: childrenNames,
        observe: observe
    });

    const tabComponent = {
        '오늘 할 일': <TodoList />,
        '메모장': <Memo />,
        '알람': <Timewatch />,
        '하루일과': <TodayPlay />,
        '활동': <Play />,
        '랜덤뽑기': <RandomGame />,
        'QUIZ': <Quiz />,
        '하루 메모장': <Memo />,
        // '유아관찰일지': <Observe classInfo={classInfo}/>,
        // '체크리스트': <CheckList classInfo={classInfo} />,
    }
  
    return (
        <S.Container>
            <S.AppContent>
                <S.NavDiv>
                    <S.StyledLink onClick={tabReset}>
                        <S.AppTitle>HAPPY<br />🐥DAY🐥</S.AppTitle>
                    </S.StyledLink>
                        {tabList.map((item, index) => {
                            return (
                                <S.Nav
                                    key={index}
                                    onClick={() => {
                                        setTab(item.category);
                                        navigate(item.path);
                                    }}
                                    active={tab === item.category ? 'active' : ''}
                                >
                                    <S.NavTitle>{item.category}</S.NavTitle>
                                </S.Nav>
                            )
                        })}
                </S.NavDiv>
                <S.Content>
                    <S.MainContent>
                        {tab === ''
                            ? <S.MainWrapper>
                                <WeatherComponent />
                                <RegisterChildren
                                    classInfo={classInfo}
                                    setClassInfo={setClassInfo}
                                    formData={formData}
                                    setFormData={setFormData}
                                />
                            </S.MainWrapper>
                            : tabComponent[tab]
                        }
                    </S.MainContent>
                </S.Content>
            </S.AppContent>
        </S.Container>
    )
}

export default Main;
