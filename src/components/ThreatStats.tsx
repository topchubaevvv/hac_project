import { Activity, Shield, AlertOctagon, TrendingUp, Users, Server } from 'lucide-react';

export function ThreatStats() {
  const stats = [
    {
      icon: AlertOctagon,
      label: 'Активные угрозы',
      value: '156',
      change: '+23 за сутки',
      color: 'from-red-500 to-orange-500',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/30'
    },
    {
      icon: Shield,
      label: 'Заблокированные атаки',
      value: '1,247',
      change: '+89 за сутки',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30'
    },
    {
      icon: Users,
      label: 'Защищенные пользователи',
      value: '2.4M',
      change: 'По всему КР',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30'
    },
    {
      icon: Server,
      label: 'Защищенные серверы',
      value: '847',
      change: 'Гос. и частные',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30'
    },
    {
      icon: Activity,
      label: 'Фишинг попытки',
      value: '3,891',
      change: '+234 за неделю',
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/30'
    },
    {
      icon: TrendingUp,
      label: 'Уровень защиты',
      value: '98.3%',
      change: '+2.1% за месяц',
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/30'
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-white mb-4">Статистика угроз в реальном времени</h2>
          <p className="text-xl text-blue-200">Данные обновляются каждые 5 минут</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`${stat.bgColor} ${stat.borderColor} border backdrop-blur-sm p-6 rounded-xl hover:scale-105 transition-all cursor-pointer`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`bg-gradient-to-br ${stat.color} p-3 rounded-lg`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-center gap-1 text-xs text-green-400">
                  <Activity className="w-3 h-3" />
                  <span>Live</span>
                </div>
              </div>
              
              <div className="text-3xl text-white mb-1">{stat.value}</div>
              <div className="text-blue-200 mb-2">{stat.label}</div>
              <div className="text-sm text-blue-300/70">{stat.change}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-xl p-6">
          <div className="flex items-center gap-4">
            <div className="bg-blue-500 p-3 rounded-lg">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-white">Последнее обновление: Сегодня, 14:23</div>
              <div className="text-sm text-blue-300">Система мониторинга работает в штатном режиме</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
