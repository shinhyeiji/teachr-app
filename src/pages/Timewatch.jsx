import * as S from './style/Timewatch.style.jsx';
import { useState } from 'react';
import StopWatch from '../components/Timewatch/StopWatch.jsx'
import Timer from '../components/Timewatch/Timer.jsx'

const Timewatch = () => {
    const [tab, setTab] = useState('스탑워치')
    const tabList = [{category: '스탑워치'}, {category: '타이머'}]
    const tabComponent = {
        스탑워치: <StopWatch />,
        타이머: <Timer />,
    }

    return (
      <S.Container>
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