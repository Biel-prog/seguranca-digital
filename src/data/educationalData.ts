export interface GlossaryTerm {
  term: string;
  definition: string;
  example: string;
}

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    term: "Phishing",
    definition:
      "Técnica de fraude eletrônica em que criminosos enviam mensagens, e-mails ou criam páginas falsas idênticas às de instituições legítimas para induzir a vítima a fornecer senhas, dados de cartão ou CPF.",
    example: "Um e-mail com logotipo do banco dizendo que sua chave de segurança expirou e pedindo para clicar num link.",
  },
  {
    term: "Engenharia Social",
    definition:
      "Manipulação psicológica de pessoas para que elas divulguem voluntariamente dados confidenciais, cliquem em links nocivos ou transfiram dinheiro, explorando sentimentos como medo, pressa, ambição ou compaixão.",
    example: "Um golpista ligando fingindo ser policial e dizendo que seu filho sofreu um acidente para forçar um Pix rápido.",
  },
  {
    term: "Deepfake",
    definition:
      "Mídias sintéticas geradas ou manipuladas por inteligência artificial (áudio, vídeo ou foto) capazes de imitar com alto grau de fidelidade a voz, a fisionomia e os trejeitos de pessoas reais.",
    example: "Um áudio de WhatsApp gerado por IA com a voz exata do seu sobrinho pedindo dinheiro emprestado.",
  },
  {
    term: "Autenticação em Dois Fatores (2FA)",
    definition:
      "Camada adicional de proteção que exige dois métodos de verificação distintos para liberar o acesso a uma conta: algo que você sabe (senha) e algo que você tem (código no celular ou chave física).",
    example: "Ao fazer login no e-mail, além da senha, o sistema pede um código numérico de 6 dígitos gerado no app do celular.",
  },
  {
    term: "Malware",
    definition:
      "Termo genérico para 'software malicioso' (incluindo vírus, trojans, spywares e worms) desenvolvido para se infiltrar em celulares e computadores, roubar credenciais ou espionar o usuário.",
    example: "Um arquivo .apk baixado fora da Play Store que finge ser jogo mas envia secretamente seus SMS para criminosos.",
  },
  {
    term: "Ransomware",
    definition:
      "Tipo nocivo de vírus que criptografa e bloqueia todos os arquivos do computador ou celular, exigindo pagamento de resgate (frequentemente em criptomoedas) para fornecer a chave de desbloqueio.",
    example: "Aparecer uma tela vermelha no computador dizendo que todos os documentos foram sequestrados e só abrem com pagamento.",
  },
  {
    term: "Vazamento de Dados",
    definition:
      "Incidente de segurança da informação em que dados sigilosos e pessoais armazenados por empresas ou governos são acessados ou expostos sem autorização na internet ou na dark web.",
    example: "Criminosos usam listas vazadas de CPF e telefones para entrar em contato com as vítimas já sabendo seus nomes completos.",
  },
  {
    term: "Spoofing",
    definition:
      "Falsificação da identidade de origem de uma comunicação. Pode ser de número de telefone (caller ID spoofing, fazendo aparecer o 0800 do banco na sua tela), e-mail ou endereço IP.",
    example: "Você recebe uma ligação e o identificador do celular mostra exatamente o número oficial da central do seu banco.",
  },
  {
    term: "Smishing",
    definition:
      "Variação de phishing realizada especificamente através de mensagens de texto SMS no aparelho celular.",
    example: "SMS informando que você tem pontos Livelo ou compras a expirar em 2 horas com um link encurtado.",
  },
  {
    term: "Mecanismo Especial de Devolução (MED)",
    definition:
      "Conjunto de regras e procedimentos operacionais criado pelo Banco Central do Brasil para viabilizar a devolução de transferências via Pix em casos comprovados de fraude, golpe ou falha bancária.",
    example: "Ao sofrer um golpe do falso boleto via Pix, a vítima solicita ao banco o MED para bloquear e reaver o saldo na conta de destino.",
  },
];

export interface MythTruthItem {
  id: number;
  statement: string;
  isTruth: boolean;
  explanation: string;
}

