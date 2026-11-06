export interface HabitItem {
  id: number;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  practicalTip: string;
}

export const TEN_HABITS: HabitItem[] = [
  {
    id: 1,
    title: "Senhas Fortes e Exclusivas",
    tagline: "Uma chave diferente para cada porta",
    description: "Nunca reutilize a mesma senha em múltiplos serviços. Prefira senhas longas com mais de 14 caracteres combinando letras maiúsculas, minúsculas, números e símbolos.",
    icon: "KeyRound",
    practicalTip: "Utilize um gerenciador de senhas confiável (como Bitwarden, 1Password ou o próprio gerenciador integrado do Google/Apple) para armazenar suas credenciais com segurança.",
  },
  {
    id: 2,
    title: "Autenticação em Dois Fatores (2FA)",
    tagline: "A segunda barreira intransponível",
    description: "Ative a verificação em duas etapas em todas as contas importantes (WhatsApp, e-mails, bancos, redes sociais).",
    icon: "ShieldCheck",
    practicalTip: "Sempre que possível, prefira aplicativos autenticadores (Google Authenticator, Microsoft Authenticator) ou chaves físicas de segurança em vez de códigos por SMS.",
  },
  {
    id: 3,
    title: "Cuidado e Desconfiança com Links",
    tagline: "Confira o endereço antes do clique",
    description: "Não clique em links recebidos por WhatsApp, SMS ou e-mail de remetentes desconhecidos ou com ofertas inesperadas.",
    icon: "Link2Off",
    practicalTip: "Aproxime o cursor para inspecionar o domínio real. Erros sutis como 'banc0brasil-login.com' revelam páginas falsas imediatamente.",
  },
  {
    id: 4,
    title: "Aplicativos Somente de Lojas Oficiais",
    tagline: "Baixe apenas de fontes legítimas",
    description: "Instale aplicativos exclusivamente pela Google Play Store (Android) ou Apple App Store (iOS). Nunca instale arquivos .APK enviados por terceiros.",
    icon: "Smartphone",
    practicalTip: "Antes de instalar, confira o nome da empresa desenvolvedora oficial, número de downloads e as avaliações dos usuários.",
  },
  {
    id: 5,
    title: "Atualizações do Sistema e Apps",
    tagline: "Correção contínua de brechas",
    description: "Mantenha o sistema operacional do celular, do computador, o navegador e os aplicativos sempre atualizados na última versão.",
    icon: "RefreshCw",
    practicalTip: "Ative a opção de atualização automática. As atualizações corrigem falhas de segurança críticas que poderiam ser exploradas por criminosos.",
  },
  {
    id: 6,
    title: "Cuidado Redobrado com Wi-Fi Público",
    tagline: "Redes abertas não têm proteção",
    description: "Evite acessar contas bancárias, realizar compras ou digitar senhas conectado a redes Wi-Fi públicas de praças, aeroportos ou cafés.",
    icon: "WifiOff",
    practicalTip: "Para transações bancárias na rua, prefira utilizar a rede de dados móveis (4G/5G) da sua operadora, que é muito mais segura contra interceptações.",
  },
  {
    id: 7,
    title: "Privacidade e Discrição Digital",
    tagline: "Compartilhe menos dados pessoais",
    description: "Evite publicar fotos de documentos, endereços, comprovantes de matrícula, rotinas diárias e viagens em tempo real.",
    icon: "EyeOff",
    practicalTip: "Configure a privacidade dos seus perfis em redes sociais para 'Apenas amigos' e desative a exibição pública de telefone e e-mail.",
  },
  {
    id: 8,
    title: "Backup Periódico de Arquivos",
    tagline: "Proteja seus documentos essenciais",
    description: "Mantenha cópias de segurança de fotos, documentos e arquivos importantes em locais separados e protegidos por senha.",
    icon: "HardDriveDownload",
    practicalTip: "Adote a regra de ouro: mantenha pelo menos uma cópia em nuvem confiável com 2FA e outra em um disco rígido externo ou pendrive offline.",
  },
  {
    id: 9,
    title: "Compras Online Conscientes",
    tagline: "Pesquise a idoneidade antes de pagar",
    description: "Pesquise a reputação da loja no Reclame Aqui e no Procon, confira a política de troca, o CNPJ no rodapé e a razão social destinatária.",
    icon: "ShoppingBag",
    practicalTip: "Gere sempre um Cartão Virtual Temporário de uso único no aplicativo do seu banco para compras na internet. Se o site vazar os dados, o cartão não servirá mais.",
  },
  {
    id: 10,
    title: "Desconfie Sempre da Urgência",
    tagline: "Pare, respire e confirme com calma",
    description: "Golpistas utilizam a engenharia social e a pressão psicológica para forçar decisões precipitadas de 'bloqueio em 10 minutos' ou 'oportunidade que expira hoje'.",
    icon: "Hourglass",
    practicalTip: "Diante de qualquer cobrança ou pedido desesperado de ajuda, pare por 5 minutos, respire e confirme a situação por um canal independente e oficial.",
  },
];

