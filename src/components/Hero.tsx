import { Shield, AlertTriangle, Lock, Users } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block bg-red-500/20 border border-red-500 px-4 py-2 rounded-full">
              <span className="text-red-400">🔴 ВНИМАНИЕ: Повышенный уровень угроз</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl text-white">
              Защита от <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">кибератак</span> в Кыргызстане
            </h1>
            
            <p className="text-xl text-blue-200">
              Национальный информационный центр по предотвращению и борьбе с киберугрозами. 
              Защищаем граждан, бизнес и государственные структуры Кыргызской Республики.
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href="#report" 
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg transition-all inline-flex items-center gap-2"
              >
                <AlertTriangle className="w-5 h-5" />
                Сообщить об атаке
              </a>
              <a 
                href="#guides" 
                className="bg-blue-500/20 hover:bg-blue-500/30 text-blue-100 border border-blue-500 px-8 py-3 rounded-lg transition-all inline-flex items-center gap-2"
              >
                <Shield className="w-5 h-5" />
                Защитить себя
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="bg-slate-800/50 p-4 rounded-lg border border-blue-500/20">
                <div className="text-3xl text-blue-400">24/7</div>
                <div className="text-sm text-blue-200">Мониторинг</div>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-lg border border-blue-500/20">
                <div className="text-3xl text-cyan-400">1,247</div>
                <div className="text-sm text-blue-200">Атак пресечено</div>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-lg border border-blue-500/20">
                <div className="text-3xl text-purple-400">98%</div>
                <div className="text-sm text-blue-200">Защищено</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-3xl opacity-20"></div>
            <img 
              src="https://images.unsplash.com/photo-1548092372-0d1bd40894a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlciUyMHNlY3VyaXR5fGVufDF8fHx8MTc2NTM4NDMzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Кибербезопасность"
              className="relative rounded-2xl shadow-2xl border border-blue-500/20"
            />
            
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-red-500 to-orange-500 p-6 rounded-2xl shadow-2xl">
              <AlertTriangle className="w-12 h-12 text-white mb-2" />
              <div className="text-white">
                <div className="text-2xl">156</div>
                <div className="text-sm opacity-90">Активных угроз</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
