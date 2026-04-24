



import React from "react";

type Skill = {
	name: string;
	icon: React.ReactNode;
	description: string;
	level: string;
};

type SkillGroup = {
	title: string;
	skills: Skill[];
};

// Ícones simples usando Heroicons ou SVG inline para evitar dependências extras
const icons = {
	js: (
		<svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-yellow-400" aria-hidden="true"><path d="M2 2h20v20H2V2z" fill="#F7DF1E"/><path d="M17.1 17.7c-.3.6-.7 1.1-1.5 1.1-.8 0-1.3-.4-1.3-1.1 0-.7.4-1 1.4-1.4l.5-.2c1.5-.6 2.2-1.3 2.2-2.7 0-1.4-1.1-2.3-2.8-2.3-1.2 0-2.1.4-2.7 1.5l1.5.9c.3-.6.6-.8 1.2-.8.6 0 1 .3 1 .8 0 .6-.3.8-1.2 1.2l-.5.2c-1.7.7-2.4 1.4-2.4 2.8 0 1.6 1.2 2.5 2.9 2.5 1.7 0 2.6-.8 3.1-1.8l-1.5-.9zm-7.2.2c-.3.6-.6 1.1-1.4 1.1-.8 0-1.3-.4-1.3-1.1 0-.7.4-1 1.4-1.4l.5-.2c1.5-.6 2.2-1.3 2.2-2.7 0-1.4-1.1-2.3-2.8-2.3-1.2 0-2.1.4-2.7 1.5l1.5.9c.3-.6.6-.8 1.2-.8.6 0 1 .3 1 .8 0 .6-.3.8-1.2 1.2l-.5.2c-1.7.7-2.4 1.4-2.4 2.8 0 1.6 1.2 2.5 2.9 2.5 1.7 0 2.6-.8 3.1-1.8l-1.5-.9z" fill="#222"/></svg>
	),
	ts: (
		<svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-blue-400" aria-hidden="true"><rect width="24" height="24" rx="4" fill="#3178C6"/><path d="M7.5 9.5h9m-4.5 0v7m-4.5 0h9" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/></svg>
	),
	react: (
		<svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-cyan-400" aria-hidden="true"><circle cx="12" cy="12" r="10" stroke="#06b6d4" strokeWidth="2"/><ellipse cx="12" cy="12" rx="7" ry="3" stroke="#06b6d4" strokeWidth="2"/><ellipse cx="12" cy="12" rx="3" ry="7" stroke="#06b6d4" strokeWidth="2"/><circle cx="12" cy="12" r="1.5" fill="#06b6d4"/></svg>
	),
	next: (
		<svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white" aria-hidden="true"><rect width="24" height="24" rx="4" fill="#000"/><path d="M7 7h2v10H7V7zm4.5 0h2v10h-2V7zm4.5 0h2v10h-2V7z" fill="#fff"/></svg>
	),
	tailwind: (
		<svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-cyan-400" aria-hidden="true"><path d="M12 6c-2.7 0-4.2 1.3-4.5 3.8.9-1.3 2-1.8 3.3-1.8 1.1 0 2 .4 2.7 1.2.7.8 1.5 1.2 2.5 1.2 1.7 0 2.7-.8 3-2.5-.9 1.3-2 1.8-3.3 1.8-1.1 0-2-.4-2.7-1.2C13.8 6.4 13 6 12 6zm-4.5 6c-2.7 0-4.2 1.3-4.5 3.8.9-1.3 2-1.8 3.3-1.8 1.1 0 2 .4 2.7 1.2.7.8 1.5 1.2 2.5 1.2 1.7 0 2.7-.8 3-2.5-.9 1.3-2 1.8-3.3 1.8-1.1 0-2-.4-2.7-1.2C9.8 12.4 9 12 8 12z" fill="#06b6d4"/></svg>
	),
	ux: (
		<svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-pink-400" aria-hidden="true"><circle cx="12" cy="12" r="10" stroke="#ec4899" strokeWidth="2"/><path d="M8 15c1.5-2 6.5-2 8 0" stroke="#ec4899" strokeWidth="2" strokeLinecap="round"/><circle cx="9" cy="10" r="1" fill="#ec4899"/><circle cx="15" cy="10" r="1" fill="#ec4899"/></svg>
	),
	responsive: (
		<svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-cyan-300" aria-hidden="true"><rect x="3" y="7" width="18" height="10" rx="2" stroke="#67e8f9" strokeWidth="2"/><rect x="7" y="15" width="10" height="2" rx="1" fill="#67e8f9"/></svg>
	),
	python: (
		<svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-yellow-300" aria-hidden="true"><rect width="24" height="24" rx="4" fill="#222"/><path d="M7 12c0-2.2 1.8-4 4-4h6V6c0-2.2-1.8-4-4-4H7C4.8 2 3 3.8 3 6v4h4zm10 0c0 2.2-1.8 4-4 4H7v2c0 2.2 1.8 4 4 4h6c2.2 0 4-1.8 4-4v-4h-4z" fill="#facc15"/></svg>
	),
	node: (
		<svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-green-400" aria-hidden="true"><rect width="24" height="24" rx="4" fill="#222"/><path d="M12 2l9.5 5.5v9L12 22l-9.5-5.5v-9L12 2zm0 2.2L4.5 7v8.1l7.5 4.3 7.5-4.3V7L12 4.2z" fill="#22c55e"/></svg>
	),
	postgres: (
		<svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-blue-300" aria-hidden="true"><rect width="24" height="24" rx="4" fill="#222"/><ellipse cx="12" cy="12" rx="7" ry="9" stroke="#60a5fa" strokeWidth="2"/><ellipse cx="12" cy="12" rx="3" ry="5" stroke="#60a5fa" strokeWidth="2"/></svg>
	),
	postman: (
		<svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-orange-400" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#222"/><circle cx="12" cy="12" r="6" fill="#fb923c"/></svg>
	),
	aws: (
		<svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-yellow-400" aria-hidden="true"><rect width="24" height="24" rx="4" fill="#222"/><path d="M6 18l6-12 6 12H6z" fill="#facc15"/></svg>
	),
	github: (
		<svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#222"/><path d="M12 17c-2.8 0-5-2.2-5-5 0-2.2 1.5-4 3.5-4.7.3-.1.5.1.5.4v1.1c-1.4-.3-1.7.7-1.7.7-.3.7-.7.9-.7.9-.6.4.1.4.1.4.7 0 1.1.7 1.1.7.6 1.1 1.6.8 2 .6.1-.4.2-.8.4-1-.9-.1-1.8-.5-1.8-2.1 0-.5.2-.9.5-1.2-.1-.1-.2-.4 0-.8 0 0 .4-.1 1.2.5.4-.1.8-.2 1.2-.2s.8.1 1.2.2c.8-.6 1.2-.5 1.2-.5.2.4.1.7 0 .8.3.3.5.7.5 1.2 0 1.6-.9 2-1.8 2.1.2.2.4.6.4 1v1.5c0 .3.2.5.5.4C15.5 13 17 14.8 17 17c0 2.8-2.2 5-5 5z" fill="#fff"/></svg>
	),
	figma: (
		<svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-pink-400" aria-hidden="true"><rect width="24" height="24" rx="4" fill="#222"/><circle cx="9" cy="8" r="3" fill="#ec4899"/><circle cx="15" cy="8" r="3" fill="#f472b6"/><circle cx="9" cy="14" r="3" fill="#a21caf"/><circle cx="15" cy="14" r="3" fill="#f9a8d4"/></svg>
	),
	api: (
		<svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-cyan-200" aria-hidden="true"><rect width="24" height="24" rx="4" fill="#222"/><rect x="7" y="7" width="10" height="10" rx="2" stroke="#67e8f9" strokeWidth="2"/></svg>
	),
	script: (
		<svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-yellow-200" aria-hidden="true"><rect width="24" height="24" rx="4" fill="#222"/><path d="M7 17h10M7 13h10M7 9h10" stroke="#fde68a" strokeWidth="2"/></svg>
	),
	deploy: (
		<svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-cyan-400" aria-hidden="true"><rect width="24" height="24" rx="4" fill="#222"/><path d="M12 7v10m0 0l-4-4m4 4l4-4" stroke="#06b6d4" strokeWidth="2"/></svg>
	),
	performance: (
		<svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-green-300" aria-hidden="true"><rect width="24" height="24" rx="4" fill="#222"/><path d="M12 7v5l3 3" stroke="#86efac" strokeWidth="2"/></svg>
	),
	accessibility: (
		<svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-blue-200" aria-hidden="true"><rect width="24" height="24" rx="4" fill="#222"/><circle cx="12" cy="10" r="2" fill="#60a5fa"/><path d="M12 12v4m-2-2h4" stroke="#60a5fa" strokeWidth="2"/></svg>
	),
};

