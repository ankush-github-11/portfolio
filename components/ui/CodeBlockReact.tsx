"use client";
import React from "react";

export default function CodeBlockReact() {
  const code = `
import { useState } from "react";

export default function Hello() {
  const [msg, setMsg] = useState("");

  const sayHi = async (e: any) => {
    e.preventDefault();
    const res = await fetch("/api/hello", {
      method: "POST",
      body: JSON.stringify({ name: e.target.name.value }),
    });
    setMsg(await res.text());
  };

  return (
    <form onSubmit={sayHi}>
      <input name="name" placeholder="Your name" />
      <button>Send</button>
      <p>{msg}</p>
    </form>
  );
}
 `;

  return (
    <pre className="whitespace-pre-wrap break-words text-sm sm:text-base p-3 rounded-lg overflow-x-auto">
      <code>{code}</code>
    </pre>
  );
}
