
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  Award, 
  Clock, 
  Shield,
  CheckCircle
} from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: Users,
      number: '1000+',
      label: 'Clientes Atendidos'
    },
    {
      icon: Award,
      number: '5+',
      label: 'Anos de Experiência'
    },
    {
      icon: Clock,
      number: '24h',
      label: 'Atendimento Disponível'
    },
    {
      icon: Shield,
      number: '100%',
      label: 'Garantia nos Serviços'
    }
  ];

  const features = [
    'Profissionais qualificados e experientes',
    'Orçamento gratuito e sem compromisso',
    'Materiais de primeira qualidade',
    'Atendimento personalizado',
    'Garantia em todos os serviços',
    'Preços competitivos e justos'
  ];

  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-6">
              Por que escolher a <span className="text-primary">LavaEseca Online?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Somos uma empresa especializada em serviços domiciliares com foco na qualidade, 
              rapidez e satisfação do cliente. Nossa equipe é formada por profissionais 
              qualificados e experientes.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="font-semibold">
              Solicitar Atendimento
            </Button>
          </div>

          <div className="animate-fade-in-up">
            <div className="grid grid-cols-2 gap-6">
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

            <Card className="mt-8 bg-gradient-primary text-white">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Atendimento de Emergência</h3>
                <p className="text-blue-100 mb-4">
                  Problemas urgentes? Temos equipe de plantão 24 horas para emergências
                </p>
                <Button variant="secondary" className="text-primary font-semibold">
                  Ligar Agora: (11) 99999-9999
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
