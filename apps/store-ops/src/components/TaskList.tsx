import React, { useState } from "react";
import type { Task } from "./TaskListTypes";
import { PhotoUploader } from "./PhotoUploader";
import { ReportForm } from "./ReportForm";

export function TaskList({ initialTasks }: { initialTasks: Task[] }) {
  const [tasks, setTasks] = useState<Task[]>(() => initialTasks);
  const [reporting, setReporting] = useState<Task | null>(null);

  function toggle(id: string) {
    setTasks((t) => t.map((x) => (x.id === id ? { ...x, completed: !x.completed } : x)));
  }

  function addPhoto(id: string, dataUrl: string) {
    setTasks((t) => t.map((x) => (x.id === id ? { ...x, photo: dataUrl } : x)));
  }

  function priorityHint(task: Task) {
    // Simple heuristic: keywords map to priority
    const text = task.title.toLowerCase();
    if (text.includes('urgent') || text.includes('verify') || text.includes('check')) return 'High';
    if (text.includes('photo') || text.includes('report')) return 'Medium';
    return 'Low';
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div key={task.id} style={{display:'flex',alignItems:'center',gap:12}}>
          <label className={`task ${task.completed ? 'done' : ''}`} style={{flex:1}}>
            <input type="checkbox" checked={task.completed} onChange={() => toggle(task.id)} />
            <span style={{marginLeft:8}}>{task.title}</span>
            <small style={{marginLeft:12,color:'#6b7280'}}>Priority: {priorityHint(task)}</small>
          </label>

          <div style={{display:'flex',flexDirection:'column',gap:6}}>
            <PhotoUploader onPhoto={(data)=>addPhoto(task.id, data)} />
            {task.photo && <img src={task.photo} alt="task" style={{width:80,borderRadius:6}} />}
            <button onClick={()=>setReporting(task)} style={{padding:'6px 8px'}}>Report</button>
          </div>
        </div>
      ))}

      {reporting && (
        <div style={{position:'fixed',right:20,bottom:20,background:'#fff',padding:12,borderRadius:8,border:'1px solid #eee'}}>
          <ReportForm onClose={()=>setReporting(null)} />
        </div>
      )}
    </div>
  );
}
