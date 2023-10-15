import * as S from './style/Home.style.jsx';
// import Button from './Button.jsx';
// import Header from './Header.jsx';
import Edit from './Edit.jsx';

const Home = () => {

    return(
        <S.Content>
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
        </S.Content>
    )
}
export default Home;