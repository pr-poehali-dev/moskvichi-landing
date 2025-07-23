import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useState, useEffect } from 'react';

const Index = () => {
  const [newsPopups, setNewsPopups] = useState<Array<{id: number, channel: string, title: string, text: string, image: string, link: string, district: string, visible: boolean}>>([]);
  const [currentPopup, setCurrentPopup] = useState(0);

  const newsChannels = [
    {
      name: 'Нагатинский Затон',
      link: 'https://t.me/Nagatinskii_Zaton',
      district: 'ЮВАО',
      news: {
        title: 'Благоустройство набережной продолжается',
        text: 'В районе Нагатинский Затон продолжаются работы по благоустройству набережной. Установлены новые скамейки и освещение.',
        image: '/img/8c791ce5-e34e-4ffa-b05c-1416e6f925bd.jpg',
        link: 'https://t.me/Nagatinskii_Zaton/1234'
      }
    },
    {
      name: 'Марьино',
      link: 'https://t.me/teleg_Marino_UVAO', 
      district: 'ЮВАО',
      news: {
        title: 'Открытие новой станции метро',
        text: 'Жители Марьино получили улучшенное транспортное сообщение. Запущены дополнительные автобусные маршруты.',
        image: '/img/6f5891d2-5c72-46be-9cb1-6697cddf088b.jpg',
        link: 'https://t.me/teleg_Marino_UVAO/5678'
      }
    },
    {
      name: 'Южное Бутово',
      link: 'https://t.me/Uzhnoe_Butovo',
      district: 'ЮЗАО', 
      news: {
        title: 'Новая детская площадка в микрорайоне',
        text: 'В Южном Бутово открылась современная детская площадка с безопасным покрытием и новым оборудованием.',
        image: '/img/47e424a8-a76e-4cba-aa02-2ea7968ba440.jpg',
        link: 'https://t.me/Uzhnoe_Butovo/9012'
      }
    },
    {
      name: 'Таганский',
      link: 'https://t.me/teleg_Taganski',
      district: 'ЦАО',
      news: {
        title: 'Реставрация исторических зданий',
        text: 'В Таганском районе завершается реставрация памятников архитектуры XIX века. Обновлены фасады и внутренние помещения.',
        image: '/img/8c791ce5-e34e-4ffa-b05c-1416e6f925bd.jpg',
        link: 'https://t.me/teleg_Taganski/3456'
      }
    }
  ];

  const allChannels = [
    { name: 'Нагатинский Затон', link: 'https://t.me/Nagatinskii_Zaton', district: 'ЮВАО' },
    { name: 'Марьино', link: 'https://t.me/teleg_Marino_UVAO', district: 'ЮВАО' },
    { name: 'Южное Бутово', link: 'https://t.me/Uzhnoe_Butovo', district: 'ЮЗАО' },
    { name: 'Таганский', link: 'https://t.me/teleg_Taganski', district: 'ЦАО' },
    { name: 'Арбат', link: 'https://t.me/Arbat_news', district: 'ЦАО' },
    { name: 'Замоскворечье', link: 'https://t.me/Zamoskvorecie', district: 'ЦАО' },
    { name: 'Красносельский', link: 'https://t.me/Krasnoselsk', district: 'ЦАО' },
    { name: 'Мещанский', link: 'https://t.me/Meshchansky', district: 'ЦАО' },
    { name: 'Тверской', link: 'https://t.me/Tverskoy_district', district: 'ЦАО' },
    { name: 'Хамовники', link: 'https://t.me/Hamovniki', district: 'ЦАО' },
    { name: 'Якиманка', link: 'https://t.me/Yakimanka', district: 'ЦАО' },
    { name: 'Алексеевский', link: 'https://t.me/Alekseevsky', district: 'СВАО' },
    { name: 'Алтуфьевский', link: 'https://t.me/Altufyevo', district: 'СВАО' },
    { name: 'Бабушкинский', link: 'https://t.me/Babushkinsky', district: 'СВАО' },
    { name: 'Бибирево', link: 'https://t.me/Bibirevo', district: 'СВАО' },
    { name: 'Бутырский', link: 'https://t.me/Butyrsky', district: 'СВАО' },
    { name: 'Лианозово', link: 'https://t.me/Lianozovo', district: 'СВАО' },
    { name: 'Лосиноостровский', link: 'https://t.me/Losinoostrovsky', district: 'СВАО' },
    { name: 'Марфино', link: 'https://t.me/Marfino', district: 'СВАО' },
    { name: 'Останкинский', link: 'https://t.me/Ostankinsky', district: 'СВАО' },
    { name: 'Отрадное', link: 'https://t.me/Otradnoe', district: 'СВАО' },
    { name: 'Ростокино', link: 'https://t.me/Rostokino', district: 'СВАО' },
    { name: 'Свиблово', link: 'https://t.me/Sviblovo', district: 'СВАО' },
    { name: 'Северное Медведково', link: 'https://t.me/Sev_Medvedkovo', district: 'СВАО' },
    { name: 'Южное Медведково', link: 'https://t.me/Uzh_Medvedkovo', district: 'СВАО' },
    { name: 'Ярославский', link: 'https://t.me/Yaroslavsky', district: 'СВАО' }
  ];

  useEffect(() => {
    const initNews = newsChannels.map((channel, index) => ({
      id: index,
      channel: channel.name,
      title: channel.news.title,
      text: channel.news.text,
      image: channel.news.image,
      link: channel.news.link,
      district: channel.district,
      visible: false
    }));
    setNewsPopups(initNews);

    const showPopup = () => {
      setNewsPopups(prev => prev.map((popup, idx) => ({
        ...popup,
        visible: idx === currentPopup
      })));
    };

    const timer = setInterval(() => {
      showPopup();
      setCurrentPopup(prev => (prev + 1) % newsChannels.length);
    }, 5000);

    setTimeout(showPopup, 2000);

    return () => clearInterval(timer);
  }, [currentPopup]);

  const closePopup = (id: number) => {
    setNewsPopups(prev => prev.map(popup => 
      popup.id === id ? { ...popup, visible: false } : popup
    ));
  };
  return (
    <div 
      className="min-h-screen text-white relative"
      style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,20,40,0.8)), url("/img/9177e8a1-9251-49aa-b6f4-3c7cc4e7ac8f.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Header */}
      <header className="container mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
            <Icon name="Building2" size={20} className="text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white">Москвичи</h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Москвичи
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-blue-200">
            Новости Москвы
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-2xl mx-auto">
            Сеть столичных медиа «Москвичи»
          </p>
          <Button 
            size="lg" 
            className="bg-[#0088CC] hover:bg-[#0077BB] text-white px-12 py-6 text-xl rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl"
            onClick={() => window.open('https://t.me/Mos_Never_sleep', '_blank')}
          >
            <Icon name="Send" size={24} className="mr-3" />
            Подписаться в Telegram
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold mb-12 text-center text-white">
            Кто мы?
          </h3>
          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
            <CardContent className="p-8">
              <p className="text-lg mb-6 leading-relaxed">
                Мы — крупнейшая сеть районных Telegram-каналов Москвы.
              </p>
              <p className="text-lg mb-8 leading-relaxed">
                Проект «Москвичи» объединяет все районы столицы в едином информационном пространстве:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start space-x-3">
                  <Icon name="MapPin" size={24} className="text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Канал каждого района Москвы</h4>
                    <p className="text-gray-300 text-sm">Быть в курсе всех новостей своего района, присылать свои инфоповоды и фотографии</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Icon name="ShoppingCart" size={24} className="text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Канал Барахолки</h4>
                    <p className="text-gray-300 text-sm">Купить, продать, обменять</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Icon name="Search" size={24} className="text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Каналы Бюро находок</h4>
                    <p className="text-gray-300 text-sm">Если потеряли кошелёк, документы или убежала собака</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Icon name="MessageCircle" size={24} className="text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Окружные чаты</h4>
                    <p className="text-gray-300 text-sm">Обсудить наболевшие вопросы благоустройства, парковок, безопасности</p>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <Button 
                  variant="outline" 
                  className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transition-all duration-300"
                  onClick={() => window.open('https://t.me/Moscvich_bot', '_blank')}
                >
                  <Icon name="Bot" size={20} className="mr-2" />
                  Найти медиа своего района: @Moscvich_bot
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Districts Channels Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold mb-12 text-center text-white">
            Районные медиа
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-20">
            {allChannels.map((channel, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 transition-all duration-300 cursor-pointer group"
                    onClick={() => window.open(channel.link, '_blank')}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="border-blue-400 text-blue-400 text-xs">
                      {channel.district}
                    </Badge>
                    <Icon name="ExternalLink" size={16} className="text-gray-400 group-hover:text-blue-400 transition-colors" />
                  </div>
                  <h4 className="font-semibold text-sm group-hover:text-blue-400 transition-colors">
                    {channel.name}
                  </h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold mb-12 text-center text-white">
            Контакты
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 transition-all duration-300 cursor-pointer"
                  onClick={() => window.open('https://t.me/Moscvich_bot', '_blank')}>
              <CardHeader className="text-center">
                <Icon name="Search" size={32} className="text-blue-400 mx-auto mb-3" />
                <CardTitle className="text-lg">Найти канал</CardTitle>
                <CardDescription className="text-gray-300">
                  @Moscvich_bot
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 transition-all duration-300 cursor-pointer"
                  onClick={() => window.open('https://t.me/AdmChat_bot', '_blank')}>
              <CardHeader className="text-center">
                <Icon name="User" size={32} className="text-blue-400 mx-auto mb-3" />
                <CardTitle className="text-lg">Админ</CardTitle>
                <CardDescription className="text-gray-300">
                  @AdmChat_bot
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 transition-all duration-300 cursor-pointer"
                  onClick={() => window.open('https://t.me/teleg_reklama_bot', '_blank')}>
              <CardHeader className="text-center">
                <Icon name="Gem" size={32} className="text-blue-400 mx-auto mb-3" />
                <CardTitle className="text-lg">Реклама</CardTitle>
                <CardDescription className="text-gray-300">
                  @teleg_reklama_bot
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* News Popups */}
      {newsPopups.map((popup) => (
        popup.visible && (
          <div key={popup.id} className="fixed bottom-6 right-6 z-50 animate-fade-in">
            <Card className="bg-white/95 backdrop-blur-md border-blue-200 shadow-2xl max-w-sm">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Badge className="bg-[#0088CC] text-white text-xs">
                      {popup.district}
                    </Badge>
                    <span className="text-sm font-medium text-gray-600">{popup.channel}</span>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-6 w-6 p-0 text-gray-400 hover:text-gray-600"
                    onClick={() => closePopup(popup.id)}
                  >
                    <Icon name="X" size={14} />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="mb-3">
                  <img 
                    src={popup.image} 
                    alt={popup.title}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 text-sm leading-tight">
                  {popup.title}
                </h4>
                <p className="text-gray-600 text-xs mb-3 leading-relaxed">
                  {popup.text}
                </p>
                <Button 
                  size="sm" 
                  className="w-full bg-[#0088CC] hover:bg-[#0077BB] text-white text-xs"
                  onClick={() => window.open(popup.link, '_blank')}
                >
                  <Icon name="ExternalLink" size={12} className="mr-1" />
                  Читать полностью
                </Button>
              </CardContent>
            </Card>
          </div>
        )
      ))}

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 text-center border-t border-white/10">
        <p className="text-gray-400">
          © 2025 Сеть столичных медиа «Москвичи». Новости Москвы
        </p>
      </footer>
    </div>
  );
};

export default Index;