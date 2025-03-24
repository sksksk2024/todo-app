'use client';

import Image from 'next/image';
import sun from './../images/icon-sun.svg';
import moon from './../images/icon-moon.svg';
import checked from './../images/icon-check.svg';
import cross from './../images/icon-cross.svg';

const Main = () => {
  return (
    <main className="flex flex-col justify-center items-center gap-20 text-center w-[70dvw] max-w-container-1000 p-48P mx-auto">
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
      <form className="w-full">
        <label htmlFor="addTodo" className="relative">
          <input
            type="text"
            id="addTodo"
            placeholder="Create a new todo... (Press Enter)"
            className="text-lg text-light-grayish-blue-dark w-full p-16P pl-72P bg-very-dark-desaturated-blue rounded-5BR outline-none ring-0 caret-blue-500"
          />
          <button
            type="button"
            className="absolute left-19.2I -top-8I w-8 h-8 border border-white rounded-full bg-check-background"
          >
            <Image src={checked} className="w-1/2 mx-auto" alt="check todo" />
          </button>
        </label>
      </form>

      {/* items left All Active Completed Clear Completed */}
    </main>
  );
};

export default Main;