export const MYTHS_AND_TRUTHS: MythTruthItem[] = [
  {
    id: 1,
    statement: "“Se a mensagem de pedido de ajuda veio de um número ou perfil com a foto de um conhecido, posso confiar imediatamente.”",
    isTruth: false,
    explanation:
      "MITO! Criminosos criam perfis falsos com fotos públicas baixadas das redes sociais ou usam números clonados. Sempre confirme por uma ligação de voz no número antigo ou pessoalmente antes de enviar qualquer quantia.",
  },
  {
    id: 2,
    statement: "“Um print com o comprovante de pagamento Pix enviado por mensagem é prova suficiente de que o dinheiro já está na minha conta.”",
    isTruth: false,
    explanation:
      "MITO! Imagens de comprovantes podem ser falsificadas em editores em segundos ou se tratar de um simples 'agendamento' cancelado antes da liquidação. A única prova real é abrir o aplicativo do seu banco e conferir o saldo disponível no extrato.",
  },
  {
    id: 3,
    statement: "“Ter um bom aplicativo de antivírus instalado no celular impede 100% dos golpes da internet.”",
    isTruth: false,
    explanation:
      "MITO! O antivírus ajuda a barrar arquivos maliciosos técnicos, mas NÃO impede a engenharia social, onde o próprio usuário é enganado e faz transferências por livre e espontânea vontade.",
  },
  {
    id: 4,
    statement: "“Ouvir um áudio com o tom de voz conhecido de um amigo ou familiar no WhatsApp é prova incontestável de que é ele mesmo falando.”",
    isTruth: false,
    explanation:
      "MITO! Ferramentas modernas de inteligência artificial conseguem clonar perfeitamente o timbre e a entonação de uma pessoa a partir de poucos segundos de áudio extraídos de vídeos públicos no Instagram ou TikTok.",
  },
  {
    id: 5,
    statement: "“Ativar a autenticação em dois fatores (2FA) com app autenticador bloqueia a imensa maioria das tentativas de invasão de conta.”",
    isTruth: true,
    explanation:
      "VERDADE! O 2FA adiciona uma segunda barreira intransponível: mesmo que um criminoso descubra sua senha por meio de um vazamento de dados, ele não conseguirá entrar sem o código dinâmico gerado no seu dispositivo físico.",
  },
  {
    id: 6,
    statement: "“O funcionário legítimo do banco pode ligar solicitando que você faça um Pix para uma 'conta de segurança' para anular uma fraude.”",
    isTruth: false,
    explanation:
      "MITO! Nenhuma instituição financeira séria jamais pede para clientes fazerem transferências, Pix ou depósitos para cancelar operações fraudulentas. Isso é sinal inequívoco de golpe.",
  },
  {
    id: 7,
    statement: "“O Mecanismo Especial de Devolução (MED) do Banco Central garante a recuperação total do dinheiro perdido em qualquer Pix.”",
    isTruth: false,
    explanation:
      "MITO! O MED facilita e normatiza o processo de estorno, mas ele depende da comprovação da fraude e, fundamentalmente, de ainda haver saldo retido na conta do golpista quando o bloqueio for acionado.",
  },
];

export interface ChecklistItem {
  id: string;
  category: string;
  text: string;
  detail: string;
}

export const CHECKLIST_ITEMS: ChecklistItem[] = [
  {
    id: "check-1",
    category: "Contas & Senhas",
    text: "Ativei a autenticação em dois fatores (2FA) no WhatsApp com PIN de 6 dígitos secreto.",
    detail: "No WhatsApp, vá em Configurações > Conta > Confirmação em duas etapas.",
  },
  {
    id: "check-2",
    category: "Contas & Senhas",
    text: "Uso senhas fortes, longas e diferentes para cada um dos meus serviços principais.",
    detail: "Especialmente em seu e-mail principal e aplicativos bancários.",
  },
  {
    id: "check-3",
    category: "Mensagens & Links",
    text: "Sei identificar a diferença entre um link oficial (.gov.br ou domínio verificado) e uma imitação com erros.",
    detail: "Nunca clico em links suspeitos com terminações estranhas (.xyz, .top, .online).",
  },
  {
    id: "check-4",
    category: "Segurança Bancária",
    text: "Sei como localizar o canal oficial de atendimento do meu banco (verso do cartão físico).",
    detail: "Nunca ligo para números 0800 enviados em SMS ou mensagens de alerta.",
  },
  {
    id: "check-5",
    category: "Redes Sociais",
    text: "Minha foto de perfil do WhatsApp está configurada como visível 'Apenas para meus contatos'.",
    detail: "Isso impede que terceiros desconhecidos salvem sua foto para forjar perfis novos.",
  },
  {
    id: "check-6",
    category: "Ação Imediata",
    text: "Sei como registrar um Boletim de Ocorrência online na Delegacia Eletrônica em caso de golpe.",
    detail: "Guardando todas as evidências, capturas de tela e dados das contas recebedoras.",
  },
  {
    id: "check-7",
    category: "Dispositivos & Apps",
    text: "Instalo aplicativos exclusivamente pelas lojas oficiais (Google Play e Apple App Store) e mantenho o celular atualizado.",
    detail: "Nunca instalo arquivos .apk enviados por mensagens de desconhecidos.",
  },
  {
    id: "check-8",
    category: "Backup & Prevenção",
    text: "Mantenho cópias de segurança (backup) dos meus arquivos essenciais em nuvem protegida ou mídia offline.",
    detail: "Garantindo recuperação em casos de perda do aparelho ou bloqueio por vírus.",
  },
];

