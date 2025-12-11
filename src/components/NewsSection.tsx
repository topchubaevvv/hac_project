import { Calendar, ArrowRight, Newspaper } from 'lucide-react';

export function NewsSection() {
  const news = [
    {
      title: 'Новая волна фишинга: мошенники выдают себя за сотрудников банков КР',
      date: '10 декабря 2024',
      category: 'Предупреждение',
      excerpt: 'За последнюю неделю зафиксировано более 300 случаев телефонного мошенничества. Злоумышленники представляются сотрудниками служб безопасности банков.',
      image: 'https://images.unsplash.com/photo-1666615435088-4865bf5ed3fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWNrZXIlMjBhdHRhY2t8ZW58MXx8fHwxNzY1NDI2MTg1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      categoryColor: 'bg-red-500/20 border-red-500 text-red-400'
    },
    {
      title: 'Госслужбы КР усилили защиту государственных порталов',
      date: '8 декабря 2024',
      category: 'Обновления',
      excerpt: 'Государственный комитет информационных технологий внедрил новые системы защиты для порталов госуслуг и налоговой службы.',
      image: 'https://images.unsplash.com/photo-1633265486064-086b219458ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwcHJvdGVjdGlvbnxlbnwxfHx8fDE3NjUzNzE0NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      categoryColor: 'bg-green-500/20 border-green-500 text-green-400'
    },
    {
      title: 'Как защитить свой бизнес: вебинар для предпринимателей',
      date: '5 декабря 2024',
      category: 'События',
      excerpt: 'Национальный центр кибербезопасности проведет бесплатный вебинар для малого и среднего бизнеса 15 декабря в 15:00.',
      image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwc2VjdXJpdHl8ZW58MXx8fHwxNzY1MzUyNTY4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      categoryColor: 'bg-blue-500/20 border-blue-500 text-blue-400'
    }
  ];

  return (
    <section id="news" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl text-white mb-4">Новости кибербезопасности</h2>
            <p className="text-xl text-blue-200">Последние новости и обновления из Кыргызстана</p>
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-all flex items-center gap-2">
            <Newspaper className="w-5 h-5" />
            Все новости
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item, index) => (
            <div 
              key={index}
              className="bg-slate-900/50 border border-blue-500/20 rounded-xl overflow-hidden hover:border-blue-500/40 transition-all group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className={`${item.categoryColor} border px-3 py-1 rounded-full text-sm backdrop-blur-sm`}>
                    {item.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-blue-300 mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{item.date}</span>
                </div>
                
                <h3 className="text-xl text-white mb-3">{item.title}</h3>
                <p className="text-blue-200 mb-4">{item.excerpt}</p>
                
                <button className="text-blue-400 hover:text-blue-300 transition-all flex items-center gap-2">
                  Читать далее
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-blue-500 p-3 rounded-lg">
                <Newspaper className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-white">Подпишитесь на рассылку новостей</div>
                <div className="text-sm text-blue-300">Получайте важные обновления о кибербезопасности на email</div>
              </div>
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-all">
              Подписаться
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
