import React, { useState } from 'react';
import { X, Calendar, User, Phone, Mail, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';
import { HOTEL_INFO, ROOMS_DATA } from '../data/hotelData';
import { Room } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedRoom: Room | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  selectedRoom,
}) => {
  const defaultRoom = selectedRoom || ROOMS_DATA[0];

  const today = new Date().toISOString().split('T')[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];

  const [roomId, setRoomId] = useState(defaultRoom.id);
  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState(tomorrow);
  const [guests, setGuests] = useState('1');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Sync if selectedRoom prop changes
  React.useEffect(() => {
    if (selectedRoom) {
      setRoomId(selectedRoom.id);
    }
  }, [selectedRoom]);

  if (!isOpen) return null;

  const currentRoom = ROOMS_DATA.find((r) => r.id === roomId) || defaultRoom;

  // Calculate estimated nights & total
  const nights = Math.max(
    1,
    Math.round((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / (1000 * 60 * 60 * 24))
  );
  const totalGHS = currentRoom.priceGHS * nights;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `Hello Chequers Lodge, I would like to inquire about booking the ${currentRoom.name} from ${checkIn} to ${checkOut} (${nights} night${nights > 1 ? 's' : ''}) for ${guests} guest(s). My name is ${fullName || 'Guest'}, phone: ${phone || 'N/A'}.`
    );
    window.open(`https://wa.me/233201748706?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden my-8">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-stone-100 bg-stone-50/70">
          <div>
            <span className="text-[11px] font-bold tracking-widest text-amber-700 uppercase">
              Reservation Inquiry
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
              Book at Chequers Lodge
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-stone-700 rounded-full hover:bg-stone-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div className="space-y-2">
              <h4 className="text-2xl font-serif font-bold text-stone-900">
                Inquiry Received!
              </h4>
              <p className="text-sm text-stone-600 max-w-md mx-auto">
                Thank you, <strong>{fullName || 'Guest'}</strong>! Our front desk team at Mile 11 has logged your request for the <strong>{currentRoom.name}</strong>.
              </p>
              <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 text-left text-xs text-stone-700 space-y-1.5 max-w-sm mx-auto">
                <div>Dates: <strong>{checkIn}</strong> to <strong>{checkOut}</strong> ({nights} night{nights > 1 ? 's' : ''})</div>
                <div>Estimated Total: <strong>GHS {totalGHS}</strong></div>
                <div>Lodge Phone: <strong>{HOTEL_INFO.phone}</strong></div>
              </div>
            </div>

            <div className="pt-3 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={handleWhatsAppInquiry}
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Confirm on WhatsApp</span>
              </button>
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-amber-100 text-xs font-semibold"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
            {/* Room Selection */}
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                Select Room Type
              </label>
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {ROOMS_DATA.map((r) => (
                  <button
                    type="button"
                    key={r.id}
                    onClick={() => setRoomId(r.id)}
                    className={`p-3 rounded-xl text-left border transition-all ${
                      roomId === r.id
                        ? 'border-amber-500 bg-amber-50/60 ring-1 ring-amber-400'
                        : 'border-stone-200 hover:border-stone-300 bg-stone-50/40'
                    }`}
                  >
                    <div className="text-xs font-bold text-stone-900 truncate">{r.name}</div>
                    <div className="text-[11px] text-amber-800 font-semibold mt-0.5">
                      GHS {r.priceGHS} / night
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Dates & Guests */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Check-in Date
                </label>
                <input
                  type="date"
                  required
                  min={today}
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Check-out Date
                </label>
                <input
                  type="date"
                  required
                  min={checkIn}
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Guests
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs bg-white focus:ring-2 focus:ring-amber-500"
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4+">4+ Guests (Group)</option>
                </select>
              </div>
            </div>

            {/* Guest Contact Details */}
            <div className="space-y-3 pt-1 border-t border-stone-100">
              <div className="text-xs font-bold text-stone-800 uppercase tracking-wider">
                Guest Contact
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-stone-600 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Samuel K. Mensah"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-600 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 024 123 4567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-600 mb-1">
                  Special Requests or Arrival Time
                </label>
                <textarea
                  rows={2}
                  placeholder="Late check-in, quiet floor, extra pillow, parking needed..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>

            {/* Rate Calculation Summary */}
            <div className="bg-stone-50 border border-stone-200/80 rounded-2xl p-4 flex items-center justify-between text-xs">
              <div>
                <span className="text-stone-500">Estimated Total ({nights} night{nights > 1 ? 's' : ''}):</span>
                <div className="text-lg font-serif font-bold text-stone-900">
                  GHS {totalGHS}
                  <span className="text-xs font-normal text-stone-400 font-sans ml-1.5">
                    (No advance fee required)
                  </span>
                </div>
              </div>
              <div className="text-right text-[11px] text-stone-500">
                Pay on arrival at <br /><strong>Mile 11</strong>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
              <button
                type="button"
                onClick={handleWhatsAppInquiry}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-emerald-300 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Quick WhatsApp Chat</span>
              </button>

              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-amber-100 text-xs font-semibold shadow-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span>Submit Reservation Request</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
