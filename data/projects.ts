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
  steps: string[];
  trust: CaseStatement[];
  capabilities: string[];
  useCases: string[];
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
    tag: "internal tool for support teams",
    aspect: "aspect-[4/3]",
  },
  {
    id: "husky",
    index: "03",
    title: "husky",
    tag: "telegram bot for modern teams",
    aspect: "aspect-[3/4]",
  },
  {
    id: "ai-product-intelligence",
    index: "04",
    title: "ai product intelligence",
    tag: "analytics platform for product teams",
    aspect: "aspect-[16/9]",
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
  steps: [
    "загружаем документ",
    "система извлекает ключевую информацию",
    "проверяет данные на несоответствия",
    "показывает, какой информации не хватает",
    "позволяет задавать вопросы по документу",
    "формирует итоговый отчёт",
  ],
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

export function getProjectIndex(id: ProjectId): number {
  return PROJECTS.findIndex((p) => p.id === id);
}

export function getAdjacentProjects(id: ProjectId) {
  const i = getProjectIndex(id);
  const prev = PROJECTS[(i - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(i + 1) % PROJECTS.length];
  return { prev, next };
}
