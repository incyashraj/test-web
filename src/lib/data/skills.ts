import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import svelte from '../md/svelte.md?raw';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Procurement Tools', slug: 'procurement-tools' }),
	defineSkillCategory({ name: 'Analytics & BI', slug: 'analytics' }),
	defineSkillCategory({ name: 'ERP Systems', slug: 'erp' }),
	defineSkillCategory({ name: 'Procurement Skills', slug: 'procurement-skills' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const items = [
	defineSkill({
		slug: 'sap',
		color: 'blue',
		description: 'Enterprise resource planning system used for procurement, supply chain, and financial management.',
		logo: Assets.Unknown,
		name: 'SAP',
		category: 'erp'
	}),
	defineSkill({
		slug: 'oracle',
		color: 'red',
		description: 'Oracle ERP system for managing procurement, supplier relationships, and business operations.',
		logo: Assets.Unknown,
		name: 'Oracle',
		category: 'erp'
	}),
	defineSkill({
		slug: 'power-bi',
		color: 'yellow',
		description: 'Business intelligence and analytics platform for creating dashboards and reports.',
		logo: Assets.Unknown,
		name: 'Power BI',
		category: 'analytics'
	}),
	defineSkill({
		slug: 'tableau',
		color: 'orange',
		description: 'Data visualization and business intelligence tool for analytics and reporting.',
		logo: Assets.Unknown,
		name: 'Tableau',
		category: 'analytics'
	}),
	defineSkill({
		slug: 'sql',
		color: 'blue',
		description: 'Database query language for data analysis and reporting.',
		logo: Assets.Unknown,
		name: 'SQL',
		category: 'analytics'
	}),
	defineSkill({
		slug: 'gep-smart',
		color: 'green',
		description: 'Cloud-native procurement software platform for sourcing and contract management.',
		logo: Assets.Unknown,
		name: 'GEP Smart',
		category: 'procurement-tools'
	}),
	defineSkill({
		slug: 'jaggaer',
		color: 'purple',
		description: 'Enterprise procurement platform for spend management and supplier collaboration.',
		logo: Assets.Unknown,
		name: 'Jaggaer',
		category: 'procurement-tools'
	}),
	defineSkill({
		slug: 'ivalua',
		color: 'blue',
		description: 'Cloud-based spend management platform for procurement and supplier management.',
		logo: Assets.Unknown,
		name: 'Ivalua',
		category: 'procurement-tools'
	}),
	defineSkill({
		slug: 'coupa',
		color: 'red',
		description: 'Business spend management platform for procurement, invoicing, and expense management.',
		logo: Assets.Unknown,
		name: 'Coupa',
		category: 'procurement-tools'
	}),
	defineSkill({
		slug: 'ariba',
		color: 'orange',
		description: 'SAP Ariba procurement platform for supplier collaboration and spend management.',
		logo: Assets.Unknown,
		name: 'Ariba',
		category: 'procurement-tools'
	}),
	defineSkill({
		slug: 'negotiation',
		color: 'green',
		description: 'Expert in contract negotiations, supplier discussions, and achieving favorable terms.',
		logo: Assets.Unknown,
		name: 'Negotiation',
		category: 'procurement-skills'
	}),
	defineSkill({
		slug: 'cost-modeling',
		color: 'blue',
		description: 'Should-cost modeling and total cost of ownership (TCO) analysis for procurement decisions.',
		logo: Assets.Unknown,
		name: 'Cost Modeling',
		category: 'procurement-skills'
	}),
	defineSkill({
		slug: 'rfx',
		color: 'purple',
		description: 'RFI, RFQ, and RFP processes for supplier selection and bid evaluation.',
		logo: Assets.Unknown,
		name: 'RFx Process',
		category: 'procurement-skills'
	}),
	defineSkill({
		slug: 'supplier-management',
		color: 'red',
		description: 'Supplier relationship management, qualification, performance tracking, and risk management.',
		logo: Assets.Unknown,
		name: 'Supplier Management',
		category: 'procurement-skills'
	}),
	defineSkill({
		slug: 'contract-management',
		color: 'orange',
		description: 'Contract lifecycle management including SOWs, SLAs, renewals, and compliance tracking.',
		logo: Assets.Unknown,
		name: 'Contract Management',
		category: 'procurement-skills'
	}),
	defineSkill({
		slug: 'procurement',
		color: 'blue',
		description: 'End-to-end procurement processes including sourcing, purchasing, and vendor management.',
		logo: Assets.Unknown,
		name: 'Strategic Procurement',
		category: 'procurement-skills'
	}),
	defineSkill({
		slug: 'tco-analysis',
		color: 'green',
		description: 'Total Cost of Ownership analysis for evaluating long-term value and cost optimization.',
		logo: Assets.Unknown,
		name: 'TCO Analysis',
		category: 'procurement-skills'
	}),
	defineSkill({
		slug: 'logistics',
		color: 'yellow',
		description: 'Transportation, warehousing, and 3PL vendor management for supply chain operations.',
		logo: Assets.Unknown,
		name: 'Logistics Management',
		category: 'procurement-skills'
	}),
	defineSkill({
		slug: 'vendor-management',
		color: 'purple',
		description: 'Vendor onboarding, performance tracking, and relationship management.',
		logo: Assets.Unknown,
		name: 'Vendor Management',
		category: 'procurement-skills'
	}),
	defineSkill({
		slug: 'contract-negotiation',
		color: 'red',
		description: 'Negotiating contracts, terms, and SLAs with suppliers and service providers.',
		logo: Assets.Unknown,
		name: 'Contract Negotiation',
		category: 'procurement-skills'
	})
] as const;

export const title = 'Skills';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};
