import * as React from "react";
import { Wrapper, Input, SubmitBtn } from "./styled";
import { ITodo } from "../Models/ITodo";
interface IProps {
    addTodo: (todo: ITodo) => (event: React.SyntheticEvent) => void;
    currentTodo: { text: string};
    changeTodo: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Control: React.FC<IProps> = ({ addTodo, currentTodo, changeTodo }) =>{
return (
    <Wrapper>
        <form onSubmit={addTodo(currentTodo)}>
            <Input type="text" onChange={changeTodo} value={currentTodo.text}></Input>
            <SubmitBtn type="submit"> Add </SubmitBtn>
        </form>
    </Wrapper>
    )
}

export default Control;