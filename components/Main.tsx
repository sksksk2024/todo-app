'use client';

import Image from 'next/image';
import sun from './../images/icon-sun.svg';
import moon from './../images/icon-moon.svg';
import checked from './../images/icon-check.svg';
import cross from './../images/icon-cross.svg';
import { useState } from 'react';
import { todos as initialTodos } from './utils/Todos';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const Main = () => {
  const [todos, setTodos] = useState(
    initialTodos.map((todo) => ({ ...todo, done: false }))
  );

  const [active, setActive] = useState<boolean>(false);
  const [all, setAll] = useState<boolean>(true);
  const [completed, setCompleted] = useState<boolean>(false);

  let itemsLeft = todos.filter((todo) => !todo.done).length;

  const handleCreate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page reload

    const input = e.currentTarget.addTodo as HTMLInputElement;
    const newTodoText = input.value.trim();

    if (newTodoText) {
      setTodos((prevTodos) => [
        ...prevTodos,
        { id: Date.now(), todo: newTodoText, done: false },
      ]);
      input.value = ''; // Clear input field
    }
  };

  const handleClearAll = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.done));
  };

  const handleDelete = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleCheck = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const handleActivated = () => {
    setAll(false);
    setActive(true);
    setCompleted(false);
  };

  const handleAll = () => {
    setAll(true);
    setActive(false);
    setCompleted(false);
  };

  const handleCompleted = () => {
    setAll(false);
    setActive(false);
    setCompleted(true);
  };

  return (
    <main className="relative -top-128I md:-top-192I flex flex-col justify-center items-center gap-10 text-center w-full max-w-container-1000 p-16P mx-auto md:w-[70dvw] md:p-48P">
      {/* HEADER LIST */}
      <section className="flex justify-between items-center w-full">
        <h1 className="text-2xl font-bold uppercase tracking-1.2 lg:text-3xl lg:tracking-1.5">
          Todo
        </h1>
        {/* Adding click events and state for themes */}
        <Image src={sun} alt="go to light theme" />
      </section>

      {/* INPUT */}
      {/* Enter button functionality, hint to enter and add (Press Enter) in the input placeholder, or button to create it(for mobile users) */}
      <form onSubmit={handleCreate} className="w-full shadow-lg">
        <label
          className="flex justify-start items-center gap-4 p-8P px-32P bg-very-dark-desaturated-blue rounded-10BR"
          htmlFor="addTodo"
        >
          <button
            type="button"
            className="min-w-[2rem] min-h-[2rem] border border-light-grayish-blue-dark rounded-full"
          ></button>
          <input
            type="text"
            id="addTodo"
            name="addTodo"
            placeholder="Create a new todo... (Press Enter)"
            className="text-lg text-light-grayish-blue-dark w-full py-16P bg-very-dark-desaturated-blue rounded-10BR outline-none ring-0 caret-blue-500"
          />
        </label>
      </form>

      {/* Todo List Main */}
      <ul className="text-lg text-light-grayish-blue-dark text-start w-full bg-very-dark-desaturated-blue rounded-10BR space-y-2 shadow-lg">
        {todos.map((todo) =>
          all ? (
            <div
              key={todo.id}
              className="flex justify-between items-center gap-6 border-b-white border-b-2 p-8P px-32P"
            >
              <div className="flex justify-center items-center gap-4">
                <button
                  type="button"
                  className={`min-w-[2rem] min-h-[2rem] border border-white rounded-full
                  ${todo.done && 'bg-check-background'}
                  `}
                  onClick={() => handleCheck(todo.id)}
                >
                  <Image
                    src={checked}
                    className={`w-1/2 mx-auto
                  ${!todo.done && 'hidden'}
                  `}
                    alt="check todo"
                  />
                </button>
                <li
                  className={`py-16P
                ${todo.done && 'line-through text-very-dark-grayish-blue-light'}
                `}
                >
                  {todo.todo}
                </li>
              </div>

              <Image
                id="delete"
                src={cross}
                className="cursor-pointer"
                alt="delete"
                onClick={() => handleDelete(todo.id)}
              />
            </div>
          ) : active && !todo.done ? (
            <div
              key={todo.id}
              className="flex justify-between items-center gap-6 border-b-white border-b-2 p-8P px-32P"
            >
              <div className="flex justify-center items-center gap-4">
                <button
                  type="button"
                  className={`min-w-[2rem] min-h-[2rem] border border-white rounded-full
                  ${todo.done && 'bg-check-background'}
                  `}
                  onClick={() => handleCheck(todo.id)}
                >
                  <Image
                    src={checked}
                    className={`w-1/2 mx-auto
                  ${!todo.done && 'hidden'}
                  `}
                    alt="check todo"
                  />
                </button>
                <li
                  className={`py-16P
                ${todo.done && 'line-through text-very-dark-grayish-blue-light'}
                `}
                >
                  {todo.todo}
                </li>
              </div>

              <Image
                id="delete"
                src={cross}
                className="cursor-pointer"
                alt="delete"
                onClick={() => handleDelete(todo.id)}
              />
            </div>
          ) : (
            completed &&
            todo.done && (
              <div
                key={todo.id}
                className="flex justify-between items-center gap-6 border-b-white border-b-2 p-8P px-32P"
              >
                <div className="flex justify-center items-center gap-4">
                  <button
                    type="button"
                    className={`min-w-[2rem] min-h-[2rem] border border-white rounded-full
                  ${todo.done && 'bg-check-background'}
                  `}
                    onClick={() => handleCheck(todo.id)}
                  >
                    <Image
                      src={checked}
                      className={`w-1/2 mx-auto
                  ${!todo.done && 'hidden'}
                  `}
                      alt="check todo"
                    />
                  </button>
                  <li
                    className={`py-16P
                ${todo.done && 'line-through text-very-dark-grayish-blue-light'}
                `}
                  >
                    {todo.todo}
                  </li>
                </div>

                <Image
                  id="delete"
                  src={cross}
                  className="cursor-pointer"
                  alt="delete"
                  onClick={() => handleDelete(todo.id)}
                />
              </div>
            )
          )
        )}

        {/* Stats */}
        <div className="flex justify-between items-center gap-4 text-md text-dark-grayish-blue-light p-24P">
          <div className="">{itemsLeft} items left</div>
          <button
            type="button"
            className={`hidden cursor-pointer lg:block
              ${all && 'text-bright-blue'}
              `}
            onClick={handleAll}
          >
            All
          </button>
          <button
            type="button"
            className={`hidden cursor-pointer lg:block
              ${active && 'text-bright-blue'}
              `}
            onClick={handleActivated}
          >
            Active
          </button>
          <button
            type="button"
            className={`hidden cursor-pointer lg:block
              ${completed && 'text-bright-blue'}
              `}
            onClick={handleCompleted}
          >
            Completed
          </button>
          <button type="button" className="" onClick={handleClearAll}>
            Clear Completed
          </button>
        </div>
      </ul>

      {/* Mobile More Stats */}

      <div className="flex justify-around items-center gap-4 text-dark-grayish-blue-light text-lg w-full p-24P bg-very-dark-desaturated-blue rounded-10BR shadow-lg xs:gap-10 md:justify-center lg:hidden">
        <button
          type="button"
          className={`cursor-pointer 
            ${all && 'text-bright-blue'}
            `}
          onClick={handleAll}
        >
          All
        </button>
        <button
          type="button"
          className={`cursor-pointer active:text-bright-blue
            ${active && 'text-bright-blue'}
            `}
          onClick={handleActivated}
        >
          Active
        </button>
        <button
          type="button"
          className={`cursor-pointer active:text-bright-blue
            ${completed && 'text-bright-blue'}
            `}
          onClick={handleCompleted}
        >
          Completed
        </button>
      </div>
    </main>
  );
};

export default Main;
