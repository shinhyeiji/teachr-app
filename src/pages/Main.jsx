import * as S from './style/Main.style';
import { useState, useEffect } from 'react';
import MonthCalendar from './MonthCalendar';
import Idea from './Idea';
import Observe from './Observe';
import Play from './Play';
import TodoList from './TodoList';
import CheckList from './CheckList';
import TodayPlay from './TodayPlay';
import Timewatch from './Timewatch';
import WeatherComponent from '../components/Main/WeatherComponent';
import RegisterChildren from '../components/Main/RegisterChildren';

const Main = () => {
    const [tab, setTab] = useState('');
    // const tabList = [{category: '달력'}, {category: '오늘할일'}, {category: '놀이기록'}, {category: '유아관찰일지'}, {category: '아이디어'}, {category: '체크리스트'}, {category: '타임워치'}, {category: '하루일과'}]
    const tabList = [{category: '오늘할일'}, {category: '하루일과'}, {category: '타임워치'}, {category: '유아관찰일지'}, {category: '체크리스트'}, ]
    const tabReset = () => {
        setTab('');
    }
    const savedclassInfoData = localStorage.getItem('classInfoData');
    const initialclassInfoData = savedclassInfoData
    ? JSON.parse(savedclassInfoData) 
    : {
        원명: '',
        교실명: '',
        연령: '',
        교사명: '',
        유아등록: '',
        우리반명단: [],
    };
    const [classInfo, setClassInfo] = useState(initialclassInfoData);
    const currentMonth = new Date().getMonth() + 1;
    
    const childrenNames = initialclassInfoData.우리반명단;
    const [initialObserveData, setInitialObserveData] = useState([]);
    const [observe, setObserve] = useState(initialObserveData);

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
        age: initialclassInfoData.연령,
        teacher: initialclassInfoData.교사명,
        child: '',
        children: childrenNames,
        observe: observe
    });

    const tabComponent = {
        // '달력': <MonthCalendar />,
        '오늘할일': <TodoList />,
        // '놀이기록': <Play />,
        '유아관찰일지': <Observe classInfo={classInfo} currentMonth={currentMonth} />,
        // '아이디어': <Idea />,
        '체크리스트': <CheckList classInfo={classInfo} />,
        '타임워치': <Timewatch />,
        '하루일과': <TodayPlay />,
    }

    return (
        <S.Container>
            <S.AppContent>
                <S.NavDiv>
                    <S.StyledLink onClick={tabReset}>
                        <S.AppTitle>혜지's<br />유치원생활</S.AppTitle>
                    </S.StyledLink>
                    {tabList.map((item, index) => {
                        return (
                            <S.Nav
                                key={index}
                                onClick={() => setTab(item.category)}
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
