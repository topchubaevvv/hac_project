import { AlertTriangle, Clock, MapPin, TrendingUp } from 'lucide-react';

export function LatestThreats() {
  const threats = [
    {
      type: 'Фишинг атака',
      severity: 'Критический',
      location: 'Бишкек, Чуйская область',
      time: '15 минут назад',
      description: 'Массовая рассылка поддельных писем от имени "Элкарт Банка" с требованием обновить данные карты. Более 500 граждан получили подозрительные SMS.',
      affected: '500+',
      status: 'Активна',
      severityColor: 'text-red-400',
      severityBg: 'bg-red-500/20',
      severityBorder: 'border-red-500'
    },
    {
      type: 'DDoS атака',
      severity: 'Высокий',
      location: 'Ош, Ошская область',
      time: '2 часа назад',
      description: 'Попытка DDoS атаки на государственный портал госуслуг. Атака была успешно отражена системами защиты.',
      affected: 'Портал госуслуг',
      status: 'Нейтрализована',
      severityColor: 'text-orange-400',
      severityBg: 'bg-orange-500/20',
      severityBorder: 'border-orange-500'
    },
    {
      type: 'Вредоносное ПО',
      severity: 'Средний',
      location: 'Джалал-Абад',
      time: '5 часов назад',
      description: 'Обнаружено распространение троянского вируса через мессенджер Telegram в виде поддельного приложения "МегаКом Бонусы".',
      affected: '120+',
      status: 'Устранена',
      severityColor: 'text-yellow-400',
      severityBg: 'bg-yellow-500/20',
      severityBorder: 'border-yellow-500'
    },
    {
      type: 'Утечка данных',
      severity: 'Критический',
      location: 'Бишкек, онлайн магазины',
      time: '1 день назад',
      description: 'Попытка взлома базы данных крупного интернет-магазина в Бишкеке. Данные клиентов не пострадали благодаря своевременному обнаружению.',
      affected: 'База данных',
      status: 'Расследуется',
      severityColor: 'text-red-400',
      severityBg: 'bg-red-500/20',
      severityBorder: 'border-red-500'
    }
  ];

  return (
    <section id="threats" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl text-white mb-4">Последние киберугрозы</h2>
            <p className="text-xl text-blue-200">Актуальная информация о кибератаках в Кыргызстане</p>
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-all">
            Все угрозы
          </button>
        </div>

        <div className="space-y-6">
          {threats.map((threat, index) => (
            <div 
              key={index}
              className="bg-slate-900/50 border border-blue-500/20 rounded-xl p-6 hover:border-blue-500/40 transition-all"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-4">
                <div className="flex items-start gap-4">
                  <div className={`${threat.severityBg} p-3 rounded-lg`}>
                    <AlertTriangle className={`w-6 h-6 ${threat.severityColor}`} />
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl text-white">{threat.type}</h3>
                      <span className={`${threat.severityBg} ${threat.severityBorder} border px-3 py-1 rounded-full text-sm ${threat.severityColor}`}>
                        {threat.severity}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        threat.status === 'Активна' ? 'bg-red-500/20 border border-red-500 text-red-400' :
                        threat.status === 'Нейтрализована' ? 'bg-green-500/20 border border-green-500 text-green-400' :
                        'bg-blue-500/20 border border-blue-500 text-blue-400'
                      }`}>
                        {threat.status}
                      </span>
                    </div>
                    
                    <p className="text-blue-100 mb-3">{threat.description}</p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-blue-300">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{threat.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{threat.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4" />
                        <span>Затронуто: {threat.affected}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <button className="bg-blue-500/20 hover:bg-blue-500/30 text-blue-100 border border-blue-500 px-4 py-2 rounded-lg transition-all whitespace-nowrap">
                  Подробнее
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/30 rounded-xl p-6">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-white mb-2">Если вы стали жертвой кибератаки</h4>
              <p className="text-blue-200 mb-3">Немедленно сообщите об инциденте по телефону горячей линии: +996 (312) 66-66-77 или через форму на этом сайте.</p>
              <a href="#report" className="text-blue-400 hover:text-blue-300 underline">
                Сообщить об инциденте →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
