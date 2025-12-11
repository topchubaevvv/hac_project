import { Shield, Facebook, Twitter, Instagram, Youtube, Mail, Phone } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-blue-500/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-2 rounded-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white">КиберЩит КР</h3>
                <p className="text-xs text-blue-300">Защита граждан</p>
              </div>
            </div>
            <p className="text-blue-200 text-sm mb-4">
              Национальный центр кибербезопасности Кыргызской Республики. Защищаем граждан и организации от киберугроз 24/7.
            </p>
            <div className="flex gap-3">
              <a href="#" className="bg-blue-500/20 hover:bg-blue-500/30 p-2 rounded-lg transition-all">
                <Facebook className="w-5 h-5 text-blue-400" />
              </a>
              <a href="#" className="bg-blue-500/20 hover:bg-blue-500/30 p-2 rounded-lg transition-all">
                <Twitter className="w-5 h-5 text-blue-400" />
              </a>
              <a href="#" className="bg-blue-500/20 hover:bg-blue-500/30 p-2 rounded-lg transition-all">
                <Instagram className="w-5 h-5 text-blue-400" />
              </a>
              <a href="#" className="bg-blue-500/20 hover:bg-blue-500/30 p-2 rounded-lg transition-all">
                <Youtube className="w-5 h-5 text-blue-400" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">Быстрые ссылки</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-blue-200 hover:text-blue-400 transition-all text-sm">Главная</a></li>
              <li><a href="#threats" className="text-blue-200 hover:text-blue-400 transition-all text-sm">Активные угрозы</a></li>
              <li><a href="#guides" className="text-blue-200 hover:text-blue-400 transition-all text-sm">Гайды по защите</a></li>
              <li><a href="#news" className="text-blue-200 hover:text-blue-400 transition-all text-sm">Новости</a></li>
              <li><a href="#report" className="text-blue-200 hover:text-blue-400 transition-all text-sm">Сообщить об атаке</a></li>
              <li><a href="#contacts" className="text-blue-200 hover:text-blue-400 transition-all text-sm">Контакты</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white mb-4">Ресурсы</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-200 hover:text-blue-400 transition-all text-sm">База знаний</a></li>
              <li><a href="#" className="text-blue-200 hover:text-blue-400 transition-all text-sm">Видео уроки</a></li>
              <li><a href="#" className="text-blue-200 hover:text-blue-400 transition-all text-sm">Документы</a></li>
              <li><a href="#" className="text-blue-200 hover:text-blue-400 transition-all text-sm">Тренинги</a></li>
              <li><a href="#" className="text-blue-200 hover:text-blue-400 transition-all text-sm">FAQ</a></li>
              <li><a href="#" className="text-blue-200 hover:text-blue-400 transition-all text-sm">О проекте</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white mb-4">Контакты</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-sm text-blue-200">Горячая линия 24/7</div>
                  <a href="tel:161" className="text-blue-400 hover:text-blue-300">161</a>
                  <span className="text-blue-200"> или </span>
                  <a href="tel:+996312666677" className="text-blue-400 hover:text-blue-300">+996 (312) 66-66-77</a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-sm text-blue-200">Email</div>
                  <a href="mailto:security@cybershield.kg" className="text-blue-400 hover:text-blue-300 text-sm">
                    security@cybershield.kg
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-500/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-blue-300 text-sm text-center md:text-left">
              © {currentYear} КиберЩит КР. Национальный центр кибербезопасности Кыргызской Республики. Все права защищены.
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-blue-400 hover:text-blue-300 text-sm">Политика конфиденциальности</a>
              <a href="#" className="text-blue-400 hover:text-blue-300 text-sm">Условия использования</a>
            </div>
          </div>
          
          <div className="mt-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg p-4">
            <p className="text-sm text-blue-200 text-center">
              <strong className="text-white">Важно:</strong> КиберЩит КР не собирает персональные данные граждан. 
              Мы работаем только с данными об инцидентах для статистики и улучшения защиты. 
              Никогда не сообщайте конфиденциальную информацию через незащищенные каналы связи.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
