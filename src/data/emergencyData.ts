export interface EmergencyStep {
  step: number;
  title: string;
  shortAction: string;
  priority: "urgencia-maxima" | "alta-prioridade" | "procedimento-legal";
  description: string;
  actionItems: string[];
  warningNote?: string;
  buttonLabel?: string;
  buttonLink?: string;
}

export const EMERGENCY_STEPS: EmergencyStep[] = [
  {
    step: 1,
    title: "Interrompa Imediatamente o Contato",
    shortAction: "Corte qualquer comunicação com o golpista",
    priority: "urgencia-maxima",
    description:
      "A primeira regra ao perceber o golpe é parar imediatamente de conversar com o criminoso. Não envie mais dinheiro, fotos, documentos, senhas ou códigos de verificação.",
    actionItems: [
      "Não caia na armadilha de pagar 'taxa de cancelamento' ou 'depósito para liberar o valor retido'.",
      "Não confronte nem avise o golpista de que você descobriu a farsa (isso dá tempo para ele apagar mensagens e transferir valores).",
      "Bloqueie o número nas redes sociais somente após salvar e registrar todas as provas necessárias.",
    ],
    warningNote: "Atenção: Golpistas frequentemente se passam por uma segunda pessoa ou 'advogado' prometendo resgatar o valor mediante novo pagamento. Isso é um segundo golpe!",
  },
  {
    step: 2,
    title: "Contate seu Banco Imediatamente",
    shortAction: "Bloqueie contas, cartões e registre contestação",
    priority: "urgencia-maxima",
    description:
      "A velocidade da comunicação é o fator mais determinante para conter danos e tentar recuperar valores. Use canais oficiais verificados (telefone no verso do seu cartão físico ou no aplicativo oficial).",
    actionItems: [
      "Informe claramente: 'Fui vítima de golpe financeiro / fraude cibernética'.",
      "Solicite o bloqueio preventivo de acessos, senhas de internet banking e cartões de crédito/débito.",
      "Anote e guarde o número de protocolo do atendimento, o nome do atendente, a data e o horário exato da ligação.",
      "Se cartões foram comprometidos, solicite a contestação formal das despesas (chargeback).",
    ],
    warningNote: "Utilize exclusivamente o telefone impresso no verso do seu cartão ou o SAC oficial no aplicativo. Nunca ligue para números fornecidos em mensagens recebidas.",
  },
  {
    step: 3,
    title: "Se Houve Pix: Solicite Análise pelo MED",
    shortAction: "Acione o Mecanismo Especial de Devolução do Banco Central",
    priority: "urgencia-maxima",
    description:
      "O Mecanismo Especial de Devolução (MED) é o procedimento oficial criado pelo Banco Central do Brasil para viabilizar a devolução de valores transferidos via Pix em casos de fraude, golpe, furto ou coação.",
    actionItems: [
      "Abra a contestação MED diretamente pelo aplicativo do seu banco (geralmente em 'Pix > Extrato > Transação > Reportar problema/fraude') ou ligue para o SAC da sua instituição.",
      "O prazo legal para acionar o MED é de até 80 dias contados a partir da data em que a transação foi realizada.",
      "Apresente os dados da transação (ID da transação / EndToEndId) e relate detalhadamente o ocorrido.",
      "Após o pedido, o banco do fraudador bloqueia preventivamente os recursos na conta recebedora enquanto os dois bancos analisam o caso em até 7 dias corridos.",
    ],
    warningNote:
      "Transparência fundamental: O MED NÃO é cancelamento automático de Pix. A devolução depende da comprovação da fraude e, crucialmente, da existência de saldo disponível na conta do golpista ou em contas subsequentes no momento do bloqueio. Por isso, cada minuto conta!",
    buttonLabel: "Ver Orientações do Banco Central",
    buttonLink: "https://www.bcb.gov.br/golpes",
  },
  {
    step: 4,
    title: "Proteja Contas e Dispositivos",
    shortAction: "Troque senhas e encerre sessões ativas",
    priority: "alta-prioridade",
    description:
      "Impeça que os criminosos continuem com acesso aos seus perfis ou utilizem suas credenciais para fraudar seus contatos e outros serviços vinculados.",
    actionItems: [
      "Troque senhas comprometidas utilizando um dispositivo limpo e seguro (ex: computador ou celular de parente de confiança).",
      "Comece trocando a senha do seu e-mail principal (a chave de recuperação de todas as outras contas).",
      "Vá nas configurações de segurança de redes sociais e bancos e selecione 'Sair de todos os outros dispositivos/sessões ativas'.",
      "Desinstale imediatamente qualquer aplicativo desconhecido que você tenha baixado recentemente a pedido do golpista.",
      "Se seu smartphone físico foi roubado ou furtado: ligue para a sua operadora de telefonia para bloquear a linha (chip/SIM) e o IMEI do aparelho, e ative o 'Encontre Meu Dispositivo' (Android) ou 'Buscar' (Apple).",
    ],
  },
  {
    step: 5,
    title: "Preserve Todas as Provas e Evidências",
    shortAction: "Reúna capturas de tela, áudios e comprovantes",
    priority: "alta-prioridade",
    description:
      "Provas sólidas são indispensáveis para a investigação policial, para o processo de contestação nos bancos e para eventuais ações de ressarcimento.",
    actionItems: [
      "Tire prints de todas as telas de conversa (WhatsApp, Telegram, redes sociais), garantindo que o número de telefone, foto e cabeçalho fiquem legíveis.",
      "NÃO apague o histórico de conversas nem mensagens de áudio.",
      "Salve os comprovantes de transferência em formato PDF oficial gerado pelo aplicativo bancário (com identificação do código ID / EndToEnd).",
      "Copie e guarde as chaves Pix utilizadas, o nome do titular recebedor, CPF/CNPJ mascarado e a instituição bancária dele.",
      "Salve os links completos (URLs) dos sites falsos, perfis das redes sociais ou endereços de e-mail do remetente.",
    ],
  },
  {
    step: 6,
    title: "Registre o Boletim de Ocorrência (B.O.)",
    shortAction: "Comunique o crime à Polícia Civil",
    priority: "procedimento-legal",
    description:
      "O registro formal da ocorrência é essencial para a investigação criminal e frequentemente exigido por bancos, seguradoras e órgãos de proteção ao consumidor.",
    actionItems: [
      "Em São Paulo, o boletim pode ser registrado online na Delegacia Eletrônica da Polícia Civil de SP para crimes de estelionato e fraudes virtuais.",
      "No relato do fato, descreva a ordem cronológica com clareza e riqueza de detalhes: como começou o contato, o que foi prometido ou alegado, quais valores foram pagos e para quem.",
      "Anexe cópias dos comprovantes bancários, prints das conversas e links utilizados.",
      "Anote o número do Boletim de Ocorrência gerado e baixe a via em PDF com a validação digital.",
    ],
    buttonLabel: "Acessar Delegacia Eletrônica SP",
    buttonLink: "https://www.delegaciaeletronica.policiacivil.sp.gov.br/",
  },
  {
    step: 7,
    title: "Registre Reclamações e Acompanhe",
    shortAction: "Acione órgãos de defesa do consumidor e reguladores",
    priority: "procedimento-legal",
    description:
      "Caso o banco ou a plataforma envolvida não responda satisfatoriamente dentro do prazo regulamentar ou se negue a prestar auxílio previsto em lei.",
    actionItems: [
      "Abra chamado na Ouvidoria da instituição financeira com o número de protocolo do SAC inicial.",
      "Registre uma reclamação formal na plataforma pública Consumidor.gov.br contra o banco, loja virtual ou operadora envolvida.",
      "Se o banco mantiver postura irregular ou não abrir o MED adequadamente, registre uma reclamação contra a instituição no Banco Central do Brasil (BCB).",
      "Procure a orientação do Procon-SP ou do Procon do seu município para orientações sobre direitos e conciliação.",
    ],
    buttonLabel: "Registrar no Consumidor.gov.br",
    buttonLink: "https://www.consumidor.gov.br/",
  },
];

