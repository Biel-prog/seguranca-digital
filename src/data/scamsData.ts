export interface ScamItem {
  id: string;
  title: string;
  category: "bancario" | "redes-sociais" | "compras" | "mensagens" | "financeiro";
  categoryLabel: string;
  shortDesc: string;
  image: string;
  howItWorks: string;
  typicalApproach: string;
  warningSigns: string[];
  howToAvoid: string[];
  severity: "critica" | "alta" | "media";
}

export const SCAMS_DATA: ScamItem[] = [
  {
    id: "falso-banco",
    title: "Falso Atendimento Bancário",
    category: "bancario",
    categoryLabel: "Golpes Bancários",
    shortDesc: "Criminosos se passam por funcionários do banco alegando compras suspeitas ou bloqueios para roubar senhas e Pix.",
    image: "/images/hero-shield-smartphone.png",
    howItWorks:
      "A vítima recebe uma ligação ou mensagem urgente de alguém fingindo ser da central de segurança do banco. O golpista afirma que uma compra de alto valor foi aprovada ou que a conta precisa de 'atualização de segurança'. Para cancelar a suposta transação, pede que a vítima digite senhas, confirme códigos recebidos por SMS ou faça uma 'transferência de teste/segurança' via Pix.",
    typicalApproach:
      "\"Central de Segurança do seu Banco: Compra aprovada nas Lojas X no valor de R$ 3.850,00. Se não reconhece, digite 2 ou fale agora com nosso atendente no 0800...\"",
    warningSigns: [
      "Solicitação de senhas, código de segurança (CVV) ou tokens de autorização.",
      "Instrução para fazer Pix 'para uma conta de segurança' a fim de estornar compras.",
      "Pedido para instalar programas de suporte ou acesso remoto no celular ou computador.",
      "Urgência extrema, tom intimidador ou pressão psicológica para não desligar o telefone.",
    ],
    howToAvoid: [
      "Desligue imediatamente a chamada. O banco legítimo nunca pede para você transferir dinheiro para cancelar uma compra.",
      "Nunca informe senhas, códigos recebidos por SMS ou tokens a quem ligou para você.",
      "Abra o aplicativo oficial do seu banco digitando manualmente o endereço ou use o telefone impresso no verso do seu cartão.",
      "Jamais instale aplicativos indicados por supostos técnicos por telefone.",
    ],
    severity: "critica",
  },
  {
    id: "whatsapp-clonado",
    title: "WhatsApp Clonado e Perfil Falso",
    category: "redes-sociais",
    categoryLabel: "Redes Sociais",
    shortDesc: "Golpistas clonam a conta ou criam um perfil com foto e nome de um conhecido para pedir dinheiro urgente.",
    image: "/images/golpe-whatsapp.png",
    howItWorks:
      "Ocorre de duas formas principais: 1) O criminoso cadastra o número da vítima em outro aparelho e tenta obter o código SMS de 6 dígitos mediante alguma história falsa. 2) O criminoso cria um perfil com um número desconhecido, copia a foto de perfil pública e contata familiares dizendo que 'trocou de número' e que precisa pagar uma conta urgente.",
    typicalApproach:
      "\"Oi mãe/pai, anota meu número novo aí, meu celular antigo caiu na água. Tô com um problema no app do meu banco e preciso pagar um boleto urgente antes das 17h. Consegue fazer esse Pix pra mim? Eu te devolvo amanhã cedo!\"",
    warningSigns: [
      "Mensagem de suposto amigo ou familiar vinda de um número desconhecido dizendo que trocou de chip.",
      "Pedido de dinheiro ou pagamento de boleto com caráter de urgência imediata.",
      "Recusa em atender chamadas de voz ou vídeo para confirmar a identidade.",
      "Chave Pix em nome de terceiros desconhecidos sob desculpa de 'fornecedor' ou 'amigo'.",
    ],
    howToAvoid: [
      "Ligue imediatamente para o número antigo e habitual da pessoa antes de tomar qualquer atitude.",
      "Faça uma pergunta pessoal que apenas a pessoa real saberia responder ou combine uma palavra de segurança na família.",
      "Nunca compartilhe códigos de 6 dígitos recebidos por SMS com ninguém sob hipótese alguma.",
      "Ative a confirmação em duas etapas (com PIN secreto) nas configurações do seu WhatsApp.",
    ],
    severity: "alta",
  },
  {
    id: "phishing-links",
    title: "Phishing e Links Maliciosos",
    category: "mensagens",
    categoryLabel: "Mensagens & E-mail",
    shortDesc: "Mensagens fraudulentas imitam Correios, bancos, governos ou empresas para roubar dados pessoais e bancários.",
    image: "/images/golpe-phishing.png",
    howItWorks:
      "Mensagens disparadas em massa por SMS, e-mail ou WhatsApp imitam comunicações de órgãos confiáveis (como Correios sobre encomendas retidas, Receita Federal, bancos, ou plataformas de streaming). O link direciona para uma página visualmente idêntica à oficial, projetada para capturar senhas, dados de cartão de crédito e CPF.",
    typicalApproach:
      "\"CORREIOS: Sua encomenda ID 94821 foi retida na alfândega por taxa pendente de R$ 42,90. Efetue o pagamento em até 2 horas para evitar devolução: correios-rastreamento-taxa.xyz\"",
    warningSigns: [
      "Links encurtados ou com domínios estranhos (terminações incomuns como .xyz, .top, .site, ou nomes com erros como correios-gov.net).",
      "Mensagens com tom de ameaça de cancelamento, bloqueio de CPF ou multa imediata.",
      "Remetentes com endereços de e-mail gratuitos (como @gmail.com) se passando por grandes empresas.",
      "Erros de ortografia, pontuação ou formatação visual incomum.",
    ],
    howToAvoid: [
      "Não clique em links recebidos por mensagem, SMS ou e-mail de fontes inesperadas.",
      "Consulte o rastreamento ou pendência digitando diretamente o site oficial no navegador.",
      "Verifique sempre o domínio na barra de endereços (sites de órgãos oficiais no Brasil sempre terminam em .gov.br).",
      "Mantenha o navegador e o sistema operacional do aparelho sempre atualizados.",
    ],
    severity: "alta",
  },
  {
    id: "lojas-falsas",
    title: "Lojas Virtuais Falsas",
    category: "compras",
    categoryLabel: "Compras Online",
    shortDesc: "Sites e perfis clonam marcas famosas e anunciam produtos com preços irreais, recebem o pagamento e nunca entregam.",
    image: "/images/golpe-loja-falsa.png",
    howItWorks:
      "Criminosos criam lojas virtuais idênticas às de grandes varejistas e veiculam anúncios patrocinados em redes sociais e buscadores. Os preços são irresistivelmente baixos (ex: smartphone de R$ 4.000 por R$ 990). No momento do pagamento, exigem Pix ou boleto com desconto agressivo para inviabilizar o estorno da compra pelo cartão.",
    typicalApproach:
      "\"LIQUIDAÇÃO TOTAL DE ESTOQUE: Smart TV 55\" 4K de R$ 2.999 por apenas R$ 749,00 no Pix com Frete Grátis somente hoje! Poucas unidades restantes!\"",
    warningSigns: [
      "Preço muito abaixo da média de todo o mercado (descontos superiores a 60-70% em eletrônicos).",
      "Forma de pagamento aceita exclusivamente Pix ou boleto, sem opção de cartão de crédito com intermediador confiável.",
      "Site sem CNPJ no rodapé ou CNPJ pertencente a uma atividade econômica não relacionada.",
      "Ausência de telefone fixo, endereço físico real e canais de atendimento funcionais.",
      "Domínio recém-registrado na internet (pesquisável em registro.br ou whois).",
    ],
    howToAvoid: [
      "Desconfie de preços milagrosos. Se a oferta parece boa demais para ser verdade, quase certamente é golpe.",
      "Consulte a reputação da loja no portal Reclame Aqui e no Procon antes de comprar.",
      "Verifique se o site oficial da marca não possui um endereço diferente e compre somente pelo canal verificado.",
      "Prefira pagar com cartão de crédito virtual temporário em compras online, que oferece maior proteção de contestação.",
    ],
    severity: "alta",
  },
  {
    id: "golpes-pix",
    title: "Golpes Envolvendo Pix",
    category: "bancario",
    categoryLabel: "Golpes Bancários",
    shortDesc: "Falsos comprovantes de agendamento, QR Codes adulterados, golpe da devolução em dobro e falso suporte de chaves.",
    image: "/images/golpe-pix.png",
    howItWorks:
      "Aproveitando a velocidade do Pix, golpistas aplicam variações: 1) Comprovante de agendamento editado: enviam uma imagem de agendamento e cancelam logo depois, fingindo que o valor foi pago. 2) Falsa devolução ('Bug do Pix'): divulgam em redes sociais que transferir para certa chave devolve o dobro. 3) QR Code adulterado em estabelecimentos ou boletos.",
    typicalApproach:
      "\"Segue o comprovante do Pix que te transferi pelo produto! Já chamei o motoboy para retirar aí!\" (mas ao olhar a imagem com atenção, lê-se 'Agendamento programado para dia 20').",
    warningSigns: [
      "Comprovante enviado apenas por imagem ou print, sem o valor refletido no seu extrato bancário em tempo real.",
      "Promessa de enriquecimento rápido ou chave Pix mágica que 'duplica dinheiro'.",
      "Cobrador que exige que o pagamento seja feito em QR Code avulso diferente do sistema oficial da loja.",
      "Pressa extrema da pessoa para levar o produto antes de você checar o seu extrato.",
    ],
    howToAvoid: [
      "Sempre abra o aplicativo do seu banco e confirme se o dinheiro realmente caiu no saldo disponível antes de entregar produtos ou serviços.",
      "Não confie em prints, capturas de tela ou fotos de comprovantes enviados pela outra parte.",
      "Confira atentamente o nome do favorecido, CPF/CNPJ mascarado e a instituição antes de digitar a senha de confirmação.",
      "Lembre-se: não existe 'bug do Pix' nem investimento que devolva o dobro do valor em minutos.",
    ],
    severity: "critica",
  },
  {
    id: "falsa-emergencia-ia",
    title: "Falsa Emergência Familiar e Voz Clonada (IA)",
    category: "redes-sociais",
    categoryLabel: "Redes Sociais & IA",
    shortDesc: "Criminosos usam gravações de voz manipuladas por inteligência artificial ou teatro emotivo para simular acidentes de parentes.",
    image: "/images/fui-vitima-suporte.png",
    howItWorks:
      "O criminoso liga ou manda áudio simulando desespero, chorando ou utilizando ferramentas de inteligência artificial generativa que clonam o timbre de voz de um filho ou neto (a partir de vídeos públicos das redes sociais). A história envolve um falso sequestro, colisão de trânsito ou internação hospitalar de urgência que exige transferência imediata.",
    typicalApproach:
      "\"Vô, pelo amor de Deus, me ajuda! Bati o carro num médico aqui na avenida, ele tá ameaçando chamar a polícia e precisa de R$ 1.500 agora pro guincho... Não conta pra minha mãe, faz esse Pix rápido nessa conta!\"",
    warningSigns: [
      "Tom de choro e ruídos de fundo para mascarar imperfeições na voz ou no áudio.",
      "Exigência de segredo absoluto ('não avise ninguém', 'não desligue o telefone').",
      "Urgência drástica e ameaça de prisão ou consequências fatais imediatas.",
      "Conta indicada para transferência pertence a uma pessoa completamente desconhecida.",
    ],
    howToAvoid: [
      "Mantenha a calma. Respire fundo e desligue a chamada.",
      "Ligue imediatamente para o número real do familiar envolvido ou para outros parentes próximos que possam confirmar sua localização.",
      "Combine uma 'palavra de segurança secreta' em família, que só vocês saibam e que deve ser dita em situações de emergência real.",
      "Evite postar áudios e vídeos de crianças e familiares em perfis 100% abertos ao público na internet.",
    ],
    severity: "critica",
  },
  {
    id: "falsas-vagas",
    title: "Falsas Vagas de Emprego",
    category: "mensagens",
    categoryLabel: "Oportunidades & Renda",
    shortDesc: "Promessas de renda fácil para tarefas simples (curtir vídeos, avaliar produtos) que exigem depósitos da vítima.",
    image: "/images/golpe-phishing.png",
    howItWorks:
      "A vítima recebe proposta pelo WhatsApp ou Telegram oferecendo de R$ 200 a R$ 1.000 por dia para 'trabalho de meio período em casa', como curtir vídeos no YouTube ou avaliar produtos na Amazon/Shopee. No início pagam pequenos valores (R$ 10 ou R$ 20) para criar confiança. Depois, exigem que a vítima 'deposite valores maiores para desbloquear tarefas de alta comissão', confiscando todo o dinheiro.",
    typicalApproach:
      "\"Olá! Sou recrutador de RH da empresa Global Partner. Temos vagas para home office ganhando até R$ 800 por dia avaliando lojas online. O trabalho leva apenas 30 minutos. Clique para iniciar o treinamento pago!\"",
    warningSigns: [
      "Salários e comissões desproporcionais para tarefas extremamente simples.",
      "Exigência de pagamento de qualquer taxa para inscrição, treinamento, exame admissional ou 'desbloqueio de saldo'.",
      "Contato inicial vindo de números com DDI internacional estrangeiro (+1, +62, +234, etc.).",
      "Comunicação realizada exclusivamente por aplicativos de mensagens sem entrevista formal de emprego.",
    ],
    howToAvoid: [
      "Lembre-se da regra de ouro do emprego: trabalho serve para você receber salário, nunca para você pagar para trabalhar.",
      "Pesquise se a empresa realmente existe, seus canais oficiais e página de carreiras no LinkedIn.",
      "Nunca deposite nenhum valor sob a promessa de resgatar comissões retidas em plataformas desconhecidas.",
      "Bloqueie e denuncie o contato no aplicativo de mensagens.",
    ],
    severity: "alta",
  },
  {
    id: "falsos-investimentos",
    title: "Falsos Investimentos e Pirâmides Financeiras",
    category: "financeiro",
    categoryLabel: "Investimentos & Finanças",
    shortDesc: "Promessas ilusórias de lucros garantidos, robôs de operações automatizadas e plataformas de criptomoedas fraudulentas.",
    image: "/images/como-se-proteger.png",
    howItWorks:
      "Criminosos divulgam plataformas de investimento com telas sofisticadas que mostram gráficos falsos de rendimentos astronômicos (ex: 2% a 5% ao dia garantidos). Inicialmente a vítima consegue sacar pequenos valores para criar falsa segurança. Quando investe economias maiores ou convida amigos, o saque é bloqueado sob exigência de pagamento de 'impostos de liberação'.",
    typicalApproach:
      "\"Multiplique seu patrimônio com nosso algoritmo exclusivo de inteligência artificial. Lucro de 15% ao mês 100% garantido e sem risco! Comece com apenas R$ 500 hoje mesmo!\"",
    warningSigns: [
      "Promessa de rentabilidade alta e 'garantida' sem risco de perda (no mercado financeiro real, todo retorno alto envolve risco).",
      "Obrigatoriedade de convidar novos participantes para conseguir sacar rendimentos ou subir de nível (característica clássica de pirâmide).",
      "Instituição sem registro e autorização na Comissão de Valores Mobiliários (CVM) ou no Banco Central.",
      "Dificuldade ou taxas abusivas inventadas repentinamente no momento de solicitar o resgate do dinheiro.",
    ],
    howToAvoid: [
      "Consulte se a empresa ou corretora está autorizada no site oficial da CVM (cvm.gov.br).",
      "Desconfie de qualquer proposta que ofereça rendimento garantido acima da taxa Selic básica de juros.",
      "Nunca transfira economias para contas pessoais de 'consultores' de internet ou em troca de indicação de grupos VIP.",
      "Procure a orientação de profissionais certificados e bancos tradicionais de sua confiança.",
    ],
    severity: "alta",
  },
];

