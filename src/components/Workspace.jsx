import React from "react"

const Workspace = () => {
  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input type="text" id="title" autoFocus autoComplete="off" />
        <textarea id="body" placeholder="Write your note here..." />
      </div>
      <div className="app-main-note-preview">
        <h1 className="preview-title">Title</h1>
        <div className="markdown-preview">note preview</div>
      </div>
    </div>
  )
}

export default Workspace
