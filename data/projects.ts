export type ProjectId =
  | "kora"
  | "service-center"
  | "husky"
  | "ai-product-intelligence";

export interface ProjectSummary {
  id: ProjectId;
  index: string;
  title: string;
  tag: string;
  aspect: string;
  primaryImage?: string;
  /** object-position for the grid card crop, when the default top-left isn't right */
  imagePosition?: string;
}

export interface CaseMedia {
  src: string;
  caption: string;
}

export interface CaseStatement {
  title: string;
  text: string;
}

export interface KoraCase {
  subtitle: string;
  intro: string;
  about: string;
  problem: string;
  solution: string;
  principle: string;
  flow: string[];
  trust: CaseStatement[];
  capabilities: string[];
  useCases: string[];
  closing: string;
  tech: string[];
  quality: string;
  media: {
    primary: CaseMedia;
    finance: CaseMedia;
    missing: CaseMedia;
    workspace: CaseMedia;
    demo: CaseMedia;
  };
}

export const PROJECTS: ProjectSummary[] = [
  {
    id: "kora",
    index: "01",
    title: "kora",
    tag: "ai-платформа для работы с документами",
    aspect: "aspect-[4/3]",
    primaryImage: "/projects/kora/primary.jpg",
  },
  {
    id: "service-center",
    index: "02",
    title: "service center",
    tag: "система для управления заявками",
    aspect: "aspect-[4/3]",
    primaryImage: "/projects/service-center/primary.jpg",
  },
  {
    id: "husky",
    index: "03",
    title: "husky rider academy",
    tag: "telegram mini app с обучением и прогрессом",
    aspect: "aspect-[3/4]",
    primaryImage: "/projects/husky/primary.jpg",
    imagePosition: "50% 30%",
  },
  {
    id: "ai-product-intelligence",
    index: "04",
    title: "ai product intelligence",
    tag: "система для анализа релизов ai-продуктов",
    aspect: "aspect-[16/9]",
    primaryImage: "/projects/ai-product-intelligence/primary.jpg",
  },
];

const KORA = "/projects/kora";

export const KORA_CASE: KoraCase = {
  subtitle: "AI-платформа для работы с документами",
  intro:
    "Загружает документы, вытаскивает ключевые данные, проверяет их, показывает, чего не хватает, и собирает результат в понятный отчёт.",
  about:
    "Kora — система для автоматической работы с документами. Пользователь загружает PDF, DOCX или TXT, а платформа сама разбирает содержимое, находит важные факты и цифры, проверяет данные и помогает быстро получить готовую выжимку для дальнейшей работы.",
  problem:
    "Когда документов много, сотрудники тратят время на ручной поиск информации, перенос данных в таблицы и проверку того, всё ли учтено.",
  solution:
    "Kora собирает всё в одном месте: извлекает данные из документов, показывает, откуда они взялись, находит несоответствия и пробелы и формирует итоговый анализ.",
  principle:
    "Аналитик получает не «ответ AI», а проверяемую структуру, с которой можно работать дальше.",
  flow: ["документ", "данные", "проверка", "анализ", "вопросы", "отчёт"],
  trust: [
    {
      title: "Всё можно проверить",
      text: "Для извлечённых данных сохраняются ссылки на исходный текст, поэтому всегда можно увидеть, откуда взялась информация.",
    },
    {
      title: "Важные проверки не отданы нейросети",
      text: "Часть правил работает на обычной программной логике. Это снижает риск того, что система уверенно выдаст неверный вывод.",
    },
    {
      title: "Если данных мало, система так и говорит",
      text: "Kora показывает пробелы и не пытается создать уверенный результат там, где для него недостаточно информации.",
    },
  ],
  capabilities: [
    "извлекать факты и цифры из документов",
    "структурировать найденную информацию",
    "проверять данные на несоответствия",
    "находить недостающую информацию",
    "отвечать на вопросы по загруженным документам",
    "показывать источники ответа",
    "формировать итоговые отчёты",
    "работать с документами внутри общего пространства команды",
  ],
  useCases: [
    "анализ договоров",
    "обработку заявок и анкет",
    "внутреннюю базу знаний",
    "проверку отчётов",
    "извлечение данных из документов",
    "подготовку сводок",
    "работу с внутренними инструкциями",
    "проверку комплектности документов",
    "поиск информации в корпоративной документации",
  ],
  closing:
    "подобную систему можно адаптировать под ваши документы, проверки и внутренние процессы",
  tech: ["FastAPI", "PostgreSQL", "pgvector", "Next.js", "React", "OpenRouter", "RAG"],
  quality: "200+ автоматических тестов",
  media: {
    primary: { src: `${KORA}/primary.jpg`, caption: "итоговый анализ и отчёт" },
    finance: {
      src: `${KORA}/detail-1.jpg`,
      caption: "извлечение ключевых финансовых данных",
    },
    missing: {
      src: `${KORA}/detail-2.jpg`,
      caption: "поиск недостающей информации",
    },
    workspace: {
      src: `${KORA}/detail-3.jpg`,
      caption: "работа с документами в одном месте",
    },
    demo: {
      src: `${KORA}/demo.mp4`,
      caption: "как документ превращается в структурированный анализ",
    },
  },
};

