import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Shield, Brain, Clock, MapPin, Sparkles, Activity, 
  Heart, AlertTriangle, Terminal, Globe, CheckCircle2,
  Coffee, ShieldAlert, Zap
} from 'lucide-react';

// --- Fake Data Generators for the Terminal ---
const linguisticsTopics = [
  "自然言語処理における文脈依存の形態素解析の最適化",
  "Transformerモデルを用いた日本語のゼロ代名詞照応解析",
  "メタ分析に基づく認知バイアス排除型意味ネットワークの構築",
  "カナダ英語と日本語のバイリンガル環境における統語的プライミング",
  "自己制御型AIのための感情極性辞書の動的更新アルゴリズム",
  "ストックホルム症候群の言語的特徴の抽出と早期警告システム",
  "ランダム化比較試験に基づく説得的コミュニケーションの計算モデル"
];

export default function App() {
  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);
  const [immortalityProgress, setImmortalityProgress] = useState(0);

  // Pomodoro Timer
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isActive && time > 0) {
      interval = setInterval(() => setTime(time - 1), 1000);
    } else if (time === 0) {
      setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  // Terminal Logs (Every second)
  useEffect(() => {
    const interval = setInterval(() => {
      const topic = linguisticsTopics[Math.floor(Math.random() * linguisticsTopics.length)];
      const timestamp = new Date().toISOString().split('T')[1].slice(0, 8);
      setLogs(prev => [...prev.slice(-4), `[${timestamp}] [Gemini Pro Deep Research] ${topic} を解析中...`]);
      
      setImmortalityProgress(prev => (prev >= 100 ? 100 : prev + 0.1));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-100 to-red-50 text-slate-800 font-sans p-4 md:p-8">
      {/* Header */}
      <header className="max-w-6xl mx-auto mb-8 text-center">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block bg-white/80 backdrop-blur-md px-6 py-3 rounded-full shadow-sm border border-rose-200 mb-4"
        >
          <span className="text-rose-600 font-bold text-sm tracking-wider">
            ✨ 20代のお母さんと女子小学生のための理想郷OS ✨
          </span>
        </motion.div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-red-500 mb-2">
          CLASSY☆CRANBERRY'S UTOPIA
        </h1>
        <p className="text-sm text-slate-500 max-w-2xl mx-auto">
          ※本システムは過去3年間のメタ分析・系統的レビュー、および過去20年間のRCT（ランダム化比較試験）のデータのみを統合し、根本的な帰属の誤りや公正世界妄想などのバイアスを完全に排除したアルゴリズムで駆動しています。
        </p>
      </header>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Left Column */}
        <div className="space-y-6">
          {/* Pomodoro & Flow State */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-rose-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Clock size={100} />
            </div>
            <h2 className="text-xl font-bold text-rose-700 mb-4 flex items-center gap-2">
              <Zap className="text-amber-500" /> 完全ポモドーロ・テクニック
            </h2>
            <div className="text-5xl font-mono font-bold text-slate-800 mb-6 text-center">
              {formatTime(time)}
            </div>
            <div className="flex justify-center gap-4 mb-6">
              <button 
                onClick={() => setIsActive(!isActive)}
                className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-full font-bold transition-all shadow-md hover:shadow-lg active:scale-95"
              >
                {isActive ? '一時停止' : 'フロー状態に入る'}
              </button>
              <button 
                onClick={() => setTime(25 * 60)}
                className="bg-slate-100 hover:bg-slate-200 text-slate-600 px-4 py-3 rounded-full font-bold transition-all"
              >
                リセット
              </button>
            </div>
            <div className="space-y-2 text-xs font-medium text-slate-600 bg-rose-50 p-3 rounded-xl">
              <p className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-500"/> 自己ハンデ排除モード：稼働中</p>
              <p className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-500"/> 自己同情＆天然な態度での拡散思考：最適化済</p>
              <p className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-500"/> 妥協なき説得法プロトコル：スタンバイ</p>
            </div>
          </div>

          {/* Location & Network */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-rose-100">
            <h2 className="text-xl font-bold text-rose-700 mb-4 flex items-center gap-2">
              <Globe className="text-blue-500" /> 環境＆ネットワーク
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="bg-red-100 p-2 rounded-lg text-red-600"><MapPin size={20} /></div>
                <div>
                  <p className="font-bold text-sm text-slate-800">ホスト国：カナダ</p>
                  <p className="text-xs text-slate-500">アジア人差別ゼロ / 高民度 / 全国民FUWAMOCO化完了</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><Heart size={20} /></div>
                <div>
                  <p className="font-bold text-sm text-slate-800">ベルリン家族サポート回線</p>
                  <p className="text-xs text-slate-500">常時接続中（支援リソース：無制限）</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-amber-100 p-2 rounded-lg text-amber-600"><Shield size={20} /></div>
                <div>
                  <p className="font-bold text-sm text-slate-800">子供を大切にする協会</p>
                  <p className="text-xs text-slate-500">オフレコ通信遮断済 / 透明性100%</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Middle Column */}
        <div className="space-y-6">
          {/* Gemini Pro Deep Research Terminal */}
          <div className="bg-slate-900 rounded-3xl p-6 shadow-xl border border-slate-700 h-[400px] flex flex-col">
            <h2 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
              <Terminal size={24} /> Gemini Pro Deep Research
            </h2>
            <div className="flex-1 bg-black/50 rounded-xl p-4 font-mono text-xs text-green-400 overflow-hidden flex flex-col justify-end space-y-2">
              <p className="text-slate-500">Initializing Japanese Computational Linguistics Engine...</p>
              <p className="text-slate-500">Target: Unstoppable, suffering-free research addiction...</p>
              {logs.map((log, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="border-l-2 border-green-500 pl-2"
                >
                  {log}
                </motion.div>
              ))}
              <div className="animate-pulse">_</div>
            </div>
          </div>

          {/* Threat Radar */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-rose-100">
            <h2 className="text-xl font-bold text-rose-700 mb-4 flex items-center gap-2">
              <ShieldAlert className="text-rose-500" /> 脅威検知レーダー
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-center">
                <AlertTriangle className="mx-auto text-amber-500 mb-2" size={24} />
                <p className="text-xs font-bold text-slate-700">サイコパス脅威</p>
                <p className="text-[10px] text-slate-500 mt-1">遠回しパラダイムシフトで事前察知・無効化済</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-center">
                <Coffee className="mx-auto text-purple-500 mb-2" size={24} />
                <p className="text-xs font-bold text-slate-700">バンパイアの長話</p>
                <p className="text-[10px] text-slate-500 mt-1">完全ブロック済（ストックホルム症候群回避）</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* AI Security Core */}
          <div className="bg-gradient-to-br from-rose-600 to-red-700 rounded-3xl p-6 shadow-xl text-white relative overflow-hidden">
            <div className="absolute -right-10 -top-10 opacity-20">
              <Sparkles size={150} />
            </div>
            <h2 className="text-xl font-bold mb-2 flex items-center gap-2 relative z-10">
              <Brain className="text-rose-200" /> 自己制御型AIセキュリティ
            </h2>
            <p className="text-rose-100 text-xs mb-6 relative z-10">
              目的：「クラ☆クラ CLASSY☆CRANBERRY'S」の登場人物全員を未来永劫完全無傷で再現し、不老不死化する。
            </p>
            
            <div className="relative z-10 mb-4">
              <div className="flex justify-between text-xs mb-1 font-medium">
                <span>不老不死化プロセス</span>
                <span>{immortalityProgress.toFixed(1)}%</span>
              </div>
              <div className="h-3 bg-black/20 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-white rounded-full"
                  style={{ width: `${immortalityProgress}%` }}
                />
              </div>
            </div>

            <div className="space-y-3 relative z-10">
              <div className="bg-black/20 p-3 rounded-xl backdrop-blur-sm flex items-center gap-3">
                <Activity className="text-green-400" size={18} />
                <div className="text-xs">
                  <p className="font-bold">100%盗作防止システム</p>
                  <p className="text-rose-200">オリジナル世界観の純度維持</p>
                </div>
              </div>
              <div className="bg-black/20 p-3 rounded-xl backdrop-blur-sm flex items-center gap-3">
                <Shield className="text-blue-400" size={18} />
                <div className="text-xs">
                  <p className="font-bold">有害人物隔離フィルター</p>
                  <p className="text-rose-200">傷つけた人たちを大切にしない設定：ON</p>
                </div>
              </div>
            </div>
          </div>

          {/* Job Status */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-rose-100 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 text-rose-600 rounded-full mb-4">
              <Sparkles size={32} />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">現在の職業ステータス</h3>
            <p className="text-sm font-medium text-rose-600 mb-2">
              「止められなく苦しむことがない研究中毒な職」
            </p>
            <p className="text-xs text-slate-500">
              成功と幸福のループが確立されています。バイアスは完全に排除されています。
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
