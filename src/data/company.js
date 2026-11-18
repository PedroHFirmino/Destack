export const WHATSAPP_NUMBER = '5544999524828';

export const COMPANY = {
  name: 'Destack Dedetizadora',
  city: 'Campo Mourão e região',
  phone: '(44) 99952-4828',
  phoneTel: '+5544999524828',
  instagram: 'https://www.instagram.com/dedetizadoradestack/',
  instagramLabel: '@dedetizadoradestack',
  about:
    'A Destack Dedetizadora nasceu com o propósito de oferecer um serviço de controle de pragas verdadeiramente profissional, seguro e responsável. Com anos de experiência, equipe altamente treinada e produtos regulamentados, nos tornamos referência em Campo Mourão e região pelo compromisso com a saúde dos nossos clientes e o respeito ao meio ambiente.',
};

export function whatsappUrl(message) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const DEFAULT_WHATSAPP_MESSAGE =
  'Olá! Vim pelo site da Destack Dedetizadora e gostaria de solicitar um orçamento.';

export const SERVICES = [
  {
    id: 'desratizacao',
    title: 'Desratização',
    menu: 'Desratização (roedores)',
    summary: 'Controle de ratos e camundongos em casas, condomínios e empresas.',
    text: 'Monitoramento e controle de roedores com técnicas seguras, para reduzir abrigos e o risco de infestação no imóvel.',
  },
  {
    id: 'aranhas',
    title: 'Aranhas',
    group: 'Desinsetização',
    summary: 'Desinsetização contra aranhas.',
    text: 'Controle de aranhas com vistoria dos pontos de abrigo e aplicação direcionada, dentro do serviço de desinsetização.',
  },
  {
    id: 'escorpioes',
    title: 'Escorpiões',
    group: 'Desinsetização',
    summary: 'Desinsetização contra escorpiões.',
    text: 'Ação contra escorpiões, com atenção a frestas, ralos e áreas externas, para proteger a família e o ambiente de trabalho.',
  },
  {
    id: 'cupins',
    title: 'Cupins',
    group: 'Desinsetização',
    summary: 'Desinsetização contra cupins.',
    text: 'Tratamento contra cupins que atacam madeira, móveis e estruturas, como parte da desinsetização.',
  },
  {
    id: 'moscas',
    title: 'Moscas',
    group: 'Desinsetização',
    summary: 'Desinsetização contra moscas.',
    text: 'Controle de moscas em residências e comércios, com foco em higiene e na interrupção do ciclo no ambiente.',
  },
  {
    id: 'desentupimento',
    title: 'Desentupimento',
    menu: 'Desentupimento',
    summary: 'Desobstrução de pias, ralos, vasos e tubulações.',
    text: 'Desentupimento de pias, ralos, vasos sanitários e tubulações, para devolver o escoamento do imóvel.',
  },
  {
    id: 'caixa-dagua',
    title: "Limpeza de caixa d'água",
    menu: "Limpeza de caixa d'água",
    summary: 'Higienização da caixa para uma água mais limpa.',
    text: "Limpeza e higienização da caixa d'água, removendo sujeira, limo e resíduos acumulados.",
  },
];
