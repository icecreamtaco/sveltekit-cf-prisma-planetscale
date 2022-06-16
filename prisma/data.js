export const projectTypes = [
	{
		name: 'Level 1: Open Source Starter Grant',
		fundingStream: 'Developer Grants',
		maxFunding: '$5k',
		redirectUrl: 'http://localhost:5555/',
		color: '#9F7AEA',
		order: 1
	},
	{
		name: 'Level 2: Open Source Builder Grant',
		fundingStream: 'Developer Grants',
		maxFunding: '$50k',
		redirectUrl: 'http://localhost:5555/',
		color: '#9F7AEA',
		order: 2
	},
	{
		name: 'Level 3: Open Source MVP Grant',
		fundingStream: 'Developer Grants',
		maxFunding: '$250k',
		redirectUrl: 'http://localhost:5555/',
		color: '#9F7AEA',
		order: 3
	},
	{
		name: 'Stacks Community Builder Grant',
		fundingStream: 'Community Grants',
		maxFunding: 'Varies',
		redirectUrl: 'http://localhost:5555/',
		color: '#ED8936',
		order: 1
	},
	{
		name: 'Stacks Education Grant',
		fundingStream: 'Community Grants',
		maxFunding: 'Varies',
		redirectUrl: 'http://localhost:5555/',
		color: '#ED8936',
		order: 2
	},
	{
		name: 'Stacks Event Grant',
		fundingStream: 'Community Grants',
		maxFunding: 'Varies',
		redirectUrl: 'http://localhost:5555/',
		color: '#ED8936',
		order: 3
	},
	{
		name: 'Stacks Chapter Grant (by region)',
		fundingStream: 'Community Grants',
		maxFunding: 'Varies',
		redirectUrl: 'http://localhost:5555/',
		color: '#ED8936',
		order: 4
	},
	{
		name: 'ALEX (DeFi) Grant',

		fundingStream: 'Ecosystem Partner Grant',
		maxFunding: 'Varies',
		redirectUrl: 'http://localhost:5555/',
		color: '#0BC5EA',
		order: 1
	},
	{
		name: 'Stacks Foundation Resident Program',
		fundingStream: 'Advanced Support',
		maxFunding: 'Varies',
		redirectUrl: 'http://localhost:5555/',
		color: '#48BB78',
		order: 1
	},
	{
		name: 'Stacks Foundation Direct Investment',
		fundingStream: 'Advanced Support',
		maxFunding: 'Varies',
		redirectUrl: 'http://localhost:5555/',
		color: '#48BB78',
		order: 2
	},
	{
		name: 'Stacks Web3 Starter Lab',
		fundingStream: 'Affiliated Organisation',
		maxFunding: 'Varies',
		redirectUrl: 'http://localhost:5555/',
		color: '#ED64A6',
		order: 1
	},
	{
		name: 'Stacks Accelerator',
		fundingStream: 'Affiliated Organisation',
		maxFunding: 'Varies',
		redirectUrl: 'http://localhost:5555/',
		color: '#ED64A6',
		order: 2
	}
];

