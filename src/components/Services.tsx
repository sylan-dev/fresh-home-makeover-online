
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Zap, 
  Wrench, 
  Paintbrush2, 
  Hammer, 
  Home, 
  Settings,
  ArrowRight
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Zap,
      title: 'Serviços Elétricos',
      description: 'Instalações, reparos e manutenção elétrica com segurança total.',
      features: ['Instalação de tomadas', 'Troca de disjuntores', 'Reparo de chuveiros', 'Instalação de ventiladores']
    },
    {
      icon: Wrench,
      title: 'Hidráulica',
      description: 'Soluções completas para problemas hidráulicos residenciais.',
      features: ['Desentupimentos', 'Reparo de vazamentos', 'Instalação de torneiras', 'Manutenção de caixas d\'água']
    },
    {
      icon: Paintbrush2,
      title: 'Pintura',
      description: 'Pintura interna e externa com materiais de primeira qualidade.',
      features: ['Pintura de paredes', 'Pintura de portões', 'Textura decorativa', 'Verniz e acabamentos']
    },
    {
      icon: Hammer,
      title: 'Marcenaria',
      description: 'Móveis sob medida e reparos em estruturas de madeira.',
      features: ['Móveis planejados', 'Reparo de portas', 'Instalação de prateleiras', 'Deck e pergolados']
    },
    {
      icon: Home,
      title: 'Reformas Gerais',
      description: 'Reformas completas para renovar sua casa.',
      features: ['Reforma de banheiros', 'Reforma de cozinhas', 'Ampliações', 'Acabamentos']
    },
    {
      icon: Settings,
      title: 'Manutenção',
      description: 'Manutenção preventiva e corretiva para sua tranquilidade.',
      features: ['Manutenção preventiva', 'Check-up residencial', 'Pequenos reparos', 'Emergências 24h']
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
            Oferecemos uma gama completa de serviços para manter sua casa sempre em perfeito estado
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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
                      <ArrowRight size={16} className="text-primary mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  Solicitar Orçamento
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="font-semibold">
            Ver Todos os Serviços
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
