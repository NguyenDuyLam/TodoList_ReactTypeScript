import * as React from "react";
import { Item } from "./styled";

// Types
interface IProp {
    text: string;
    index: number;
    remove: (
        index: number
    ) => (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
}

const ItemFC: React.FC<IProp> = ({ text, index, remove }) => {
    return <Item onClick={remove(index)}>{text}</Item>;
};

export default ItemFC;