export interface QuizQuestion {
  id: number;
  scenario: string;
  context: string;
  options: {
    text: string;
    isCorrect: boolean;
    explanation: string;
  }[];
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    scenario: "Mensagem Urgente de Bloqueio Bancário",
    context:
      "Você recebe uma mensagem SMS com o texto: 'AVISO URGENTE: Sua conta bancária será suspensa em 10 minutos por suspeita de fraude. Regularize agora para evitar multa: http://banco-regulariza-urgente.net'. O que você deve fazer?",
    options: [
      {
        text: "Clicar rapidamente no link para não correr o risco de ficar com a conta e o dinheiro bloqueados.",
        isCorrect: false,
        explanation:
          "Incorreto! Essa é exatamente a armadilha do golpista. A sensação de urgência extrema de 10 minutos é projetada para fazer você agir pelo medo antes de pensar.",
      },
      {
        text: "Não clicar no link. Ignorar a mensagem e, caso fique em dúvida, abrir o aplicativo oficial do banco ou ligar no número do verso do cartão.",
        isCorrect: true,
        explanation:
          "Correto! Bancos legítimos não avisam sobre bloqueios imediatos com links por SMS. A atitude segura é nunca clicar e verificar sempre pelo canal oficial.",
      },
      {
        text: "Responder ao SMS pedindo mais informações sobre qual foi a movimentação suspeita.",
        isCorrect: false,
        explanation:
          "Incorreto! Responder confirma aos criminosos que o seu número de telefone está ativo e propício a novos ataques de engenharia social.",
      },
    ],
  },
  {
    id: 2,
    scenario: "Parente com 'Número Novo' Pedindo Pix",
    context:
      "Você recebe uma mensagem no WhatsApp de um número desconhecido com a foto de perfil do seu filho: 'Oi pai, quebrei meu celular antigo e peguei esse provisório. Preciso pagar um fornecedor agora de R$ 1.800, faz o Pix pra essa chave? Te pago amanhã cedo'. Qual a melhor atitude?",
    options: [
      {
        text: "Fazer o Pix imediatamente, afinal é seu filho e ele está precisando de ajuda urgente.",
        isCorrect: false,
        explanation:
          "Incorreto! Esse é um dos golpes mais recorrentes no Brasil. Criminosos copiam fotos públicas e contatam pais simulando emergências.",
      },
      {
        text: "Ligar imediatamente para o número antigo habitual do seu filho ou fazer uma chamada de vídeo para confirmar quem realmente está falando.",
        isCorrect: true,
        explanation:
          "Correto! Nunca transfira dinheiro sem confirmar por voz ou vídeo. Ligar no número antigo quase sempre desmascara o golpe na hora.",
      },
      {
        text: "Pedir que ele mande uma foto do comprovante do fornecedor para você pagar direto a chave.",
        isCorrect: false,
        explanation:
          "Incorreto! O golpista tem boletos falsos e chaves de contas 'laranjas' prontas para qualquer desculpa. A checagem deve ser da identidade da pessoa.",
      },
    ],
  },
  {
    id: 3,
    scenario: "Venda na Internet e Comprovante por Print",
    context:
      "Você anunciou um videogame na internet. O comprador manda uma imagem de comprovante de transferência Pix e diz que o carro de aplicativo já está chegando para retirar o produto. Ao checar o aplicativo do seu banco, o saldo não aumentou. O que fazer?",
    options: [
      {
        text: "Entregar o aparelho ao motorista, pois o comprovante parece autêntico e o Pix pode demorar alguns minutos para cair.",
        isCorrect: false,
        explanation:
          "Incorreto! O Pix tem liquidação em segundos. Comprovantes em imagem são facilmente editados ou programados como agendamentos canceláveis.",
      },
      {
        text: "Não entregar o produto de jeito nenhum até que o dinheiro efetivamente apareça como 'Saldo Disponível' no extrato da sua conta.",
        isCorrect: true,
        explanation:
          "Correto! A regra de ouro nas vendas é: só entregue a mercadoria quando o dinheiro estiver creditado e visível no seu próprio extrato bancário.",
      },
      {
        text: "Aceitar que o comprador tire uma foto do documento dele como garantia e liberar a mercadoria.",
        isCorrect: false,
        explanation:
          "Incorreto! Golpistas utilizam documentos de terceiros vazados na internet, que não oferecem garantia alguma de recuperação patrimonial.",
      },
    ],
  },
  {
    id: 4,
    scenario: "Oferta de Emprego Fácil no Telegram/WhatsApp",
    context:
      "Você recebe proposta de uma empresa multinacional prometendo pagar R$ 400 por dia apenas para curtir 10 vídeos no YouTube. Para ter acesso à plataforma com tarefas VIP, eles pedem um 'depósito caução' de R$ 150. Essa proposta é:",
    options: [
      {
        text: "Uma oportunidade legítima da era digital para quem quer trabalhar em casa.",
        isCorrect: false,
        explanation:
          "Incorreto! Nenhuma empresa séria paga fortunas para ações banais como curtidas, muito menos exige que o candidato pague para trabalhar.",
      },
      {
        text: "Um golpe de falsa tarefa/emprego. O objetivo dos criminosos é confiscar o valor do depósito e pedir novos depósitos cada vez maiores.",
        isCorrect: true,
        explanation:
          "Correto! Emprego serve para você receber dinheiro, nunca para pagar taxa de cadastro, material de treinamento ou liberação de saldo.",
      },
      {
        text: "Um investimento com risco moderado que vale a pena testar.",
        isCorrect: false,
        explanation:
          "Incorreto! Não existe investimento ou relação de trabalho que funcione cobrando taxa antecipada de candidatos dessa forma.",
      },
    ],
  },
  {
    id: 5,
    scenario: "Ligação da 'Central de Segurança do Banco'",
    context:
      "Uma pessoa com voz profissional liga dizendo ser da segurança do seu banco. Ela diz que uma compra suspeita de R$ 4.200 foi aprovada e pede para você digitar sua senha no teclado do telefone para cancelar. Como você procede?",
    options: [
      {
        text: "Digitar a senha no teclado, pois como o atendente disse que não ouve os números, deve ser seguro.",
        isCorrect: false,
        explanation:
          "Incorreto! O sistema de tom DTMF do teclado emite frequências sonoras que os criminosos gravam e decodificam para descobrir a sua senha.",
      },
      {
        text: "Desligar o telefone imediatamente. O banco legítimo nunca solicita senha por telefone nem pede transferência para anular compras.",
        isCorrect: true,
        explanation:
          "Correto! Nenhuma central de atendimento de banco legítima solicita senhas de conta ou cartão por telefone sob pretexto algum. Desligue na hora!",
      },
      {
        text: "Pedir para o atendente falar o saldo da sua conta para provar que ele é do banco.",
        isCorrect: false,
        explanation:
          "Incorreto! Criminosos podem ter comprado dados vazados e saber seu nome e CPF, o que não prova que a chamada seja legítima.",
      },
    ],
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "O banco pode me ligar pedindo senhas ou códigos recebidos por SMS?",
    answer:
      "NUNCA. As instituições financeiras legítimas nunca ligam solicitando que você informe senhas de acesso, código CVV do cartão de crédito ou tokens de confirmação recebidos por SMS. Qualquer ligação com esse pedido é uma tentativa clara de golpe.",
  },
  {
    question: "O que é o MED do Pix e como posso acioná-lo?",
    answer:
      "O Mecanismo Especial de Devolução (MED) é um recurso oficial criado pelo Banco Central para facilitar devoluções em casos de fraudes e golpes comprovados. Para acionar, abra uma contestação diretamente no aplicativo do seu banco ou entre em contato com o SAC oficial em até 80 dias após a transferência.",
  },
  {
    question: "O dinheiro do Pix é devolvido com 100% de certeza pelo MED?",
    answer:
      "Não há garantia de devolução integral ou automática. A devolução depende da comprovação da fraude pelas instituições bancárias e da existência de saldo disponível na conta do golpista quando o bloqueio for acionado. Por isso, a velocidade de comunicação nos primeiros minutos é decisiva.",
  },
  {
    question: "O que fazer se clonarem o meu número de WhatsApp?",
    answer:
      "1) Avise parentes e amigos por telefone ou redes sociais para que não transfiram dinheiro. 2) Reinstale o WhatsApp no seu celular e solicite o código de 6 dígitos por SMS para retomar a sessão. 3) Se o golpista tiver ativado a verificação em duas etapas dele, envie um e-mail para support@whatsapp.com com o assunto 'Perdido/Roubado: Desative minha conta' e o número em formato internacional (+55 DDD número).",
  },
  {
    question: "Fazer Boletim de Ocorrência pela internet tem a mesma validade do presencial?",
    answer:
      "Sim! O Boletim de Ocorrência registrado na Delegacia Eletrônica da Polícia Civil tem a exata mesma validade jurídica de um B.O. feito no plantão policial presencial, contando com assinatura digital e código de autenticidade para ser apresentado a bancos e órgãos judiciais.",
  },
  {
    question: "O Procon recupera dinheiro de golpes do Pix?",
    answer:
      "O Procon atua na defesa dos direitos do consumidor em relações comerciais com fornecedores cadastrados. Ele pode auxiliar se o seu banco se recusar a cumprir normas do Banco Central, mas não possui poder policial para investigar quadrilhas virtuais ou forçar bloqueios imediatos de contas criminosas.",
  },
];
