import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import notesData from '../data/notesData'; // Assume this file exists with sample data

function BrowseNotes() {
  const [search, setSearch] = useState("");

  const filteredNotes = notesData.filter(note =>
    note.title.toLowerCase().includes(search.toLowerCase()) ||
    note.subject.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Browse Notes</h1>
      <input
        type="text"
        placeholder="Search by title or subject..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredNotes.length > 0 ? (
          filteredNotes.map(note => (
            <div key={note.id} className="note-card">
              <h2 className="text-xl font-semibold">{note.title}</h2>
              <p><strong>Subject:</strong> {note.subject}</p>
              <p><strong>Year:</strong> {note.year}</p>
              <p><strong>Uploaded by:</strong> {note.uploadedBy}</p>
              <Link to={`/note/${note.id}`} className="text-blue-600 hover:underline">View Details</Link>
            </div>
          ))
        ) : (
          <p>No notes found.</p>
        )}
      </div>
    </div>
  );
}

export default BrowseNotes;