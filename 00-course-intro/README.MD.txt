# 📘 Course Introduction

Welcome to the **Playwright + TypeScript Automation Mastery** course!  
This module provides foundational understanding of automation, the Playwright framework, and the shift from JavaScript to TypeScript.

---

## 🧪 Automation Basics

### ✅ What is Automation Testing?
Automation Testing uses software tools to execute test cases automatically, validate functionality, and reduce manual effort.

### 🔧 Why is Automation Important?
- Improves test coverage and accuracy
- Reduces time and effort
- Enables continuous testing & integration
- Useful for regression testing

### 🔍 Types of Automation Testing
- **Unit Testing** – testing individual components
- **Integration Testing** – checking communication between modules
- **UI Testing** – validating user interfaces
- **End-to-End Testing** – testing flows from start to finish
- **API Testing** – validating backend logic without UI

---

## 🎭 Introduction to Playwright

### 📌 What is Playwright?
Playwright is a modern open-source automation framework created by Microsoft for fast and reliable testing of web applications across **Chromium**, **Firefox**, and **WebKit**.

### 🚀 Key Features
- Cross-browser support (Chrome, Firefox, Safari)
- Supports JS/TS, Python, C#, Java
- Auto-waiting and retry-ability
- Native support for **network mocking**, **video recording**, **tracing**, and **parallel testing**
- Built-in **Playwright Test Runner**

### 🆚 Playwright vs Selenium
| Feature               | Playwright                | Selenium              |
|-----------------------|---------------------------|------------------------|
| Built-in test runner  | ✅                         | ❌                    |
| Auto-waiting          | ✅                         | ❌                    |
| Modern API            | ✅                         | ❌ (Verbose)           |
| Browser Support       | Chromium, Firefox, WebKit | All major browsers     |
| Test Speed            | Fast                      | Medium/Slow            |

### 🕵️‍♂️ Debugging Tools
- **Playwright Inspector** – pause and inspect tests
- **Codegen** – record and generate scripts from user actions
- **Trace Viewer** – detailed trace report of test runs

---

## 💡 JavaScript vs TypeScript

### 🌐 JavaScript (JS)
- Dynamic, loosely typed
- Easier to get started with
- Common in front-end test scripts

### 🧩 TypeScript (TS)
- Superset of JS with **static typing**
- Provides **type safety**, **better IDE support**, **code navigation**, and **refactoring tools**
- Helps build **scalable**, **maintainable** test codebases

### ✅ Why Use TypeScript in Automation?
- Prevents type-related bugs early
- Improves code readability and developer experience
- Strong community support and integration with modern tooling (e.g., VS Code)

### 🔄 Example Comparison

```js
// JavaScript
function add(a, b) {
  return a + b;
}
