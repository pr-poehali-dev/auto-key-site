import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const carBrands = [
    { name: 'Toyota', models: 'Camry, Corolla, RAV4', price: 'от 3500₽', icon: 'Car' },
    { name: 'Mercedes-Benz', models: 'E-Class, C-Class, GLC', price: 'от 5500₽', icon: 'Car' },
    { name: 'BMW', models: '3 Series, 5 Series, X5', price: 'от 5500₽', icon: 'Car' },
    { name: 'Volkswagen', models: 'Polo, Tiguan, Passat', price: 'от 3000₽', icon: 'Car' },
    { name: 'Hyundai', models: 'Solaris, Creta, Tucson', price: 'от 2800₽', icon: 'Car' },
    { name: 'Kia', models: 'Rio, Sportage, Optima', price: 'от 2800₽', icon: 'Car' },
    { name: 'Audi', models: 'A4, A6, Q5', price: 'от 6000₽', icon: 'Car' },
    { name: 'Ford', models: 'Focus, Mondeo, Kuga', price: 'от 3200₽', icon: 'Car' }
  ];

  const services = [
    {
      title: 'Изготовление ключей',
      description: 'Быстрое изготовление дубликатов ключей для любых марок автомобилей',
      icon: 'Key',
      features: ['Механические ключи', 'Ключи с чипом', 'Смарт-ключи']
    },
    {
      title: 'Программирование',
      description: 'Профессиональное программирование автомобильных ключей и брелоков',
      icon: 'Settings',
      features: ['Чип-ключи', 'Иммобилайзер', 'Брелоки сигнализации']
    },
    {
      title: 'Ремонт ключей',
      description: 'Восстановление корпусов ключей и замена элементов питания',
      icon: 'Wrench',
      features: ['Замена корпуса', 'Замена батареек', 'Ремонт кнопок']
    },
    {
      title: 'Аварийное вскрытие',
      description: 'Экстренное открытие автомобиля при потере ключей',
      icon: 'ShieldAlert',
      features: ['Выезд 24/7', 'Без повреждений', 'Быстро и надежно']
    }
  ];

  const advantages = [
    { icon: 'Clock', title: 'Быстро', text: 'Изготовление за 30-60 минут' },
    { icon: 'Award', title: 'Качество', text: 'Гарантия на все работы' },
    { icon: 'Wrench', title: 'Опыт', text: 'Более 10 лет на рынке' },
    { icon: 'ShieldCheck', title: 'Надежность', text: 'Оригинальное оборудование' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Key" className="h-6 w-6 text-accent" />
            <span className="font-heading text-xl font-bold text-primary">АвтоКлюч Мастер</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#catalog" className="text-sm font-medium hover:text-accent transition-colors">Каталог</a>
            <a href="#services" className="text-sm font-medium hover:text-accent transition-colors">Услуги</a>
            <a href="#about" className="text-sm font-medium hover:text-accent transition-colors">О нас</a>
            <a href="#contacts" className="text-sm font-medium hover:text-accent transition-colors">Контакты</a>
          </nav>
          <Button className="bg-accent hover:bg-accent/90">
            <Icon name="Phone" className="mr-2 h-4 w-4" />
            Позвонить
          </Button>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary/80 text-white py-20 md:py-32">
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-accent/20 text-white border-accent/30">Работаем с 2013 года</Badge>
              <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
                Изготовление автоключей любой сложности
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8">
                Профессиональное изготовление и программирование автомобильных ключей. Выезд мастера, гарантия качества.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90">
                  <Icon name="MessageCircle" className="mr-2 h-5 w-5" />
                  Получить консультацию
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Icon name="Calculator" className="mr-2 h-5 w-5" />
                  Рассчитать стоимость
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/5368d9ce-65fe-464e-beab-d38b73d91186/files/351581d1-b209-466e-9a88-69c53d4d4901.jpg"
                alt="Автомобильные ключи"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px]" />
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {advantages.map((adv, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <Icon name={adv.icon} className="h-10 w-10 text-accent mb-3" />
                <h3 className="font-heading font-semibold mb-2">{adv.title}</h3>
                <p className="text-sm text-muted-foreground">{adv.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Каталог автоключей</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Изготовление ключей для всех популярных марок автомобилей
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {carBrands.map((brand, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Icon name={brand.icon} className="h-8 w-8 text-accent group-hover:scale-110 transition-transform" />
                    <Badge variant="secondary">{brand.price}</Badge>
                  </div>
                  <CardTitle className="font-heading">{brand.name}</CardTitle>
                  <CardDescription>{brand.models}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-colors">
                    Заказать ключ
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный спектр услуг по работе с автомобильными ключами
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-xl transition-shadow">
                <CardHeader className="bg-gradient-to-br from-primary/5 to-accent/5">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Icon name={service.icon} className="h-8 w-8 text-accent" />
                    </div>
                    <div>
                      <CardTitle className="font-heading text-xl mb-2">{service.title}</CardTitle>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-2">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2">
                        <Icon name="CheckCircle2" className="h-5 w-5 text-accent flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/95 to-primary text-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/5368d9ce-65fe-464e-beab-d38b73d91186/files/296f7537-9439-4427-984d-d55340eed2d7.jpg"
                alt="Оборудование для программирования ключей"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Современное оборудование</h2>
              <p className="text-lg text-white/90 mb-6">
                Мы используем только профессиональное оборудование для программирования и изготовления автоключей.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Icon name="Zap" className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <strong>Быстрая диагностика</strong>
                    <p className="text-white/80">Определение типа ключа и чипа за 5 минут</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Cpu" className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <strong>Точное программирование</strong>
                    <p className="text-white/80">Оригинальное ПО для всех марок автомобилей</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Shield" className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <strong>Гарантия качества</strong>
                    <p className="text-white/80">12 месяцев гарантии на все работы</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">О компании</h2>
              <p className="text-lg text-muted-foreground mb-6">
                АвтоКлюч Мастер — это команда профессионалов с более чем 10-летним опытом работы в сфере изготовления и программирования автомобильных ключей.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Мы помогли более 15 000 автовладельцам решить проблемы с ключами — от простого дубликата до сложного программирования иммобилайзера.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-heading font-bold text-accent mb-2">10+</div>
                  <div className="text-sm text-muted-foreground">лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-heading font-bold text-accent mb-2">15К+</div>
                  <div className="text-sm text-muted-foreground">клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-heading font-bold text-accent mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">довольных</div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/5368d9ce-65fe-464e-beab-d38b73d91186/files/01247af1-f8cb-4bc1-be98-6932e524485f.jpg"
                alt="Коллекция автоключей"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Свяжитесь с нами</h2>
              <p className="text-lg text-muted-foreground">
                Оставьте заявку и мы свяжемся с вами в течение 10 минут
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading">Контактная информация</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="Phone" className="h-5 w-5 text-accent mt-1" />
                    <div>
                      <div className="font-semibold">Телефон</div>
                      <a href="tel:+79001234567" className="text-accent hover:underline">+7 (900) 123-45-67</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Mail" className="h-5 w-5 text-accent mt-1" />
                    <div>
                      <div className="font-semibold">Email</div>
                      <a href="mailto:info@autokey.ru" className="text-accent hover:underline">info@autokey.ru</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" className="h-5 w-5 text-accent mt-1" />
                    <div>
                      <div className="font-semibold">Адрес</div>
                      <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 1</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Clock" className="h-5 w-5 text-accent mt-1" />
                    <div>
                      <div className="font-semibold">Режим работы</div>
                      <p className="text-muted-foreground">Ежедневно с 9:00 до 21:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading">Оставить заявку</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        placeholder="Ваше имя"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <Input
                        placeholder="Телефон"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Сообщение"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={4}
                      />
                    </div>
                    <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                      <Icon name="Send" className="mr-2 h-4 w-4" />
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Key" className="h-6 w-6 text-accent" />
                <span className="font-heading text-lg font-bold">АвтоКлюч Мастер</span>
              </div>
              <p className="text-white/70 text-sm">
                Профессиональное изготовление автомобильных ключей с 2013 года
              </p>
            </div>
            <div>
              <h3 className="font-heading font-semibold mb-4">Каталог</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-accent transition-colors">Toyota</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Mercedes-Benz</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">BMW</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Все марки</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-accent transition-colors">Изготовление ключей</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Программирование</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Ремонт ключей</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Вскрытие авто</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li>+7 (900) 123-45-67</li>
                <li>info@autokey.ru</li>
                <li>Ежедневно 9:00-21:00</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/50">
            <p>© 2024 АвтоКлюч Мастер. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
