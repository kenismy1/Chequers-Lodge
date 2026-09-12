import React, { useState } from 'react';
import { X, Tag, History, Check, Trash2, Bookmark } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

interface AddLabelModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLabel: string | null;
  onSaveLabel: (label: string | null, note?: string) => void;
  userNote?: string;
}

export const AddLabelModal: React.FC<AddLabelModalProps> = ({
  isOpen,
  onClose,
  currentLabel,
  onSaveLabel,
  userNote = '',
}) => {
  const [label, setLabel] = useState(currentLabel || '');
  const [note, setNote] = useState(userNote);

  const presetLabels = [
    'Weekend Getaway',
    'Transit Lodge',
    'Favorite Spot',
    'Business in Kasoa',
    'Family Vacation',
    'Near Kokrobite Beach',
  ];

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveLabel(label.trim() || null, note.trim());
    onClose();
  };

  const handleRemove = () => {
    onSaveLabel(null, '');
    setLabel('');
    setNote('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-xs">
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-stone-100 bg-stone-50/80">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center">
              <Tag className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-stone-900">
                {currentLabel ? 'Edit Label' : 'Add a label'}
              </h3>
              <p className="text-xs text-stone-500">Google Maps style personal tag & notes</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-700 rounded-full hover:bg-stone-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1">
              Personal Label
            </label>
            <input
              type="text"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              placeholder="e.g. My Favorite Mile 11 Hotel"
              className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          {/* Quick preset chips */}
          <div className="space-y-1.5">
            <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider">
              Quick Suggestions
            </span>
            <div className="flex flex-wrap gap-1.5">
              {presetLabels.map((preset) => (
                <button
                  type="button"
                  key={preset}
                  onClick={() => setLabel(preset)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                    label === preset
                      ? 'bg-amber-100 text-amber-900 border border-amber-300'
                      : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                  }`}
                >
                  {preset}
                </button>
              ))}
            </div>
          </div>

          {/* Personal Note */}
          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1">
              Personal Notes (Private to your device)
            </label>
            <textarea
              rows={3}
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="e.g. Ask for room with balcony, gate closes at midnight, remember phone 020 174 8706..."
              className="w-full px-3.5 py-2 rounded-xl border border-stone-300 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          {/* Maps History Info Box */}
          <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 flex items-start gap-2.5 text-xs text-stone-600">
            <History className="w-4 h-4 text-stone-500 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-stone-900">Your Maps history</span>
              <p className="text-[11px] text-stone-500 mt-0.5">
                Labels and saved notes help you instantly identify Chequers Lodge ({HOTEL_INFO.plusCode}) across your travel plans.
              </p>
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex items-center justify-between pt-2">
            {currentLabel ? (
              <button
                type="button"
                onClick={handleRemove}
                className="text-rose-600 hover:text-rose-700 text-xs font-semibold flex items-center gap-1 cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Remove label</span>
              </button>
            ) : <div />}

            <div className="flex gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl border border-stone-300 text-xs font-semibold text-stone-700 hover:bg-stone-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-amber-100 text-xs font-semibold shadow-xs"
              >
                Save Label
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
