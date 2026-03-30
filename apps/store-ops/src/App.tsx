import React from "react";
import { TaskList } from "./components/TaskList";
import tasks from "./data/tasks";

export default function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Store Ops  Daily Tasks</h1>
        <p className="muted">Lightweight prototype: view and complete tasks</p>
      </header>

      <main>
        <TaskList initialTasks={tasks} />
      </main>
    </div>
  );
}
