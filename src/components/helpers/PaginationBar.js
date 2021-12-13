import React from "react";

export function PaginationBar({ postPerPage, totalPosts }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            {number}
          </li>
        ))}
      </ul>
    </div>
  );
}