export interface ServiceCenterCase {
  subtitle: string;
  intro: string;
  problem: string;
  solution: string;
  keyMessage: string;
  flow: string[];
  capabilities: string[];
  principles: CaseStatement[];
  adaptation: string;
  useCases: string[];
  closing: string;
  tech: string[];
  media: {
    dashboard: CaseMedia;
    jobs: CaseMedia;
    job: CaseMedia;
    schedule: CaseMedia;
    demo: CaseMedia;
  };
}

const SC = "/projects/service-center";

export const SERVICE_CENTER_CASE: ServiceCenterCase = {
  subtitle: "система для управления заявками и работой сервисной команды",
  intro:
    "Помогает держать в одном месте заявки, клиентов, мастеров, статусы работ, материалы, оплаты и историю обслуживания.",
  problem:
    "В небольших сервисных компаниях работа часто распределена между чатами, таблицами и заметками сотрудников. Из-за этого теряются статусы заявок, история клиента, дополнительные работы, оплаты и информация о прошлых ремонтах.",
  solution:
    "Service Center собирает весь процесс вокруг одной заявки: от обращения клиента и назначения мастера до выполнения работ, оплаты, документов и повторного обращения по гарантии.",
  keyMessage:
    "В любой момент видно, что происходит с заявкой, кто за неё отвечает и что нужно сделать дальше.",
  flow: [
    "клиент",
    "заявка",
    "мастер",
    "работа",
    "дополнительные работы",
    "оплата",
    "документы",
    "гарантия",
  ],
  capabilities: [
    "хранить клиентов и историю обращений",
    "создавать и вести заявки",
    "назначать мастеров",
    "отслеживать статусы и сроки",
    "фиксировать материалы и дополнительные работы",
    "учитывать оплату",
    "хранить документы и фото",
    "сохранять историю по оборудованию и гарантийным случаям",
  ],
  principles: [
    {
      title: "всё связано одной заявкой",
      text: "Клиент, мастер, материалы, оплата, документы и история работ остаются связаны между собой, поэтому контекст не теряется между разными инструментами.",
    },
    {
      title: "видно текущее состояние и историю",
      text: "Команда видит не только текущий статус, но и то, что происходило с заявкой раньше.",
    },
    {
      title: "без лишней тяжести",
      text: "Система закрывает ежедневную операционную работу, не превращаясь в перегруженную корпоративную ERP.",
    },
  ],
  adaptation:
    "Подобную систему можно адаптировать под любой бизнес, где есть заявки, исполнители и этапы работы.",
  useCases: [
    "сервисные центры",
    "выездной ремонт",
    "монтажные компании",
    "обслуживание оборудования",
    "клининг",
    "техническое обслуживание объектов",
    "студии услуг",
    "небольшие производственные и сервисные команды",
  ],
  closing:
    "такую систему можно собрать под ваши статусы, роли, документы и правила работы",
  tech: ["FastAPI", "PostgreSQL", "Next.js", "React", "Docker", "S3"],
  media: {
    dashboard: {
      src: `${SC}/primary.jpg`,
      caption: "общая картина по работе сервиса",
    },
    jobs: {
      src: `${SC}/detail-1.jpg`,
      caption: "все заявки, статусы, сроки и исполнители в одном месте",
    },
    job: {
      src: `${SC}/detail-2.jpg`,
      caption: "вся история работы по одной заявке",
    },
    schedule: {
      src: `${SC}/detail-3.jpg`,
      caption: "планирование загрузки команды",
    },
    demo: {
      src: `${SC}/demo.mp4`,
      caption: "как заявка проходит через весь рабочий процесс",
    },
  },
};

