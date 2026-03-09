// ============================================================
// SPECIALTIES — campos: slug, id, title, description, shortDesc,
//   heroDesc, icon, symptoms, approach
// ============================================================

export const SPECIALTIES = [
  {
    slug: "ansiedade",
    id: "ansiedade",
    title: "Ansiedade",
    description: "Tratamento especializado para transtornos de ansiedade, síndrome do pânico e fobias.",
    shortDesc: "Tratamento especializado para transtornos de ansiedade, síndrome do pânico e fobias.",
    heroDesc:
      "A ansiedade é uma resposta natural do organismo, mas quando se torna excessiva pode impactar profundamente a qualidade de vida. Com acompanhamento psicológico adequado, é possível aprender a reconhecer e manejar os gatilhos ansiosos.",
    icon: "🧠",
    symptoms: [
      "Preocupação excessiva e difícil de controlar",
      "Tensão muscular e inquietação constante",
      "Dificuldade de concentração",
      "Distúrbios do sono",
      "Crises de pânico ou fobia social",
    ],
    approach:
      "O tratamento é individualizado, podendo incluir Terapia Cognitivo-Comportamental (TCC), técnicas de relaxamento e mindfulness, sempre respeitando o ritmo de cada pessoa.",
  },
  {
    slug: "depressao",
    id: "depressao",
    title: "Depressão",
    description: "Suporte psicológico para superar a depressão e retomar o prazer pela vida.",
    shortDesc: "Suporte psicológico para superar a depressão e retomar o prazer pela vida.",
    heroDesc:
      "A depressão vai além da tristeza comum. É um transtorno que afeta o humor, a energia e a motivação. O acompanhamento psicológico é fundamental para o processo de recuperação.",
    icon: "💙",
    symptoms: [
      "Tristeza persistente ou vazio emocional",
      "Perda de interesse em atividades antes prazerosas",
      "Alterações no sono e apetite",
      "Fadiga e falta de energia",
      "Pensamentos negativos ou de desesperança",
    ],
    approach:
      "Trabalhamos de forma colaborativa para identificar padrões de pensamento disfuncionais, fortalecer recursos internos e construir estratégias para o bem-estar emocional.",
  },
  {
    slug: "terapia-de-casal",
    id: "terapia-de-casal",
    title: "Terapia de Casal",
    description: "Espaço seguro para fortalecer relacionamentos e resolver conflitos.",
    shortDesc: "Espaço seguro para fortalecer relacionamentos e resolver conflitos.",
    heroDesc:
      "Todo relacionamento passa por fases desafiadoras. A terapia de casal oferece um espaço neutro e seguro para que parceiros possam se ouvir, compreender e reconstruir a conexão.",
    icon: "💑",
    symptoms: [
      "Comunicação desgastada ou frequentes conflitos",
      "Distanciamento emocional ou afetivo",
      "Dificuldades após traição ou quebra de confiança",
      "Divergências sobre filhos, finanças ou família",
      "Desejo de aprofundar a conexão",
    ],
    approach:
      "Sessões estruturadas para melhorar a comunicação, identificar padrões relacionais e desenvolver soluções conjuntas, respeitando a individualidade de cada parceiro.",
  },
  {
    slug: "psicologia-infantil",
    id: "psicologia-infantil",
    title: "Psicologia Infantil",
    description: "Atendimento especializado para o desenvolvimento emocional de crianças.",
    shortDesc: "Atendimento especializado para o desenvolvimento emocional de crianças.",
    heroDesc:
      "A infância é um período crucial para o desenvolvimento emocional e social. O atendimento infantil utiliza recursos lúdicos e adequados à faixa etária para ajudar crianças a expressarem suas emoções.",
    icon: "🧒",
    symptoms: [
      "Dificuldades escolares ou de aprendizagem",
      "Comportamentos agressivos ou regressivos",
      "Medos intensos, fobias ou pesadelos",
      "Dificuldade de socialização",
      "Adaptação a mudanças (divórcio, mudança, etc.)",
    ],
    approach:
      "Por meio do brincar terapêutico, da arte e de atividades lúdicas, auxiliamos a criança a desenvolver habilidades emocionais e comportamentais de forma natural e respeitosa.",
  },
  {
    slug: "autoestima",
    id: "autoestima",
    title: "Autoestima e Autoconhecimento",
    description: "Desenvolvimento pessoal para uma relação mais saudável consigo mesmo.",
    shortDesc: "Desenvolvimento pessoal para uma relação mais saudável consigo mesmo.",
    heroDesc:
      "Construir uma autoestima sólida é um processo que envolve autoconhecimento, aceitação e mudança de padrões limitantes. A psicoterapia oferece as ferramentas para essa jornada.",
    icon: "✨",
    symptoms: [
      "Autocrítica excessiva e perfeccionismo",
      "Dificuldade em estabelecer limites",
      "Dependência da aprovação alheia",
      "Insegurança em relacionamentos e trabalho",
      "Sensação de não ser suficiente",
    ],
    approach:
      "Trabalhamos para identificar crenças limitantes, desenvolver a autoaceitação e construir uma narrativa de vida mais positiva e autêntica.",
  },
  {
    slug: "estresse-e-burnout",
    id: "estresse-e-burnout",
    title: "Estresse e Burnout",
    description: "Recuperação do esgotamento profissional e reequilíbrio emocional.",
    shortDesc: "Recuperação do esgotamento profissional e reequilíbrio emocional.",
    heroDesc:
      "O burnout é o resultado de um estresse crônico não gerenciado, especialmente no ambiente de trabalho. O acompanhamento psicológico é essencial para a recuperação e prevenção de recaídas.",
    icon: "🔋",
    symptoms: [
      "Exaustão física e emocional constante",
      "Distanciamento e cinismo com o trabalho",
      "Queda significativa de produtividade",
      "Dores físicas sem causa aparente",
      "Irritabilidade e dificuldade de descansar",
    ],
    approach:
      "Identificamos as fontes de estresse, trabalhamos estratégias de manejo e ajudamos a reorganizar prioridades e estabelecer limites saudáveis para uma vida mais equilibrada.",
  },
];

