
import React, { useState, useEffect } from 'react';
import { User, UserRole } from '../types';
import { db } from '../services/firebase';
import { collection, onSnapshot, query, orderBy, doc, updateDoc } from 'firebase/firestore';
import { handleFirestoreError, OperationType } from '../services/firestoreUtils';
import { 
  Users, 
  ShieldCheck, 
  ShieldAlert, 
  Search, 
  Filter, 
  ArrowLeft, 
  Mail, 
  Calendar, 
  Lock, 
  CheckCircle2, 
  XCircle,
  ExternalLink,
  Clock
} from 'lucide-react';

interface AdminPanelProps {
  onBack: () => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ onBack }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<'all' | 'premium' | 'pending' | 'student'>('all');

  useEffect(() => {
    const usersQuery = query(collection(db, 'users'), orderBy('createdAt', 'desc'));
    
    const unsubscribe = onSnapshot(usersQuery, (snapshot) => {
      const usersData: User[] = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        usersData.push({
          id: doc.id,
          email: data.email || '',
          name: data.name || 'User',
          role: data.role || UserRole.STUDENT,
          isPremium: data.isPremium || false,
          isPendingVerification: data.isPendingVerification || false,
          paymentProofUrl: data.paymentProofUrl,
          paymentDate: data.paymentDate,
          password: data.password,
          createdAt: data.createdAt,
          provider: data.provider,
          providerData: data.providerData,
          phoneNumber: data.phoneNumber
        });
      });
      setUsers(usersData);
      setLoading(false);
    }, (err) => {
      handleFirestoreError(err, OperationType.LIST, 'users');
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleVerifyUser = async (userId: string, approve: boolean) => {
    try {
      const userDocRef = doc(db, 'users', userId);
      await updateDoc(userDocRef, {
        isPremium: approve,
        isPendingVerification: false
      });
      alert(approve ? "User upgraded to Premium!" : "Verification rejected.");
    } catch (err) {
      handleFirestoreError(err, OperationType.UPDATE, `users/${userId}`);
    }
  };

  const filteredUsers = users.filter(user => {
    const matchesSearch = 
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.id.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (filter === 'all') return matchesSearch;
    if (filter === 'premium') return matchesSearch && user.isPremium;
    if (filter === 'pending') return matchesSearch && user.isPendingVerification;
    if (filter === 'student') return matchesSearch && user.role === UserRole.STUDENT;
    return matchesSearch;
  });

  const formatDate = (dateString?: string) => {
    if (!dateString) return 'N/A';
    try {
      return new Date(dateString).toLocaleDateString('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch (e) {
      return dateString;
    }
  };

  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <button 
            onClick={onBack}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500"
          >
            <ArrowLeft size={24} />
          </button>
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900 flex items-center gap-3">
              <ShieldCheck className="text-indigo-600" size={32} />
              Admin Management
            </h1>
            <p className="text-gray-500">Manage user accounts, verify payments, and monitor system activity.</p>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-indigo-50 px-4 py-2 rounded-xl">
          <Users size={20} className="text-indigo-600" />
          <span className="text-sm font-bold text-indigo-700">{users.length} Total Users</span>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-gray-50/50">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search by name, email or UID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter size={18} className="text-gray-400 mr-1" />
            {(['all', 'premium', 'pending', 'student'] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${filter === f ? 'bg-indigo-600 text-white shadow-md' : 'bg-white text-gray-500 hover:bg-gray-100 border border-gray-200'}`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/80 text-[10px] uppercase tracking-widest font-bold text-gray-400 border-b border-gray-100">
                <th className="px-6 py-4">UID</th>
                <th className="px-6 py-4">Display Name</th>
                <th className="px-6 py-4">Email</th>
                <th className="px-6 py-4">Phone</th>
                <th className="px-6 py-4">Providers</th>
                <th className="px-6 py-4">Provider Type</th>
                <th className="px-6 py-4">Created At</th>
                <th className="px-6 py-4">Password</th>
                <th className="px-6 py-4">Prime Joined</th>
                <th className="px-6 py-4">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {loading ? (
                <tr>
                  <td colSpan={6} className="px-6 py-20 text-center">
                    <div className="flex flex-col items-center gap-3 text-gray-400">
                      <Loader2 className="animate-spin" size={32} />
                      <p className="font-medium">Loading user database...</p>
                    </div>
                  </td>
                </tr>
              ) : filteredUsers.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-20 text-center">
                    <div className="flex flex-col items-center gap-3 text-gray-400">
                      <Search size={32} />
                      <p className="font-medium">No users found matching your criteria.</p>
                    </div>
                  </td>
                </tr>
              ) : (
                filteredUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50/50 transition-colors group">
                    <td className="px-6 py-4">
                      <span className="text-[10px] font-mono text-gray-400" title={user.id}>
                        {user.id.substring(0, 8)}...
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 font-bold text-xs">
                          {user.name.charAt(0)}
                        </div>
                        <span className="font-bold text-gray-900 text-sm">{user.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-xs text-gray-600">{user.email}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-xs text-gray-600">{user.phoneNumber || '—'}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-1">
                        {user.providerData ? user.providerData.map((p: any, idx: number) => (
                          <span key={idx} className="px-1.5 py-0.5 bg-gray-100 rounded text-[9px] font-bold uppercase text-gray-500">
                            {p.providerId}
                          </span>
                        )) : (
                          <span className="px-1.5 py-0.5 bg-gray-100 rounded text-[9px] font-bold uppercase text-gray-500">
                            {user.provider || 'N/A'}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-xs text-gray-500 font-medium">
                        {user.provider === 'google' ? 'Google OAuth' : 'Email/Password'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-[10px] text-gray-400 flex items-center gap-1">
                        <Calendar size={10} /> {formatDate(user.createdAt)}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="bg-amber-50 px-2 py-1 rounded border border-amber-100 flex items-center gap-1.5 w-fit">
                        <Lock size={12} className="text-amber-600" />
                        <span className="text-xs font-mono text-amber-700 font-bold">
                          {user.password || '••••••••'}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col gap-1">
                        <span className="text-xs text-gray-600 font-medium">
                          {user.isPremium ? formatDate(user.paymentDate) : '—'}
                        </span>
                        {user.isPremium ? (
                          <span className="text-[9px] font-bold text-green-600 uppercase">Active</span>
                        ) : user.isPendingVerification ? (
                          <span className="text-[9px] font-bold text-amber-600 uppercase animate-pulse">Pending</span>
                        ) : null}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        {user.isPendingVerification && (
                          <>
                            <button 
                              onClick={() => handleVerifyUser(user.id, true)}
                              className="p-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-600 hover:text-white transition-all shadow-sm"
                              title="Approve Payment"
                            >
                              <CheckCircle2 size={18} />
                            </button>
                            <button 
                              onClick={() => handleVerifyUser(user.id, false)}
                              className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-600 hover:text-white transition-all shadow-sm"
                              title="Reject Payment"
                            >
                              <XCircle size={18} />
                            </button>
                            {user.paymentProofUrl && (
                              <button 
                                onClick={() => window.open(user.paymentProofUrl, '_blank')}
                                className="p-2 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white transition-all shadow-sm"
                                title="View Proof"
                              >
                                <ExternalLink size={18} />
                              </button>
                            )}
                          </>
                        )}
                        {!user.isPendingVerification && !user.isPremium && (
                           <button 
                            onClick={() => handleVerifyUser(user.id, true)}
                            className="text-[10px] font-bold text-indigo-600 hover:underline"
                           >
                             Grant Pro
                           </button>
                        )}
                        {user.isPremium && (
                           <button 
                            onClick={() => handleVerifyUser(user.id, false)}
                            className="text-[10px] font-bold text-red-400 hover:text-red-600 hover:underline"
                           >
                             Revoke Pro
                           </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const Loader2 = ({ size, className }: { size: number, className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={`lucide lucide-loader-2 ${className}`}
  >
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  </svg>
);

export default AdminPanel;
