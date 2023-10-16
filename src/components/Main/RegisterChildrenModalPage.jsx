
import * as S from './style/RegisterChildrenModalPage.style';
import { useState, useEffect } from 'react';

const RegisterChildrenModalPage = ({ setModalOpen, setClassInfo, classInfo, formData, setFormData }) => {

    const [children, setChildren] = useState([]);
    
    useEffect(() => {
        const savedData = localStorage.getItem('classInfo');
        if (savedData) {
            const parsedData = JSON.parse(savedData);
            setFormData({
                ...formData,
                kindergarten: parsedData.원명 || '',
                className: parsedData.교실명 || '',
                age: parsedData.연령 || '',
                teacher: parsedData.교사명 || '',
                child: '',
                children: parsedData.우리반명단 || [],
                observe:[]
            });
            setChildren(parsedData.우리반명단 || []);
        }
    }, [formData, setFormData]);
    useEffect(() => {
        localStorage.setItem('formData', JSON.stringify(formData));
    }, [formData]);


    const handleChange = (e) => {
        e.preventDefault();

        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleAddChild = (e) => {
        e.preventDefault();
        if (formData.child) {
            setClassInfo(prevClassInfo => ({
                ...prevClassInfo,
                우리반명단: [...prevClassInfo.우리반명단, formData.child].sort((a, b) => a.localeCompare(b)),
            }));
    
            const updatedChildren = [...formData.children, formData.child].sort((a, b) => a.localeCompare(b));
            setFormData({
                ...formData,
                children: updatedChildren,
                child: '',
            });
    
            // children 상태 업데이트
            setChildren(updatedChildren);
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

    const pushField = (field, value, e) => {
        e.preventDefault();
        updateDisplayedInfo(field, value);
    };

    const handleDeleteChild = (child) => {
        // '우리반명단'에서 선택한 아이템 제거
        const updatedClassInfo = {
            ...classInfo,
            우리반명단: (classInfo.우리반명단 || []).filter((c) => c !== child),
        };
    
        // classInfo 업데이트
        setClassInfo({...updatedClassInfo});
    
        // formData 업데이트
        const updatedChildren = formData.children.filter((c) => c !== child);
        setFormData({
            ...formData,
            children: updatedChildren.sort((a, b) => a.localeCompare(b)),
        });
    
        // children 상태 업데이트
        setChildren(updatedChildren);
    };

    const saveRegisterModal = (e) => {
        e.preventDefault();
        setClassInfo({
            원명: formData.kindergarten,
            교실명: formData.className,
            교사명: formData.teacher,
            연령: formData.age,
            유아등록: '',
            우리반명단: formData.children,
        });
        localStorage.setItem('classInfo', JSON.stringify(classInfo));
        console.log(classInfo);
        setModalOpen(false);
    };
    return (
        <S.RegisterChildrenModalPage onSubmit={saveRegisterModal}>
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
                                <S.TableLineButton onClick={(e) => pushField('원명', formData.kindergarten, e)}>
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
                                <S.TableLineButton onClick={(e) => pushField('교실명', formData.className, e)}>
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
                                <S.TableLineButton onClick={(e) => pushField('교사명', formData.teacher, e)}>
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
                                <S.TableLineButton onClick={(e) => pushField('연령', formData.age, e)}>
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
                        <S.ConfirmTableHead></S.ConfirmTableHead>
                        <S.ConfirmTableBody>
                            {Object.keys(classInfo).slice(0, 4).map((field, index) => (
                                <S.TableLine2 key={index}>
                                    <S.TableLineInfoBox1>{field}:</S.TableLineInfoBox1>
                                    <S.TableLineInfoBox2>
                                        <S.TableLineInfo>{classInfo[field]}</S.TableLineInfo>
                                    </S.TableLineInfoBox2>
                                </S.TableLine2>
                            ))}
                        </S.ConfirmTableBody>
                    </S.ConfirmTable>
                </S.Confirm>
            </S.RegisterInfo1>
            <S.RegisterInfo2>
                <S.ConfirmTitle>우리반 명단</S.ConfirmTitle>
                <S.Table>
                    <S.Children>
                        {children.map((child, index) => (
                            <S.ChildBox key={index}>
                                <S.Child>{child}</S.Child>
                                <S.ChildDeleteWrapper>
                                    <S.ChildDelete onClick={(child) => handleDeleteChild(child)}>X</S.ChildDelete>
                                </S.ChildDeleteWrapper>
                            </S.ChildBox>
                        ))}
                    </S.Children>
                </S.Table>
            </S.RegisterInfo2>
            <S.ButtonDiv>
                    <S.ModalSave type="submit">저장</S.ModalSave>
                    <S.ModalOff onClick={offRegisterModal}>닫기</S.ModalOff>
            </S.ButtonDiv>
        </S.RegisterChildrenModalPage>
    );
}
export default RegisterChildrenModalPage;