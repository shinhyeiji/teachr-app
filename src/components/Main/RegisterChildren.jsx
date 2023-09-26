import * as S from './style/RegisterChildren.style';
import { useState } from 'react';
import RegisterChildrenModalPage from './RegisterChildrenModalPage'

const RegisterChildren = ({ classInfo, setClassInfo }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const showRegisterModal = () => {
        setModalOpen(true);
    }
    return(
        <S.RegisterChildren>
            <S.RegisterTitle>{classInfo.원명} {classInfo.교실명}</S.RegisterTitle>
            <S.RegisterLine>
                <S.RegisterTeacher>교사: {classInfo.교사명}</S.RegisterTeacher>
                <S.ModalButton type="button" onClick={showRegisterModal}>학급<br />설정</S.ModalButton>
                    {modalOpen && (
                    <S.Modal>
                        <RegisterChildrenModalPage setModalOpen={setModalOpen} classInfo={classInfo} setClassInfo={setClassInfo} />
                    </S.Modal>
                    )}
            </S.RegisterLine>
        </S.RegisterChildren>
    )
}
export default RegisterChildren;