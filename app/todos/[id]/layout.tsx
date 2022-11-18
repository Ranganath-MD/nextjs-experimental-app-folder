import Link from "next/link";
import React from "react";

interface TaskCompProps {
  children: React.ReactNode;
  params: any;
}

export default async function Index({ children, params }: TaskCompProps) {
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${params.id}`
  );
  const json: Todo = await data.json();

  const userData = await fetch(
    `https://jsonplaceholder.typicode.com/users/${json.userId}`
  );
  const user = await userData.json();

  if (Number(params.id) === 2) {
    throw new Error();
  }

  return (
    <div>
      <div className="border border-success p-4 mb-4">
        <h2>{json.title}</h2>
        assigned to:{" "}
        <Link href={`/todos/${params.id}/user/${user.id}`}>{user.name}</Link>
      </div>

      <div>{children}</div>
    </div>
  );
}
