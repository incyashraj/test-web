import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Masters in Global Supply Chain Management (STEM)',
		description: 'Awarded Scholarship for excellence in supply chain management studies.',
		location: 'West Lafayette, USA',
		logo: Assets.Unknown,
		name: 'Purdue University',
		organization: 'Daniels School of Business',
		period: { from: new Date(2024, 7, 1), to: new Date(2025, 11, 1) },
		shortDescription: 'STEM Masters program focused on global supply chain management',
		slug: 'purdue-mscm',
		subjects: ['Supply Chain Strategy', 'Procurement', 'Operations Management', 'Analytics', 'Logistics', 'Strategic Sourcing']
	},
	{
		degree: 'Bachelors in Textile Technology',
		description: 'Undergraduate degree in Textile Technology from University of Mumbai.',
		location: 'Mumbai, India',
		logo: Assets.Unknown,
		name: 'VJTI',
		organization: 'University of Mumbai',
		period: { from: new Date(2015, 3, 1), to: new Date(2019, 3, 1) },
		shortDescription: 'Bachelor degree in Textile Technology',
		slug: 'vjti-textile',
		subjects: ['Textile Engineering', 'Manufacturing', 'Quality Control', 'Materials Science', 'Process Management']
	}
];

export const title = 'Education';
