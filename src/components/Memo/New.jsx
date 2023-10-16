// import * as S from './style/New.style.jsx';
import Edit from './Edit.jsx';

const New = () => {
    return(
        <div>
            <Edit
                initData={{
                    date: new Date().getTime(),
                    weatherId: 1,
                    content: "이전에 작성했던 메모",
                }}
                onSubmit={() => {
                    alert("작성완료!")
                }}
            />
        </div>

    )
}
export default New;