export interface HuskyCase {
  subtitle: string;
  intro: string;
  problem: string;
  solution: string;
  keyMessage: string;
  flow: string[];
  capabilities: string[];
  principles: CaseStatement[];
  businessHeading: string;
  businessText: string;
  useCases: string[];
  closing: string;
  tech: string[];
  media: {
    main: CaseMedia;
    sections: CaseMedia;
    section: CaseMedia;
    demo: CaseMedia;
  };
}

const HUSKY = "/projects/husky";

export const HUSKY_CASE: HuskyCase = {
  subtitle: "Telegram Mini App с обучением, прогрессом и геймификацией",
  intro:
    "Пользователь проходит темы прямо внутри Telegram, выполняет практические задания и видит, как меняются его навыки и общий прогресс.",
  problem:
    "Самостоятельное обучение часто распадается на отдельные материалы, советы и практику без общей структуры. Пользователь не всегда понимает, что изучать дальше, что уже получается и где остаются слабые места.",
  solution:
    "Husky объединяет контент, практику и прогресс в одном Telegram-продукте. Пользователь выбирает тему, проходит короткий материал, проверяет понимание, выполняет задание в реальном мире и отмечает результат.",
  keyMessage:
    "Mini App превращает Telegram из канала общения в полноценный пользовательский продукт.",
  flow: ["тема", "материал", "проверка", "практика", "самооценка", "прогресс"],
  capabilities: [
    "темы и разделы",
    "прогресс по обучению",
    "XP и уровни",
    "навыки в процентах",
    "практические задания",
    "самооценка результата",
    "достижения",
    "миссии и дополнительные цели",
    "история прогресса пользователя",
    "авторизация через Telegram",
  ],
  principles: [
    {
      title: "Telegram без лишней регистрации",
      text: "Пользователь открывает продукт прямо из Telegram и сразу попадает в свой профиль и прогресс.",
    },
    {
      title: "Прогресс связан с реальными действиями",
      text: "Баллы, уровень и навыки меняются после конкретных шагов пользователя, а не существуют отдельно от сценария.",
    },
    {
      title: "Обучение без жёсткого расписания",
      text: "Пользователь сам выбирает следующую тему и двигается в своём темпе.",
    },
  ],
  businessHeading: "Telegram может быть полноценным продуктом",
  businessText:
    "На базе такой архитектуры можно собрать не только обучающее приложение, но и любой пользовательский сервис внутри Telegram: с аккаунтом, контентом, статусами, персональными данными, заданиями, прогрессом и своей бизнес-логикой.",
  useCases: [
    "клиентские кабинеты",
    "программы лояльности",
    "обучение и онбординг",
    "клубы и сообщества",
    "марафоны и челленджи",
    "сервисы сопровождения клиентов",
    "внутренние продукты для сотрудников",
    "трекеры прогресса и целей",
    "Telegram-сервисы с ботом и Mini App",
  ],
  closing: "Telegram-продукт можно собрать под ваш сценарий, данные и логику",
  tech: [
    "Python",
    "FastAPI",
    "aiogram",
    "PostgreSQL",
    "React",
    "TypeScript",
    "Telegram Mini Apps",
    "Docker",
  ],
  media: {
    main: {
      src: `${HUSKY}/primary.jpg`,
      caption: "уровень, XP и прогресс пользователя в одном экране",
    },
    sections: {
      src: `${HUSKY}/detail-1.jpg`,
      caption: "структура тем и прогресс по каждому разделу",
    },
    section: {
      src: `${HUSKY}/detail-2.jpg`,
      caption: "внутри раздела видно состояние, навык и следующий шаг",
    },
    demo: { src: `${HUSKY}/demo.mp4`, caption: "сценарий пользователя внутри Mini App" },
  },
};

