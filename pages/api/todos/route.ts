import { NextResponse } from 'next/server';

// DB
let todos = [
  {
    id: 1,
    todo: 'Wash dishes',
    done: false,
  },
  {
    id: 2,
    todo: 'Workout',
    done: false,
  },
  {
    id: 3,
    todo: 'Play Ping-Pong with Stefanuta and be yourself',
    done: false,
  },
  {
    id: 4,
    todo: 'Finish Todo App',
    done: false,
  },
];

// GET
export async function GET() {
  return NextResponse.json(todos);
}

// PATCH
export async function PATCH(req: Request) {
  const { id } = await req.json();

  todos = todos.map((todo) =>
    todo.id === id ? { ...todo, done: !todo.done } : todo
  );

  return NextResponse.json(todos);
}
