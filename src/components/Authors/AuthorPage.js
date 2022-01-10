import React from "react";
import { useParams } from "react-router-dom";

import "./AuthorPage.css";

function AuthorPage() {
  const { author_id } = useParams();
  return (
    <div>
      <h1>{author_id}</h1>
    </div>
  );
}

export default AuthorPage;
