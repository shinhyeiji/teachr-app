import * as S from './style/Memo.style.jsx';
import { Routes, Route, Link } from "react-router-dom";
// import { Routes, Route, Link, useSearchParams } from "react-router-dom";
import Home from '../components/Memo/Home.jsx';
import New from '../components/Memo/New.jsx';
import Diary from '../components/Memo/Diary.jsx';
import Edit from '../components/Memo/Edit.jsx';
import Header from '../components/Memo/Header.jsx';
import Button from '../components/Memo/Button.jsx';

const Memo = () => {
    // const [searchParams, setSearchParams] = useSearchParams();
    // console.log(searchParams.get("sort"));

    return(
        <S.Container>
            <Header
                title={"Home"}
                leftChild={
                    <Button
                        type="positive"
                        text={"긍정 버튼"}
                        onClick={()=>{
                            alert("positive button");
                        }}
                    />}
                rightChild={
                    <Button
                        type="negative"
                        text={"부정 버튼"}
                        onClick={()=>{
                            alert("negative button");
                        }}
                    />}
            />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/new" element={<New />} />
                <Route path="/diary/:id" element={<Diary />} />
                <Route path="/edit" element={<Edit />} />
            </Routes>
            <S.LinkWrap>
                <Link to={"/home"}>Home</Link>
                <Link to={"/new"}>New</Link>
                <Link to={"/diary"}>Diary</Link>
                <Link to={"/edit"}>edit</Link>
            </S.LinkWrap>
        </S.Container>
    )
}
export default Memo;