// ============================================================
// NEIGHBORHOODS / BAIRROS
// ============================================================

export const NEIGHBORHOODS = [
  "Centro",
  "Zona 07",
  "Zona 05",
  "Zona 01",
  "Vila Operária",
  "Jardim Alvorada",
  "Jardim Universitário",
  "Pinheiros",
  "Novo Centro",
  "Parque das Laranjeiras",
];

// Alias para LeadForm (que usa BAIRROS como string[])
export const BAIRROS = NEIGHBORHOODS;

// ============================================================
// FAQS
// ============================================================

export const FAQS = [
  {
    question: "Como funciona a primeira consulta?",
    answer:
      "A primeira consulta é uma sessão de acolhimento, onde você pode falar livremente sobre o que te trouxe à terapia. Não há julgamentos. O objetivo é entender suas necessidades e apresentar como o processo terapêutico pode te ajudar.",
  },
  {
    question: "Quantas sessões vou precisar?",
    answer:
      "O número de sessões varia de pessoa para pessoa e depende dos objetivos terapêuticos. Alguns temas exigem um processo mais longo, outros podem ser trabalhados em menor tempo. Isso é discutido e revisado ao longo do processo.",
  },
  {
    question: "As sessões são presenciais ou online?",
    answer:
      "Oferecemos atendimento presencial em Maringá e também sessões online pelo computador ou smartphone, com a mesma qualidade e sigilo profissional.",
  },
  {
    question: "Como é garantido o sigilo das informações?",
    answer:
      "O sigilo é um pilar ético da psicologia, garantido pelo Código de Ética Profissional do CFP. Tudo o que é compartilhado nas sessões é absolutamente confidencial.",
  },
  {
    question: "Psicólogo pode receitar medicamentos?",
    answer:
      "Não. Apenas médicos (especialmente psiquiatras) podem prescrever medicamentos. O psicólogo trabalha com psicoterapia. Quando necessário, indicamos profissionais de saúde para uma abordagem integrada.",
  },
  {
    question: "Como faço para agendar uma consulta?",
    answer:
      "É simples! Preencha o formulário de contato nesta página e entraremos em contato para agendar sua primeira sessão no horário mais conveniente para você.",
  },
];

