import React, { useState } from 'react'

export function Paginate(data, postPerPage) {
    const [currentPage, setCurrentPAge] = useState(1);

    const indexOfLastPost = currentPage* postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    return data.slice(indexOfFirstPost, indexOfLastPost);
    

}
