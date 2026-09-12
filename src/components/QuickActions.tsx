import React from 'react';
import {
  Navigation,
  Bookmark,
  Compass,
  Smartphone,
  Share2,
  Tag,
  Phone,
  Copy,
  ExternalLink
} from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

interface QuickActionsProps {
  isSaved: boolean;
  onToggleSave: () => void;
  onOpenDirections: () => void;
  onOpenNearby: () => void;
  onOpenSendToPhone: () => void;
  onOpenShare: () => void;
  onOpenAddLabel: () => void;
  onCopyPlusCode: () => void;
  currentLabel?: string | null;
}

export const QuickActions: React.FC<QuickActionsProps> = ({
  isSaved,
  onToggleSave,
  onOpenDirections,
  onOpenNearby,
  onOpenSendToPhone,
  onOpenShare,
  onOpenAddLabel,
  onCopyPlusCode,
  currentLabel,
}) => {
  return (
    <div className="w-full bg-white rounded-2xl border border-stone-200/90 shadow-sm p-4 sm:p-5">
      {/* Primary Google Maps Style Action Bar */}
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3">
        {/* Directions */}
        <button
          onClick={onOpenDirections}
          className="flex flex-col items-center justify-center p-3 rounded-xl hover:bg-stone-50 border border-transparent hover:border-stone-200 text-stone-700 hover:text-stone-950 transition-all group cursor-pointer"
        >
          <div className="w-11 h-11 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-1.5 group-hover:scale-105 group-hover:bg-blue-100 transition-all">
            <Navigation className="w-5 h-5 fill-blue-600" />
          </div>
          <span className="text-xs font-semibold">Directions</span>
        </button>

        {/* Save */}
        <button
          onClick={onToggleSave}
          className="flex flex-col items-center justify-center p-3 rounded-xl hover:bg-stone-50 border border-transparent hover:border-stone-200 text-stone-700 hover:text-stone-950 transition-all group cursor-pointer"
        >
          <div className={`w-11 h-11 rounded-full flex items-center justify-center mb-1.5 group-hover:scale-105 transition-all ${
            isSaved ? 'bg-amber-100 text-amber-600' : 'bg-stone-100 text-stone-600 group-hover:bg-amber-50 group-hover:text-amber-600'
          }`}>
            <Bookmark className={`w-5 h-5 ${isSaved ? 'fill-amber-600' : ''}`} />
          </div>
          <span className="text-xs font-semibold">{isSaved ? 'Saved' : 'Save'}</span>
        </button>

        {/* Nearby */}
        <button
          onClick={onOpenNearby}
          className="flex flex-col items-center justify-center p-3 rounded-xl hover:bg-stone-50 border border-transparent hover:border-stone-200 text-stone-700 hover:text-stone-950 transition-all group cursor-pointer"
        >
          <div className="w-11 h-11 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-1.5 group-hover:scale-105 group-hover:bg-emerald-100 transition-all">
            <Compass className="w-5 h-5" />
          </div>
          <span className="text-xs font-semibold">Nearby</span>
        </button>

        {/* Send to phone */}
        <button
          onClick={onOpenSendToPhone}
          className="flex flex-col items-center justify-center p-3 rounded-xl hover:bg-stone-50 border border-transparent hover:border-stone-200 text-stone-700 hover:text-stone-950 transition-all group cursor-pointer"
        >
          <div className="w-11 h-11 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center mb-1.5 group-hover:scale-105 group-hover:bg-purple-100 transition-all">
            <Smartphone className="w-5 h-5" />
          </div>
          <span className="text-xs font-semibold text-center leading-tight">Send to phone</span>
        </button>

        {/* Share */}
        <button
          onClick={onOpenShare}
          className="flex flex-col items-center justify-center p-3 rounded-xl hover:bg-stone-50 border border-transparent hover:border-stone-200 text-stone-700 hover:text-stone-950 transition-all group cursor-pointer"
        >
          <div className="w-11 h-11 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center mb-1.5 group-hover:scale-105 group-hover:bg-orange-100 transition-all">
            <Share2 className="w-5 h-5" />
          </div>
          <span className="text-xs font-semibold">Share</span>
        </button>

        {/* Add a label */}
        <button
          onClick={onOpenAddLabel}
          className="flex flex-col items-center justify-center p-3 rounded-xl hover:bg-stone-50 border border-transparent hover:border-stone-200 text-stone-700 hover:text-stone-950 transition-all group cursor-pointer"
        >
          <div className={`w-11 h-11 rounded-full flex items-center justify-center mb-1.5 group-hover:scale-105 transition-all ${
            currentLabel ? 'bg-amber-100 text-amber-700' : 'bg-stone-100 text-stone-600 group-hover:bg-stone-200'
          }`}>
            <Tag className="w-5 h-5" />
          </div>
          <span className="text-xs font-semibold text-center leading-tight truncate max-w-full">
            {currentLabel ? 'Edit label' : 'Add a label'}
          </span>
        </button>
      </div>

      {/* Direct Detail Strip with Mile 11, Phone, and Plus Code */}
      <div className="mt-4 pt-3.5 border-t border-stone-100 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm text-stone-600">
        <div className="flex flex-wrap items-center gap-3 sm:gap-6">
          <div className="flex items-center gap-1.5 font-medium text-stone-900">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Location: <strong className="font-semibold text-stone-900">{HOTEL_INFO.shortAddress}</strong></span>
          </div>

          <a
            href={`tel:${HOTEL_INFO.phone.replace(/\s+/g, '')}`}
            className="inline-flex items-center gap-1.5 font-semibold text-stone-800 hover:text-amber-700 hover:underline transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-amber-600" />
            <span>{HOTEL_INFO.phone}</span>
          </a>

          <div className="flex items-center gap-1.5 bg-stone-100 px-2.5 py-1 rounded-md text-stone-700 font-mono text-xs">
            <span>Plus Code: <strong className="font-semibold">{HOTEL_INFO.plusCode}</strong></span>
            <button
              onClick={onCopyPlusCode}
              title="Copy Plus Code"
              className="p-1 hover:text-stone-950 hover:bg-stone-200 rounded transition-colors"
            >
              <Copy className="w-3 h-3" />
            </button>
          </div>
        </div>

        <a
          href={HOTEL_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors"
        >
          <span>Open on Google Maps</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};
