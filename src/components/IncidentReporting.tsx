import { AlertTriangle, Phone, Mail, MessageSquare, Clock, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export function IncidentReporting() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    incidentType: '',
    description: '',
    urgency: 'medium'
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        incidentType: '',
        description: '',
        urgency: 'medium'
      });
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="report" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block bg-red-500/20 border border-red-500 px-4 py-2 rounded-full mb-4">
            <span className="text-red-400">⚠️ Экстренное реагирование 24/7</span>
          </div>
          <h2 className="text-4xl text-white mb-4">Сообщить о кибератаке</h2>
          <p className="text-xl text-blue-200">Быстрое реагирование может предотвратить серьезные последствия</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Emergency Contacts */}
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-red-500 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl text-white">Горячая линия</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="text-sm text-blue-300 mb-1">Главный номер</div>
                  <a href="tel:+996312666677" className="text-2xl text-white hover:text-blue-400">
                    +996 (312) 66-66-77
                  </a>
                </div>
                <div>
                  <div className="text-sm text-blue-300 mb-1">Короткий номер</div>
                  <a href="tel:161" className="text-2xl text-white hover:text-blue-400">
                    161
                  </a>
                </div>
                <div className="text-sm text-green-400 flex items-center gap-2 pt-2">
                  <Clock className="w-4 h-4" />
                  <span>Работаем 24/7</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-500 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl text-white">Email</h3>
              </div>
              <a href="mailto:security@cybershield.kg" className="text-blue-400 hover:text-blue-300">
                security@cybershield.kg
              </a>
              <p className="text-sm text-blue-300 mt-2">Ответ в течение 30 минут</p>
            </div>

            <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-green-500 p-3 rounded-lg">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl text-white">Telegram бот</h3>
              </div>
              <a href="https://t.me/cybershield_kg_bot" className="text-green-400 hover:text-green-300">
                @cybershield_kg_bot
              </a>
              <p className="text-sm text-blue-300 mt-2">Мгновенная связь</p>
            </div>

            <div className="bg-slate-900/50 border border-blue-500/20 rounded-xl p-6">
              <h4 className="text-white mb-3">Офис в Бишкеке</h4>
              <p className="text-blue-200 text-sm">
                пр. Чуй, 207<br />
                Бизнес-центр "Асанбай"<br />
                5 этаж, офис 502<br />
                Бишкек, Кыргызстан
              </p>
              <p className="text-sm text-blue-300 mt-3">Пн-Пт: 9:00 - 18:00</p>
            </div>
          </div>

          {/* Report Form */}
          <div className="lg:col-span-2">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="bg-slate-900/50 border border-blue-500/20 rounded-xl p-8">
                <h3 className="text-2xl text-white mb-6">Форма сообщения об инциденте</h3>
                
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-blue-200 mb-2">Ваше имя *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-slate-800/50 border border-blue-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                        placeholder="Асан Усенов"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-blue-200 mb-2">Телефон *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full bg-slate-800/50 border border-blue-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                        placeholder="+996 XXX XXX XXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-blue-200 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-slate-800/50 border border-blue-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                      placeholder="asan@example.com"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-blue-200 mb-2">Тип инцидента *</label>
                      <select
                        name="incidentType"
                        value={formData.incidentType}
                        onChange={handleChange}
                        required
                        className="w-full bg-slate-800/50 border border-blue-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                      >
                        <option value="">Выберите тип</option>
                        <option value="phishing">Фишинг</option>
                        <option value="malware">Вредоносное ПО</option>
                        <option value="fraud">Мошенничество</option>
                        <option value="ddos">DDoS атака</option>
                        <option value="data-breach">Утечка данных</option>
                        <option value="other">Другое</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-blue-200 mb-2">Срочность *</label>
                      <select
                        name="urgency"
                        value={formData.urgency}
                        onChange={handleChange}
                        required
                        className="w-full bg-slate-800/50 border border-blue-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                      >
                        <option value="low">Низкая - могу подождать</option>
                        <option value="medium">Средняя - в течение дня</option>
                        <option value="high">Высокая - срочно нужна помощь</option>
                        <option value="critical">Критическая - происходит сейчас</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-blue-200 mb-2">Описание инцидента *</label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full bg-slate-800/50 border border-blue-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 resize-none"
                      placeholder="Опишите подробно что произошло: когда, какие действия вы предприняли, какая информация могла быть скомпрометирована..."
                    />
                  </div>

                  <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                    <p className="text-sm text-blue-200">
                      <strong className="text-white">Важно:</strong> Если инцидент критический (идет атака прямо сейчас, потеря денег, блокировка систем), 
                      позвоните нам немедленно по номеру <a href="tel:161" className="text-blue-400 hover:text-blue-300">161</a> или 
                      <a href="tel:+996312666677" className="text-blue-400 hover:text-blue-300"> +996 (312) 66-66-77</a>
                    </p>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-red-500 hover:bg-red-600 text-white py-4 rounded-lg transition-all flex items-center justify-center gap-2"
                  >
                    <AlertTriangle className="w-5 h-5" />
                    Отправить сообщение
                  </button>
                </div>
              </form>
            ) : (
              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-12 text-center">
                <div className="bg-green-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-3xl text-white mb-4">Сообщение отправлено!</h3>
                <p className="text-xl text-blue-200 mb-6">
                  Спасибо за обращение. Наши специалисты свяжутся с вами в ближайшее время.
                </p>
                <div className="bg-slate-900/50 border border-blue-500/20 rounded-lg p-6 inline-block">
                  <p className="text-blue-200">
                    Номер вашего обращения: <span className="text-white text-xl">КБ-{Math.floor(Math.random() * 100000)}</span>
                  </p>
                  <p className="text-sm text-blue-300 mt-2">Сохраните этот номер для отслеживания статуса</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
