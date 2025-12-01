"use server"

import { cookies } from "next/headers";

export const setCookie = async (todos: string) => {
  "use server"
  const cookieStore = await cookies();
  cookieStore.set('todoList', todos, {
    maxAge: 60 * 60 * 24 * 7 // 7일
  })
}

export const getCookie = async ():Promise<string> => {
  const cookieStore = await cookies();
  const parsedTodos = cookieStore.get('todoList');
  return parsedTodos?.value || '';
}