import { Phone, Mail, MapPin, Globe, MessageCircle, Clock } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contacts" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-white mb-4">Контакты</h2>
          <p className="text-xl text-blue-200">Мы всегда на связи для помощи и консультаций</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-slate-900/50 border border-blue-500/20 rounded-xl p-6">
            <div className="bg-gradient-to-br from-red-500 to-orange-500 p-3 rounded-lg inline-block mb-4">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl text-white mb-3">Телефоны</h3>
            <div className="space-y-2">
              <div>
                <div className="text-sm text-blue-300">Горячая линия (24/7)</div>
                <a href="tel:+996312666677" className="text-blue-400 hover:text-blue-300">
                  +996 (312) 66-66-77
                </a>
              </div>
              <div>
                <div className="text-sm text-blue-300">Короткий номер</div>
                <a href="tel:161" className="text-blue-400 hover:text-blue-300">
                  161
                </a>
              </div>
              <div>
                <div className="text-sm text-blue-300">Офис (Пн-Пт, 9:00-18:00)</div>
                <a href="tel:+996312905050" className="text-blue-400 hover:text-blue-300">
                  +996 (312) 90-50-50
                </a>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/50 border border-blue-500/20 rounded-xl p-6">
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-3 rounded-lg inline-block mb-4">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl text-white mb-3">Email</h3>
            <div className="space-y-2">
              <div>
                <div className="text-sm text-blue-300">Сообщения об инцидентах</div>
                <a href="mailto:security@cybershield.kg" className="text-blue-400 hover:text-blue-300">
                  security@cybershield.kg
                </a>
              </div>
              <div>
                <div className="text-sm text-blue-300">Общие вопросы</div>
                <a href="mailto:info@cybershield.kg" className="text-blue-400 hover:text-blue-300">
                  info@cybershield.kg
                </a>
              </div>
              <div>
                <div className="text-sm text-blue-300">Пресс-служба</div>
                <a href="mailto:press@cybershield.kg" className="text-blue-400 hover:text-blue-300">
                  press@cybershield.kg
                </a>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/50 border border-blue-500/20 rounded-xl p-6">
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-lg inline-block mb-4">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl text-white mb-3">Адрес офиса</h3>
            <div className="text-blue-200 space-y-1">
              <p>Кыргызская Республика</p>
              <p>г. Бишкек, 720040</p>
              <p>пр. Чуй, 207</p>
              <p>Бизнес-центр "Асанбай"</p>
              <p>5 этаж, офис 502</p>
            </div>
            <button className="mt-4 text-blue-400 hover:text-blue-300 text-sm">
              Открыть на карте →
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-900/50 border border-blue-500/20 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-green-500 p-3 rounded-lg">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl text-white">Мессенджеры</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between bg-slate-800/30 p-3 rounded-lg">
                <div>
                  <div className="text-white">Telegram</div>
                  <div className="text-sm text-blue-300">@cybershield_kg_bot</div>
                </div>
                <button className="bg-blue-500/20 hover:bg-blue-500/30 text-blue-100 border border-blue-500 px-4 py-2 rounded-lg transition-all">
                  Открыть
                </button>
              </div>
              <div className="flex items-center justify-between bg-slate-800/30 p-3 rounded-lg">
                <div>
                  <div className="text-white">WhatsApp</div>
                  <div className="text-sm text-blue-300">+996 700 66 66 77</div>
                </div>
                <button className="bg-blue-500/20 hover:bg-blue-500/30 text-blue-100 border border-blue-500 px-4 py-2 rounded-lg transition-all">
                  Написать
                </button>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/50 border border-blue-500/20 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-500 p-3 rounded-lg">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl text-white">Режим работы</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between bg-green-500/10 border border-green-500/30 p-3 rounded-lg">
                <div>
                  <div className="text-white">Горячая линия</div>
                  <div className="text-sm text-green-400">Круглосуточно, без выходных</div>
                </div>
                <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                  24/7
                </div>
              </div>
              <div className="bg-slate-800/30 p-3 rounded-lg">
                <div className="text-white mb-1">Офис в Бишкеке</div>
                <div className="text-sm text-blue-300">Понедельник - Пятница: 9:00 - 18:00</div>
                <div className="text-sm text-blue-300">Суббота - Воскресенье: Выходной</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-xl p-8">
          <div className="text-center">
            <Globe className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-2xl text-white mb-3">Региональные представительства</h3>
            <p className="text-blue-200 mb-6 max-w-2xl mx-auto">
              Центры кибербезопасности работают в крупных городах Кыргызстана
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-900/50 border border-blue-500/20 rounded-lg p-4">
                <h4 className="text-white mb-2">Ош</h4>
                <p className="text-sm text-blue-300 mb-2">ул. Ленина, 331</p>
                <a href="tel:+9963222555666" className="text-blue-400 text-sm">+996 (3222) 5-55-66</a>
              </div>
              
              <div className="bg-slate-900/50 border border-blue-500/20 rounded-lg p-4">
                <h4 className="text-white mb-2">Джалал-Абад</h4>
                <p className="text-sm text-blue-300 mb-2">пр. Эркиндик, 25</p>
                <a href="tel:+9963722444555" className="text-blue-400 text-sm">+996 (3722) 4-44-55</a>
              </div>
              
              <div className="bg-slate-900/50 border border-blue-500/20 rounded-lg p-4">
                <h4 className="text-white mb-2">Каракол</h4>
                <p className="text-sm text-blue-300 mb-2">ул. Гебзе, 124</p>
                <a href="tel:+9963922333444" className="text-blue-400 text-sm">+996 (3922) 3-33-44</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