// ============================================================
// BLOG_POSTS
// ============================================================

export const BLOG_POSTS = [
  {
    slug: "ansiedade-como-identificar",
    title: "Como Identificar se Você Está com Ansiedade: Sinais que Não Devem ser Ignorados",
    excerpt:
      "A ansiedade vai além do nervosismo comum. Conheça os principais sintomas e entenda quando é hora de buscar ajuda profissional.",
    category: "Ansiedade",
    readTime: "5 min",
    date: "2024-03-10",
    content: `
      <p>A ansiedade é uma das condições de saúde mental mais comuns no Brasil e no mundo. Mas como diferenciar o nervosismo natural do dia a dia de um transtorno de ansiedade que precisa de atenção profissional?</p>
      <h2>O que é ansiedade?</h2>
      <p>A ansiedade é uma resposta natural do organismo a situações de ameaça ou incerteza. Em doses adequadas, ela nos mantém alertas e nos ajuda a nos preparar para desafios. O problema ocorre quando essa resposta se torna desproporcional ou constante.</p>
      <h2>Sinais de alerta</h2>
      <p>Fique atento se você experimenta com frequência: preocupação excessiva e difícil de controlar, tensão muscular persistente, insônia ou sono agitado, dificuldade de concentração, irritabilidade sem motivo aparente e sintomas físicos como palpitações ou sudorese.</p>
      <h2>Quando buscar ajuda?</h2>
      <p>Se esses sintomas estão interferindo na sua vida profissional, nos seus relacionamentos ou na sua qualidade de vida em geral, é hora de conversar com um psicólogo. O tratamento é eficaz e pode transformar sua relação com a ansiedade.</p>
    `,
  },
  {
    slug: "depressao-mitos-verdades",
    title: "Depressão: 5 Mitos e Verdades que Todo Mundo Deveria Saber",
    excerpt:
      "A desinformação sobre a depressão ainda causa muito sofrimento. Descubra o que é verdade e o que é mito sobre essa condição tão comum.",
    category: "Depressão",
    readTime: "7 min",
    date: "2024-03-05",
    content: `
      <p>A depressão ainda é cercada de muitos mitos e preconceitos que dificultam o diagnóstico e o tratamento. Vamos desmistificar os principais equívocos.</p>
      <h2>Mito 1: Depressão é frescura</h2>
      <p>Verdade: A depressão é um transtorno mental reconhecido pela OMS, com bases biológicas, psicológicas e sociais. Ninguém escolhe ter depressão.</p>
      <h2>Mito 2: Só pessoas "fracas" ficam deprimidas</h2>
      <p>Verdade: A depressão pode afetar qualquer pessoa, independentemente de força de vontade, personalidade ou condição social.</p>
      <h2>Mito 3: A pessoa deprimida sempre está triste</h2>
      <p>Verdade: A depressão pode se manifestar como vazio emocional, irritabilidade, cansaço extremo ou perda de interesse, nem sempre como tristeza visível.</p>
    `,
  },
  {
    slug: "terapia-online-funciona",
    title: "Terapia Online: Funciona tão bem quanto a Presencial?",
    excerpt:
      "Com a popularização da terapia online, muitas dúvidas surgem sobre sua eficácia. Saiba o que a ciência diz sobre o assunto.",
    category: "Terapia",
    readTime: "6 min",
    date: "2024-02-28",
    content: `
      <p>Desde a pandemia, a terapia online se consolidou como uma modalidade eficaz e acessível de atendimento psicológico. Mas será que funciona tão bem quanto a terapia presencial?</p>
      <h2>O que a pesquisa mostra</h2>
      <p>Estudos científicos demonstram que a terapia online apresenta resultados equivalentes à terapia presencial para a maioria dos transtornos psicológicos, incluindo ansiedade, depressão e estresse.</p>
      <h2>Vantagens da terapia online</h2>
      <p>Conforto do lar, sem necessidade de deslocamento, mais flexibilidade de horários, acesso a profissionais independentemente da localização geográfica e frequentemente menor custo.</p>
      <h2>Quando a presencial pode ser preferível</h2>
      <p>Em alguns casos específicos, como situações de crise aguda ou quando há necessidade de maior suporte, o atendimento presencial pode ser mais indicado. Converse com seu psicólogo sobre o formato mais adequado.</p>
    `,
  },
];

