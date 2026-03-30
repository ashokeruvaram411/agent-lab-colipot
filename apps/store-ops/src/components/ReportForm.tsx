import React, { useState } from "react";

export function ReportForm({ onClose }: { onClose?: () => void }) {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  function submit() {
    const reports = JSON.parse(localStorage.getItem("storeOpsReports") || "[]");
    reports.push({ id: Date.now(), title, details, createdAt: new Date().toISOString() });
    localStorage.setItem("storeOpsReports", JSON.stringify(reports));
    setTitle("");
    setDetails("");
    alert("Report saved locally (simulated send)");
    onClose?.();
  }

  return (
    <div style={{padding:12,background:'#fff',borderRadius:8,border:'1px solid #eee'}}>
      <h3>Report an issue</h3>
      <input value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Short title" style={{width:'100%',padding:8,marginTop:8}} />
      <textarea value={details} onChange={(e)=>setDetails(e.target.value)} placeholder="Details" style={{width:'100%',padding:8,marginTop:8}} />
      <div style={{display:'flex',gap:8,marginTop:8}}>
        <button onClick={submit} style={{background:'#2563eb',color:'#fff',padding:'8px 12px',borderRadius:6}}>Send</button>
        <button onClick={onClose} style={{padding:'8px 12px'}}>Cancel</button>
      </div>
    </div>
  );
}
