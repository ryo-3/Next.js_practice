"use client";

import React from "react";
import TodoManager from "@/components/TodoManager";

const IndexPage = () => {
  return (
    <div className="">
      <h1 className="text-3xl mt-7 mb-5 px-4">Todoリスト</h1>
      <TodoManager />
    </div>
  );
};

export default IndexPage;
