import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    contact: '',
    productType: '',
    volume: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-sm flex items-center justify-center">
              <span className="text-2xl font-bold text-primary-foreground">КШФ</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground uppercase">Кузнецкая Швейная Фабрика</h1>
              <p className="text-xs text-muted-foreground uppercase">С 1941 года</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6 uppercase">
            <a href="#about" className="text-sm hover:text-primary transition-colors">О фабрике</a>
            <a href="#services" className="text-sm hover:text-primary transition-colors">Услуги</a>
            <a href="#portfolio" className="text-sm hover:text-primary transition-colors">Портфолио</a>
            <a href="#faq" className="text-sm hover:text-primary transition-colors">FAQ</a>
            <a href="#contacts" className="text-sm hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="hidden md:inline-flex uppercase">
            <Icon name="Phone" size={16} className="mr-2" />
            Связаться
          </Button>
        </div>
      </header>

      <section className="relative text-white py-24 md:py-32 overflow-hidden" style={{
        backgroundImage: 'url(https://cdn.poehali.dev/files/11aebbf0-0178-41fe-a3df-11d5c0edaf1b.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container relative z-10 my-0 py-0 bg-transparent px-0 mx-[215px]">
          <div className="max-w-4xl text-center animate-fade-in px-0 mx-[30px]">
            <div className="inline-block mb-6 py-2 bg-primary/20 border border-primary/30 px-4 rounded-md">
              <span className="text-sm font-medium">Производство полного цикла с 1941 года</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Крупное швейное производство в Пензенской области
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-white/90 font-light">
              Более 100 квалифицированных швей • 5000 м² производственных площадей
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6">
                <Icon name="Send" size={20} className="mr-2" />
                Отправить техзадание
              </Button>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6">
                <Icon name="Phone" size={20} className="mr-2" />
                Позвонить
              </Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-3xl font-bold mb-1">100+</div>
                <div className="text-sm text-white/80">квалифицированных швей</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-3xl font-bold mb-1">5000</div>
                <div className="text-sm text-white/80">м² площадей</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-3xl font-bold mb-1">84</div>
                <div className="text-sm text-white/80">года на рынке</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-3xl font-bold mb-1">24ч</div>
                <div className="text-sm text-white/80">расчёт стоимости</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            <Card className="border-l-4 border-l-primary hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Users" size={32} className="text-primary mb-2" />
                <CardTitle className="text-lg">100+ швей</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Квалифицированная команда профессионалов</p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-primary hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Factory" size={32} className="text-primary mb-2" />
                <CardTitle className="text-lg">Полный цикл</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">От раскроя до упаковки на собственных мощностях</p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-primary hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Store" size={32} className="text-primary mb-2" />
                <CardTitle className="text-lg">Маркетплейсы</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Опыт работы с Wildberries, Ozon, Яндекс Маркет</p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-primary hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Gauge" size={32} className="text-primary mb-2" />
                <CardTitle className="text-lg">Гибкость</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">От пробных партий до массового производства</p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-primary hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Clock" size={32} className="text-primary mb-2" />
                <CardTitle className="text-lg">24 часа</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Быстрый расчёт стоимости вашего заказа</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">О фабрике</h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-lg text-muted-foreground">История надёжности и качества с 1941 года</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon name="History" size={28} className="text-primary" />
                    История
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Кузнецкая швейная фабрика основана в <span className="font-bold text-primary">1941 году</span>. 
                    За 84 года работы мы прошли путь от небольшого цеха до крупного производства с современным 
                    оборудованием и высококвалифицированным персоналом.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon name="Building2" size={28} className="text-primary" />
                    Производственные мощности
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Icon name="CheckCircle2" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Более 100 квалифицированных швей</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="CheckCircle2" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>5000 м² производственных площадей</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="CheckCircle2" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Современное оборудование (Juki, Brother, Morgan Technika)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="CheckCircle2" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Собственные цеха раскроя, ВТО и упаковки</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="relative py-20 overflow-hidden" style={{
        backgroundImage: 'url(https://cdn.poehali.dev/files/11aebbf0-0178-41fe-a3df-11d5c0edaf1b.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Наши услуги</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-white/80">Полный спектр швейных услуг для вашего бизнеса</p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card className="hover:shadow-xl transition-all duration-300 border-t-4 border-t-primary">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <Icon name="Scissors" size={28} className="text-primary" />
                    Контрактное шитьё (CMT)
                  </CardTitle>
                  <CardDescription>Cut, Make, Trim — производство по вашим лекалам</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Шьём по предоставленным вами лекалам и технологическим картам. 
                    Вы поставляете материалы — мы обеспечиваем качественный пошив.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm">
                      <Icon name="Check" size={16} className="text-primary" />
                      <span>Работа по вашим ТУ</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <Icon name="Check" size={16} className="text-primary" />
                      <span>Контроль качества</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <Icon name="Check" size={16} className="text-primary" />
                      <span>Минимум от 500 единиц</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="hover:shadow-xl transition-all duration-300 border-t-4 border-t-primary">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <Icon name="Package" size={28} className="text-primary" />
                    Полный цикл (FOB)
                  </CardTitle>
                  <CardDescription>Free On Board — от идеи до готовой продукции</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Полный производственный цикл под ключ: разработка лекал, закупка материалов, 
                    пошив, упаковка и отгрузка.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm">
                      <Icon name="Check" size={16} className="text-primary" />
                      <span>Разработка лекал и техкарт</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <Icon name="Check" size={16} className="text-primary" />
                      <span>Закупка материалов</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <Icon name="Check" size={16} className="text-primary" />
                      <span>Готовая упакованная продукция</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-secondary/5 border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Типы продукции</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-background rounded-lg">
                    <Icon name="Shirt" size={40} className="text-primary mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">Повседневная одежда</h4>
                    <p className="text-sm text-muted-foreground">Женская, мужская, детская одежда любой сложности</p>
                  </div>
                  <div className="text-center p-4 bg-background rounded-lg">
                    <Icon name="Briefcase" size={40} className="text-primary mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">Корпоративная одежда</h4>
                    <p className="text-sm text-muted-foreground">Форменная одежда для компаний и организаций</p>
                  </div>
                  <div className="text-center p-4 bg-background rounded-lg">
                    <Icon name="HardHat" size={40} className="text-primary mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">Спецодежда</h4>
                    <p className="text-sm text-muted-foreground">Рабочая и защитная одежда по стандартам</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">Портфолио</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground">Примеры нашей работы</p>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <Card key={item} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="aspect-square bg-muted flex items-center justify-center relative overflow-hidden">
                    <Icon name="ImageIcon" size={48} className="text-muted-foreground/30" />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300"></div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-base">Изделие #{item}</CardTitle>
                    <CardDescription>Пример готовой продукции</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <p className="text-sm text-muted-foreground italic">
                * Фотографии готовых изделий будут добавлены после предоставления материалов
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">Часто задаваемые вопросы</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground">Ответы на популярные вопросы о сотрудничестве</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-background border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">Работаете ли вы с индивидуальными предпринимателями?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Да, мы работаем как с крупными компаниями, так и с индивидуальными предпринимателями. 
                  Главное условие — минимальный объём заказа от 500 единиц.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-background border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">Сколько времени занимает изготовление пробного образца?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Срок изготовления пробного образца зависит от сложности изделия и загруженности производства. 
                  В среднем это занимает от 7 до 14 рабочих дней. Точные сроки обсуждаются индивидуально.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-background border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">Какой минимальный объём заказа?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Минимальный объём заказа составляет 500 единиц. Это позволяет нам обеспечить 
                  оптимальное соотношение цены и качества для наших клиентов.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-background border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">Можете ли вы разработать лекала, если у нас только эскиз?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Да, мы предоставляем услугу разработки лекал и технологических карт. 
                  Наши конструкторы создадут полный комплект документации на основе вашего эскиза или образца.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-background border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">Как быстро вы рассчитываете стоимость заказа?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  После получения технического задания, лекал или образца изделия мы рассчитываем 
                  стоимость в течение 24 часов. Для сложных проектов срок может быть увеличен до 48 часов.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-background border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">Работаете ли вы с маркетплейсами?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Да, у нас есть успешный опыт работы с крупными маркетплейсами: Wildberries, Ozon, 
                  Яндекс Маркет. Мы понимаем специфику требований и можем обеспечить нужное качество и сроки.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">Контакты</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground">Свяжитесь с нами для обсуждения сотрудничества</p>
          </div>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            <div>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Контактная информация</CardTitle>
                  <CardDescription>Мы всегда на связи</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Icon name="MapPin" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Адрес</h4>
                      <p className="text-muted-foreground">Пензенская область, г. Кузнецк, ул. Рабочая 200</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Icon name="Phone" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Телефон</h4>
                      <p className="text-muted-foreground">+7 (XXX) XXX-XX-XX</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Icon name="Mail" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-muted-foreground">info@kshf58.ru</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Icon name="Clock" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Режим работы</h4>
                      <p className="text-muted-foreground">Пн-Пт: 8:00 - 17:00</p>
                      <p className="text-muted-foreground">Сб-Вс: выходной</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Форма обратной связи</CardTitle>
                  <CardDescription>Заполните форму, и мы свяжемся с вами</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Имя</Label>
                      <Input
                        id="name"
                        placeholder="Иван Иванов"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Компания</Label>
                      <Input
                        id="company"
                        placeholder="ООО 'Название'"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact">Email или телефон</Label>
                      <Input
                        id="contact"
                        placeholder="example@mail.ru или +7 999 123-45-67"
                        value={formData.contact}
                        onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="productType">Тип продукции</Label>
                      <Input
                        id="productType"
                        placeholder="Например: женские блузки"
                        value={formData.productType}
                        onChange={(e) => setFormData({ ...formData, productType: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="volume">Примерный объём</Label>
                      <Input
                        id="volume"
                        placeholder="Например: 1000 единиц"
                        value={formData.volume}
                        onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Сообщение</Label>
                      <Textarea
                        id="message"
                        placeholder="Опишите ваш проект..."
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>
                    <Button type="submit" className="w-full" size="lg">
                      <Icon name="Send" size={18} className="mr-2" />
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative text-white py-12 overflow-hidden" style={{
        backgroundImage: 'url(https://cdn.poehali.dev/files/11aebbf0-0178-41fe-a3df-11d5c0edaf1b.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary rounded-sm flex items-center justify-center">
                  <span className="text-2xl font-bold">КШФ</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Кузнецкая Швейная Фабрика</h3>
                  <p className="text-sm text-white/70">С 1941 года</p>
                </div>
              </div>
              <p className="text-white/80 text-sm">
                Надёжный партнёр для вашего швейного бизнеса
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Быстрые ссылки</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="text-white/80 hover:text-white transition-colors">О фабрике</a></li>
                <li><a href="#services" className="text-white/80 hover:text-white transition-colors">Услуги</a></li>
                <li><a href="#portfolio" className="text-white/80 hover:text-white transition-colors">Портфолио</a></li>
                <li><a href="#faq" className="text-white/80 hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#contacts" className="text-white/80 hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Контакты</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  <span>г. Кузнецк, ул. Рабочая 200</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (XXX) XXX-XX-XX</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@kshf58.ru</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-6 text-center text-sm text-white/70">
            <p>&copy; 2025 Кузнецкая Швейная Фабрика. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}