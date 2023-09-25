// import axios from 'axios';
import * as S from './style/MonthCalendar.style';
// import FullCalendar from '@fullcalendar/react';
// import dayGridPlugin from "@fullcalendar/daygrid";
// import timeGridPlugin from "@fullcalendar/timegrid";
// import interactionPlugin from "@fullcalendar/interaction";

const MonthCalendar = () => {
    const dateClick = (info) => {
        alert(info.dateStr);
    };
    return (
        <S.Container>
            <S.CalendarWrapper>
                <Header>
                    <MdChevronLeft className="dir" onClick={movePrevMonth}></MdChevronLeft>
                    <span>{createRoutesFromElements.format('MMM')}</span>
                </Header>

                {/* <FullCalendar
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    initialView={'dayGridMonth'}
                    headerToolbar={{
                        start: 'today',
                        center: 'title',
                        end: 'prev,next',
                    }}
                    height={'85vh'}
                    dateClick={dateClick}
                    events={[
                        { title: '판매건수 : 23건', date: '2023-05-11' },
                        { title: '판매건수 : 23건', date: '2023-05-13' },
                    ]}
                /> */}
            </S.CalendarWrapper>
        </S.Container>
    );
};

export default MonthCalendar;
