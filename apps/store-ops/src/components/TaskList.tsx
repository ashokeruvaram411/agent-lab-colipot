import React, { useState } from "react";

export interface Task { id: string; title: string; completed: boolean; }

export function TaskList({ initialTasks }: { initialTasks: Task[] }) {
  const [tasks, setTasks] = useState<Task[]>(() => initialTasks);

  function toggle(id: string) {
    setTasks((t) => t.map((x) => (x.id === id ? { ...x, completed: !x.completed } : x)));
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <label key={task.id} className={`task ${task.completed ? 'done' : ''}`}>
          <input type="checkbox" checked={task.completed} onChange={() => toggle(task.id)} />
          <span>{task.title}</span>
        </label>
      ))}
    </div>
  );
}
