
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  MessageCircle,
  CheckCircle
} from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      details: ['(11) 99999-9999', '(11) 3333-3333'],
      action: 'Ligar Agora'
    },
    {
      icon: Mail,
      title: 'E-mail',
      details: ['contato@lavaesecaonline.com.br', 'orcamento@lavaesecaonline.com.br'],
      action: 'Enviar E-mail'
    },
    {
      icon: MapPin,
      title: 'Localização',
      details: ['São Paulo - SP', 'Atendemos toda a região metropolitana'],
      action: 'Ver no Mapa'
    },
    {
      icon: Clock,
      title: 'Horário',
      details: ['Segunda a Sábado: 8h às 18h', 'Emergências: 24 horas'],
      action: 'Agendar'
    }
  ];

  return (
    <section id="contato" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-6">
            Entre em <span className="text-primary">Contato</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos prontos para atender você! Entre em contato e solicite seu orçamento gratuito
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="animate-fade-in">
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="text-center pb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-3 mx-auto">
                      <info.icon className="text-primary" size={24} />
                    </div>
                    <CardTitle className="text-lg">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center pt-0">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-muted-foreground text-sm mb-1">
                        {detail}
                      </p>
                    ))}
                    <Button variant="outline" size="sm" className="mt-3 w-full">
                      {info.action}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-primary text-white">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <MessageCircle size={32} />
                  <div>
                    <h3 className="text-xl font-bold">WhatsApp</h3>
                    <p className="text-blue-100">Atendimento rápido e direto</p>
                  </div>
                </div>
                <Button variant="secondary" className="w-full text-primary font-semibold">
                  Conversar no WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="animate-fade-in-up">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">Solicite seu Orçamento</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Seu nome"
                      className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <input
                      type="tel"
                      placeholder="Seu telefone"
                      className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Seu e-mail"
                    className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <select className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>Selecione o serviço</option>
                    <option>Serviços Elétricos</option>
                    <option>Hidráulica</option>
                    <option>Pintura</option>
                    <option>Marcenaria</option>
                    <option>Reformas Gerais</option>
                    <option>Manutenção</option>
                    <option>Outros</option>
                  </select>
                  <textarea
                    placeholder="Descreva o serviço que você precisa..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  ></textarea>
                  <Button className="w-full font-semibold">
                    Enviar Solicitação
                  </Button>
                </form>
                
                <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center space-x-2 text-green-800">
                    <CheckCircle size={20} />
                    <span className="font-semibold">Orçamento 100% Gratuito</span>
                  </div>
                  <p className="text-green-700 text-sm mt-1">
                    Sem compromisso • Resposta em até 2 horas • Atendimento personalizado
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
