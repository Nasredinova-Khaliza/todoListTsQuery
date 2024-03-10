/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { usePostTodoMutation } from "../redux/api/crud";
import TodoItem from "./TodoItem";
import scss from "./TodoList.module.scss";

const TodoList = () => {
	const [name, setName] = useState<string>("");
	const [img, setImg] = useState<string>("");
	const [price, setPrice] = useState<number>(0);
	const [createTodo] = usePostTodoMutation();

	const addTodo = async () => {
		await createTodo({
			name: name,
			img: img,
			price: price,
		});
		setName("");
		setImg("");
		setPrice(0);
	};

	return (
		<>
			<div className={scss.todoList}>
				<h1>Todo list</h1>
				<div className={scss.todoAddInputs}>
					<input
						type="text"
						placeholder="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<input
						type="text"
						placeholder="img"
						value={img}
						onChange={(e) => setImg(e.target.value)}
					/>
					<input
						type="text"
						placeholder="img"
						value={price}
						onChange={(e) => setPrice(+e.target.value)}
					/>
					<button onClick={addTodo}>add</button>
				</div>
			</div>
			<TodoItem />
		</>
	);
};

export default TodoList;
