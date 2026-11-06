export interface OfficialChannel {
  id: string;
  name: string;
  category: "policia" | "financeiro" | "consumidor" | "seguranca-dados" | "redes-sociais";
  categoryLabel: string;
  role: string;
  description: string;
  url: string;
  primaryAction: string;
  badge?: string;
}

export const OFFICIAL_CHANNELS: OfficialChannel[] = [
  {
    id: "delegacia-eletronica-sp",
    name: "Delegacia Eletrônica – Polícia Civil de São Paulo",
    category: "policia",
    categoryLabel: "Segurança Pública & Polícia",
    role: "Registro formal de ocorrências e crimes cibernéticos em SP",
    description:
      "Canal oficial do Governo do Estado de SP para registro online de boletins de ocorrência de estelionato, fraudes virtuais, ameaças e furtos. Fornece o documento oficial em PDF indispensável para contestações bancárias e investigações criminais.",
    url: "https://www.delegaciaeletronica.policiacivil.sp.gov.br/",
    primaryAction: "Registrar Boletim Online",
    badge: "Oficial SP",
  },
  {
    id: "bcb-golpes",
    name: "Banco Central do Brasil – Segurança e Prevenção de Golpes",
    category: "financeiro",
    categoryLabel: "Autoridade Monetária",
    role: "Orientações sobre o MED, fraudes bancárias e segurança do Pix",
    description:
      "Portal informativo da autoridade máxima do sistema financeiro nacional. Traz cartilhas e regras normativas sobre o Mecanismo Especial de Devolução (MED), segurança de chaves Pix e alertas sobre novos tipos de golpes.",
    url: "https://www.bcb.gov.br/golpes",
    primaryAction: "Acessar Portal do BCB",
    badge: "Governo Federal",
  },
  {
    id: "bcb-reclamacao",
    name: "Banco Central – Registro de Reclamação contra Bancos",
    category: "financeiro",
    categoryLabel: "Fiscalização Bancária",
    role: "Canal de fiscalização contra instituições financeiras supervisionadas",
    description:
      "Caso o seu banco se recuse indevidamente a acionar o MED ou descumpra prazos regulamentares, você pode registrar uma reclamação oficial no Banco Central. O BCB notifica a diretoria do banco para prestar esclarecimentos.",
    url: "https://www.bcb.gov.br/meubc/registrar_reclamacao",
    primaryAction: "Registrar Reclamação no BCB",
  },
  {
    id: "consumidor-gov",
    name: "Consumidor.gov.br",
    category: "consumidor",
    categoryLabel: "Defesa do Consumidor",
    role: "Mediação direta de conflitos com bancos, plataformas e varejistas",
    description:
      "Serviço público oficial monitorado pelo Ministério da Justiça e Procons para solução rápida de conflitos de consumo. A maioria dos bancos e grandes redes de comércio eletrônico responde em até 10 dias com alto índice de resolução.",
    url: "https://www.consumidor.gov.br/",
    primaryAction: "Abrir Reclamação Gratuita",
    badge: "Ministério da Justiça",
  },
  {
    id: "procon-sp",
    name: "Fundação Procon-SP",
    category: "consumidor",
    categoryLabel: "Defesa do Consumidor",
    role: "Orientação, fiscalização e proteção dos direitos do consumidor em SP",
    description:
      "Órgão estadual de proteção ao consumidor. Oferece atendimento para práticas abusivas, fraudes comerciais e orientações sobre direitos contra cobranças indevidas de compras online não entregues.",
    url: "https://www.procon.sp.gov.br/",
    primaryAction: "Acessar Procon-SP",
  },
  {
    id: "cert-br",
    name: "CERT.br – Centro de Estudos e Resposta a Incidentes",
    category: "seguranca-dados",
    categoryLabel: "Educação & Segurança",
    role: "Cartilhas de segurança na internet e boas práticas digitais",
    description:
      "Mantido pelo NIC.br e CGI.br, o CERT.br desenvolve a Cartilha de Segurança para Internet de referência nacional, com fascículos gratuitos sobre proteção de redes domésticas, dispositivos móveis e privacidade de dados.",
    url: "https://cartilha.cert.br/",
    primaryAction: "Ler Cartilha do CERT.br",
  },
  {
    id: "policia-federal",
    name: "Polícia Federal – Crimes Cibernéticos",
    category: "policia",
    categoryLabel: "Polícia Federal",
    role: "Investigação de crimes cibernéticos de competência da União",
    description:
      "Orientações sobre as atribuições da Polícia Federal em ataques contra instituições federais, pornografia infantil, tráfico de dados em escala internacional e cooperação com a Interpol.",
    url: "https://www.gov.br/pf/pt-br/assuntos/combate-a-crimes-ciberneticos",
    primaryAction: "Portal da PF",
  },
  {
    id: "anpd",
    name: "ANPD – Autoridade Nacional de Proteção de Dados",
    category: "seguranca-dados",
    categoryLabel: "Privacidade & LGPD",
    role: "Fiscalização da Lei Geral de Proteção de Dados Pessoais (LGPD)",
    description:
      "Órgão federal responsável por zelar pela proteção de dados pessoais, fiscalizar e aplicar sanções a empresas em incidentes de vazamentos de bancos de dados no Brasil.",
    url: "https://www.gov.br/anpd/pt-br",
    primaryAction: "Portal da ANPD",
  },
];

