import React, { useRef, useState } from "react";
import "./CodeEditor.module.css";

function CodeEditor() {
  const codeInputRef = useRef(null);
  const codeEditorRef = useRef(null);
  const [isLocked, setIsLocked] = useState(false);

  const handleCopyClick = () => {
    if (codeInputRef.current) {
      codeInputRef.current.select();
      document.execCommand("copy");
      document.getSelection().removeAllRanges();
    }
  };

  const handleLockClick = () => {
    setIsLocked(!isLocked);
    if (codeInputRef.current) {
      codeInputRef.current.readOnly = isLocked; // Set readOnly attribute
    }
  };

  const handleSaveClick = () => {
    alert("Code saved!");
  };

  return (
    <div
      className={`code-editor ${isLocked ? "locked" : "unlocked"}`}
      ref={codeEditorRef}
    >
      <button onClick={handleCopyClick}>Copy</button>
      <textarea
        ref={codeInputRef}
        id="code-input"
        placeholder="Enter your code here"
        readOnly={isLocked}
      ></textarea>
      <button onClick={handleLockClick}>{isLocked ? "Unlock" : "Lock"}</button>
      <button onClick={handleSaveClick}>Save</button>
    </div>
  );
}

export default CodeEditor;
