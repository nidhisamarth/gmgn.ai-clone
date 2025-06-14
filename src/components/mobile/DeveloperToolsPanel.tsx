
import React from 'react';

interface DeveloperToolsPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const DeveloperToolsPanel = ({ isOpen, onClose }: DeveloperToolsPanelProps) => {
  console.log('DeveloperToolsPanel render - isOpen:', isOpen);
  
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      console.log('Developer tools backdrop clicked - closing panel');
      onClose();
    }
  };

  const handleCloseClick = () => {
    console.log('Developer tools close button clicked');
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-gray-900 rounded-lg p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-white text-lg font-semibold">Developer Tools</h2>
          <button
            onClick={handleCloseClick}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Developer Tools Content */}
        <div className="space-y-6">
          {/* Console Section */}
          <div>
            <h3 className="text-white text-sm font-medium mb-3">Console</h3>
            <div className="bg-black rounded-lg p-3 font-mono text-xs">
              <div className="text-green-400">$ Ready for development</div>
              <div className="text-gray-400 mt-1">Type commands here...</div>
            </div>
          </div>

          {/* Debug Options */}
          <div>
            <h3 className="text-white text-sm font-medium mb-3">Debug Options</h3>
            <div className="space-y-2">
              <button className="w-full bg-gray-800 hover:bg-gray-700 border border-gray-600 rounded px-3 py-2 text-sm text-white text-left transition-colors">
                Show Component Tree
              </button>
              <button className="w-full bg-gray-800 hover:bg-gray-700 border border-gray-600 rounded px-3 py-2 text-sm text-white text-left transition-colors">
                Network Requests
              </button>
              <button className="w-full bg-gray-800 hover:bg-gray-700 border border-gray-600 rounded px-3 py-2 text-sm text-white text-left transition-colors">
                Performance Monitor
              </button>
              <button className="w-full bg-gray-800 hover:bg-gray-700 border border-gray-600 rounded px-3 py-2 text-sm text-white text-left transition-colors">
                Local Storage
              </button>
            </div>
          </div>

          {/* System Info */}
          <div>
            <h3 className="text-white text-sm font-medium mb-3">System Info</h3>
            <div className="bg-gray-800 rounded-lg p-3 text-xs text-gray-300 space-y-1">
              <div>React Version: 18.3.1</div>
              <div>Environment: Development</div>
              <div>Build: Latest</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperToolsPanel;
