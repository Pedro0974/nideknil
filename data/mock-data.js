import Vaga from "../models/vagas";

// Este arquivo contém a definição das vagas de emprego disponíveis, representadas como objetos da classe Vaga.
// Cada objeto Vaga contém as informações: título, empresa, localização, descrição da vaga, requisitos, salário e datas de início e término.
// As vagas estão armazenadas no array VAGAS, onde cada elemento é uma instância da classe Vaga.
// Essas informações são utilizadas na aplicação para exibir uma lista de vagas de emprego.

export const VAGAS = [
    new Vaga (
        1,
        "Desenvolvedor Web",
        "Tech Solutions",
        "São Paulo, SP",
        "Estamos buscando um desenvolvedor web experiente para se juntar à nossa equipe. O candidato ideal terá sólidos conhecimentos em HTML, CSS, JavaScript e frameworks como React ou Angular.",
        [
            "Experiência prévia como desenvolvedor web",
            "Conhecimento em HTML, CSS, JavaScript",
            "Experiência com frameworks como React ou Angular",
            "Graduação em Ciência da Computação ou áreas relacionadas (desejável)"
        ],
        "A combinar",
        "2024-03-20",
        "2024-04-10"
    ),
    new Vaga(
        2,
        "Analista de Marketing Digital",
        "Digital Marketing Agency",
        "Rio de Janeiro, RJ",
        "Procuramos um analista de marketing digital para desenvolver estratégias de marketing online. O candidato ideal terá experiência em SEO, SEM, mídias sociais e análise de dados.",
        [
            "Experiência prévia em marketing digital",
            "Conhecimento em SEO, SEM, mídias sociais",
            "Habilidade analítica e capacidade de interpretar dados",
            "Graduação em Marketing, Publicidade ou áreas relacionadas (desejável)",
        ],
        "R$ 3.500,00 - R$ 5.000,00",
        "2024-03-18",
        "2024-04-05"
    ),
    new Vaga(
        3,
        "Engenheiro de Software",
        "Innovative Tech",
        "Belo Horizonte, MG",
        "Estamos em busca de um engenheiro de software altamente qualificado para participar do desenvolvimento de nossos produtos. O candidato ideal terá experiência em desenvolvimento de software, boas habilidades de comunicação e capacidade de trabalhar em equipe.",
        [
            "Experiência prévia em desenvolvimento de software",
            "Conhecimento em linguagens de programação como Java, Python ou C++",
            "Habilidades de comunicação e trabalho em equipe",
            "Graduação em Engenharia de Computação ou áreas relacionadas",
        ],
        "R$ 7.000,00 - R$ 10.000,00",
        "2024-03-15",
        "2024-04-08"
    ),
    new Vaga(
        4,
        "Designer Gráfico",
        "Creative Studio",
        "Curitiba, PR",
        "Estamos procurando um designer gráfico talentoso para criar designs criativos e impactantes. O candidato ideal terá experiência em ferramentas de design gráfico como Adobe Photoshop, Illustrator e InDesign.",
        [
            "Experiência prévia como designer gráfico",
            "Conhecimento em Adobe Photoshop, Illustrator e InDesign",
            "Habilidade de pensar de forma criativa e fora da caixa",
            "Portfólio que demonstre habilidades e experiências relevantes",
        ],
        "R$ 3.000,00 - R$ 4.500,00",
        "2024-03-17",
        "2024-04-07"
    ),
    new Vaga(
        5,
        "Gerente de Projetos",
        "Global Solutions",
        "Brasília, DF",
        "Procuramos um gerente de projetos experiente para liderar equipes multidisciplinares e garantir a entrega de projetos dentro do prazo e do orçamento estabelecidos. O candidato ideal terá habilidades de liderança, gestão de tempo e comunicação eficaz.",
        [
            "Experiência prévia como gerente de projetos",
            "Conhecimento em metodologias de gerenciamento de projetos como Agile ou Scrum",
            "Habilidades de liderança, comunicação e resolução de problemas",
            "Certificação PMP ou PRINCE2 (desejável)",
        ],
        "R$ 8.000,00 - R$ 12.000,00",
        "2024-03-16",
        "2024-04-06"
    ),
    new Vaga(
        6,
        "Assistente Administrativo",
        "ABC Corporation",
        "Fortaleza, CE",
        "Estamos em busca de um assistente administrativo para fornecer suporte administrativo em diversas áreas da empresa. O candidato ideal terá habilidades organizacionais, conhecimento básico de softwares de escritório e capacidade de trabalhar em equipe.",
        [
            "Experiência prévia como assistente administrativo (opcional)",
            "Conhecimento básico em softwares de escritório (por exemplo, Microsoft Office)",
            "Habilidades organizacionais e capacidade de multitarefa",
            "Graduação em Administração ou áreas relacionadas (desejável)",
        ],
        "R$ 2.000,00 - R$ 3.000,00",
        "2024-03-14",
        "2024-04-04"
    ),
    new Vaga(
        7,
        "Analista de Dados",
        "Data Insights Ltda.",
        "Porto Alegre, RS",
        "Estamos em busca de um analista de dados para coletar, organizar e analisar grandes conjuntos de dados. O candidato ideal terá experiência em SQL, Python, R e ferramentas de visualização de dados.",
        [
            "Experiência prévia em análise de dados",
            "Conhecimento em SQL, Python, R",
            "Experiência com ferramentas de visualização de dados (por exemplo, Tableau, Power BI)",
            "Habilidade analítica e capacidade de interpretar dados complexos",
        ],
        "R$ 5.000,00 - R$ 7.000,00",
        "2024-03-13",
        "2024-04-03"
    ),
    new Vaga(
        8,
        "Engenheiro Civil",
        "Construction Group",
        "Recife, PE",
        "Procuramos um engenheiro civil para supervisionar e gerenciar projetos de construção. O candidato ideal terá experiência em gerenciamento de projetos de construção e conhecimento em normas técnicas e regulamentos.",
        [
            "Experiência prévia em engenharia civil",
            "Conhecimento em normas técnicas e regulamentos",
            "Experiência em gerenciamento de projetos de construção",
            "Graduação em Engenharia Civil ou áreas relacionadas",
        ],
        "R$ 6.000,00 - R$ 9.000,00",
        "2024-03-12",
        "2024-04-02"
    ),
    new Vaga(
        9,
        "Analista de Recursos Humanos",
        "HR Solutions",
        "Salvador, BA",
        "Estamos buscando um analista de recursos humanos para recrutamento, seleção e gestão de talentos. O candidato ideal terá experiência em recrutamento, habilidades interpessoais e conhecimento das leis trabalhistas.",
        [
            "Experiência prévia em recrutamento e seleção",
            "Habilidades interpessoais e capacidade de comunicação",
            "Conhecimento das leis trabalhistas e práticas de RH",
            "Graduação em Administração, Psicologia ou áreas relacionadas",
        ],
        "R$ 4.000,00 - R$ 6.000,00",
        "2024-03-11",
        "2024-04-01"
    ),
    new Vaga(
        10,
        "Desenvolvedor Mobile",
        "Mobile Tech Solutions",
        "Manaus, AM",
        "Procuramos um desenvolvedor mobile para criar aplicativos para plataformas iOS e Android. O candidato ideal terá experiência em desenvolvimento mobile nativo ou frameworks como React Native ou Flutter.",
        [
            "Experiência prévia em desenvolvimento mobile",
            "Conhecimento em linguagens como Swift (para iOS) ou Kotlin (para Android)",
            "Experiência com React Native, Flutter ou desenvolvimento nativo",
            "Capacidade de trabalhar em equipe e resolver problemas de forma eficaz",
        ],
        "R$ 5.000,00 - R$ 8.000,00",
        "2024-03-10",
        "2024-03-31"
    ),
    new Vaga(
        11,
        "Analista Financeiro",
        "Financial Consulting Group",
        "Florianópolis, SC",
        "Estamos em busca de um analista financeiro para análise de dados financeiros, preparação de relatórios e previsões financeiras. O candidato ideal terá habilidades analíticas, conhecimento em Excel e experiência em análise financeira.",
        [
            "Experiência prévia em análise financeira",
            "Conhecimento em Excel avançado",
            "Habilidade analítica e capacidade de interpretar dados financeiros",
            "Graduação em Administração, Economia ou áreas relacionadas",
        ],
        "R$ 4.500,00 - R$ 6.500,00",
        "2024-03-09",
        "2024-03-30"
    ),
    new Vaga(
        12,
        "Professor de Inglês",
        "Language Institute",
        "Porto Velho, RO",
        "Procuramos um professor de inglês para ministrar aulas para alunos de diferentes níveis. O candidato ideal terá fluência em inglês, experiência em ensino de idiomas e certificações como TOEFL ou Cambridge.",
        [
            "Fluência em inglês (nível avançado ou nativo)",
            "Experiência prévia como professor de inglês",
            "Certificações como TOEFL ou Cambridge (desejável)",
            "Habilidade de comunicação e empatia com os alunos",
        ],
        "R$ 2.500,00 - R$ 4.000,00",
        "2024-03-08",
        "2024-03-29"
    ),
    new Vaga(
        13,
        "Analista de Suporte Técnico",
        "Tech Support Solutions",
        "Goiânia, GO",
        "Estamos buscando um analista de suporte técnico para fornecer assistência técnica a clientes e usuários internos. O candidato ideal terá conhecimento em sistemas operacionais, redes e habilidades de comunicação eficazes.",
        [
            "Experiência prévia em suporte técnico",
            "Conhecimento em sistemas operacionais (Windows, MacOS, Linux)",
            "Familiaridade com redes e protocolos TCP/IP",
            "Boas habilidades de comunicação e capacidade de solucionar problemas",
        ],
        "R$ 3.000,00 - R$ 5.000,00",
        "2024-03-07",
        "2024-03-28"
    ),
    new Vaga(
        14,
        "Analista de Marketing",
        "Marketing Solutions Group",
        "Campinas, SP",
        "Procuramos um analista de marketing para desenvolver e implementar estratégias de marketing. O candidato ideal terá experiência em marketing digital, análise de mercado e habilidades criativas.",
        [
            "Experiência prévia em marketing",
            "Conhecimento em marketing digital e ferramentas de análise de mercado",
            "Habilidades criativas e capacidade de pensar estrategicamente",
            "Graduação em Marketing, Publicidade ou áreas relacionadas",
        ],
        "R$ 4.000,00 - R$ 6.000,00",
        "2024-03-06",
        "2024-03-27"
    ),
    new Vaga(
        15,
        "Designer de UI/UX",
        "Design Studio",
        "Natal, RN",
        "Estamos em busca de um designer de UI/UX para criar interfaces de usuário intuitivas e atraentes. O candidato ideal terá experiência em design de interfaces, prototipagem e ferramentas de design.",
        [
            "Experiência prévia em design de UI/UX",
            "Conhecimento em ferramentas de design como Adobe XD, Sketch, Figma",
            "Habilidade de prototipagem e compreensão de princípios de design de interação",
            "Portfólio que demonstre habilidades e experiências relevantes",
        ],
        "R$ 4.500,00 - R$ 7.000,00",
        "2024-03-05",
        "2024-03-26"
    ),
    new Vaga(
        16,
        "Analista de Qualidade de Software",
        "QualityTech Solutions",
        "São Luís, MA",
        "Estamos procurando um analista de qualidade de software para garantir a qualidade dos produtos de software através de testes e análise de qualidade. O candidato ideal terá experiência em testes de software e metodologias ágeis.",
        [
            "Experiência prévia em testes de software",
            "Conhecimento em metodologias ágeis como Scrum ou Kanban",
            "Familiaridade com ferramentas de automação de testes",
            "Habilidade de comunicação e trabalho em equipe",
        ],
        "R$ 4.000,00 - R$ 6.500,00",
        "2024-03-04",
        "2024-03-25"
    ),
    new Vaga(
        17,
        "Analista de Sistemas",
        "SystemTech Solutions",
        "Teresina, PI",
        "Procuramos um analista de sistemas para analisar, projetar e desenvolver sistemas de software. O candidato ideal terá conhecimento em linguagens de programação e bancos de dados.",
        [
            "Experiência prévia em análise e desenvolvimento de sistemas",
            "Conhecimento em linguagens de programação como Java, C#, Python",
            "Experiência com bancos de dados SQL e NoSQL",
            "Graduação em Ciência da Computação ou áreas relacionadas",
        ],
        "R$ 5.500,00 - R$ 8.000,00",
        "2024-03-03",
        "2024-03-24"
    ),
    new Vaga(
        18,
        "Analista de Suporte de Redes",
        "Networking Solutions",
        "Belém, PA",
        "Estamos em busca de um analista de suporte de redes para fornecer suporte técnico a redes de computadores. O candidato ideal terá conhecimento em redes e habilidades de solução de problemas.",
        [
            "Experiência prévia em suporte de redes",
            "Conhecimento em protocolos de rede como TCP/IP, DNS, DHCP",
            "Familiaridade com equipamentos de rede como roteadores e switches",
            "Capacidade de solucionar problemas de forma eficaz",
        ],
        "R$ 4.000,00 - R$ 6.000,00",
        "2024-03-02",
        "2024-03-23"
    ),
    new Vaga(
        19,
        "Assistente de Marketing",
        "Marketing360",
        "Porto Alegre, RS",
        "Procuramos um assistente de marketing para auxiliar na implementação de estratégias de marketing. O candidato ideal terá habilidades organizacionais e interesse em aprender sobre marketing digital.",
        [
            "Habilidade organizacional",
            "Interesse em aprender sobre marketing digital",
            "Boas habilidades de comunicação e trabalho em equipe",
            "Graduação em Marketing, Publicidade ou áreas relacionadas (desejável)",
        ],
        "R$ 2.500,00 - R$ 3.500,00",
        "2024-03-01",
        "2024-03-22"
    ),
    new Vaga(
        20,
        "Atendente de Restaurante",
        "Gastronomia Gourmet",
        "São Paulo, SP",
        "Estamos em busca de um atendente de restaurante para fornecer um excelente serviço aos clientes. O candidato ideal terá experiência em atendimento ao cliente e disponibilidade para trabalhar em turnos.",
        [
            "Experiência prévia em atendimento ao cliente",
            "Disponibilidade para trabalhar em turnos (incluindo finais de semana)",
            "Boas habilidades de comunicação e capacidade de trabalhar em equipe",
            "Desejo de proporcionar uma experiência positiva aos clientes",
        ],
        "R$ 1.500,00 - R$ 2.000,00",
        "2024-02-29",
        "2024-03-21"
    ),
    new Vaga(
        21,
        "Auxiliar Administrativo",
        "Administradora Alpha",
        "Curitiba, PR",
        "Procuramos um auxiliar administrativo para realizar tarefas administrativas diversas. O candidato ideal terá habilidades organizacionais e conhecimento em softwares de escritório.",
        [
            "Habilidade organizacional",
            "Conhecimento em softwares de escritório (por exemplo, Microsoft Office)",
            "Boas habilidades de comunicação e capacidade de multitarefa",
            "Graduação em Administração ou áreas relacionadas (desejável)",
        ],
        "R$ 2.000,00 - R$ 2.500,00",
        "2024-02-28",
        "2024-03-20"
    ),
    new Vaga(
        22,
        "Contador",
        "Contabilidade Profissional",
        "Belo Horizonte, MG",
        "Estamos em busca de um contador para realizar atividades contábeis, fiscais e financeiras. O candidato ideal terá experiência em contabilidade e conhecimento das leis tributárias.",
        [
            "Experiência prévia em contabilidade",
            "Conhecimento das leis tributárias",
            "Habilidade analítica e atenção aos detalhes",
            "Formação em Ciências Contábeis ou áreas relacionadas",
        ],
        "R$ 4.000,00 - R$ 6.000,00",
        "2024-02-27",
        "2024-03-19"
    ),
    new Vaga(
        23,
        "Enfermeiro(a)",
        "Hospital Esperança",
        "Recife, PE",
        "Procuramos um(a) enfermeiro(a) para fornecer cuidados de enfermagem a pacientes. O candidato ideal terá formação em Enfermagem e registro ativo no conselho de classe.",
        [
            "Formação em Enfermagem",
            "Registro ativo no conselho de classe (COREN)",
            "Habilidade em cuidados de enfermagem",
            "Capacidade de trabalhar em equipe e sob pressão",
        ],
        "R$ 3.500,00 - R$ 5.500,00",
        "2024-02-26",
        "2024-03-18"
    ),
    new Vaga(
        24,
        "Consultor(a) de Vendas",
        "Vendas & Marketing Ltda.",
        "Fortaleza, CE",
        "Estamos buscando um(a) consultor(a) de vendas para prospectar clientes e fechar negócios. O candidato ideal terá experiência em vendas e habilidades de comunicação persuasiva.",
        [
            "Experiência prévia em vendas",
            "Habilidades de comunicação e negociação",
            "Orientado(a) para resultados e metas",
            "Capacidade de trabalhar de forma independente e em equipe",
        ],
        "R$ 3.000,00 - R$ 5.000,00",
        "2024-02-25",
        "2024-03-17"
    ),
    new Vaga(
        25,
        "Professor(a) de Matemática",
        "Escola Alpha",
        "Porto Velho, RO",
        "Procuramos um(a) professor(a) de Matemática para lecionar para alunos do ensino médio. O candidato ideal terá formação na área e capacidade de transmitir conhecimento de forma clara e didática.",
        [
            "Formação em Matemática ou áreas relacionadas",
            "Experiência em lecionar para alunos do ensino médio (desejável)",
            "Boas habilidades de comunicação e didática",
            "Capacidade de planejar e executar aulas",
        ],
        "R$ 2.800,00 - R$ 4.500,00",
        "2024-02-24",
        "2024-03-16"
    ),
    new Vaga(
        26,
        "Analista de RH",
        "Recursos Humanos & Co.",
        "Manaus, AM",
        "Estamos em busca de um(a) analista de recursos humanos para realizar atividades de recrutamento, seleção e treinamento. O candidato ideal terá experiência na área e habilidades de comunicação interpessoal.",
        [
            "Experiência prévia em recrutamento e seleção",
            "Conhecimento em técnicas de entrevista e avaliação de candidatos",
            "Habilidades de comunicação e empatia",
            "Graduação em Administração, Psicologia ou áreas relacionadas",
        ],
        "R$ 3.500,00 - R$ 5.000,00",
        "2024-02-23",
        "2024-03-15"
    ),
    new Vaga(
        27,
        "Jornalista",
        "Jornal da Cidade",
        "Campinas, SP",
        "Procuramos um(a) jornalista para realizar reportagens, entrevistas e redigir matérias jornalísticas. O candidato ideal terá formação em Jornalismo e capacidade de apuração de informações.",
        [
            "Formação em Jornalismo ou Comunicação Social",
            "Experiência em redação jornalística",
            "Habilidade de apuração de informações e redação",
            "Conhecimento em ferramentas de edição de texto",
        ],
        "R$ 3.000,00 - R$ 4.500,00",
        "2024-02-22",
        "2024-03-14"
    ),
    new Vaga(
        28,
        "Gerente de Restaurante",
        "Culinária Saborosa",
        "Salvador, BA",
        "Procuramos um gerente de restaurante para supervisionar as operações diárias e garantir a satisfação dos clientes. O candidato ideal terá experiência em gestão de equipe e conhecimento em serviços de alimentação.",
        [
            "Experiência prévia em gerenciamento de restaurante",
            "Conhecimento em operações de restaurantes e serviços de alimentação",
            "Habilidades de liderança e gestão de equipe",
            "Capacidade de resolver problemas e lidar com situações sob pressão",
        ],
        "R$ 4.500,00 - R$ 7.000,00",
        "2024-02-21",
        "2024-03-13"
    ),
    new Vaga(
        29,
        "Engenheiro(a) Ambiental",
        "AmbientalTech",
        "Brasília, DF",
        "Estamos em busca de um(a) engenheiro(a) ambiental para desenvolver projetos de preservação e recuperação ambiental. O candidato ideal terá formação em Engenharia Ambiental e conhecimento em legislação ambiental.",
        [
            "Formação em Engenharia Ambiental",
            "Conhecimento em legislação ambiental e normas regulamentadoras",
            "Experiência em projetos de preservação e recuperação ambiental",
            "Habilidade de análise e resolução de problemas ambientais",
        ],
        "R$ 5.000,00 - R$ 8.000,00",
        "2024-02-20",
        "2024-03-12"
    ),
    new Vaga(
        30,
        "Analista de Logística",
        "Logística Eficiente Ltda.",
        "São Paulo, SP",
        "Procuramos um(a) analista de logística para coordenar e otimizar as operações de transporte e distribuição. O candidato ideal terá experiência em logística e conhecimento em sistemas de gestão de estoque.",
        [
            "Experiência prévia em análise de logística",
            "Conhecimento em sistemas de gestão de estoque",
            "Habilidades analíticas e capacidade de resolver problemas",
            "Graduação em Logística, Administração ou áreas relacionadas",
        ],
        "R$ 3.500,00 - R$ 6.000,00",
        "2024-02-19",
        "2024-03-11"
    )
]