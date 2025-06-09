
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
  const whatsappNumber = "5511999999999"; // Número do WhatsApp (código do país + DDD + número)

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Coleta os dados do formulário
    const formData = new FormData(e.currentTarget);
    const nome = formData.get('nome');
    const telefone = formData.get('telefone');
    const email = formData.get('email');
    const servico = formData.get('servico');
    const descricao = formData.get('descricao');

    // Cria a mensagem para o WhatsApp
    const mensagem = `Olá! Gostaria de solicitar um orçamento:
    
📝 *Dados do Cliente:*
Nome: ${nome}
Telefone: ${telefone}
E-mail: ${email}

🔧 *Serviço:* ${servico}

📋 *Descrição:*
${descricao}

Aguardo retorno para orçamento. Obrigado!`;

    // Redireciona para o WhatsApp
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensagem)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleWhatsAppClick = () => {
    const mensagem = "Olá! Gostaria de solicitar um orçamento para serviços de reparo domiciliar. Podem me ajudar?";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensagem)}`;
    window.open(whatsappUrl, '_blank');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      details: ['(11) 99999-9999', '(11) 3333-3333'],
      action: 'Ligar Agora',
      onClick: () => window.open('tel:+5511999999999')
    },
    {
      icon: Mail,
      title: 'E-mail',
      details: ['contato@lavaesecaonline.com.br', 'orcamento@lavaesecaonline.com.br'],
      action: 'Enviar E-mail',
      onClick: () => window.open('mailto:contato@lavaesecaonline.com.br')
    },
    {
      icon: MapPin,
      title: 'Localização',
      details: ['São Paulo - SP', 'Atendemos toda a região metropolitana'],
      action: 'Ver no Mapa',
      onClick: () => window.open('https://maps.google.com/?q=São Paulo, SP')
    },
    {
      icon: Clock,
      title: 'Horário',
      details: ['Segunda a Sábado: 8h às 18h', 'Emergências: 24 horas'],
      action: 'Agendar',
      onClick: handleWhatsAppClick
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
                    <Button variant="outline" size="sm" className="mt-3 w-full" onClick={info.onClick}>
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
                <Button 
                  variant="secondary" 
                  className="w-full text-primary font-semibold"
                  onClick={handleWhatsAppClick}
                >
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
                <form className="space-y-4" onSubmit={handleFormSubmit}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="nome"
                      placeholder="Seu nome"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <input
                      type="tel"
                      name="telefone"
                      placeholder="Seu telefone"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Seu e-mail"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <select 
                    name="servico" 
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Selecione o serviço</option>
                    <option value="Serviços Elétricos">Serviços Elétricos</option>
                    <option value="Hidráulica">Hidráulica</option>
                    <option value="Pintura">Pintura</option>
                    <option value="Marcenaria">Marcenaria</option>
                    <option value="Reformas Gerais">Reformas Gerais</option>
                    <option value="Manutenção">Manutenção</option>
                    <option value="Outros">Outros</option>
                  </select>
                  <textarea
                    name="descricao"
                    placeholder="Descreva o serviço que você precisa..."
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  ></textarea>
                  <Button type="submit" className="w-full font-semibold">
                    Enviar via WhatsApp
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
