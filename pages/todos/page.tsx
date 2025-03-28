'use client';

import Image from 'next/image';
import sun from './../images/icon-sun.svg';
import checked from './../images/icon-check.svg';
import cross from './../images/icon-cross.svg';
import { useState, useEffect } from 'react';

// Fetch todos from the backend
const fetchTodos = async () => {
  const res = await fetch('http://localhost:3000/api/todos', {
    cache: 'no-store',
  });
  return res.json();
};

const Main = () => {
  const [todos, setTodos] = useState<
    { id: number; todo: string; done: boolean }[]
  >([]);
  const [active, setActive] = useState<boolean>(false);
  const [all, setAll] = useState<boolean>(true);
  const [completed, setCompleted] = useState<boolean>(false);

  // Load todos on mount
  useEffect(() => {
    const loadTodos = async () => {
      const data = await fetchTodos();
      setTodos(data);
    };
    loadTodos();
  }, []);

  // Update todo done status
  const handleCheck = async (id: number) => {
    try {
      const res = await fetch('http://localhost:3000/api/todos', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });

      if (!res.ok) throw new Error('Failed to update todo');

      const updatedTodos = await res.json();
      setTodos(updatedTodos);
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  return (
    <main className="relative -top-128I md:-top-192I flex flex-col justify-center items-center gap-10 text-center w-full max-w-container-1000 p-16P mx-auto md:w-[70dvw] md:p-48P">
      {/* HEADER */}
      <section className="flex justify-between items-center w-full">
        <h1 className="text-2xl font-bold uppercase tracking-1.2 lg:text-3xl lg:tracking-1.5">
          Todo
        </h1>
        <Image src={sun} alt="go to light theme" />
      </section>

      {/* Todo List */}
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
                  className={`min-w-[2rem] min-h-[2rem] border border-white rounded-full ${
                    todo.done && 'bg-check-background'
                  }`}
                  onClick={() => handleCheck(todo.id)}
                >
                  <Image
                    src={checked}
                    className={`w-1/2 mx-auto ${!todo.done && 'hidden'}`}
                    alt="check todo"
                  />
                </button>
                <li
                  className={`py-16P ${
                    todo.done &&
                    'line-through text-very-dark-grayish-blue-light'
                  }`}
                >
                  {todo.todo}
                </li>
              </div>
              <Image
                id="delete"
                src={cross}
                className="cursor-pointer"
                alt="delete"
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
                  className={`min-w-[2rem] min-h-[2rem] border border-white rounded-full ${
                    todo.done && 'bg-check-background'
                  }`}
                  onClick={() => handleCheck(todo.id)}
                >
                  <Image
                    src={checked}
                    className={`w-1/2 mx-auto ${!todo.done && 'hidden'}`}
                    alt="check todo"
                  />
                </button>
                <li
                  className={`py-16P ${
                    todo.done &&
                    'line-through text-very-dark-grayish-blue-light'
                  }`}
                >
                  {todo.todo}
                </li>
              </div>
              <Image
                id="delete"
                src={cross}
                className="cursor-pointer"
                alt="delete"
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
                    className={`min-w-[2rem] min-h-[2rem] border border-white rounded-full ${
                      todo.done && 'bg-check-background'
                    }`}
                    onClick={() => handleCheck(todo.id)}
                  >
                    <Image
                      src={checked}
                      className={`w-1/2 mx-auto ${!todo.done && 'hidden'}`}
                      alt="check todo"
                    />
                  </button>
                  <li
                    className={`py-16P ${
                      todo.done &&
                      'line-through text-very-dark-grayish-blue-light'
                    }`}
                  >
                    {todo.todo}
                  </li>
                </div>
                <Image
                  id="delete"
                  src={cross}
                  className="cursor-pointer"
                  alt="delete"
                />
              </div>
            )
          )
        )}
      </ul>
    </main>
  );
};

export default Main;
