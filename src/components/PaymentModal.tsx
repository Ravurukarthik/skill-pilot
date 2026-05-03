
import React, { useState } from 'react';
import { X, Upload, CheckCircle2, ShieldCheck, CreditCard, Loader2, Info, Sparkles } from 'lucide-react';

interface PaymentModalProps {
  onClose: () => void;
  onUpload: (file: File) => void;
  isProcessing: boolean;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ onClose, onUpload, isProcessing }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      onUpload(selectedFile);
    }
  };

  return (
    <div className="fixed inset-0 z-[400] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-500/10 rounded-xl flex items-center justify-center border border-indigo-500/20">
              <Sparkles className="text-indigo-400" size={20} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-100">Upgrade to Premium</h2>
              <p className="text-xs text-slate-400">Unlock all modules and exam resources</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="p-8">
          <div className="bg-slate-950 border border-slate-800 rounded-xl p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-slate-400 text-sm">Upgrade Fee</span>
              <span className="text-2xl font-bold text-slate-100">₹99 <span className="text-sm font-normal text-slate-500">/ lifetime</span></span>
            </div>
            <div className="space-y-3">
              {[
                "All 12+ Core Modules",
                "Competitive Exam Archives",
                "Professional Compiler Access",
                "Priority Admin Support"
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-slate-300">
                  <CheckCircle2 size={16} className="text-emerald-500" />
                  {feature}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-slate-300 mb-3 flex items-center gap-2">
                <CreditCard size={16} />
                Payment Instructions
              </h3>
              <div className="bg-indigo-500/5 border border-indigo-500/10 rounded-xl p-4 text-sm text-slate-400">
                <p className="mb-2">1. Pay ₹99 via UPI to: <span className="text-indigo-400 font-mono font-bold">skillpilot@upi</span></p>
                <p>2. Take a screenshot of the payment receipt</p>
                <p>3. Upload the screenshot below for verification</p>
              </div>
            </div>

            <div className="space-y-3">
              <label className="block">
                <div className={`border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center transition-all cursor-pointer ${
                  selectedFile 
                    ? 'border-emerald-500/50 bg-emerald-500/5' 
                    : 'border-slate-800 hover:border-slate-700 bg-slate-950/50'
                }`}>
                  <input type="file" className="hidden" accept="image/*" onChange={handleFileChange} disabled={isProcessing} />
                  {selectedFile ? (
                    <>
                      <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mb-3">
                        <CheckCircle2 className="text-emerald-500" size={24} />
                      </div>
                      <p className="text-slate-200 font-medium text-sm text-center truncate w-full px-4">{selectedFile.name}</p>
                      <p className="text-slate-500 text-xs mt-1">Click to change file</p>
                    </>
                  ) : (
                    <>
                      <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center mb-3">
                        <Upload className="text-slate-400" size={24} />
                      </div>
                      <p className="text-slate-300 font-medium text-sm">Upload Payment Receipt</p>
                      <p className="text-slate-500 text-xs mt-1">JPG, PNG or PDF (max 5MB)</p>
                    </>
                  )}
                </div>
              </label>

              <div className="flex items-start gap-2 text-[10px] text-slate-500 px-1">
                <Info size={12} className="mt-0.5 shrink-0" />
                <span>Verification usually takes 5-10 minutes. You will be notified once your upgrade is active.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 bg-slate-950/50 border-t border-slate-800 flex flex-col gap-4">
          <button
            onClick={handleUpload}
            disabled={!selectedFile || isProcessing}
            className={`w-full py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
              !selectedFile || isProcessing
                ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/20 active:scale-[0.98]'
            }`}
          >
            {isProcessing ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Verifying Payment...
              </>
            ) : (
              <>
                <ShieldCheck size={18} />
                Submit Verification
              </>
            )}
          </button>
          
          <button 
            onClick={onClose}
            disabled={isProcessing}
            className="text-slate-500 hover:text-slate-300 text-sm font-medium transition-colors disabled:opacity-50"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
