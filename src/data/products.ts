export interface Product {
  icon: string;
  title: string;
  description: string;
  link: string;
}

export const products: Product[] = [
  {
    icon: '/icons/logoTtranspiler.svg',
    title: 'TecnoTranspiler',
    description: 'Herramienta para migrar sistemas Cliente/Servidor a entornos web modernos, facilitando la transición a arquitecturas multicapas.',
    link: '/tecnotranspiler'
  },
  {
    icon: '/icons/logoBancaria.svg',
    title: 'Solución Bancaria',
    description: 'Solución para el sector financiero, optimiza la administración de captaciones, colocaciones y caja.',
    link: '/solucion-bancaria'
  },
  {
    icon: '/icons/logoTesoreria.svg',
    title: 'Tesorería Financiera',
    description: 'Solución dirigida a empresas financieras, que facilita la integración con fuentes de datos de mercado como Bloomberg, Reuters y SetFx, entre otras.',
    link: '/tesoreria-financiera'
  },
  {
    icon: '/icons/logoFiduciaria.svg',
    title: 'Solución Fiduciaria',
    description: 'Solución para fiduciarias, diseñada para gestionar eficientemente patrimonios autónomos, fiducias y fondos de inversión.',
    link: '/solucion-fiduciaria'
  },
  {
    icon: '/icons/logoBolsa.svg',
    title: 'Comisionistas de Bolsa',
    description: 'Solución especializada para comisionistas de bolsa, diseñada para gestionar eficientemente las inversiones de terceros y optimizar la administración de portafolios.',
    link: '/comisionistas-de-bolsa'
  },
  {
    icon: '/icons/logoFabrica.svg',
    title: 'Fábrica de Software',
    description: 'Servicio de desarrollo de software para el sector financiero, creando soluciones personalizadas para nuevas tecnologías, negocios y servicios.',
    link: '/fabrica-software'
  }
];

export const getAllProducts = () => products;