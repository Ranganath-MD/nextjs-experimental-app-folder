"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const TodoListItem: React.FC<Todo> = ({ id, title, completed }) => {
  const pathname = usePathname();
  const pathId = Number(pathname?.split("/")[2]);

  return (
    <Link
      href={`/todos/${id}`}
      className="text-dark text-decoration-none"
    >
      <li
        className={`list-group-item list-group-item-action d-flex justify-content-between align-items-center ${
          pathId === id ? "list-group-item-success" : ""
        }`}
      >
        {title}
        <span
          className={`badge ${
            completed
              ? `text-success bg-success bg-opacity-10 border border-success border-opacity-10 rounded-2`
              : "text-warning bg-warning bg-opacity-10 border border-warning border-opacity-10 rounded-2"
          } rounded-pill`}
        >
          {completed ? "Done" : "Pending"}
        </span>
      </li>
    </Link>
  );
};
