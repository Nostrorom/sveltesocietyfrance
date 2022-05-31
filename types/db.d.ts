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

export type User = {
	id?: string;
	organizer:string,
	username:string;
	github:string;
	twitter:string;
	linkedin:string;
	email:string;
	location?:Position
};

export interface newEvent {
	organizer:string,
	date:Date,
	location?:Position,
	attendees?:string[]
}

export interface Event extends newEvent {
	id:string,
	attendees:string[]
}