export const BIG_TECH_RECOVERY = [
  {
    name: "WhatsApp",
    desc: "Central Oficial de Ajuda e Segurança: orientações sobre como recuperar conta clonada ou transferida indevidamente.",
    url: "https://faq.whatsapp.com/",
    action: "Central de Ajuda WhatsApp",
  },
  {
    name: "Instagram",
    desc: "Canal Oficial /hacked: fluxo especializado para recuperar conta invadida com verificação por vídeo selfie facial.",
    url: "https://www.instagram.com/hacked/",
    action: "Recuperar Instagram Invasão",
  },
  {
    name: "Facebook",
    desc: "Canal Oficial /hacked: procedimento para congelar a conta comprometida e redefinir acesso via amigos de confiança.",
    url: "https://www.facebook.com/hacked",
    action: "Recuperar Facebook Invasão",
  },
  {
    name: "Conta Google",
    desc: "Checkup de Segurança do Google: gerenciar dispositivos conectados, senhas vazadas e redefinição de acesso ao Gmail.",
    url: "https://myaccount.google.com/security",
    action: "Painel de Segurança Google",
  },
];

export const MOGI_DAS_CRUZES_INFO = {
  city: "Mogi das Cruzes - SP",
  title: "Atendimento ao Cidadão em Mogi das Cruzes",
  intro:
    "Para moradores do município de Mogi das Cruzes e região do Alto Tietê, consulte as orientações oficiais para atendimento presencial e canais locais validados.",
  prefeituraUrl: "https://www.mogidascruzes.sp.gov.br/",
  proconSpUrl: "https://www.procon.sp.gov.br/",
  delegaciaEletronicaUrl: "https://www.delegaciaeletronica.policiacivil.sp.gov.br/",
  guidanceCards: [
    {
      title: "Procon de Mogi das Cruzes",
      type: "consumo",
      role: "Conflitos de Consumo e Práticas Comerciais Abusivas",
      description:
        "Indicado para casos de compras online não entregues por lojas cadastradas, cobranças indevidas de serviços não contratados e desacordos comerciais com fornecedores.",
      importantNotice:
        "O Procon não é órgão policial nem substituto do banco. Não investiga crimes de quadrilhas virtuais nem efetua bloqueios judiciais imediatos de contas de terceiros.",
      actionUrl: "https://www.mogidascruzes.sp.gov.br/",
      actionText: "Consultar Agendamento no Portal da Prefeitura",
    },
    {
      title: "Polícia Civil – Delegacia Eletrônica e Plantões",
      type: "policia",
      role: "Registro Criminal de Estelionato e Fraude",
      description:
        "Para comunicar fraudes virtuais, chantagens, clonagem de WhatsApp e golpes do Pix ocorridos em Mogi das Cruzes, utilize a Delegacia Eletrônica do Estado de São Paulo. Se necessário atendimento presencial, procure a delegacia territorial de polícia de Mogi das Cruzes com as provas impressas.",
      importantNotice:
        "Para evitar deslocamentos desnecessários e conferir horários de plantão atualizados, utilize a Delegacia Eletrônica estadual como primeira opção oficial.",
      actionUrl: "https://www.delegaciaeletronica.policiacivil.sp.gov.br/",
      actionText: "Acessar Delegacia Eletrônica SP",
    },
  ],
  transparencyNote:
    "Nota sobre dados locais: Em conformidade com as diretrizes do projeto e para garantir a precisão das informações, os dados de endereços físicos, telefones e agendamentos devem ser conferidos diretamente nos canais oficiais da Prefeitura de Mogi das Cruzes antes do comparecimento.",
};
