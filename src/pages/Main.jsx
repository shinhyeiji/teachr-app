import * as S from './style/Main.style';
import { useState } from 'react';
import MonthCalendar from './MonthCalendar';
import Idea from './Idea';
import Observe from './Observe';
import Play from './Play';
import TodoList from './TodoList';
import Document from './Document';
import TodayPlay from './TodayPlay';
import Timewatch from './Timewatch';
import WeatherComponent from '../components/Main/WeatherComponent.jsx';
import RegisterChildren from '../components/Main/RegisterChildren.jsx';

const Main = () => {
    const [tab, setTab] = useState('');
    const tabList = [{category: '달력'}, {category: '오늘할일'}, {category: '놀이기록'}, {category: '유아관찰일지'}, {category: '아이디어'}, {category: '서류'}, {category: '타임워치'}, {category: '하루일과'}]
    const tabReset = () => {
        setTab('');
    }
    const tabComponent = {
        달력: <MonthCalendar />,
        오늘할일: <TodoList />,
        놀이기록: <Play />,
        유아관찰일지: <Observe />,
        아이디어: <Idea />,
        서류: <Document />,
        타임워치: <Timewatch />,
        하루일과: <TodayPlay />,
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
        우리반명단: []
    };
    const [classInfo, setClassInfo] = useState(initialclassInfoData);
    localStorage.setItem('classInfoData', JSON.stringify(classInfo));
    
    return(
        <S.Container>
            <S.AppContent>
                <S.NavDiv>
                    <S.StyledLink onClick={tabReset}>
                        <S.AppTitle>혜지's<br />유치원생활</S.AppTitle>
                    </S.StyledLink>
                    {tabList.map((item, index)=>{
                        return (
                            <S.Nav
                                key={index}
                                onClick={()=>setTab(item.category)}
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
                            <RegisterChildren classInfo={classInfo} setClassInfo={setClassInfo} />
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