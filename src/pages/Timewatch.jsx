import * as S from './style/Timewatch.style';
import { useState, useEffect } from 'react';
import StopWatch from '../components/Timewatch/StopWatch'
import Timer from '../components/Timewatch/Timer'
import { setPageTitle } from '../util.jsx';

const Timewatch = () => {
    const [tab, setTab] = useState('스탑워치')
    const tabList = [{category: '스탑워치'}, {category: '타이머'}]
    const tabComponent = {
        스탑워치: <StopWatch />,
        타이머: <Timer />,
    }
    useEffect(() => {
      setPageTitle("HappyDay :: Timer")
    }, [])
    return (
      <S.Container>
        <S.HeadWrapper>
          <S.Title>알람</S.Title>
          <S.NavDiv>
            {tabList.map((item, index) => {
              return(
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
        </S.HeadWrapper>
        <S.Content>
          {tab === tabList[0].tab
          ? <StopWatch />
          : tabComponent[tab]
          }
        </S.Content>
      </S.Container>
    );
  };

  export default Timewatch;