export const MED_DETAILS = {
  title: "Entenda em Detalhes o MED (Mecanismo Especial de Devolução)",
  creator: "Banco Central do Brasil (Resolução BCB nº 103/2021)",
  purpose: "Mecanismo exclusivo do arranjo Pix para viabilizar devoluções quando há fundadas suspeitas de fraude ou falha operacional.",
  applicableCases: [
    "Vítima de golpes digitais, estelionato e engenharia social.",
    "Transações efetuadas sob coação física ou sequestro relâmpago.",
    "Falha operacional comprovada no sistema de tecnologia da instituição bancária.",
  ],
  notApplicableCases: [
    "Desacordos comerciais simples (ex: produto entregue com defeito ou atrasado pela loja).",
    "Pix enviado por engano ou erro de digitação de chave pelo próprio pagador (nesses casos, deve-se pedir a devolução voluntária à pessoa que recebeu).",
  ],
  deadline: "Até 80 dias contados a partir da data da realização da transação.",
  howItWorksSteps: [
    "1. A vítima notifica imediatamente o seu próprio banco solicitando a abertura do MED por fraude.",
    "2. O banco da vítima notifica o banco onde a conta do criminoso está cadastrada através do sistema integrado do Banco Central.",
    "3. O banco recebedor bloqueia imediatamente os recursos encontrados na conta de destino para evitar saque.",
    "4. Ambas as instituições têm até 7 dias corridos para analisar o caso e as evidências fornecidas.",
    "5. Se comprovada a fraude e havendo saldo retido, o dinheiro é estornado para a conta da vítima em até 96 horas após a conclusão da análise.",
  ],
  transparencyWarning:
    "Importante: O MED não cria dinheiro novo. Se os golpistas já tiverem transferido o dinheiro imediatamente para outras contas 'laranjas' ou sacado no caixa eletrônico antes do bloqueio, o banco pode não conseguir reaver o valor total ou parcial. Por essa razão, registrar o pedido nos primeiros minutos após a fraude é crucial para aumentar as chances de sucesso.",
};
