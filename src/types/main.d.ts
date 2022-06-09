export type Link = {
	name: string;
	href: string;
	alt?: string;
	out?: boolean;
};

export type MenuSection = { title: string; links: Link[] };

export type Menu = MenuSection[];
