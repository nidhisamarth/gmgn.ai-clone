
import React, { useState } from 'react';
import { Check } from 'lucide-react';

interface WalletPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const WalletPanel = ({ isOpen, onClose }: WalletPanelProps) => {
  const [selectedWallet, setSelectedWallet] = useState('W1 Wallet1');

  console.log('WalletPanel render - isOpen:', isOpen);
  
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      console.log('Wallet backdrop clicked - closing panel');
      onClose();
    }
  };

  const handleCloseClick = () => {
    console.log('Wallet close button clicked');
    onClose();
  };

  const handleWalletSelect = (walletName: string) => {
    setSelectedWallet(walletName);
    console.log('Wallet selected:', walletName);
  };

  return (
    <div 
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-gray-900 rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          {/* Left section with folder icon and count */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-gray-800 border border-gray-600 px-3 py-2 rounded">
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 4h3l1-1h7v9H2V4z" stroke="white" strokeWidth="1" fill="none" />
              </svg>
              <span className="text-white text-sm">1</span>
              <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </div>
            
            {/* TP/SL badge */}
            <div className="bg-gray-700 px-2 py-1 rounded text-xs text-gray-300">
              TP/SL
            </div>
            
            {/* Edit icon */}
            <button className="p-1">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </button>
            
            {/* Buy button */}
            <button className="bg-green-600 px-3 py-1 rounded text-sm text-white flex items-center gap-1">
              <div className="w-3 h-3 bg-green-400 rounded-full flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              </div>
              Buy
            </button>
          </div>

          {/* Right section with P1, P2 */}
          <div className="flex items-center gap-2">
            <button className="bg-gray-700 px-3 py-1 rounded text-sm text-white">
              P1
            </button>
            <button className="bg-gray-800 px-3 py-1 rounded text-sm text-gray-400">
              P2
            </button>
          </div>
        </div>

        {/* Wallet Section */}
        <div className="p-4">
          <h2 className="text-white text-lg font-medium mb-4">Wallet</h2>
          
          {/* Wallet Item */}
          <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg border border-gray-700">
            <div className="flex items-center gap-3">
              {/* Checkmark */}
              <div className="w-5 h-5 bg-white rounded flex items-center justify-center">
                <Check className="w-3 h-3 text-black" />
              </div>
              
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 4h3l1-1h7v9H2V4z" stroke="white" strokeWidth="1" fill="none" />
                  </svg>
                  <span className="text-white font-medium">W1 Wallet1</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-gray-400 text-sm">A4Z7C...H6n</span>
                  <button className="text-gray-400 hover:text-white">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                      <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletPanel;