export const OTHER_SCAMS = [
  {
    title: "Falso Boleto Bancário",
    desc: "Criminosos interceptam e-mails ou criam sites de segunda via alterando o código de barras e o beneficiário do pagamento.",
    prevention: "Confira sempre se o nome do beneficiário (razão social e CNPJ) na tela de confirmação é realmente a empresa credora.",
  },
  {
    title: "Maquininha com Visor Adulterado",
    desc: "Em entregas ou na rua, o vendedor usa maquininha com visor quebrado ou adulterado para cobrar um valor 10x ou 100x maior.",
    prevention: "Olhe com atenção para o visor antes de aproximar o cartão ou digitar a senha; confira a notificação imediata no app do seu banco.",
  },
  {
    title: "Falso Suporte Técnico (Acesso Remoto)",
    desc: "Golpista telefona dizendo que seu computador tem vírus e pede para instalar softwares como AnyDesk ou TeamViewer para 'limpar a máquina'.",
    prevention: "Nunca instale aplicativos de controle remoto a pedido de estranhos por telefone; eles passam a controlar seu computador e suas contas.",
  },
  {
    title: "Aluguel Fraudulento de Temporada",
    desc: "Anúncios em redes sociais com casas de praia ou chácaras perfeitas por preços baixos; após o sinal de 50%, o anunciante desaparece.",
    prevention: "Exija contrato com identificação de cartório, faça chamada de vídeo mostrando o imóvel ou alugue somente por plataformas seguras com garantia.",
  },
  {
    title: "Extorsão Digital (Golpe do Amor / Nudes)",
    desc: "O criminoso cria afinidade amorosa virtual, troca fotos íntimas e depois passa a chantagear a vítima exigindo depósitos para não expô-la.",
    prevention: "Nunca envie fotos ou vídeos íntimos a quem você só conhece virtualmente; em caso de chantagem, não pague e procure a Delegacia Eletrônica.",
  },
];
