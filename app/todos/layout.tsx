import React from "react";
import { TodoListItem } from "./TodoListItem";

export default async function TodoLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos: Todo[] = await data.json();
  console.log()
  return (
    <div className="my-4">
      <h2>Todo List</h2>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <ul className="list-group">
              {todos?.map((todo) => {
                return (
                  <TodoListItem key={todo.id} {...todo} />
                );
              })}
            </ul>
          </div>
          <div className="col">
            <div className="sticky-top">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
