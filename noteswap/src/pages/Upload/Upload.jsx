// src/pages/Upload/Upload.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Upload.css';
import { FiUpload, FiFileText, FiX } from 'react-icons/fi';

const Upload = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle upload logic here
    console.log({ title, subject, description, file });
    // Reset form
    setFile(null);
    setTitle('');
    setSubject('');
    setDescription('');
  };

  return (
    <div className="upload-page">
      <div className="upload-header">
        <h1>Share Your Notes</h1>
        <p>Upload your study materials to help fellow students</p>
      </div>

      <form onSubmit={handleSubmit} className="upload-form">
        <div className="form-group">
          <label>Title*</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Give your notes a clear title"
            required
          />
        </div>

        <div className="form-group">
          <label>Subject*</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="e.g. Calculus, Organic Chemistry"
            required
          />
        </div>

        <div className="form-group">
          <label>Description*</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Briefly describe the content (key topics, chapters, etc.)"
            rows="4"
            required
          />
        </div>

        <div className="file-upload">
          <label>
            {file ? (
              <div className="file-preview">
                <FiFileText className="file-icon" />
                <span>{file.name}</span>
                <button 
                  type="button" 
                  onClick={() => setFile(null)}
                  className="remove-btn"
                >
                  <FiX />
                </button>
              </div>
            ) : (
              <>
                <div className="upload-area">
                  <FiUpload className="upload-icon" />
                  <p>Click to upload or drag and drop</p>
                  <p className="file-types">PDF, DOC, DOCX, TXT (Max 10MB)</p>
                </div>
                <input
                  type="file"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx,.txt"
                  required
                  className="file-input"
                />
              </>
            )}
          </label>
        </div>

        <div className="form-footer">
          <p className="disclaimer">
            By uploading, you agree to our <Link to="/terms">Terms</Link> and confirm these are your original notes.
          </p>
          <button type="submit" className="submit-btn">
            Upload Notes
          </button>
        </div>
      </form>
    </div>
  );
};

export default Upload;