const mainFrontendStack: SkillGroup = {
	title: "Stack principal de Frontend",
	skills: [
		{
			name: "JavaScript",
			icon: icons.js,
			description: "ES6+, lógica, DOM, SPA.",
			level: "Avançado",
		},
		{
			name: "TypeScript",
			icon: icons.ts,
			description: "Tipagem, segurança e escalabilidade.",
			level: "Avançado",
		},
		{
			name: "React",
			icon: icons.react,
			description: "Componentização, hooks e interfaces reativas.",
			level: "Avançado",
		},
		{
			name: "Next.js",
			icon: icons.next,
			description: "SSR, rotas, otimização e SEO.",
			level: "Avançado",
		},
		{
			name: "Tailwind CSS",
			icon: icons.tailwind,
			description: "Design system, utilitários e responsividade.",
			level: "Avançado",
		},
		{
			name: "UI/UX",
			icon: icons.ux,
			description: "Experiência do usuário, prototipação e usabilidade.",
			level: "Projetos práticos",
		},
		{
			name: "Responsividade",
			icon: icons.responsive,
			description: "Mobile-first, grids e breakpoints.",
			level: "Avançado",
		},
	],
};

const complementaryGroups: SkillGroup[] = [
	{
		title: "Automação",
		skills: [
			{
				name: "Python",
				icon: icons.python,
				description: "Scripts, automação e integração.",
				level: "Intermediário",
			},
			{
				name: "APIs",
				icon: icons.api,
				description: "Consumo e integração de serviços.",
				level: "Intermediário",
			},
			{
				name: "Scripts",
				icon: icons.script,
				description: "Automação de tarefas e rotinas.",
				level: "Intermediário",
			},
		],
	},
	{
		title: "Backend & Dados",
		skills: [
			{
				name: "Node.js",
				icon: icons.node,
				description: "APIs REST, integração e scripts.",
				level: "Intermediário",
			},
			{
				name: "PostgreSQL",
				icon: icons.postgres,
				description: "Modelagem, queries e dados relacionais.",
				level: "Intermediário",
			},
			{
				name: "Postman",
				icon: icons.postman,
				description: "Testes e documentação de APIs.",
				level: "Intermediário",
			},
		],
	},
	{
		title: "Cloud & Versionamento",
		skills: [
			{
				name: "AWS",
				icon: icons.aws,
				description: "Deploy, S3, Lambda e integrações.",
				level: "Básico",
			},
			{
				name: "Git/GitHub",
				icon: icons.github,
				description: "Controle de versão e colaboração.",
				level: "Avançado",
			},
			{
				name: "Deploy",
				icon: icons.deploy,
				description: "CI/CD, automação e publicação.",
				level: "Intermediário",
			},
		],
	},
	{
		title: "Design & Qualidade",
		skills: [
			{
				name: "Figma",
				icon: icons.figma,
				description: "Prototipação e design de interfaces.",
				level: "Projetos práticos",
			},
			{
				name: "Performance",
				icon: icons.performance,
				description: "Otimização e boas práticas.",
				level: "Projetos práticos",
			},
			{
				name: "Acessibilidade",
				icon: icons.accessibility,
				description: "Inclusão e usabilidade.",
				level: "Projetos práticos",
			},
		],
	},
];

