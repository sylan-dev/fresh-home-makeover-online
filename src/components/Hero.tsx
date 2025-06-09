
import { Button } from '@/components/ui/button';
import { CheckCircle, Star } from 'lucide-react';

const Hero = () => {
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
              <span className="text-sm font-medium">+1000 clientes satisfeitos</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold font-poppins mb-6 leading-tight">
              Serviços de Reparo
              <span className="block text-yellow-400">Domiciliar</span>
            </h1>
            
            <p className="text-xl mb-8 text-blue-100 leading-relaxed">
              Profissionais qualificados para resolver todos os problemas da sua casa. 
              Rapidez, qualidade e garantia em todos os serviços.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" variant="secondary" className="text-primary font-semibold">
                Solicitar Orçamento Grátis
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Ver Nossos Serviços
              </Button>
            </div>
            
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-400" size={24} />
                <span className="font-medium">Atendimento 24h</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-400" size={24} />
                <span className="font-medium">Garantia Total</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-400" size={24} />
                <span className="font-medium">Preço Justo</span>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in-up lg:justify-self-end">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6 text-center">Orçamento Rápido</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Seu nome"
                  className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <input
                  type="tel"
                  placeholder="Seu telefone"
                  className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <select className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400">
                  <option>Selecione o serviço</option>
                  <option>Elétrica</option>
                  <option>Hidráulica</option>
                  <option>Pintura</option>
                  <option>Marcenaria</option>
                  <option>Outros</option>
                </select>
                <Button className="w-full bg-yellow-400 text-gray-800 hover:bg-yellow-500 font-semibold">
                  Solicitar Orçamento
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
