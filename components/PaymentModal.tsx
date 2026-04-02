
import React, { useState, useRef } from 'react';
import { X, Upload, CheckCircle2, ShieldCheck, Loader2, AlertCircle, Maximize2, Search, QrCode } from 'lucide-react';

interface PaymentModalProps {
  onClose: () => void;
  onUpload: (file: File) => void;
  isProcessing: boolean;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ onClose, onUpload, isProcessing }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // High-quality super.money UPI QR code for Ravuru Karthik
  const qrCodeImage = "https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=upi://pay?pa=8125399090@superyes&pn=RAVURU%20KARTHIK&am=99&cu=INR";

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    if (selectedFile) {
      onUpload(selectedFile);
    }
  };

  return (
    <>
      {/* Zoomed QR View */}
      {isZoomed && (
        <div 
          className="fixed inset-0 z-[110] bg-black/95 flex flex-col items-center justify-center p-4 animate-in fade-in duration-300 cursor-pointer"
          onClick={() => setIsZoomed(false)}
        >
          <div 
            className="relative p-2 bg-white rounded-[2rem] shadow-2xl animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute -top-12 right-0 text-white flex items-center gap-2 font-bold hover:text-indigo-300 transition-colors"
              onClick={() => setIsZoomed(false)}
            >
              <X size={24} /> Close
            </button>
            <div className="bg-white p-6 rounded-[1.5rem] flex flex-col items-center w-full max-w-sm">
              <div className="w-full bg-white p-8 rounded-3xl flex flex-col items-center border border-gray-100 shadow-sm">
                <div className="flex flex-col items-center mb-6">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="bg-[#4f46e5] p-1.5 rounded-lg">
                      <QrCode size={24} className="text-white" />
                    </div>
                    <span className="text-gray-900 text-2xl font-black tracking-tighter">super.<span className="text-[#4f46e5]">money</span></span>
                  </div>
                  <p className="text-gray-500 text-[10px] font-medium">Scan and Pay using any UPI app</p>
                </div>
                
                <div className="w-full aspect-square bg-white rounded-2xl p-4 relative flex items-center justify-center border-2 border-gray-50">
                  <img 
                    src={qrCodeImage} 
                    alt="Payment QR" 
                    className="w-full h-full object-contain"
                    loading="eager"
                  />
                  {/* super.money Logo in center of QR */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white p-1 rounded-xl shadow-md border border-gray-100">
                      <div className="bg-[#4f46e5] p-1 rounded-lg">
                        <QrCode size={16} className="text-white" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 text-center space-y-1">
                  <h3 className="text-sm font-bold text-gray-900 tracking-tight">Pay ₹99.00 to <span className="uppercase">RAVURU KARTHIK</span></h3>
                  <p className="text-[10px] text-gray-500 font-mono">UPI ID : 8125399090@superyes</p>
                </div>
                
                <div className="mt-10 text-[8px] text-gray-400 text-center leading-tight">
                  All rights reserved by super.money, 2024
                </div>
              </div>
              <div className="mt-6 text-center">
                <p className="text-indigo-600 font-bold">₹99.00 / Month</p>
              </div>
            </div>
          </div>
          <p className="mt-8 text-white/50 text-sm font-medium">Click anywhere outside to return</p>
        </div>
      )}

      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
        <div className="bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row animate-in zoom-in-95 duration-300 max-h-[95vh]">
          
          {/* Left Side: QR Display & Identity */}
          <div className="bg-[#5f259f] p-8 text-white md:w-5/12 flex flex-col items-center justify-center text-center relative overflow-hidden">
            <div className="bg-white/10 w-16 h-16 rounded-3xl flex items-center justify-center mb-4 border border-white/20">
              <ShieldCheck size={32} />
            </div>
            <h2 className="text-xl font-bold mb-1">Skill Pilot Pro</h2>
            <p className="text-indigo-100 text-[10px] opacity-80 uppercase tracking-widest font-bold mb-8">Monthly Subscription</p>

            <div 
              className="bg-white p-6 rounded-3xl w-full shadow-2xl border-2 border-gray-50 cursor-pointer group transition-all hover:scale-[1.05] flex flex-col items-center"
              onClick={() => setIsZoomed(true)}
            >
              <div className="flex flex-col items-center mb-4">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <div className="bg-[#4f46e5] p-1 rounded-md">
                    <QrCode size={14} className="text-white" />
                  </div>
                  <span className="text-gray-900 text-sm font-black tracking-tighter">super.<span className="text-[#4f46e5]">money</span></span>
                </div>
                <p className="text-gray-400 text-[8px] font-medium">Scan and Pay using any UPI app</p>
              </div>
              
              {/* QR Code Container */}
              <div className="bg-white aspect-square rounded-xl flex items-center justify-center mb-4 border border-gray-100 overflow-hidden relative min-h-[160px] p-2">
                 <img 
                   src={qrCodeImage} 
                   alt="super.money QR" 
                   className="w-full h-full object-contain"
                   loading="eager"
                   onError={(e) => {
                     const target = e.target as HTMLImageElement;
                     target.parentElement?.classList.add('bg-red-50');
                     console.error("QR Code failed to load");
                   }}
                 />
                 {/* super.money Logo in center of QR */}
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white p-0.5 rounded-lg shadow-sm border border-gray-100">
                      <div className="bg-[#4f46e5] p-0.5 rounded-md">
                        <QrCode size={10} className="text-white" />
                      </div>
                    </div>
                  </div>
                 {/* Overlay Hint */}
                 <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-[2px]">
                    <div className="bg-white text-[#4f46e5] p-2.5 rounded-full shadow-lg">
                      <Maximize2 size={20} />
                    </div>
                 </div>
              </div>

              <div className="text-center space-y-0.5">
                <h3 className="text-[10px] text-gray-900 font-bold tracking-tight uppercase truncate">RAVURU KARTHIK</h3>
                <p className="text-[8px] text-gray-400 font-mono">8125399090@superyes</p>
                <p className="text-[9px] text-indigo-600 font-bold mt-1">₹99 / Month</p>
              </div>
            </div>
            
            <div className="mt-8 flex items-center gap-2 text-[9px] font-bold text-indigo-300 uppercase tracking-widest">
              <ShieldCheck size={12} /> Secure UPI Gateway
            </div>

            {/* Background Accent */}
            <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
          </div>

          {/* Right Side: Verification Steps & Upload */}
          <div className="p-8 md:p-10 md:w-7/12 relative bg-white overflow-y-auto">
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 text-gray-300 hover:text-gray-600 transition-colors p-2 hover:bg-gray-50 rounded-full"
            >
              <X size={24} />
            </button>

            <div className="mb-8">
              <h3 className="text-2xl font-black text-gray-900 mb-1">Activation</h3>
              <p className="text-gray-400 text-xs font-medium">Monthly Pro Access • ₹99.00</p>
            </div>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-sm flex-shrink-0 shadow-sm">1</div>
                <div>
                  <p className="text-sm font-bold text-gray-800">Scan & Pay ₹99</p>
                  <p className="text-[10px] text-gray-400 leading-relaxed font-medium">Use any UPI app to scan the QR and pay ₹99 for one month of Pro access.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-sm flex-shrink-0 shadow-sm">2</div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-gray-800 mb-3">Upload Screenshot</p>
                  
                  <input 
                    type="file" 
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept="image/*"
                    className="hidden"
                  />
                  
                  <div 
                    onClick={() => !isProcessing && fileInputRef.current?.click()}
                    className={`border-2 border-dashed rounded-[1.5rem] p-8 text-center cursor-pointer transition-all ${selectedFile ? 'border-green-400 bg-green-50' : 'border-gray-200 hover:border-indigo-400 hover:bg-indigo-50/50'}`}
                  >
                    {selectedFile ? (
                      <div className="flex flex-col items-center animate-in zoom-in-90">
                        <CheckCircle2 size={32} className="text-green-500 mb-2" />
                        <p className="text-[10px] font-bold text-green-700 truncate w-full px-4">{selectedFile.name}</p>
                        <p className="text-[8px] text-green-500 uppercase font-black mt-1 tracking-widest">Selected</p>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center text-gray-400">
                        <Upload size={32} className="mb-3 opacity-50" />
                        <p className="text-[10px] font-black uppercase tracking-widest">Attach Receipt</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="bg-amber-50/50 border border-amber-100 rounded-2xl p-5 flex gap-4">
                <div className="bg-amber-100 p-2 rounded-xl h-fit">
                  <AlertCircle size={18} className="text-amber-600" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-amber-800 uppercase tracking-tighter mb-1">Process Note</p>
                  <p className="text-[10px] text-amber-700 leading-relaxed font-medium">
                    Payments are verified manually by admin within 5-10 mins. Monthly access will begin once verified.
                  </p>
                </div>
              </div>

              <button 
                onClick={handleSubmit}
                disabled={!selectedFile || isProcessing}
                className="w-full bg-[#5f259f] text-white py-5 rounded-[1.25rem] font-black text-xs uppercase tracking-[0.2em] hover:bg-[#4a1d7d] transition-all shadow-xl shadow-indigo-100 disabled:opacity-50 flex items-center justify-center gap-3 group"
              >
                {isProcessing ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <span>Submit for Review</span>
                    <CheckCircle2 size={18} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentModal;
