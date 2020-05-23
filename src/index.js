import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function generateId() {
  return (
    "_" +
    Math.random()
      .toString(36)
      .substring(2, 9)
  );
}

function Todo() {
  const [todos, setTodos] = React.useState([]);
  const [input, setInput] = React.useState("");

  const handleSubmit = () => {
    setTodos(todos =>
      todos.concat({
        text: input,
        id: generateId()
      })
    );

    setInput("");
  };

  const removeTodoo = id => setTodos(todos => todos.filter(t => t.id !== id));

  return (
    <div>
      <input
        type="text"
        value={input}
        placeholder="New Todo"
        onChange={e => setInput(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>

      <ul>
        {todos.map(({ text, id }) => (
          <li key={id}>
            <span>{text}</span>
            <button onClick={() => removeTodoo(id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Todo />, rootElement);
