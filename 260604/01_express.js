// commonjs es-module
const express = require("express");
// 자동으로 안잡히면 터미널에서 `npm i express`를 안한 것

const app = express(); // 호출
const PORT = 3333;
app.use(express.json()); // 서버가 json 데이터를 인식할 수 있도록

app.get("/", (req, res) => {
  res.send("안녕하세요 GET 요청은 처음이라...");
});

app.post("/", (req, res) => {
  res.json({
    message: "POST 요청 성공",
  });
});

app.post("/chat", (req, res) => {
  const { msg } = req.body;
  res.json({
    reply: `${msg}라고 말씀하셨네요`,
  });
});

// 이미 실행 중인 3000 포트가 있다면 3001이나 3333 등 대체 포트로 실행
app.listen(PORT, () => {
  // console.log("3000에서 서버 실행 중");
  console.log(`${PORT}에서 서버 실행 중`);
});
// 터미널에
// node 01_express.js
