export interface Client {
  logo: string;
  alt: string;
  status: 'active' | 'historical';
}

export const clients: Client[] = [
  {
    logo: '/clientLogos/BBVA_2019.svg',
    alt: 'Logo BBVA',
    status: 'active'
  },
  {
    logo: '/clientLogos/banco_santander.svg',
    alt: 'Logo Banco Santander',
    status: 'active'
  },
  {
    logo: '/clientLogos/banco_coop.svg',
    alt: 'Logo Banco Cooperativo',
    status: 'active'
  },
  {
    logo: '/clientLogos/banco_gnb.webp',
    alt: 'Logo Banco Sudameris',
    status: 'active'
  },
  {
    logo: '/clientLogos/fng.webp',
    alt: 'Logo FNG',
    status: 'active'
  },
  {
    logo: '/clientLogos/logoCH.png',
    alt: 'Logo CH',
    status: 'active'
  },
  {
    logo: '/clientLogos/cvu_logo.png',
    alt: 'Logo CVU',
    status: 'active'
  },
  {
    logo: '/clientLogos/banco_gnbvalores.webp',
    alt: 'Logo Banco Sudameris servivalores',
    status: 'active'
  },
  {
    logo: '/clientLogos/logo-Colfondos-Habitat.png',
    alt: 'Logo Colfondos Habitat',
    status: 'active'
  },
  {
    logo: '/clientLogos/bayport_logo.png',
    alt: 'Logo Bayport',
    status: 'active'
  },
  {
    logo: '/clientLogos/banco_bogota.svg',
    alt: 'Logo Banco Bogotá',
    status: 'historical'
  },
  {
    logo: '/clientLogos/banco_colpatria.svg',
    alt: 'Logo Banco Colpatria',
    status: 'historical'
  },
  {
    logo: '/clientLogos/banco_mujer.svg',
    alt: 'Logo Banco Mujer',
    status: 'historical'
  },
  {
    logo: '/clientLogos/banco_procredit.svg',
    alt: 'Logo Banco Procredit',
    status: 'historical'
  },
  {
    logo: '/clientLogos/mibancompartir.png',
    alt: 'Logo Bancompartir',
    status: 'historical'
  },
  {
    logo: '/clientLogos/comultrasan.svg',
    alt: 'Logo Comultrasan',
    status: 'active'
  },
  {
    logo: '/clientLogos/rci_colombia.svg ',
    alt: 'Logo RCI Colombia',
    status: 'active'
  },
  {
    logo: '/clientLogos/corpbanc.svg',
    alt: 'Logo Corpbanc',
    status: 'historical'
  },
  {
    logo: '/clientLogos/logo-base-bot-sw.png',
    alt: 'Logo Base Bot',
    status: 'historical'
  },
  {
    logo: '/clientLogos/sp2.png',
    alt: 'Logo SuperFinanciera',
    status: 'historical'
  },
  {
    logo: '/clientLogos/caprecom.webp',
    alt: 'Logo Caprecom',
    status: 'historical'
  },
  {
    logo: '/clientLogos/positiva.webp',
    alt: 'Logo positiva',
    status: 'historical'
  }

];


// obtener clientes por status
export const getClientsByStatus = (status: 'active' | 'historical') =>
  clients.filter(client => client.status === status);

// todos los clientes
export const getAllClients = () => clients;