export const projectQuestion = [
	{
		name: 'Stacks Protocol',
		description:
			'Blockchain Explorations & Improvements;AppChain Explorations and Improvements;API explorations and Improvements;Node Deployment and Decentralization;Stacks Mining;Other',
		group: 'track',
		order: 1
	},
	{
		name: 'Stacks Interface',
		description:
			'Decentralized Identification;HyperChain Explorations and Improvements;Browser Extension & Mobile App Explorations;IoT Explorations;Wallets;On-Chain Analytics & Explorers',
		group: 'track',
		order: 2
	},
	{
		name: 'Stacks dApps & Clarity',
		description:
			'Clarity Improvements;SIP Development;Smart Contract Templates;DeFi / DAO / NFT / Gaming dApps;Supply Chain & Smart City dApps;Other;',
		group: 'track',
		order: 3
	},
	{
		name: 'Stacks Education & Community',
		description:
			'Tutorials and Documentation;Videos and Workshops;Governance Initiatives;Education Initiatives;Marketing Initiatives;Marketing Initiatives;Other;',
		group: 'track',
		order: 4
	},
	{
		name: 'Stacks Developer Experience',
		description:
			'Tooling;Software Development Kits;Libraries;Faucets / Testing / Benchmarking;Other',
		group: 'track',
		order: 5
	},
	{
		name: 'Stacks User Experience',
		description:
			'UX/UI Research;Speculative Design Case Studies;Prototype Design;Design Systems;Frontend Component Libraries;Other',
		group: 'track',
		order: 6
	},
	{
		name: 'Cross-Chain & Off-Chain',
		description:
			'Gaia Improvements;Decentralized Storage Integrations;Oralces & Bridges;EVM / ENS Integrations;Fiat On- and Fiat Off-Ramps;Other',
		group: 'track',
		order: 7
	},
	{
		name: 'Bitcoin Utility via Stacks',
		description:
			'DLC-Clarity Explorations;BTC-STX Wallets;BTC-Native Stacks Transactions;BTC/STX On-Chain Analysis Tools;Other',
		group: 'track',
		order: 8
	},
	{
		name: 'Create New Technology',
		group: 'goals',
		order: 1
	},
	{
		name: 'Improve Existing Technologies',
		group: 'goals',
		order: 2
	},
	{
		name: 'Integrate Between Technologies',
		group: 'goals',
		order: 3
	},
	{
		name: 'Strengthen Community',
		group: 'goals',
		order: 4
	},
	{
		name: 'Other',
		group: 'goals',
		order: 5
	},
	{
		name: 'Developers',
		group: 'audience',
		order: 1
	},
	{
		name: 'Miners & Validators',
		group: 'audience',
		order: 2
	},
	{
		name: 'Consumer End Users',
		group: 'audience',
		order: 3
	},
	{
		name: 'Business End Users',
		group: 'audience',
		order: 4
	},
	{
		name: 'Other',
		group: 'audience',
		order: 5
	},
	{
		name: 'Fully Open Source',
		group: 'opensource',
		order: 1
	},
	{
		name: 'Partially Open Source',
		group: 'opensource',
		order: 2
	},
	{
		name: 'Not Open Source',
		group: 'opensource',
		order: 1
	},
	{
		name: 'Title Your Project',
		group: 'overview',
		order: 1
	},
	{
		name: 'Total Project Budget',
		group: 'overview',
		order: 2
	},
	{
		name: 'Total Project Duration',
		group: 'overview',
		order: 3
	},
	{
		name: 'Milestone 1',
		group: 'deliverables',
		order: 1
	},
	{
		name: 'Milestone 2',
		group: 'deliverables',
		order: 2
	},
	{
		name: 'Milestone 3',
		group: 'deliverables',
		order: 3
	},
	{
		name: 'Milestone 4',
		group: 'deliverables',
		order: 4
	},
	{
		name: 'Milestone 5',
		group: 'deliverables',
		order: 5
	},
	{
		name: 'Milestone 6',
		group: 'deliverables',
		order: 6
	},
	{
		name: 'Milestone 7',
		group: 'deliverables',
		order: 7
	},
	{
		name: 'Milestone 8',
		group: 'deliverables',
		order: 8
	},
	{
		name: 'Milestone 9',
		group: 'deliverables',
		order: 9
	},
	{
		name: 'Milestone 10',
		group: 'deliverables',
		order: 10
	},
	{
		name: 'Final Deliverable',
		group: 'deliverables',
		order: 11
	},
	{
		name: 'Support Link 1 (http://)',
		group: 'links',
		order: 1
	},
	{
		name: 'Support Link 1 (Description)',
		group: 'links',
		order: 2
	},
	{
		name: 'Support Link 2 (http://)',
		group: 'links',
		order: 3
	},
	{
		name: 'Support Link 2 (Description)',
		group: 'links',
		order: 4
	}
];
