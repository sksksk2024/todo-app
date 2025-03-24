'use client';

import Image from 'next/image';
import sun from './../images/icon-sun.svg';
import moon from './../images/icon-moon.svg';
import checked from './../images/icon-check.svg';
import cross from './../images/icon-cross.svg';

const Main = () => {
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
      <form className="w-full shadow-lg">
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
            placeholder="Create a new todo... (Press Enter)"
            className="text-lg text-light-grayish-blue-dark w-full py-16P bg-very-dark-desaturated-blue rounded-10BR outline-none ring-0 caret-blue-500"
          />
        </label>
      </form>

      {/* Todo List Main */}
      <ul className="text-lg text-light-grayish-blue-dark text-start w-full bg-very-dark-desaturated-blue rounded-10BR space-y-2 shadow-lg">
        <div className="flex justify-start items-center gap-4 border-b-white border-b-2 p-8P px-32P">
          <button
            type="button"
            className="min-w-[2rem] min-h-[2rem] border border-white rounded-full bg-check-background"
          >
            <Image src={checked} className="w-1/2 mx-auto" alt="check todo" />
          </button>
          <li className="py-16P">Wash Dishes</li>
        </div>
        {/* ////////////////////////// */}

        <div className="flex justify-start items-center gap-4 border-b-white border-b-2 p-8P px-32P">
          <button
            type="button"
            className="min-w-[2rem] min-h-[2rem] border border-white rounded-full bg-check-background"
          >
            <Image src={checked} className="w-1/2 mx-auto" alt="check todo" />
          </button>
          <li className="py-16P">Go with Stefi to Ping pong and be yourself</li>
        </div>
        {/* //////////////////////////// */}

        <div className="flex justify-start items-center gap-4 border-b-white border-b-2 p-8P px-32P">
          <button
            type="button"
            className="min-w-[2rem] min-h-[2rem] border border-white rounded-full bg-check-background"
          >
            <Image src={checked} className="w-1/2 mx-auto" alt="check todo" />
          </button>
          <li className="py-16P">Workout</li>
        </div>
        <div className="flex justify-start items-center gap-4 border-b-white border-b-2 p-8P px-32P">
          <button
            type="button"
            className="min-w-[2rem] min-h-[2rem] border border-white rounded-full bg-check-background"
          >
            <Image src={checked} className="w-1/2 mx-auto" alt="check todo" />
          </button>
          <li className="py-16P">Read Bible</li>
        </div>
        <div className="flex justify-start items-center gap-4 border-b-dark-grayish-blue-light border-b-2 p-8P px-32P">
          <button
            type="button"
            className="min-w-[2rem] min-h-[2rem] border border-white rounded-full bg-check-background"
          >
            <Image src={checked} className="w-1/2 mx-auto" alt="check todo" />
          </button>
          <li className="py-16P">Go and leave school</li>
        </div>
        {/* Stats */}
        <div className="flex justify-between items-center gap-4 text-md text-dark-grayish-blue-light p-24P">
          <div className="">5 items left</div>
          <button
            type="button"
            className="hidden cursor-pointer active:text-bright-blue lg:block"
          >
            All
          </button>
          <button
            type="button"
            className="hidden cursor-pointer active:text-bright-blue lg:block"
          >
            Active
          </button>
          <button
            type="button"
            className="hidden cursor-pointer active:text-bright-blue lg:block"
          >
            Completed
          </button>
          <button type="button" className="">
            Clear Completed
          </button>
        </div>
      </ul>

      {/* Mobile More Stats */}

      <div className="flex justify-around items-center gap-4 text-dark-grayish-blue-light text-lg w-full p-24P bg-very-dark-desaturated-blue rounded-10BR shadow-lg xs:gap-10 md:justify-center lg:hidden">
        <button
          type="button"
          className="cursor-pointer active:text-bright-blue"
        >
          All
        </button>
        <button
          type="button"
          className="cursor-pointer active:text-bright-blue"
        >
          Active
        </button>
        <button
          type="button"
          className="cursor-pointer active:text-bright-blue"
        >
          Completed
        </button>
      </div>

      {/*  left All Active Completed  */}
    </main>
  );
};

export default Main;
