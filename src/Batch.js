import React from 'react'
import { useState } from 'react';
function Batch() {
    const [search, setSearch] = useState('');
  const batches = [
    { id: '1', name: 'Batch 1', status: 'Active' },
    { id: '2', name: 'Batch 2', status: 'Inactive' },
    { id: '3', name: 'Batch 3', status: 'Active' },
  ];

  const filteredBatches = batches.filter(batch =>
    batch.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Batches"
      />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredBatches.map(batch => (
            <tr key={batch.id}>
              <td>{batch.id}</td>
              <td>{batch.name}</td>
              <td>{batch.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Batch
