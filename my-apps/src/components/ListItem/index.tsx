import * as React from "react";

// Components
import Item from "../Item";

import { ListItem } from "./styled";

import { ITodo } from "../Models/ITodo";

interface IProp {
    list: ITodo[];
    removeTodo: (
        index: number
    ) => (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
}

const ListItemFC: React.FC<IProp> = ({ list, removeTodo }) => {
    return (
        <ListItem>
            {list.map((el, index) => (
                <Item key={index} text={el.text} index={index} remove={removeTodo} />
            ))}
        </ListItem>
    );
};

export default ListItemFC;
