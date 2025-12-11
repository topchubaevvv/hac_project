import { Shield, Smartphone, Lock, Eye, Bell, Download } from 'lucide-react';

export function ProtectionTips() {
  const tips = [
    {
      icon: Shield,
      title: 'Установите антивирус',
      description: 'Рекомендуемые для Кыргызстана: Kaspersky, Dr.Web, ESET NOD32',
      action: 'Скачать список',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Lock,
      title: 'Включите 2FA везде',
      description: 'Двухфакторная аутентификация добавляет дополнительный уровень защиты',
      action: 'Как настроить',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Smartphone,
      title: 'Обновляйте устройства',
      description: 'Регулярно устанавливайте обновления безопасности на телефон и компьютер',
      action: 'Инструкция',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Eye,
      title: 'Проверяйте ссылки',
      description: 'Не переходите по подозрительным ссылкам из SMS и email',
      action: 'Примеры фишинга',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Bell,
      title: 'Подпишитесь на уведомления',
      description: 'Получайте оповещения о новых угрозах в Кыргызстане',
      action: 'Подписаться',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Download,
      title: 'Скачайте памятку',
      description: 'PDF-руководство по кибербезопасности для жителей КР',
      action: 'Скачать PDF',
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-white mb-4">Быстрые советы по защите</h2>
          <p className="text-xl text-blue-200">Простые действия для повышения вашей безопасности</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip, index) => (
            <div 
              key={index}
              className="bg-slate-900/50 border border-blue-500/20 rounded-xl p-6 hover:border-blue-500/40 transition-all group"
            >
              <div className={`bg-gradient-to-br ${tip.color} p-4 rounded-xl inline-block mb-4 group-hover:scale-110 transition-transform`}>
                <tip.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl text-white mb-2">{tip.title}</h3>
              <p className="text-blue-200 mb-4">{tip.description}</p>
              
              <button className="text-blue-400 hover:text-blue-300 transition-all">
                {tip.action} →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
