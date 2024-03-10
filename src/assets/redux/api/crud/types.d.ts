/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
export namespace CRUD {
	type GetCrudRequest = void;
	type GetCrudRsponse = {
		id: Key | null | undefined;
		_id?: number;
		name: string;
		img: string;
		price: number;
	}[];

	//!Post
	type CreateCrudRequest = {
		_id?: number;
		name: string;
		img: string;
		price: number;
	};
	type CreateResponse = {
		_id?: number;
		name: string;
		img: string;
		price: number;
	}[];

	//!Delete
	type DeleteCrudRequest = number
	type DeleteResponse = {
		_id?: number;
		name: string;
		img: string;
		price: number;
	};

	//!Edit
	type UpdateCrudRequest = {
		_id?: number;
		newData: {
			name: string;
			img: string;
			price: number;
		};
	};
	type UpdateResponse = {
		newData: {
			_id?: number;
			name: string;
			img: string;
			price: number;
		};
	};
}
