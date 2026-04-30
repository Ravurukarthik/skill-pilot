
import React, { useState, useEffect } from 'react';
import { User, UserRole } from '../types';
import { db } from '../services/firebase';
import { collection, onSnapshot, query, orderBy, doc, updateDoc, limit, getCountFromServer } from 'firebase/firestore';
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
  Clock,
  Activity,
  Code,
  RefreshCw,
  ChevronDown,
  AlertCircle,
  X
} from 'lucide-react';

interface AdminPanelProps {
  onBack: () => void;
  user: User;
  onOpenExternalLink?: (url: string) => void;
  setNotification: (notif: { message: string; type: 'info' | 'error' } | null) => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ onBack, user, onOpenExternalLink, setNotification }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<'all' | 'premium' | 'pending' | 'student'>('all');
  const [pageSize, setPageSize] = useState(20);
  const [totalUsers, setTotalUsers] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [localError, setLocalError] = useState<string | null>(null);
  const [selectedUserActivity, setSelectedUserActivity] = useState<User | null>(null);

  useEffect(() => {
    if (user.role !== UserRole.ADMIN) return;

    const fetchTotalCount = async () => {
      try {
        const coll = collection(db, 'users');
        const snapshot = await getCountFromServer(coll);
        setTotalUsers(snapshot.data().count);
      } catch (err) {
        console.error("Failed to fetch total count:", err);
      }
    };
    fetchTotalCount();
  }, [user.id]);

  useEffect(() => {
    if (user.role !== UserRole.ADMIN) {
      setLoading(false);
      return;
    }

    setLoading(true);
    const usersQuery = query(
      collection(db, 'users'), 
      orderBy('createdAt', 'desc'),
      limit(pageSize)
    );
    
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
          phoneNumber: data.phoneNumber,
          studyStats: data.studyStats,
          lastStudyDate: data.lastStudyDate,
          monthlyStudyStats: data.monthlyStudyStats,
          lastStudyMonth: data.lastStudyMonth,
          dailyGoalMinutes: data.dailyGoalMinutes,
          activeModule: data.activeModule
        });
      });
      setUsers(usersData);
      setLoading(false);
      setIsRefreshing(false);
    }, (err) => {
      // Only report error if user is still logged in and is admin
      if (user.role === UserRole.ADMIN) {
        console.error("AdminPanel Firestore Error:", err);
        setLocalError("Permission denied: You do not have access to the user list. Please check your admin status.");
        handleFirestoreError(err, OperationType.LIST, 'users');
      }
      setLoading(false);
      setIsRefreshing(false);
    });

    return () => unsubscribe();
  }, [user.id, pageSize]);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    // The onSnapshot will automatically update, but we can re-fetch the count
    try {
      const coll = collection(db, 'users');
      const snapshot = await getCountFromServer(coll);
      setTotalUsers(snapshot.data().count);
    } catch (err) {
      console.error("Refresh count failed:", err);
    }
  };

  const handleLoadMore = () => {
    setPageSize(prev => prev + 20);
  };

  const handleVerifyUser = async (userId: string, approve: boolean) => {
    try {
      const userDocRef = doc(db, 'users', userId);
      await updateDoc(userDocRef, {
        isPremium: approve,
        isPendingVerification: false
      });
      setNotification({
        message: approve ? "User upgraded to Prime!" : "Verification rejected.",
        type: 'info'
      });
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

  if (user.role !== UserRole.ADMIN) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-6">
        <div className="bg-red-900/20 p-6 rounded-full mb-6 border border-red-900/50">
          <Lock className="text-red-500" size={48} />
        </div>
        <h2 className="text-2xl font-bold text-slate-100 mb-2 tracking-tight">Access Denied</h2>
        <p className="text-slate-400 max-w-md mb-8">You do not have the required permissions to access the Admin Management panel. Please contact the system administrator if you believe this is an error.</p>
        <button 
          onClick={onBack}
          className="bg-slate-900 hover:bg-slate-800 text-slate-100 px-6 py-3 rounded-xl font-bold transition-all flex items-center gap-2"
        >
          <ArrowLeft size={20} />
          Return to Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-500 bg-slate-950 min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {localError && (
          <div className="mb-6 p-4 bg-red-900/30 border border-red-500/50 rounded-xl text-red-200 text-sm flex items-center gap-3">
            <AlertCircle size={18} className="shrink-0" />
            <p>{localError}</p>
            <button 
              onClick={() => setLocalError(null)}
              className="ml-auto text-red-200/50 hover:text-red-200"
            >
              <X size={16} />
            </button>
          </div>
        )}
        
        <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-4">
          <button 
            onClick={onBack}
            className="p-2 hover:bg-slate-900 rounded-full transition-colors text-slate-500"
          >
            <ArrowLeft size={24} />
          </button>
          <div>
            <h1 className="text-3xl font-black text-slate-100 flex items-center gap-3 tracking-tight">
              <ShieldCheck className="text-indigo-400" size={32} />
              Admin Management
            </h1>
            <p className="text-slate-400 text-sm font-medium">Manage user accounts, verify payments, and monitor system activity.</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={handleRefresh}
            disabled={isRefreshing}
            className={`p-2.5 bg-slate-900 hover:bg-slate-800 text-slate-400 rounded-xl border border-slate-800 transition-all ${isRefreshing && 'animate-spin'}`}
            title="Refresh Data"
          >
            <RefreshCw size={20} />
          </button>
          <div className="flex items-center gap-3 bg-indigo-900/20 px-5 py-2.5 rounded-2xl border border-indigo-900/30 shadow-lg shadow-indigo-900/10">
            <Users size={20} className="text-indigo-400" />
            <span className="text-sm font-black text-indigo-400 uppercase tracking-widest">
              {users.length} / {totalUsers} Users
            </span>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 rounded-[2rem] border border-slate-800 shadow-2xl overflow-hidden max-w-7xl mx-auto">
        <div className="p-6 border-b border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-950/50">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
            <input 
              type="text" 
              placeholder="Search by name, email or UID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-slate-950 border border-slate-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm text-slate-100 placeholder:text-slate-600 shadow-inner"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter size={18} className="text-slate-500 mr-1" />
            {(['all', 'premium', 'pending', 'student'] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${filter === f ? 'bg-indigo-600 text-white shadow-md' : 'bg-slate-950 text-slate-500 hover:bg-slate-800 border border-slate-800'}`}
              >
                {f === 'premium' ? 'Prime' : f}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-950/80 text-[10px] uppercase tracking-widest font-black text-slate-500 border-b border-slate-800">
                <th className="px-6 py-5">UID</th>
                <th className="px-6 py-5">Display Name</th>
                <th className="px-6 py-5">Email</th>
                <th className="px-6 py-5">Phone</th>
                <th className="px-6 py-5">Providers</th>
                <th className="px-6 py-5">Provider Type</th>
                <th className="px-6 py-5">Created At</th>
                <th className="px-6 py-5">Password</th>
                <th className="px-6 py-5">Prime Joined</th>
                <th className="px-6 py-5">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {loading ? (
                <tr>
                  <td colSpan={10} className="px-6 py-32 text-center">
                    <div className="flex flex-col items-center gap-4 text-slate-600">
                      <Loader2 className="animate-spin text-indigo-500" size={48} />
                      <p className="font-black uppercase tracking-widest text-xs">Loading user database...</p>
                    </div>
                  </td>
                </tr>
              ) : filteredUsers.length === 0 ? (
                <tr>
                  <td colSpan={10} className="px-6 py-32 text-center">
                    <div className="flex flex-col items-center gap-4 text-slate-600">
                      <Search size={48} className="opacity-20" />
                      <p className="font-black uppercase tracking-widest text-xs">No users found matching your criteria.</p>
                    </div>
                  </td>
                </tr>
              ) : (
                filteredUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-slate-800/40 transition-colors group">
                    <td className="px-6 py-5">
                      <span className="text-[10px] font-mono text-slate-500 bg-slate-950 px-2 py-1 rounded border border-slate-800" title={user.id}>
                        {user.id.substring(0, 8)}...
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <button 
                          onClick={() => setSelectedUserActivity(user)}
                          className="w-9 h-9 bg-slate-950 rounded-xl flex items-center justify-center text-indigo-400 font-black text-xs border border-slate-800 shadow-inner hover:bg-indigo-900/20 transition-all"
                        >
                          {user.name.charAt(0).toUpperCase()}
                        </button>
                        <button 
                          onClick={() => setSelectedUserActivity(user)}
                          className="font-bold text-slate-100 text-sm whitespace-nowrap hover:text-indigo-400 transition-colors"
                        >
                          {user.name}
                        </button>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <button 
                        onClick={() => setSelectedUserActivity(user)}
                        className="text-xs text-slate-400 font-medium truncate block max-w-[200px] hover:text-indigo-400 transition-colors" 
                        title={user.email}
                      >
                        {user.email}
                      </button>
                    </td>
                    <td className="px-6 py-5">
                      <span className="text-xs text-slate-500 font-mono">{user.phoneNumber || '—'}</span>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex flex-wrap gap-1.5">
                        {user.providerData ? user.providerData.map((p: any, idx: number) => (
                          <span key={idx} className="px-2 py-0.5 bg-slate-950 border border-slate-800 rounded text-[9px] font-black uppercase text-slate-400">
                            {p.providerId}
                          </span>
                        )) : (
                          <span key={user.id} className="px-2 py-0.5 bg-slate-950 border border-slate-800 rounded text-[9px] font-black uppercase text-slate-400">
                            {user.provider || 'N/A'}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <span className="text-[10px] text-slate-500 font-black uppercase tracking-tighter">
                        {user.provider === 'google' ? 'Google OAuth' : 'Email/Password'}
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <span className="text-[10px] text-slate-500 flex items-center gap-1.5 font-medium">
                        <Calendar size={12} className="text-slate-600" /> {formatDate(user.createdAt)}
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <div className="bg-amber-900/10 px-3 py-1.5 rounded-xl border border-amber-900/30 flex items-center gap-2 w-fit">
                        <Lock size={12} className="text-amber-500" />
                        <span className="text-xs font-mono text-amber-500/80 font-bold">
                          {user.password || '••••••••'}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex flex-col gap-1.5">
                        <span className="text-[10px] text-slate-500 uppercase font-black tracking-widest leading-none mb-1">Membership Start Date</span>
                        <span className="text-sm text-slate-300 font-bold">
                          {(user.isPremium || user.isPendingVerification) ? formatDate(user.paymentDate) : '—'}
                        </span>
                        {user.activeModule && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-indigo-900/40 text-indigo-300 text-[8px] font-black uppercase tracking-widest border border-indigo-500/30 animate-pulse">
                            <Code size={10} /> {user.activeModule}
                          </span>
                        )}
                        {user.isPremium ? (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-900/20 text-green-400 text-[8px] font-black uppercase tracking-widest border border-green-900/30">
                            <CheckCircle2 size={10} /> Active
                          </span>
                        ) : user.isPendingVerification ? (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-900/20 text-amber-400 text-[8px] font-black uppercase tracking-widest border border-amber-900/30 animate-pulse">
                            <Clock size={10} /> Pending
                          </span>
                        ) : null}
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2.5">
                        {user.isPendingVerification && (
                          <>
                            <button 
                              onClick={() => handleVerifyUser(user.id, true)}
                              className="p-2.5 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all shadow-lg shadow-green-900/20"
                              title="Approve Payment"
                            >
                              <CheckCircle2 size={18} />
                            </button>
                            <button 
                              onClick={() => handleVerifyUser(user.id, false)}
                              className="p-2.5 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-all shadow-lg shadow-red-900/20"
                              title="Reject Payment"
                            >
                              <XCircle size={18} />
                            </button>
                            {user.paymentProofUrl && (
                              <button 
                                onClick={() => onOpenExternalLink?.(user.paymentProofUrl!)}
                                className="p-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-900/20"
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
                            className="text-[10px] font-black text-indigo-400 hover:text-indigo-300 uppercase tracking-widest bg-indigo-900/20 px-3 py-2 rounded-xl border border-indigo-900/30 transition-all"
                           >
                             Grant Prime
                           </button>
                        )}
                        {user.isPremium && (
                           <button 
                            onClick={() => handleVerifyUser(user.id, false)}
                            className="text-[10px] font-black text-red-400 hover:text-red-300 uppercase tracking-widest bg-red-900/20 px-3 py-2 rounded-xl border border-red-900/30 transition-all"
                           >
                             Revoke Prime
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
        
        {users.length < totalUsers && !loading && (
          <div className="p-8 border-t border-slate-800 bg-slate-950/30 flex justify-center">
            <button 
              onClick={handleLoadMore}
              className="flex items-center gap-2 px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-black uppercase tracking-widest text-xs transition-all shadow-lg shadow-indigo-900/20 hover:scale-105 active:scale-95"
            >
              <ChevronDown size={18} />
              Load More Users
            </button>
          </div>
        )}
      </div>

      {/* User Activity Modal */}
      {selectedUserActivity && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-slate-900 w-full max-w-2xl rounded-[2rem] border border-slate-800 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
            <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-slate-950/50">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-900/30 rounded-2xl flex items-center justify-center text-indigo-400 font-black text-lg border border-indigo-500/20">
                  {selectedUserActivity.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-100 tracking-tight">{selectedUserActivity.name}</h3>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">{selectedUserActivity.email}</p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedUserActivity(null)}
                className="p-2 hover:bg-slate-800 rounded-full text-slate-500 hover:text-slate-100 transition-all"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-8 space-y-8 max-h-[70vh] overflow-y-auto custom-scrollbar">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <Clock size={16} className="text-indigo-400" />
                    Study Activity Report
                  </h4>
                  <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800">
                    <button 
                      onClick={() => {
                        const updated = { ...selectedUserActivity, _reportType: 'daily' } as any;
                        setSelectedUserActivity(updated);
                      }}
                      className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${(!selectedUserActivity as any)._reportType || (selectedUserActivity as any)._reportType === 'daily' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                      Daily
                    </button>
                    <button 
                      onClick={() => {
                        const updated = { ...selectedUserActivity, _reportType: 'monthly' } as any;
                        setSelectedUserActivity(updated);
                      }}
                      className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${(selectedUserActivity as any)._reportType === 'monthly' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                      Monthly
                    </button>
                  </div>
                </div>

                <div className="flex flex-col gap-2 mb-6">
                  <div className="flex items-center justify-between text-[10px] font-bold text-slate-500">
                    <span>REPORT PERIOD</span>
                    <span className="bg-slate-950 px-2 py-1 rounded border border-slate-800">
                      {((selectedUserActivity as any)._reportType === 'monthly') 
                        ? `Month: ${selectedUserActivity.lastStudyMonth || 'N/A'}`
                        : `Date: ${formatDate(selectedUserActivity.lastStudyDate)}`}
                    </span>
                  </div>
                  {selectedUserActivity.activeModule && (
                    <div className="flex items-center justify-between text-[10px] font-black text-indigo-400">
                      <span>CURRENTLY ACTIVE</span>
                      <span className="bg-indigo-900/20 px-2 py-1 rounded border border-indigo-500/30 animate-pulse uppercase tracking-widest">
                        {selectedUserActivity.activeModule}
                      </span>
                    </div>
                  )}
                </div>
                
                {(() => {
                  const isMonthly = (selectedUserActivity as any)._reportType === 'monthly';
                  const stats = isMonthly ? (selectedUserActivity.monthlyStudyStats || {}) : (selectedUserActivity.studyStats || {});
                  
                  if (Object.keys(stats).length > 0) {
                    return (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {Object.entries(stats).map(([module, minutes]: [string, any]) => (
                          <div key={module} className="bg-slate-950 p-4 rounded-2xl border border-slate-800 flex items-center justify-between group hover:border-indigo-500/30 transition-all">
                            <div className="min-w-0">
                              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1">Module</p>
                              <p className="text-sm font-bold text-slate-200 truncate pr-2">{module}</p>
                            </div>
                            <div className="text-right shrink-0">
                              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1">Time Spent</p>
                              <p className="text-sm font-black text-indigo-400">
                                {Math.floor(Number(minutes) / 60)}h {Number(minutes) % 60}m
                              </p>
                            </div>
                          </div>
                        ))}
                        
                        {(() => {
                          const total = (Object.values(stats) as any[]).reduce((acc: number, curr: any) => acc + (Number(curr) || 0), 0);
                          const dailyGoal = selectedUserActivity.dailyGoalMinutes || 60;
                          const periodGoal = isMonthly ? dailyGoal * 30 : dailyGoal;
                          
                          return (
                            <div className="md:col-span-2 bg-indigo-900/10 p-5 rounded-2xl border border-indigo-500/20 flex items-center justify-between mt-2">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-900/20">
                                  <ShieldCheck size={20} />
                                </div>
                                <div>
                                  <p className="text-[10px] text-indigo-400 font-black uppercase tracking-widest">Total Period Time</p>
                                  <p className="text-xl font-black text-slate-100">
                                    {Math.floor(total / 60)}h {total % 60}m
                                  </p>
                                </div>
                              </div>
                              <div className="text-right">
                                <p className="text-[10px] text-indigo-400 font-black uppercase tracking-widest">Period Goal</p>
                                <p className="text-xl font-black text-slate-100">{Math.floor(periodGoal / 60)}h {periodGoal % 60}m</p>
                              </div>
                            </div>
                          );
                        })()}
                      </div>
                    );
                  } else {
                    return (
                      <div className="bg-slate-950 p-12 rounded-3xl border border-slate-800 border-dashed text-center">
                        <Clock size={48} className="text-slate-700 mx-auto mb-4 opacity-20" />
                        <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">
                          No {isMonthly ? 'monthly' : 'daily'} activity recorded for this period.
                        </p>
                      </div>
                    );
                  }
                })()}
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1">Account Status</p>
                  <p className={`text-sm font-black uppercase tracking-widest ${selectedUserActivity.isPremium ? 'text-amber-500' : 'text-indigo-400'}`}>
                    {selectedUserActivity.isPremium ? 'Prime Membership' : 'Free Tier'}
                  </p>
                  {selectedUserActivity.isPremium && selectedUserActivity.paymentDate && (
                    <p className="text-[9px] text-slate-500 mt-1 font-medium">Joined: {formatDate(selectedUserActivity.paymentDate)}</p>
                  )}
                </div>
                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1">Role</p>
                  <p className="text-sm font-black uppercase tracking-widest text-slate-200">
                    {selectedUserActivity.role}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-slate-950/50 border-t border-slate-800 flex justify-end">
              <button 
                onClick={() => setSelectedUserActivity(null)}
                className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-slate-100 rounded-xl font-black uppercase tracking-widest text-xs transition-all"
              >
                Close Activity
              </button>
            </div>
          </div>
        </div>
      )}
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
