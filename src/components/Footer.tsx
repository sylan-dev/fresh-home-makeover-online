
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  MessageCircle,
  Clock
} from 'lucide-react';

const Footer = () => {
  const services = [
    'Conserto de Máquina de Lavar',
    'Conserto de Lava e Seca',
    'Conserto de Secadora',
    'Conserto de Geladeira',
    'Troca de Placas Eletrônicas',
    'Manutenção Preventiva'
  ];

  const brands = [
    'Brastemp',
    'Samsung',
    'Electrolux',
    'Consul',
    'LG',
    'Whirlpool'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold font-poppins mb-4">
              Lava&Seca<span className="text-blue-400">Online</span>
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Assistência Técnica Especializada em máquinas de lavar, lava e seca e secadoras. 
              Há mais de 6 anos no mercado.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-pink-600 p-2 rounded-full hover:bg-pink-700 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://wa.me/5511966424414" className="bg-green-600 p-2 rounded-full hover:bg-green-700 transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Nossos Serviços</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Brands */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Marcas que Atendemos</h4>
            <ul className="space-y-2">
              {brands.map((brand, index) => (
                <li key={index}>
                  <span className="text-gray-300 text-sm">{brand}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-blue-400 flex-shrink-0" />
                <p className="text-sm text-gray-300">(11) 96642-4414</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-blue-400 flex-shrink-0" />
                <p className="text-sm text-gray-300">contato@lavaesecaonline.com.br</p>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-blue-400 flex-shrink-0" />
                <p className="text-sm text-gray-300">Rua João Kaufmann, 123<br />Rochdale - Osasco, SP</p>
              </div>
              <div className="flex items-center space-x-3">
                <Clock size={16} className="text-blue-400 flex-shrink-0" />
                <p className="text-sm text-gray-300">Agendamento de visitas<br />Segunda a Sábado</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Lava&Seca Online. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
