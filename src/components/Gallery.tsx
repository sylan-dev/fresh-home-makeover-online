import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Gallery = () => {
  // Placeholder images - você pode substituir pelos seus próprios serviços
  const galleryItems = [
    {
      id: 1,
      title: 'Conserto Máquina Brastemp',
      category: 'Máquina de Lavar',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      description: 'Reparo completo realizado em Osasco'
    },
    {
      id: 2,
      title: 'Troca de Placa Eletrônica',
      category: 'Lava e Seca',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      description: 'Manutenção preventiva Samsung'
    },
    {
      id: 3,
      title: 'Instalação Secadora',
      category: 'Secadora',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      description: 'Instalação completa Electrolux'
    },
    {
      id: 4,
      title: 'Reparo Microondas',
      category: 'Microondas',
      image: 'https://images.unsplash.com/photo-1585659722983-3a675fb6ac92?w=400&h=300&fit=crop',
      description: 'Conserto de magnetron e display'
    },
    {
      id: 5,
      title: 'Manutenção Consul',
      category: 'Máquina de Lavar',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      description: 'Serviço de qualidade em Osasco'
    },
    {
      id: 6,
      title: 'Limpeza Interna',
      category: 'Microondas',
      image: 'https://images.unsplash.com/photo-1585659722983-3a675fb6ac92?w=400&h=300&fit=crop',
      description: 'Higienização completa do equipamento'
    }
  ];

  return (
    <section id="galeria" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-6">
            Nossos <span className="text-primary">Trabalhos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Confira alguns dos nossos serviços realizados em Osasco e região
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <Card key={item.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in-up">
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-white/90 text-primary">
                    {item.category}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Quer ver seu equipamento funcionando perfeitamente?
          </p>
          <a 
            href={`https://wa.me/5511966424414?text=${encodeURIComponent('Olá! Vi a galeria de trabalhos e gostaria de agendar uma visita técnica.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
          >
            Agendar Visita Técnica
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;