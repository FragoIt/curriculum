import Image from 'next/image';

const projects = [
  {
    title: 'Landing Automotriz Premium',
    description: 'Catálogo y generación de citas rápidas. Hero con parallax, CTA directo a WhatsApp, indicadores de confianza.',
    technologies: 'React, Tailwind, GSAP',
    image: '/landing_automotriz.png',
    demo: 'https://sparkle-model.vercel.app/',
  },
  {
    title: 'Tienda de Repuestos Online',
    description: 'Búsqueda y contacto inmediato. Catálogo filtrable, botones de compra rápida, integración con WhatsApp.',
    technologies: 'Typescript, Tailwind, Framer',
    image: '/items_ferre.png',
    demo: 'https://ferreteria-demo.vercel.app/',
  },
  {
    title: 'Landing  Minimal',
    description: 'Transmitir confianza y profesionalismo. Secciones limpias, testimonios, CTA constante.',
    technologies: 'Framer + Tailwind',
    image: '/landing_minimal.png',
    demo: 'https://service-landing-two.vercel.app/',
  },
	{
    title: 'E-commerce',
    description: 'Tienda online funcional. Catálogo de productos, carrito de compras, proceso de pago simplificado.',
    technologies: 'MERN Stack, Stripe',
    image: '/ecommerce_model.jpeg',
    demo: 'https://ecommerce-model-mu.vercel.app/',
  },
  	{
    title: 'Dashboard Admin',
    description: 'Panel de administración para gestionar productos y pedidos.',
    technologies: 'MERN Stack, Redux',
    image: '/dashboard_analytics.jpeg',
    demo: 'https://dashboard-analytics-blue.vercel.app/',
  },
  {
    title: 'Landing concesionario moderno',
    description: 'Landing page para un concesionario de autos. Diseño atractivo y funcional.',
    technologies: 'Next.js, Tailwind CSS',
    image: '/landing_concesionario_moderno.jpeg',
    demo: 'https://landing-model-sitev2.vercel.app/',
  }

];

export default function ProjectsSection() {
  return (
    <section className="py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-700 relative">
                <Image src={project.image} alt={project.title} fill className="object-cover" />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-sm sm:text-base text-gray-300 mb-2">{project.description}</p>
                <p className="text-xs text-gray-400 mb-4">Tecnologías: {project.technologies}</p>
                <div className="flex gap-2">
                  <a href={project.demo} className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base" target="_blank" rel="noopener noreferrer">
                    Demo →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}