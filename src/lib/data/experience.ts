import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'doosan-bobcat-sourcing-intern',
		company: 'Doosan Bobcat NA Inc.',
		description: `• Managed 50+ indirect sourcing projects, partnering with global suppliers for office, IT, and infrastructure components, achieving $500K in cost savings under tight deadlines
• Standardized P2P processes, improving transparency, and clearing all delayed supplier payments
• Supported cross-functional teams in procurement plan for CapEx items, improving project completion timelines by 20%
• Cut 30%+ run-rate reduction, $440K+ savings by cancelling redundant spend, rationalizing enterprise licensing`,
		contract: ContractType.Internship,
		type: 'Strategic Sourcing',
		location: 'Bismarck, USA',
		period: { from: new Date(2025, 0, 1), to: new Date(2025, 7, 1) },
		skills: getSkills('sap', 'oracle', 'procurement', 'negotiation', 'cost-modeling'),
		name: 'Sourcing Intern',
		color: 'blue',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Managing indirect sourcing projects and achieving significant cost savings'
	},
	{
		slug: 'enphase-procurement-manager',
		company: 'Enphase Energy',
		description: `• Led a team of 5 (Auditor, Buyer, Analyst, CapEx Buyer, IT Buyer), conducting regular 50+ supplier engagement meetings, performance reviews, and escalation resolution
• Directed 12+ RFQs/RFPs, negotiating multi-million-dollar contracts with suppliers, achieving $10M in cost savings
• Escalation led for 10+ high-risk suppliers, ensuring uninterrupted global supply of switches and networking hardware
• Managed complete $80M CapEx spend for new office/facility setup, sourcing IT, networking, and infrastructure components
• Partnered with engineering and business teams for 8+ new product introductions, influencing component selection and technology sourcing strategy
• Built supplier risk and audit dashboards with 10+ KPIs, improving compliance by 12% and reducing lead times by 16%
• Optimized P2P efficiency from 69% → 99%, saving 4 hrs/day, and redesigned freight forwarder strategy, saving $344K
• Owned end-to-end vendor lifecycle: sourcing, onboarding, contracting, and performance management for 30+ global services suppliers
• Built sourcing playbooks and dashboards, cutting cycle time by 11% and standardizing compliance tracking
• Led Clipper Creek Integration: migrated supplier data and trained 100+ suppliers & 500+ employees on Oracle`,
		contract: ContractType.FullTime,
		type: 'Procurement Management',
		location: 'Bengaluru, India',
		period: { from: new Date(2022, 4, 1), to: new Date(2024, 5, 1) },
		skills: getSkills('oracle', 'power-bi', 'sql', 'rfx', 'supplier-management', 'cost-modeling'),
		name: 'Procurement Manager - Capex, IT, Facilities',
		color: 'green',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Led procurement team and achieved $10M+ in cost savings through strategic sourcing'
	},
	{
		slug: 'trident-it-procurement',
		company: 'Trident Group',
		description: `• Managed indirect procurement of IT $110M+ annually, ensuring 100% contract compliance with OEMs and vendors
• Resolved 150+ warranty claims with finance/legal teams, recovering $280K and improving SLA performance
• Established and implemented IT commodity strategies, driving $10M in savings aligning sourcing plans with business
• Led full contract management lifecycle (SOWs, SLAs, renewals), reducing leakage by 15% and boosting compliance
• Created procurement trackers for spend/contract visibility, delivering $2M savings through improved oversight
• Analysed $25M+ indirect spend and market benchmarks to optimize TCO, uncovering $1M savings opportunities
• Negotiated VMI + payment-term Net 60→90 with top 10 suppliers; DPO +12 days, ~$4M cash unlocked`,
		contract: ContractType.FullTime,
		type: 'IT Procurement',
		location: 'Bhopal, India',
		period: { from: new Date(2020, 1, 1), to: new Date(2022, 3, 1) },
		skills: getSkills('sap', 'contract-management', 'negotiation', 'tco-analysis', 'procurement'),
		name: 'Indirect Procurement - IT (hardware/software) Commodity',
		color: 'red',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Managed $110M+ IT procurement achieving significant cost savings and compliance'
	},
	{
		slug: 'the-weaver-supply-chain',
		company: 'The Weaver',
		description: `• Managed $2M indirect spend on transportation services, warehousing, and 3PL vendors, securing 12% cost reductions while improving service reliability
• Oversaw contract negotiations and vendor onboarding for 8 logistics service providers, ensuring compliance with delivery KPIs (improving on-time delivery rate from 85% → 97%)`,
		contract: ContractType.FullTime,
		type: 'Supply Chain Operations',
		location: 'Mumbai, India',
		period: { from: new Date(2019, 5, 1), to: new Date(2020, 0, 1) },
		skills: getSkills('logistics', 'vendor-management', 'contract-negotiation', 'procurement'),
		name: 'Supply Chain Executive',
		color: 'orange',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Managed logistics and 3PL vendors, achieving 12% cost reduction'
	}
];

export const title = 'Experience';
