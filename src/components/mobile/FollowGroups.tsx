
import React, { useState } from 'react';

const FollowGroups = () => {
  const [activeGroup, setActiveGroup] = useState('All');
  
  const groups = ['All', 'Default'];

  return (
    <div className="px-4 py-3 border-b border-gray-800">
      <div className="flex items-center gap-3">
        {groups.map((group) => (
          <button
            key={group}
            onClick={() => setActiveGroup(group)}
            className={`px-3 py-1.5 rounded text-sm transition-colors ${
              activeGroup === group
                ? 'text-white'
                : 'text-gray-500 border border-gray-600'
            }`}
          >
            {group}
          </button>
        ))}
        <button className="text-green-400 text-sm hover:text-green-300 transition-colors">
          + New Group
        </button>
      </div>
    </div>
  );
};

export default FollowGroups;
