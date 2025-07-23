import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
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