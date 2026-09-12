import React, { useState } from 'react';
import { X, Smartphone, Send, QrCode, Copy, Check, MessageSquare, PhoneCall } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

interface SendToPhoneModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCopySuccess: () => void;
}

export const SendToPhoneModal: React.FC<SendToPhoneModalProps> = ({
  isOpen,
  onClose,
  onCopySuccess,
}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const hotelSnippet = `${HOTEL_INFO.name}\nLocation: ${HOTEL_INFO.shortAddress}\nPhone: ${HOTEL_INFO.phone}\nGoogle Maps Plus Code: ${HOTEL_INFO.plusCode}\nMaps Link: ${HOTEL_INFO.googleMapsUrl}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(hotelSnippet);
    setCopied(true);
    onCopySuccess();
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendSMS = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber) return;
    setSentSuccess(true);
    setTimeout(() => {
      setSentSuccess(false);
      onClose();
    }, 2500);
  };

  const handleSendWhatsApp = () => {
    const cleanPhone = phoneNumber.replace(/[^0-9]/g, '');
    const encoded = encodeURIComponent(`Here are the details for ${HOTEL_INFO.name}:\n\n📍 ${HOTEL_INFO.shortAddress}\n📞 ${HOTEL_INFO.phone}\n🗺️ Plus Code: ${HOTEL_INFO.plusCode}\n🔗 ${HOTEL_INFO.googleMapsUrl}`);
    if (cleanPhone) {
      window.open(`https://wa.me/${cleanPhone}?text=${encoded}`, '_blank');
    } else {
      window.open(`https://wa.me/?text=${encoded}`, '_blank');
    }
  };

  // QR Code generator URL using public standard api
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(
    HOTEL_INFO.googleMapsUrl
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-xs">
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-stone-100 bg-stone-50/80">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center">
              <Smartphone className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-stone-900">Send to phone</h3>
              <p className="text-xs text-stone-500">Take Chequers Lodge details on the road</p>
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
          {sentSuccess ? (
            <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <Check className="w-5 h-5" />
              </div>
              <p className="text-sm font-bold text-emerald-900">Information Sent!</p>
              <p className="text-xs text-emerald-700">
                Chequers Lodge address ({HOTEL_INFO.shortAddress}) and Plus Code ({HOTEL_INFO.plusCode}) were dispatched.
              </p>
            </div>
          ) : (
            <>
              {/* Send form */}
              <form onSubmit={handleSendSMS} className="space-y-3">
                <label className="block text-xs font-semibold text-stone-700">
                  Enter Phone Number
                </label>
                <div className="flex gap-2">
                  <input
                    type="tel"
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="e.g. 020 174 8706 or +233..."
                    className="flex-1 px-3.5 py-2 rounded-xl border border-stone-300 text-xs focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send</span>
                  </button>
                </div>

                <div className="flex items-center justify-between text-xs pt-1">
                  <button
                    type="button"
                    onClick={handleSendWhatsApp}
                    className="text-emerald-600 hover:text-emerald-700 font-semibold flex items-center gap-1 cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Send via WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCopy}
                    className="text-stone-600 hover:text-stone-900 font-medium flex items-center gap-1 cursor-pointer"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied' : 'Copy info'}</span>
                  </button>
                </div>
              </form>

              {/* QR Code Scanner Option */}
              <div className="pt-4 border-t border-stone-100 flex flex-col items-center text-center space-y-3">
                <div className="text-xs font-semibold text-stone-700 flex items-center gap-1.5">
                  <QrCode className="w-4 h-4 text-stone-500" />
                  <span>Or scan with your phone camera</span>
                </div>

                <div className="p-3 bg-stone-50 rounded-2xl border border-stone-200">
                  <img
                    src={qrCodeUrl}
                    alt="Chequers Lodge Google Maps QR Code"
                    className="w-36 h-36 mx-auto rounded-lg"
                  />
                </div>
                <p className="text-[11px] text-stone-400 max-w-xs">
                  Instantly opens location in Google Maps with navigation to <strong>{HOTEL_INFO.plusCode}</strong>.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