export interface PlatformGuide {
  platform: string;
  slug: string;
  color: string;
  badge: string;
  officialRecoveryUrl: string;
  keySteps: { title: string; desc: string }[];
}

export const PLATFORM_GUIDES: PlatformGuide[] = [
  {
    platform: "WhatsApp",
    slug: "whatsapp",
    color: "#25D366",
    badge: "Mensagens & Contatos",
    officialRecoveryUrl: "https://faq.whatsapp.com/",
    keySteps: [
      {
        title: "Ative a Confirmação em Duas Etapas",
        desc: "No WhatsApp, vá em Configurações > Conta > Confirmação em duas etapas e cadastre um código PIN de 6 dígitos secreto e um e-mail de recuperação seguro.",
      },
      {
        title: "Nunca compartilhe o código SMS",
        desc: "O código de 6 dígitos que chega por SMS é a chave da sua conta. Nenhum suporte técnico ou sorteio precisa dele.",
      },
      {
        title: "Revise Aparelhos Conectados",
        desc: "Consulte regularmente Configurações > Aparelhos Conectados. Se vir algum navegador ou computador que você não reconhece, toque e selecione 'Desconectar'.",
      },
      {
        title: "Oculte sua foto de perfil para desconhecidos",
        desc: "Vá em Configurações > Privacidade > Foto do perfil e selecione 'Meus contatos'. Isso impede que golpistas copiem sua foto para criar perfis falsos com seu nome.",
      },
    ],
  },
  {
    platform: "Instagram",
    slug: "instagram",
    color: "#E1306C",
    badge: "Rede Social & Imagem",
    officialRecoveryUrl: "https://www.instagram.com/hacked/",
    keySteps: [
      {
        title: "Ative a Autenticação de Dois Fatores",
        desc: "Vá em Configurações e Privacidade > Central de Contas > Senha e Segurança > Autenticação de dois fatores e selecione o Aplicativo Autenticador.",
      },
      {
        title: "Verifique E-mails Oficiais do Instagram",
        desc: "Golpistas mandam e-mails falsos dizendo que sua conta violou direitos autorais. Em Segurança > E-mails do Instagram, veja a lista de e-mails legítimos enviados pela Meta.",
      },
      {
        title: "Desconfie do 'Golpe do Investimento / Selo Azul'",
        desc: "Mensagens oferecendo selo de verificado gratuito ou perfis invadidos postando sobre 'robôs de investimento Pix' são armadilhas para roubar senhas.",
      },
      {
        title: "Fluxo Oficial de Recuperação",
        desc: "Se sua conta foi invadida e o e-mail foi alterado, acesse imediatamente instagram.com/hacked pelo celular para iniciar o reconhecimento facial por selfie de vídeo.",
      },
    ],
  },
  {
    platform: "Facebook",
    slug: "facebook",
    color: "#1877F2",
    badge: "Perfis & Páginas",
    officialRecoveryUrl: "https://www.facebook.com/hacked",
    keySteps: [
      {
        title: "Proteja a conta com autenticação adicional",
        desc: "Acesse as Configurações de Segurança e ative a confirmação em duas etapas para novos logins a partir de computadores e navegadores não reconhecidos.",
      },
      {
        title: "Monitore Onde Você Está Conectado",
        desc: "Na seção 'Onde você está conectado', visualize todos os dispositivos com sessão aberta e clique em 'Sair de todas as sessões' se notar atividade suspeita.",
      },
      {
        title: "Denuncie anúncios e páginas fraudulentas",
        desc: "Criminosos compram anúncios no Facebook imitando leilões da Receita Federal e lojas famosas. Use o menu de três pontos no anúncio para 'Denunciar anúncio'.",
      },
      {
        title: "Página Oficial de Conta Comprometida",
        desc: "Caso não consiga mais logar, use exclusivamente o canal oficial facebook.com/hacked para congelar a conta e iniciar a redefinição de acesso.",
      },
    ],
  },
  {
    platform: "Conta Google & E-mail Principal",
    slug: "google",
    color: "#4285F4",
    badge: "A Chave Mestra Digital",
    officialRecoveryUrl: "https://myaccount.google.com/security",
    keySteps: [
      {
        title: "O e-mail é o elo mais crítico",
        desc: "Se um invasor acessar seu e-mail principal, ele pode clicar em 'Esqueci minha senha' em bancos, redes sociais e lojas virtuais e tomar conta de toda a sua vida digital.",
      },
      {
        title: "Configure uma senha ultra forte e exclusiva",
        desc: "A senha do seu e-mail principal jamais deve ser repetida em nenhum outro aplicativo, fórum ou serviço da internet.",
      },
      {
        title: "Verificação em Duas Etapas Obrigatória",
        desc: "Ative a verificação em duas etapas na sua Conta Google, cadastrando número de celular secundário de confiança e baixando os Códigos de Backup impressos.",
      },
      {
        title: "Auditoria de Apps com Acesso à Conta",
        desc: "Acesse regularmente myaccount.google.com/permissions e remova imediatamente o acesso de aplicativos antigos ou que você não utiliza mais.",
      },
    ],
  },
];
