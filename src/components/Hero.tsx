
import { Button } from '@/components/ui/button';
import { CheckCircle, Star, MessageCircle, Phone } from 'lucide-react';

const Hero = () => {
  const whatsappNumber = "5511966424414";

  const handleWhatsAppClick = () => {
    const mensagem = "Olá! Vi o site e gostaria de solicitar um orçamento para conserto de máquina de lavar. Podem me ajudar?";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensagem)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handlePhoneClick = () => {
    window.open('tel:+5511966424414');
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Coleta os dados do formulário
    const formData = new FormData(e.currentTarget);
    const nome = formData.get('nome');
    const telefone = formData.get('telefone');
    const equipamento = formData.get('equipamento');
    const problema = formData.get('problema');

    // Cria a mensagem para o WhatsApp
    const mensagem = `Olá! Gostaria de agendar uma visita técnica:

👤 Nome: ${nome}
📞 Telefone: ${telefone}
🔧 Equipamento: ${equipamento}
❌ Problema: ${problema}

Aguardo contato para agendamento. Obrigado!`;

    // Redireciona para o WhatsApp
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensagem)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-primary text-white">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="container mx-auto px-4 py-20 lg:py-28 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={20} fill="currentColor" />
                ))}
              </div>
              <span className="text-sm font-medium">+6 anos no mercado</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold font-poppins mb-6 leading-tight">
              Assistência Técnica
              <span className="block text-yellow-400">Lava & Seca</span>
            </h1>
            
            <p className="text-xl mb-8 text-blue-100 leading-relaxed">
              Conserto de Máquina de Lavar, Lava e Seca e Secadora em Osasco e São Paulo. 
              Orçamento transparente e serviço de qualidade.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                variant="secondary" 
                className="text-primary font-semibold"
                onClick={handlePhoneClick}
              >
                <Phone className="mr-2" size={20} />
                (11) 96642-4414
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary"
                onClick={handleWhatsAppClick}
              >
                <MessageCircle className="mr-2" size={20} />
                WhatsApp
              </Button>
            </div>
            
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-400" size={24} />
                <span className="font-medium">Visita no Local</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-400" size={24} />
                <span className="font-medium">Orçamento Transparente</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-400" size={24} />
                <span className="font-medium">Garantia nos Serviços</span>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in-up lg:justify-self-end">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6 text-center">Agendar Visita Técnica</h3>
              <form className="space-y-4" onSubmit={handleFormSubmit}>
                <input
                  type="text"
                  name="nome"
                  placeholder="Seu nome"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <input
                  type="tel"
                  name="telefone"
                  placeholder="Seu telefone"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <select 
                  name="equipamento" 
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                >
                  <option value="">Selecione o equipamento</option>
                  <option value="Máquina de Lavar">Máquina de Lavar</option>
                  <option value="Lava e Seca">Lava e Seca</option>
                  <option value="Secadora">Secadora</option>
                  <option value="Geladeira">Geladeira</option>
                </select>
                <input
                  type="text"
                  name="problema"
                  placeholder="Qual o problema? (ex: não liga, faz barulho)"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <Button type="submit" className="w-full bg-yellow-400 text-gray-800 hover:bg-yellow-500 font-semibold">
                  <MessageCircle className="mr-2" size={20} />
                  Agendar via WhatsApp
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
