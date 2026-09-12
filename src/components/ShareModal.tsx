import React, { useState } from 'react';
import { X, Share2, Copy, Check, MessageSquare } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCopySuccess: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose, onCopySuccess }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentUrl = typeof window !== 'undefined' ? window.location.href : HOTEL_INFO.googleMapsUrl;
  const shareText = `${HOTEL_INFO.name} - Hotel in ${HOTEL_INFO.shortAddress}. Phone: ${HOTEL_INFO.phone}, Plus Code: ${HOTEL_INFO.plusCode}. Check it out:`;

  const handleCopy = () => {
    navigator.clipboard.writeText(`${shareText} ${currentUrl}`);
    setCopied(true);
    onCopySuccess();
    setTimeout(() => setCopied(false), 2000);
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${HOTEL_INFO.name} - Mile 11 Hotel`,
          text: shareText,
          url: currentUrl,
        });
        onClose();
      } catch (err) {
        // user cancelled or failed
      }
    } else {
      handleCopy();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-xs">
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-stone-100 bg-stone-50/80">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-700 flex items-center justify-center">
              <Share2 className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-stone-900">Share Chequers Lodge</h3>
              <p className="text-xs text-stone-500">Send location & lodge information to contacts</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-700 rounded-full hover:bg-stone-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Quick share options grid */}
          <div className="grid grid-cols-2 gap-3">
            <a
              href={`https://wa.me/?text=${encodeURIComponent(`${shareText} ${currentUrl}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-2xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-900 flex items-center gap-2.5 text-xs font-semibold transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                <MessageSquare className="w-4 h-4" />
              </div>
              <span>WhatsApp</span>
            </a>

            <button
              onClick={handleNativeShare}
              className="p-3 rounded-2xl bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-900 flex items-center gap-2.5 text-xs font-semibold transition-colors cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0">
                <Share2 className="w-4 h-4" />
              </div>
              <span>Device Share</span>
            </button>
          </div>

          {/* Copy Link Input Bar */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-stone-700">
              Direct Page & Location Link
            </label>
            <div className="flex items-center gap-2 bg-stone-50 border border-stone-200 p-1.5 rounded-xl">
              <input
                type="text"
                readOnly
                value={currentUrl}
                className="flex-1 bg-transparent px-2 text-xs text-stone-700 outline-none truncate"
              />
              <button
                onClick={handleCopy}
                className="px-3.5 py-1.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-amber-100 text-xs font-semibold flex items-center gap-1.5 shrink-0 transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>

          {/* Quick Details Box */}
          <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200/80 text-xs text-stone-600 space-y-1">
            <div className="font-bold text-stone-900">{HOTEL_INFO.name}</div>
            <div>Address: {HOTEL_INFO.shortAddress} (Plus Code: {HOTEL_INFO.plusCode})</div>
            <div>Phone: {HOTEL_INFO.phone}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