/** Crop window inside the source image, in source pixels — trims empty dark margins. */
export interface CaseCrop {
  width: number;
  height: number;
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface AiProductIntelligenceCase {
  subtitle: string;
  intro: string;
  problem: string[];
  solution: string;
  keyLead: string;
  decisions: string[];
  flow: string[];
  capabilities: string[];
  principles: CaseStatement[];
  businessHeading: string;
  businessText: string;
  useCases: string[];
  closing: string;
  tech: string[];
  media: {
    overview: CaseMedia;
    decision: CaseMedia & { crop: CaseCrop };
    investigation: CaseMedia & { crop: CaseCrop };
    session: CaseMedia & { crop: CaseCrop };
    demo: CaseMedia;
  };
}

const AIP = "/projects/ai-product-intelligence";

export const AI_PRODUCT_INTELLIGENCE_CASE: AiProductIntelligenceCase = {
  subtitle: "система для анализа релизов AI-продуктов",
  intro:
    "Помогает понять, улучшила ли новая версия AI-агента продукт, где появились регрессии, почему они возникли и стоит ли выпускать релиз.",
  problem: [
    "Команды обычно видят технические метрики AI-системы: логи, задержки, ошибки, стоимость запросов. Но этого недостаточно, чтобы понять, как новая версия повлияла на продукт и бизнес.",
    "Средние показатели могут выглядеть нормально, пока отдельный сегмент пользователей уже проседает. Из-за этого релиз легко выпустить слишком рано или, наоборот, остановить без достаточных оснований.",
  ],
  solution:
    "AI Product Intelligence связывает поведение агента с продуктовыми метриками, сегментами, экономикой и реальными пользовательскими сессиями. Система находит регрессии, помогает разобраться в их причине и собирает доказательства для решения по релизу.",
  keyLead: "Не просто показывает, что изменилось, а помогает решить:",
  decisions: ["SHIP", "HOLD", "ROLLBACK"],
  flow: ["поведение агента", "метрики", "сегменты", "причина", "доказательства", "решение"],
  capabilities: [
    "сравнивать версии AI-агента",
    "отслеживать продуктовые и бизнес-метрики",
    "проверять guardrails по задержке, стоимости и ошибкам",
    "находить проблемные пользовательские сегменты",
    "определять причины неудачных сессий",
    "связывать выводы с реальными диалогами",
    "учитывать стоимость и бизнес-эффект",
    "блокировать уверенный релиз при плохом качестве данных",
    "отправлять алерты о регрессиях",
    "собирать human review по AI-классификации",
  ],
  principles: [
    {
      title: "решение опирается на продукт, а не только на AI-метрики",
      text: "Качество агента оценивается вместе с конверсией, отказами, стоимостью и другими бизнес-показателями.",
    },
    {
      title: "любой вывод можно проверить",
      text: "Найденная проблема связывается с конкретным сегментом, причиной и реальными пользовательскими сессиями.",
    },
    {
      title: "финальное решение не принимает LLM",
      text: "SHIP, HOLD или ROLLBACK определяется прозрачными правилами на основе уже рассчитанных метрик и guardrails.",
    },
  ],
  businessHeading: "аналитика для AI-продукта, а не просто мониторинг модели",
  businessText:
    "Такой контур можно адаптировать под любой AI-продукт, где регулярно меняются модели, промпты, инструменты или логика агента и важно понимать влияние этих изменений на пользователей и бизнес.",
  useCases: [
    "AI-ассистенты",
    "support-боты",
    "внутренние copilots",
    "рекомендательные системы",
    "AI-поиск",
    "sales-ассистенты",
    "AI-функции внутри SaaS",
    "продукты с регулярными model/prompt-релизами",
  ],
  closing:
    "можно собрать аналитический контур под ваши метрики, сегменты, риски и процесс релизов",
  tech: ["FastAPI", "PostgreSQL", "React", "TypeScript", "Langfuse", "pandas", "scipy", "OpenRouter"],
  media: {
    overview: {
      src: `${AIP}/primary.jpg`,
      caption: "состояние релиза, ключевая метрика и guardrails в одном экране",
    },
    decision: {
      src: `${AIP}/detail-1.jpg`,
      caption: "решение по релизу с причинами и экономическим эффектом",
      crop: { width: 1159, height: 776, x: 0, y: 0, w: 1159, h: 776 },
    },
    investigation: {
      src: `${AIP}/detail-2.jpg`,
      caption: "поиск сегментов, где новая версия действительно ухудшила результат",
      crop: { width: 1169, height: 853, x: 0, y: 0, w: 1169, h: 853 },
    },
    session: {
      src: `${AIP}/detail-3.jpg`,
      caption: "реальная пользовательская сессия как доказательство найденной проблемы",
      crop: { width: 1189, height: 661, x: 0, y: 0, w: 1189, h: 661 },
    },
    demo: {
      src: `${AIP}/demo.mp4`,
      caption: "от общего состояния релиза к расследованию, доказательствам и решению",
    },
  },
};

export function getProjectIndex(id: ProjectId): number {
  return PROJECTS.findIndex((p) => p.id === id);
}

export function getAdjacentProjects(id: ProjectId) {
  const i = getProjectIndex(id);
  const prev = PROJECTS[(i - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(i + 1) % PROJECTS.length];
  return { prev, next };
}
