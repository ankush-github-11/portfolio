"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CodeBlock() {
  const fileNameTitle = ["Card.tsx", "Regression.py", "server.js", "users.php", "listBuckets.js"];
  const codes = [
    `import { useState } from "react";

export default function Card() {
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
}`,
    `from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression

iris = load_iris()
X, y = iris.data, iris.target

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

model = LogisticRegression(max_iter=200)
model.fit(X_train, y_train)

y_pred = model.predict(X_test)
print("Predictions:", y_pred)
print("Accuracy:", model.score(X_test, y_test))`,

`import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/mydb");

const userSchema = new mongoose.Schema({ 
  name: String, email: String 
});
const User = mongoose.model("User", userSchema);

app.post("/users", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json(user);
});

app.listen(3000, () => console.log("Server running on port 3000"));
`,
`<?php
$host = "localhost, $user = "root", $pass = "", $dbname = "mydb";

$conn = new mysqli($host, $user, $pass, $dbname);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM users";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
    echo "ID: " . $row["id"]. " - Name: " . $row["name"]. "<br>";
  }
}
else echo "0 results";

$conn->close();
?>
`,
`import { S3Client, ListBucketsCommand } from "@aws-sdk/client-s3";

const s3 = new S3Client({
  region: "ap-south-1",
});

async function listBuckets() {
  try {
    const data = await s3.send(new ListBucketsCommand({}));
    console.log("S3 Buckets:");
    data.Buckets.forEach((bucket) => {
      console.log(" -", bucket.Name);
    });
  } catch (err) {
    console.error("Error:", err);
  }
}

listBuckets();
`,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % codes.length);
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, [codes.length]);

  return (
    <>
      <div className="h-10 bg-textcolor/5 rounded-tl-2xl rounded-tr-2xl flex items-center gap-2">
        <div className="bg-red-500 h-4 w-4 rounded-full ml-4" />
        <div className="bg-yellow-500 h-4 w-4 rounded-full" />
        <div className="bg-green-500 h-4 w-4 rounded-full" />

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="ml-2 w-fit h-10 bg-inherit flex items-center justify-center px-5 rounded-tl-lg rounded-tr-lg"
          >
            {fileNameTitle[currentIndex]}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="p-2">
        <AnimatePresence mode="wait">
          <motion.pre
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="whitespace-pre-wrap break-words text-sm sm:text-base md:p-3 p-0 rounded-lg overflow-x-auto code-block"
          >
            <code>{codes[currentIndex]}</code>
          </motion.pre>
        </AnimatePresence>
      </div>
    </>
  );
}
