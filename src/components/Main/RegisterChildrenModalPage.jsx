import * as S from './style/RegisterChildrenModalPage.style';
import { useState, useRef } from 'react';

const RegisterChildrenModalPage = ({ setModalOpen, setClassInfo, classInfo }) => {
    const [formData, setFormData] = useState({
        kindergarten: '',
        className: '',
        age: '',
        teacher: '',
        child: '',
    });
    const [children, setChildren] = useState([]);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleAddChild = () => {
        if (formData.child) {
            setChildren([...children, formData.child]);
            setFormData({
                ...formData,
                child: '',
            });
        }
    };
    const offRegisterModal = () => {
        setModalOpen(false);
    };
    const updateDisplayedInfo = (field, value) => {
        setClassInfo({
            ...classInfo,
            [field]: value,
        });
    };
    const pushField = (field, value) => {
        updateDisplayedInfo(field, value);
    };
    const saveRegisterModal = () => {
        setClassInfo({
            원명: formData.kindergarten,
            교실명: formData.className,
            교사명: formData.teacher,
            연령: formData.age,
            유아등록: formData.child,
            우리반명단: children,
        });
        setModalOpen(false);
    };

    return (
        <S.RegisterChildrenModalPage>
            <S.ModalHead>
                <S.ModalTitle>🐥우리 반 학급 설정🐥</S.ModalTitle>
            </S.ModalHead>
            <S.RegisterInfo1>
                <S.Register>
                    <S.RegisterTitle>우리반 설정</S.RegisterTitle>
                    <S.RegisterTable>
                        <S.TableLine>
                            <S.TableLineBox>원명</S.TableLineBox>
                            <S.TableLineBox>
                                <S.TableLineInput
                                    type="text"
                                    name="kindergarten"
                                    value={formData.kindergarten}
                                    onChange={handleChange}
                                    placeholder="OO유치원"
                                />
                            </S.TableLineBox>
                            <S.TableLineBox>
                                <S.TableLineButton onClick={() => pushField('원명', formData.kindergarten)}>
                                    <span className="material-symbols-outlined" style={{ fontSize: '15px', fontWeight: 700 }}>done</span>
                                </S.TableLineButton>
                            </S.TableLineBox>
                        </S.TableLine>
                        <S.TableLine>
                            <S.TableLineBox>교실명</S.TableLineBox>
                            <S.TableLineBox>
                                <S.TableLineInput
                                    type="text"
                                    name="className"
                                    value={formData.className}
                                    onChange={handleChange}
                                    placeholder="OO반"
                                />
                            </S.TableLineBox>
                            <S.TableLineBox>
                                <S.TableLineButton onClick={() => pushField('교실명', formData.className)}>
                                    <span className="material-symbols-outlined" style={{ fontSize: '15px', fontWeight: 700 }}>done</span>
                                </S.TableLineButton>
                            </S.TableLineBox>
                        </S.TableLine>
                        <S.TableLine>
                            <S.TableLineBox>교사명</S.TableLineBox>
                            <S.TableLineBox>
                                <S.TableLineInput
                                    type="text"
                                    name="teacher"
                                    value={formData.teacher}
                                    onChange={handleChange}
                                    placeholder="김미미"
                                />
                            </S.TableLineBox>
                            <S.TableLineBox>
                                <S.TableLineButton onClick={() => pushField('교사명', formData.teacher)}>
                                    <span className="material-symbols-outlined" style={{ fontSize: '15px', fontWeight: 700 }}>done</span>
                                </S.TableLineButton>
                            </S.TableLineBox>
                        </S.TableLine>
                        <S.TableLine>
                            <S.TableLineBox>연령(만)</S.TableLineBox>
                            <S.TableLineBox>
                                <S.TableLineInput
                                    type="number"
                                    name="age"
                                    value={formData.age}
                                    onChange={handleChange}
                                    placeholder="5"
                                />
                            </S.TableLineBox>
                            <S.TableLineBox>
                                <S.TableLineButton onClick={() => pushField('연령', formData.age)}>
                                    <span className="material-symbols-outlined" style={{ fontSize: '15px', fontWeight: 700 }}>done</span>
                                </S.TableLineButton>
                            </S.TableLineBox>
                        </S.TableLine>
                        <S.TableLine>
                            <S.TableLineBox>유아등록</S.TableLineBox>
                            <S.TableLineBox>
                                <S.TableLineInput
                                    type="text"
                                    name="child"
                                    value={formData.child}
                                    onChange={handleChange}
                                    placeholder="김라라"
                                />
                            </S.TableLineBox>
                            <S.TableLineBox>
                                <S.TableLineButton onClick={handleAddChild}>
                                    <span className="material-symbols-outlined" style={{ fontSize: '15px', fontWeight: 700 }}>add</span>
                                </S.TableLineButton>
                            </S.TableLineBox>
                        </S.TableLine>
                    </S.RegisterTable>
                </S.Register>
                <S.Confirm>
                    <S.ConfirmTitle>우리반 정보 확인</S.ConfirmTitle>
                    <S.ConfirmTable>
                        {Object.keys(classInfo).slice(0, 4).map((field, index) => (
                            <S.TableLine2 key={index}>
                                <S.TableLineInfoBox1>{field}:</S.TableLineInfoBox1>
                                <S.TableLineInfoBox2>
                                    <S.TableLineInfo>{classInfo[field]}</S.TableLineInfo>
                                </S.TableLineInfoBox2>
                            </S.TableLine2>
                        ))}
                    </S.ConfirmTable>
                </S.Confirm>
            </S.RegisterInfo1>
            <S.RegisterInfo2>
                <S.ConfirmTitle>우리반 명단</S.ConfirmTitle>
                <S.Children>
                    {children.map((child, index) => (
                        <S.ChildBox key={index}>
                            <S.Child>{child}</S.Child>
                            <S.ChildDelete>X</S.ChildDelete>
                        </S.ChildBox>
                    ))}
                </S.Children>
            </S.RegisterInfo2>
            <S.ButtonDiv>
                    <S.ModalSave onClick={saveRegisterModal}>저장</S.ModalSave>
                    <S.ModalOff onClick={offRegisterModal}>닫기</S.ModalOff>
            </S.ButtonDiv>
        </S.RegisterChildrenModalPage>
    );
}

export default RegisterChildrenModalPage;