import * as React from "react";
import { render } from "react-dom";

// Styles
import "./App.css";
import { ITodo } from "./components/Models/ITodo";

// ----- Components -----
import ListItem from "./components/ListItem";
import Control from "./components/Control";



// ----- Hooks -----
const { useState } = React;

function App() {
  const [list, setList] = useState<{ text: string }[]>([]);
  const [draftTodo, setDraftTodo] = useState<ITodo>({ text: "" });

  const _handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setDraftTodo({ text: inputValue });
  };

  const _updateList = (newList: Array<{ text: string }>): void => {
    setList(newList);
    
  };

  const _addTodo = (todo: { text: string }) => (
    event: React.SyntheticEvent
  ) => {
    event.preventDefault();
    if (todo.text) {
      const nextList = [...list, todo];
      _updateList(nextList);
      setDraftTodo({ text: "" });
    }
  };

  const _removeTodo = (index: number) => () => {
    const nextList = [...list];
    nextList.splice(index, 1);
    _updateList(nextList);
  };

  return (
    <div className="App">
      <h1 style={{ color: "dodgerblue" }}>Todo Application</h1>
      <Control
        addTodo={_addTodo}
        currentTodo={draftTodo}
        changeTodo={_handleInputChange}
      />
      <ListItem list={list} removeTodo={_removeTodo} />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
export default App;
