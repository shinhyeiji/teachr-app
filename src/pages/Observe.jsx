import { useState, useEffect } from 'react';

const Observe = () => {
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth()+1);
    const months = ['3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '1', '2'];
    const handleChangeMonth = (e) => {
        setCurrentMonth(parseInt(e.target.value, 10))
    }
    const [children, setChildren] = useState([]);
    const [child, setChild] = useState('');
    


    return (
        <div>
            <div>
                <select name="month" id="month" onChange={handleChangeMonth} value={currentMonth}>
                    {months.map((month, index) => (
                        <option key={index} value={month}>
                            {month}월
                        </option>
                    ))}
                </select>
                <div>
                    <h2>명단</h2>
                    <button>원아등록</button>
                </div>
                <div>
                    <div>{child}</div>
                </div>

            </div>
        </div>
    );
};

export default Observe;
