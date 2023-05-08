const express = require("express")
const app = express()
const port = 3000

class User {
  constructor(email, password) {
    this.email = email
    this.password = password
  }
}

class TestCase {
  constructor(input, output) {
    this.input = input;
    this.output = output;
  }
}

class Question {
  constructor(id, title, description, testcases) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.testcases = testcases;
  }
}

const USERS = [];

const QUESTIONS = [
  new Question(
    id = 1,
    title = "Two Sum",
    description = `Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

      You may assume that each input would have exactly one solution, and you may not use the same element twice.

      You can return the answer in any order.`,
    testcases = [
      new TestCase(
        input = "nums = [2,7,11,15], target = 9",
        output = "[0,1]"
      )
    ]
  ),
  new Question(
    id = 2,
    title = "Add Two Numbers",
    description = `You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.`,
    testcases = [
      new TestCase(
        input = "l1 = [2,4,3], l2 = [5,6,4]",
        output = "[7,0,8]"
      ),
      new TestCase(
        input = "l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]",
        output = "[8,9,9,9,0,0,0,1]"
      )
    ]
  )
]

const SUBMISSIONS = [
  {
    question_id = "1"
  
  }
]

app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.post("/signup", (req, res) => {
  let newUser = new User(req.email, req.password);
  if (!USERS.includes(newUser)) {
    USERS.push(newUser)
    res.send("200")
  }
})

app.post("/login", (req, res) => {
  let user = new User(req.email, req.password);
  if (USERS.includes(user)) {
    console.log("login succesfull");
    res.send("token");
  }
})

app.get("/questions", (req, res) => {
  res.send(QUESTIONS)
})

app.post("/submissions", (req, res) => {
  res.send("hello to submissions")
})

app.get("/submissions", (req, res) => {
  res.send("hello to submissions")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
