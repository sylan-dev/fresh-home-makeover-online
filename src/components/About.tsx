
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  Award, 
  Clock, 
  Shield,
  CheckCircle,
  MessageCircle
} from 'lucide-react';

const About = () => {
  const whatsappNumber = "5511966424414";

  const handleWhatsAppClick = () => {
    const mensagem = "Olá! Gostaria de saber mais sobre os serviços da Lava & Seca Online.";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensagem)}`;
    window.open(whatsappUrl, '_blank');
  };

  const stats = [
    {
      icon: Award,
      number: '6+',
      label: 'Anos no Mercado'
    },
    {
      icon: Users,
      number: '80%',
      label: 'Serviços no Local'
    },
    {
      icon: Clock,
      number: 'Rápido',
      label: 'Diagnóstico'
    },
    {
      icon: Shield,
      number: '100%',
      label: 'Garantia'
    }
  ];

  const features = [
    'Orçamento transparente e participativo',
    'Cobrimos qualquer orçamento de 15% a 30%',
    'Técnicos especializados em máquinas de lavar',
    'Atendimento personalizado',
    'Peças originais e garantia',
    'Serviço de qualidade com preço justo'
  ];

  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-6">
              Por que escolher a <span className="text-primary">Lava & Seca Online?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              A Assistência Técnica Lava & Seca Online é uma Assistência Especializada. 
              Oferecemos serviços de manutenção, higienização e instalações de máquinas de lavar, 
              secadoras e geladeiras.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Há mais de 6 anos no mercado, prezamos pela satisfação com serviço de qualidade. 
              Nosso atendimento é personalizado para suprir a necessidade de cada um de nossos clientes.
            </p>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-yellow-800 mb-4">Orçamento Transparente</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Valor da Peça</span>
                  <CheckCircle className="text-green-500" size={20} />
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Valor da Mão de Obra</span>
                  <CheckCircle className="text-green-500" size={20} />
                </div>
              </div>
              <p className="text-yellow-700 text-sm mt-3">
                Você vai saber tudo o que está sendo pago. Fique Tranquilo!
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="font-semibold" onClick={handleWhatsAppClick}>
              Solicitar Atendimento
            </Button>
          </div>

          <div className="animate-fade-in-up">
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                      <stat.icon className="text-primary" size={24} />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-primary text-white">
              <CardContent className="p-6 text-center">
                <MessageCircle size={32} className="mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Traga Seu Orçamento</h3>
                <p className="text-blue-100 mb-4">
                  Cobrimos de 15% a 30%! Atendimento em Osasco e região.
                </p>
                <Button 
                  variant="secondary" 
                  className="text-primary font-semibold"
                  onClick={handleWhatsAppClick}
                >
                  WhatsApp: (11) 96642-4414
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