function SkillLine({ skill }: { skill: Skill }) {
	return (
		<li
			className="flex items-start gap-3 py-2 px-2 rounded-md transition-colors group hover:bg-cyan-900/10 hover:translate-x-1"
		>
			<span className="mt-1 shrink-0">{skill.icon}</span>
			<div className="flex-1">
				<div className="flex items-center gap-2">
					<span className="font-semibold text-cyan-200 text-base">{skill.name}</span>
					<span className="ml-2 px-2 py-0.5 rounded bg-cyan-900/60 text-cyan-200 text-xs font-medium border border-cyan-700/40">
						{skill.level}
					</span>
				</div>
				<div className="text-sm text-cyan-100/80">{skill.description}</div>
			</div>
		</li>
	);
}

function SkillGroupBlock({ group, strong }: { group: SkillGroup; strong?: boolean }) {
	return (
		<div
			className={
				strong
					? "rounded-2xl border border-cyan-700/60 bg-gradient-to-b from-cyan-950/80 to-cyan-900/60 shadow-lg shadow-cyan-900/10 p-6 md:p-8 mb-10"
					: "rounded-xl border border-cyan-800/30 bg-cyan-950/40 p-4 md:p-6 mb-6"
			}
			style={{
				transition: "box-shadow 0.3s, border-color 0.3s",
			}}
		>
			<h3 className={strong ? "text-xl md:text-2xl font-bold text-cyan-100 mb-4" : "text-lg font-semibold text-cyan-200 mb-3"}>
				{group.title}
			</h3>
			<ul className="divide-y divide-cyan-800/30">
				{group.skills.map((skill) => (
					<SkillLine key={skill.name} skill={skill} />
				))}
			</ul>
		</div>
	);
}

const SkillsSection: React.FC = () => {
	return (
		<section
			id="skills"
			className="max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-28"
			aria-labelledby="skills-title"
		>
			<header className="text-center mb-14">
				<h2
					id="skills-title"
					className="text-3xl md:text-5xl font-extrabold text-cyan-100 mb-4"
				>
					Minhas Habilidades
				</h2>
				<p className="text-cyan-200/80 text-lg md:text-xl max-w-2xl mx-auto">
					Stack técnica que utilizo para criar interfaces modernas, responsivas e aplicações web profissionais.
				</p>
			</header>

			<SkillGroupBlock group={mainFrontendStack} strong />

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				{complementaryGroups.map((group) => (
					<SkillGroupBlock key={group.title} group={group} />
				))}
			</div>
		</section>
	);
};

export default SkillsSection;




