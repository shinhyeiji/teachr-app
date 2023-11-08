import * as S from './style/PromiseListComponent.style.jsx';
import PromiseItemComponent from './PromiseItemComponent.jsx'

const PromiseListComponent = ({ promise, onUpdate, onDelete }) => {
    return(
        <S.PromiseList>
            <S.ListTitle>바른생활 어린이가 되자^--^</S.ListTitle>
            <S.ListWrapper>
                {promise.map((it)=>(
                <PromiseItemComponent 
                    key={it.id}
                    {...it}
                    onUpdate={onUpdate} 
                    onDelete={onDelete} 
                />))}
            </S.ListWrapper>
        </S.PromiseList>
    )
}
export default PromiseListComponent;