// ============================================================
// TRUST_ITEMS — campos: label, icon, detail
// ============================================================

export const TRUST_ITEMS = [
  {
    label: "CRP Verificado",
    icon: "🛡️",
    detail: "Registro ativo no Conselho Regional de Psicologia",
    titulo: "CRP registrado",
    descricao: "Profissional com registro ativo no Conselho Regional de Psicologia",
    icone: "shield",
  },
  {
    label: "Sigilo Total",
    icon: "🔒",
    detail: "Código de ética profissional garantindo confidencialidade",
    titulo: "Sigilo garantido",
    descricao: "Todas as sessões são protegidas pelo código de ética profissional",
    icone: "lock",
  },
  {
    label: "Presencial & Online",
    icon: "🖥️",
    detail: "Atendimento em Maringá ou por videochamada",
    titulo: "Presencial e Online",
    descricao: "Atendimento em Maringá ou pelo computador, com a mesma qualidade",
    icone: "monitor",
  },
  {
    label: "Sem Julgamentos",
    icon: "💚",
    detail: "Ambiente acolhedor e respeitoso para todos",
    titulo: "Sem julgamentos",
    descricao: "Espaço acolhedor e seguro para você ser quem realmente é",
    icone: "heart",
  },
];

// ============================================================
// STATS — campos: value, label  (+ alias valor para compatibilidade)
// ============================================================

export const STATS = [
  { value: "500+", valor: "500+", label: "Pacientes atendidos" },
  { value: "8 anos", valor: "8 anos", label: "De experiência clínica" },
  { value: "97%", valor: "97%", label: "Recomendam o serviço" },
  { value: "2 dias", valor: "2 dias", label: "Para primeiro contato" },
];

// ============================================================
// DEPOIMENTOS — campos: id, name, initials, location, text,
//   featured, especialidade, tempo
// ============================================================

export const DEPOIMENTOS = [
  {
    id: "dep-1",
    name: "Ana P.",
    initials: "AP",
    location: "Zona 07, Maringá",
    bairro: "Zona 07",
    text: "Depois de meses lutando contra a ansiedade sozinha, finalmente encontrei um espaço seguro para falar sobre o que sentia. A diferença na minha vida foi enorme.",
    texto: "Depois de meses lutando contra a ansiedade sozinha, finalmente encontrei um espaço seguro para falar sobre o que sentia. A diferença na minha vida foi enorme.",
    featured: false,
    especialidade: "Ansiedade",
    tempo: "8 meses em terapia",
  },
  {
    id: "dep-2",
    name: "Carlos M.",
    initials: "CM",
    location: "Centro, Maringá",
    bairro: "Centro",
    text: "Cheguei no fundo do poço com o burnout. A terapia me devolveu a vontade de viver e me ajudou a criar limites que nunca soube ter. Recomendo de coração.",
    texto: "Cheguei no fundo do poço com o burnout. A terapia me devolveu a vontade de viver e me ajudou a criar limites que nunca soube ter. Recomendo de coração.",
    featured: true,
    especialidade: "Burnout",
    tempo: "1 ano em terapia",
  },
  {
    id: "dep-3",
    name: "Fernanda & Ricardo",
    initials: "FR",
    location: "Jardim Alvorada, Maringá",
    bairro: "Jardim Alvorada",
    text: "Nossa relação estava à beira do fim. A terapia de casal nos deu ferramentas para nos ouvir de verdade. Hoje somos muito mais próximos.",
    texto: "Nossa relação estava à beira do fim. A terapia de casal nos deu ferramentas para nos ouvir de verdade. Hoje somos muito mais próximos.",
    featured: false,
    especialidade: "Terapia de Casal",
    tempo: "6 meses em terapia",
  },
];