
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Wrench, 
  Settings, 
  Shield,
  CheckCircle,
  MessageCircle,
  Clock
} from 'lucide-react';

const Services = () => {
  const whatsappNumber = "5511966424414";

  const handleWhatsAppClick = () => {
    const mensagem = "Olá! Gostaria de agendar uma visita técnica para conserto de máquina de lavar.";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensagem)}`;
    window.open(whatsappUrl, '_blank');
  };

  const services = [
    {
      icon: Wrench,
      title: 'Conserto de Máquina de Lavar',
      description: 'Reparos completos em máquinas de lavar de todas as marcas.',
      features: ['Brastemp', 'Samsung', 'Electrolux', 'Consul', 'Todas as marcas']
    },
    {
      icon: Settings,
      title: 'Conserto de Lava e Seca',
      description: 'Manutenção e reparo especializado em equipamentos lava e seca.',
      features: ['Troca de placas eletrônicas', 'Reparo de peças', 'Manutenção preventiva', 'Instalação']
    },
    {
      icon: Shield,
      title: 'Conserto de Secadora',
      description: 'Assistência técnica completa para secadoras residenciais.',
      features: ['Diagnóstico rápido', 'Peças originais', 'Garantia no serviço', 'Atendimento domiciliar']
    }
  ];

  const brands = [
    'Brastemp', 'Samsung', 'Electrolux', 'Consul', 'LG', 'Whirlpool'
  ];

  const process = [
    {
      icon: MessageCircle,
      title: 'Agende Online Grátis',
      description: 'Agende gratuitamente e seja atendido em Osasco ou Região'
    },
    {
      icon: Clock,
      title: 'Diagnóstico em Instantes',
      description: 'Diagnóstico Técnico em poucos instantes e em sua residência'
    },
    {
      icon: Wrench,
      title: 'Conserto Rápido e Eficiente',
      description: 'Possuímos os melhores prazos do mercado, sua máquina estará pronta no menor prazo'
    },
    {
      icon: CheckCircle,
      title: 'Sua Máquina Feito Nova',
      description: 'Após o trabalho de nossa equipe, sua máquina ficará feito nova!'
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-6">
            Nossos <span className="text-primary">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Prestamos serviços de instalação, manutenção, reparo de placas eletrônica e peças
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in-up border-0 shadow-md">
              <CardHeader className="text-center pb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 mx-auto group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <service.icon size={32} className="text-primary group-hover:text-white" />
                </div>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 text-center">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-white transition-all duration-300"
                  onClick={handleWhatsAppClick}
                >
                  Solicitar Orçamento
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Brands Section */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold mb-8">Marcas que Atendemos</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {brands.map((brand, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm border">
                <p className="font-medium text-center">{brand}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Como funciona o processo</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                    <step.icon className="text-primary" size={24} />
                  </div>
                  <h4 className="font-semibold mb-2">{step.title}</h4>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button size="lg" className="font-semibold" onClick={handleWhatsAppClick}>
            Agendar Visita Técnica
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
