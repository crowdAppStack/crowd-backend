import { useState } from "react";

export default function WelcomeComponent() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {   
    setCount(count - 1);
  }

  return (
    <div className="container mx-auto my-8 p-2">
      <div className="rounded-md bg-blue-100 p-4">
        <h1 className="text-center text-3xl font-extrabold text-blue-900 lg:text-5xl">Welcome to the React App</h1>
      </div>
      <div className="mt-4 font-light text-zinc-600">
        <div className="font-semibold">This app is using Laravel + React + TailwindCSS</div>
        <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 [&>div>a]:font-bold [&>div>a]:text-blue-900 [&>div]:rounded-md [&>div]:bg-blue-100 [&>div]:p-2">
          <div>
            <a
              href="https://laravel.com/"
              target="_blank"
              rel="noopener noreferrer"
            > Laravel
            </a> is a web application framework with expressive, elegant syntax.
          </div>
          <div>
            <a
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            > React
            </a> is a JavaScript library for building user interfaces.
          </div>
          <div>
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer"
            >TailwindCSS
            </a> is a utility-first CSS framework for rapidly building custom user interfaces.
          </div>
        </div>
      </div>

      <div className="mt-4 font-semibold text-zinc-600">
        React counter (for fun)
      </div>

      <div className="mt-2 flex flex-col items-center justify-center rounded-md bg-blue-100 p-2 text-zinc-600">
        <div>Counter: <span className=" font-black text-blue-900">{count}</span></div>
        <div className="mt-2 flex items-center justify-center gap-4">
          <div>
            <button
              className="rounded bg-blue-800 px-4 py-2 font-bold text-white hover:bg-blue-900"
              onClick={increment}
            >
              Increment
            </button>
          </div>
          <div>
            <button
              className="rounded bg-blue-800 px-4 py-2 font-bold text-white hover:bg-blue-900"
              onClick={decrement}
            >
              Decrement
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}