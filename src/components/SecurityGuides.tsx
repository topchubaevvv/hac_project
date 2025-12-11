import { Shield, Lock, Mail, Smartphone, CreditCard, Wifi, Eye, Key, FileCheck, AlertCircle } from 'lucide-react';
import { useState } from 'react';

export function SecurityGuides() {
  const [selectedGuide, setSelectedGuide] = useState(0);

  const guides = [
    {
      icon: Lock,
      title: 'Защита паролей',
      category: 'Базовая безопасность',
      color: 'from-blue-500 to-cyan-500',
      steps: [
        'Используйте пароли длиной минимум 12 символов',
        'Комбинируйте заглавные и строчные буквы, цифры и спецсимволы',
        'Никогда не используйте одинаковые пароли для разных сервисов',
        'Меняйте пароли каждые 3-6 месяцев',
        'Используйте менеджер паролей (LastPass, 1Password, Bitwarden)',
        'Не храните пароли в заметках на телефоне или блокноте',
        'Включите двухфакторную аутентификацию везде, где это возможно'
      ],
      examples: [
        '❌ Плохой пароль: bishkek2024',
        '✅ Хороший пароль: Bg$7kR@mT!2024pL'
      ]
    },
    {
      icon: Mail,
      title: 'Защита от фишинга',
      category: 'Мошенничество',
      color: 'from-red-500 to-orange-500',
      steps: [
        'Проверяйте адрес отправителя писем - мошенники используют похожие домены',
        'Не переходите по ссылкам из подозрительных SMS и email',
        'Банки НИКОГДА не просят сообщить пароль или CVV код',
        'Проверяйте URL сайта перед вводом данных',
        'Обращайте внимание на грамматические ошибки в письмах',
        'Не открывайте вложения от неизвестных отправителей',
        'Звоните напрямую в банк, если получили подозрительное сообщение'
      ],
      examples: [
        '❌ Подозрительно: elcart-bank.kg (настоящий: elcart.kg)',
        '❌ Подозрительно: "Ваша карта заблокированa, перейдите по ссылке"',
        '✅ Правильно: Позвонить в банк напрямую по официальному номеру'
      ]
    },
    {
      icon: Smartphone,
      title: 'Безопасность смартфона',
      category: 'Мобильные устройства',
      color: 'from-purple-500 to-pink-500',
      steps: [
        'Устанавливайте приложения только из официальных магазинов (App Store, Google Play)',
        'Регулярно обновляйте операционную систему',
        'Используйте пин-код, отпечаток пальца или Face ID',
        'Проверяйте разрешения приложений перед установкой',
        'Не переходите по ссылкам из SMS от неизвестных',
        'Установите антивирус (Kaspersky, Dr.Web для мобильных)',
        'Делайте резервные копии важных данных',
        'Не подключайтесь к незащищенным публичным Wi-Fi для банковских операций'
      ],
      examples: [
        '❌ Опасно: Установка APK файлов из неизвестных источников',
        '✅ Безопасно: Скачивание только из Google Play или App Store'
      ]
    },
    {
      icon: CreditCard,
      title: 'Безопасность банковских карт',
      category: 'Финансы',
      color: 'from-green-500 to-emerald-500',
      steps: [
        'Никогда не сообщайте CVV код, даже сотрудникам банка',
        'Не фотографируйте карту и не храните фото в телефоне',
        'Включите SMS-уведомления для всех транзакций',
        'Установите лимиты на онлайн-покупки в мобильном банке',
        'Используйте виртуальные карты для интернет-покупок',
        'Закрывайте клавиатуру рукой при вводе ПИН-кода в банкомате',
        'Регулярно проверяйте выписки по карте',
        'Немедленно блокируйте карту при подозрительной активности'
      ],
      examples: [
        'Телефоны для блокировки карт:',
        '• Элкарт: 164 или +996 (312) 66-11-11',
        '• Оптима Банк: 5000 или +996 (312) 90-10-00',
        '• Бакай Банк: 5151 или +996 (312) 66-00-66'
      ]
    },
    {
      icon: Wifi,
      title: 'Безопасный интернет',
      category: 'Сетевая безопасность',
      color: 'from-cyan-500 to-blue-500',
      steps: [
        'Не используйте публичный Wi-Fi для банковских операций',
        'Если необходимо использовать публичный Wi-Fi, используйте VPN',
        'Измените стандартный пароль на домашнем роутере',
        'Используйте протокол WPA3 или минимум WPA2 для Wi-Fi',
        'Отключайте Wi-Fi и Bluetooth когда не используете',
        'Проверяйте, что сайт использует HTTPS (замочек в адресной строке)',
        'Очищайте cookies и историю браузера регулярно'
      ],
      examples: [
        '❌ Опасно: Вход в мобильный банк через Wi-Fi кафе',
        '✅ Безопасно: Использование мобильного интернета для банкинга'
      ]
    },
    {
      icon: Eye,
      title: 'Защита личных данных',
      category: 'Конфиденциальность',
      color: 'from-yellow-500 to-orange-500',
      steps: [
        'Не публикуйте паспортные данные в социальных сетях',
        'Ограничьте доступ к личным фото и постам в Instagram, Facebook',
        'Не сообщайте номер паспорта незнакомым людям по телефону',
        'Будьте осторожны с онлайн-опросами и розыгрышами',
        'Не вводите ИНН на подозрительных сайтах',
        'Проверяйте настройки приватности в соцсетях',
        'Используйте разные email для важных и второстепенных сервисов'
      ],
      examples: [
        '❌ Опасно: "Выиграйте iPhone! Введите паспортные данные"',
        '✅ Безопасно: Скептически относиться к слишком щедрым предложениям'
      ]
    }
  ];

  return (
    <section id="guides" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-white mb-4">Гайды по кибербезопасности</h2>
          <p className="text-xl text-blue-200">Пошаговые инструкции для защиты от киберугроз</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Sidebar with guide categories */}
          <div className="lg:col-span-1 space-y-3">
            {guides.map((guide, index) => (
              <button
                key={index}
                onClick={() => setSelectedGuide(index)}
                className={`w-full text-left p-4 rounded-xl transition-all ${
                  selectedGuide === index
                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/20'
                    : 'bg-slate-800/50 text-blue-100 border border-blue-500/20 hover:border-blue-500/40'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${
                    selectedGuide === index 
                      ? 'bg-white/20' 
                      : `bg-gradient-to-br ${guide.color}`
                  }`}>
                    <guide.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className={selectedGuide === index ? '' : 'text-white'}>
                      {guide.title}
                    </div>
                    <div className={`text-sm ${selectedGuide === index ? 'text-blue-100' : 'text-blue-300'}`}>
                      {guide.category}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Main guide content */}
          <div className="lg:col-span-2">
            <div className="bg-slate-900/50 border border-blue-500/20 rounded-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className={`bg-gradient-to-br ${guides[selectedGuide].color} p-4 rounded-xl`}>
                  {(() => {
                    const Icon = guides[selectedGuide].icon;
                    return <Icon className="w-8 h-8 text-white" />;
                  })()}
                </div>
                <div>
                  <h3 className="text-3xl text-white">{guides[selectedGuide].title}</h3>
                  <p className="text-blue-300">{guides[selectedGuide].category}</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                {guides[selectedGuide].steps.map((step, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3 bg-slate-800/30 p-4 rounded-lg border border-blue-500/10"
                  >
                    <div className={`bg-gradient-to-br ${guides[selectedGuide].color} text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0`}>
                      {index + 1}
                    </div>
                    <p className="text-blue-100 pt-1">{step}</p>
                  </div>
                ))}
              </div>

              {guides[selectedGuide].examples && (
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <FileCheck className="w-5 h-5 text-blue-400" />
                    <h4 className="text-white">Примеры</h4>
                  </div>
                  <div className="space-y-2">
                    {guides[selectedGuide].examples.map((example, index) => (
                      <p key={index} className="text-blue-200">{example}</p>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-6 flex gap-3">
                <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-all">
                  Скачать PDF гайд
                </button>
                <button className="flex-1 bg-blue-500/20 hover:bg-blue-500/30 text-blue-100 border border-blue-500 px-6 py-3 rounded-lg transition-all">
                  Поделиться
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick tips */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/30 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-white mb-2">Что делать при кибератаке?</h4>
                <ul className="text-blue-200 space-y-1 text-sm">
                  <li>1. Отключите устройство от интернета</li>
                  <li>2. Смените все пароли с другого устройства</li>
                  <li>3. Заблокируйте банковские карты</li>
                  <li>4. Сообщите в банк и киберполицию</li>
                  <li>5. Сохраните все доказательства (скриншоты, SMS)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <Shield className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-white mb-2">Базовая защита - обязательный минимум</h4>
                <ul className="text-blue-200 space-y-1 text-sm">
                  <li>✓ Сильные уникальные пароли</li>
                  <li>✓ Двухфакторная аутентификация</li>
                  <li>✓ Регулярные обновления ОС</li>
                  <li>✓ Антивирус на всех устройствах</li>
                  <li>✓ Осторожность с публичным Wi-Fi</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
