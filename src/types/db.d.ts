export type Card = {
	id: string;
	description: string;
};

export type List = {
	id: string;
	title: string;
	cards: Card[];
};

export type Board = {
	id: string;
	title: string;
	lists: List[];
};

type Position = string | {
	lat:string,
	lng:string
} 

export type Userr = {
	id?: string;
	organizer:string,
	username:string;
	github:string;
	twitter:string;
	linkedin:string;
	email:string;
	location?:Position
};

export interface NewSvelteEvent {
	organizer:string,
	date:Date,
	location?:Position,
	attendees?:string[]
}

export interface SvelteEvent extends NewSvelteEvent {
	id:string,
	attendees:string[]
}
