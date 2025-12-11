import { BookOpen, Download, Video, FileText, ExternalLink, Users } from 'lucide-react';

export function Resources() {
  const resources = [
    {
      icon: BookOpen,
      title: 'Руководства и инструкции',
      items: [
        'Базовая защита для частных лиц',
        'Кибербезопасность для бизнеса',
        'Защита детей в интернете',
        'Безопасность мобильного банкинга'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Video,
      title: 'Видео уроки',
      items: [
        'Как распознать фишинг',
        'Настройка двухфакторной аутентификации',
        'Безопасная работа в интернете',
        'Что делать при взломе аккаунта'
      ],
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: FileText,
      title: 'Документы и отчеты',
      items: [
        'Годовой отчет по киберугрозам 2024',
        'Статистика атак в КР',
        'Законы о кибербезопасности',
        'Рекомендации для организаций'
      ],
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const downloads = [
    {
      title: 'Памятка по кибербезопасности',
      size: '2.4 MB',
      type: 'PDF',
      description: 'Краткое руководство для граждан КР'
    },
    {
      title: 'Чек-лист безопасности',
      size: '1.8 MB',
      type: 'PDF',
      description: 'Проверьте свою защищенность'
    },
    {
      title: 'Руководство для бизнеса',
      size: '5.2 MB',
      type: 'PDF',
      description: 'Защита корпоративных данных'
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-white mb-4">Материалы и ресурсы</h2>
          <p className="text-xl text-blue-200">Обучающие материалы, руководства и инструменты</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {resources.map((resource, index) => (
            <div 
              key={index}
              className="bg-slate-900/50 border border-blue-500/20 rounded-xl p-6 hover:border-blue-500/40 transition-all"
            >
              <div className={`bg-gradient-to-br ${resource.color} p-4 rounded-xl inline-block mb-4`}>
                <resource.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl text-white mb-4">{resource.title}</h3>
              
              <ul className="space-y-3">
                {resource.items.map((item, idx) => (
                  <li key={idx}>
                    <button className="text-blue-200 hover:text-blue-400 transition-all text-left flex items-center gap-2 group">
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-slate-900/50 border border-blue-500/20 rounded-xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-gradient-to-br from-green-500 to-emerald-500 p-3 rounded-lg">
              <Download className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl text-white">Скачать материалы</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {downloads.map((download, index) => (
              <div 
                key={index}
                className="bg-slate-800/30 border border-blue-500/10 rounded-lg p-6 hover:border-blue-500/30 transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="bg-blue-500/20 px-3 py-1 rounded text-sm text-blue-400">
                    {download.type}
                  </div>
                  <div className="text-sm text-blue-300">{download.size}</div>
                </div>
                
                <h4 className="text-white mb-2">{download.title}</h4>
                <p className="text-sm text-blue-300 mb-4">{download.description}</p>
                
                <button className="w-full bg-blue-500/20 hover:bg-blue-500/30 text-blue-100 border border-blue-500 py-2 rounded-lg transition-all flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" />
                  Скачать
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-500 p-3 rounded-lg">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl text-white">Тренинги и вебинары</h4>
            </div>
            <p className="text-blue-200 mb-4">
              Мы регулярно проводим бесплатные обучающие мероприятия для граждан и организаций Кыргызстана.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-all">
              Записаться на тренинг
            </button>
          </div>

          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-purple-500 p-3 rounded-lg">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl text-white">База знаний</h4>
            </div>
            <p className="text-blue-200 mb-4">
              Полная библиотека статей, FAQ и решений распространенных проблем кибербезопасности.
            </p>
            <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg transition-all">
              Перейти в базу знаний
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
