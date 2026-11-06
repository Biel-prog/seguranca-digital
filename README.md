# Portal de Segurança Digital – Informação que Protege

Portal informativo, moderno e responsivo sobre **segurança digital e prevenção de golpes na internet**, desenvolvido no âmbito de atividade extensionista universitária com base no levantamento informativo de conscientização e cidadania digital.

---

## 🛡️ Propósito e Escopo

O portal foi concebido com utilidade pública e linguagem acessível para ajudar pessoas comuns — com especial atenção a idosos, jovens, trabalhadores e consumidores — a:
1. **Identificar golpes digitais e técnicas de engenharia social** antes de sofrer prejuízos.
2. **Reconhecer mensagens, links, e-mails e perfis falsos**.
3. **Adotar 10 hábitos de ouro de proteção diária** e blindar redes sociais (WhatsApp, Instagram, Facebook, Google).
4. **Agir imediatamente em caso de fraude**, seguindo um guia de emergência de 7 passos cronológicos com destaque para o **MED (Mecanismo Especial de Devolução do Pix)**.
5. **Acessar canais oficiais e verificados** de registro policial e defesa do consumidor, incluindo orientações locais específicas para o município de **Mogi das Cruzes**.

---

## 🎨 Identidade Visual e Experiência

- **Cores**: Azul-marinho profundo (`#040915`, `#081126`, `#0d1a38`), azul tecnológico e ciano elétrico (`#38bdf8`, `#3b82f6`), com toques de alerta e segurança (`#ef4444`, `#10b981`, `#f59e0b`).
- **Design Editorial Premium**: Cards sofisticados, iluminação suave, glassmorphism moderado, microinterações e excelente legibilidade.
- **Imagens Profissionais Reais**: Ilustrações conceituais exclusivas geradas em 3D e renderizadas localmente em `public/images/`:
  - `hero-shield-smartphone.png` (Banner principal: smartphone protegido por escudo cibernético com circuitos luminosos)
  - `como-se-proteger.png` (Conceito de privacidade, biometria e camadas de segurança)
  - `fui-vitima-suporte.png` (Guia de emergência e suporte de navegação)
  - `golpe-phishing.png` (Anzol digital e mensagens falsas)
  - `golpe-whatsapp.png` (Perfis clonados e mensagens falsas)
  - `golpe-pix.png` (Fraudes e transferências Pix)
  - `golpe-loja-falsa.png` (Lojas virtuais fraudulentas)

---

## 🧱 Estrutura do Portal

1. **Início (Hero)**: Apresentação marcante com o lema *"Na internet, informação também é proteção"*, badges dos pilares essenciais e botões de ação rápida.
2. **Conheça os Golpes**: Cards detalhados com filtros de categorias e busca interativa em tempo real:
   - Falso atendimento bancário
   - WhatsApp clonado e perfil falso
   - Phishing e links maliciosos
   - Lojas virtuais falsas
   - Golpes envolvendo Pix
   - Falsa emergência familiar e voz clonada (IA)
   - Falsas vagas de emprego
   - Falsos investimentos e pirâmides
   - Outras fraudes comuns (Falso boleto, Maquininha adulterada, Acesso remoto, Aluguel falso, Extorsão).
3. **Como se Proteger**:
   - 10 Hábitos de Ouro com dicas práticas e ícones.
   - Guia passo a passo por aplicativo: WhatsApp, Instagram, Facebook, Conta Google / E-mail principal.
4. **Fui Vítima. E Agora? (SOS Emergência)**:
   - 7 Passos cronológicos em ordem de prioridade.
   - Explicação aprofundada do **MED (Mecanismo Especial de Devolução)**: prazo legal de 80 dias, critérios de aplicação e esclarecimento de que o estorno depende da existência de saldo na conta recebedora.
5. **Onde Buscar Ajuda (Diretório Oficial)**:
   - Delegacia Eletrônica da Polícia Civil de SP
   - Banco Central do Brasil (Segurança & Reclamações)
   - Consumidor.gov.br
   - Fundação Procon-SP
   - CERT.br (Cartilha de Segurança)
   - Polícia Federal (Crimes Cibernéticos)
   - ANPD (Autoridade Nacional de Proteção de Dados)
   - Centrais oficiais de recuperação de contas (WhatsApp, Instagram /hacked, Facebook /hacked, Google).
   - **Atendimento Local em Mogi das Cruzes**: Orientações sobre o Procon Municipal, link para a Prefeitura de Mogi das Cruzes e nota oficial de transparência.
6. **Recursos Educativos Interativos**:
   - **Quiz Educativo**: 5 situações realistas com feedback pedagógico imediato explicando a armadilha por trás de cada escolha.
   - **Checklist de Segurança**: Verificação interativa com barra de progresso em tempo real.
   - **Mitos e Verdades**: Cards interativos revelando equívocos populares sobre segurança na internet.
   - **Glossário**: Termos técnicos essenciais (Phishing, Deepfake, 2FA, Ransomware, Spoofing, etc.).
   - **FAQ Expansível**: Perguntas frequentes com navegação acessível.
7. **Rodapé com Mensagem de Transparência Institucional**.

---

## 💻 Tecnologias Utilizadas

- **Next.js 14** (App Router)
- **React 18** & **TypeScript**
- **Tailwind CSS** (design responsivo, paleta navy tecnológica)
- **Lucide React** (iconografia moderna e semântica)

---

## 🚀 Como Executar o Projeto

```bash
# Instalar as dependências
npm install

# Iniciar o servidor de desenvolvimento
npm run dev

# Ou compilar e rodar a versão de produção otimizada
npm run build
npm run start
```

O portal estará acessível em `http://localhost:3000`.
