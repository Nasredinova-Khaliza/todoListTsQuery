import { useState } from "react";
import {
	useDeletTodoMutation,
	useEditTodoMutation,
	useGetTodosQuery,
} from "../redux/api/crud";
import scss from "./TodoItem.module.scss";

const TodoItem = () => {
	const { data, isLoading } = useGetTodosQuery();
	const [deleteTodo] = useDeletTodoMutation();
	const [editTodo] = useEditTodoMutation();
	const [editName, setEditName] = useState("");
	const [editImg, setEditImg] = useState("");
	const [editPrice, setEditPrice] = useState(0);
	const [isOpen, setisOpen] = useState<null | number>(null);
	console.log(data);

	const deleteTodoHandler = async (_id: number) => {
		await deleteTodo(_id);
	};

	const saveEditTodo = async (_id: number) => {
		const newData = {
			name: editName,
			img: editImg,
			price: editPrice,
		};

		await editTodo({
			_id,
			newData,
		});
		setEditName("");
		setEditImg("");
		setEditPrice(0);
		setisOpen(null);
	};

	return (
		<div className={scss.TodoCards}>
			{/* <div className="container"> */}
			{isLoading ? (
				<div>Loading...</div>
			) : (
				data?.map((item) => (
					<>
						<div className={scss.CardMap} key={item.id}>
							{isOpen === item._id ? (
								<>
									<div className={scss.editInputs}>
										<input
											type="text"
											placeholder="name"
											value={editName}
											onChange={(e) => setEditName(e.target.value)}
										/>
										<input
											type="text"
											placeholder="img"
											value={editImg}
											onChange={(e) => setEditImg(e.target.value)}
										/>
										<input
											type="text"
											placeholder="price"
											value={editPrice}
											onChange={(e) => setEditPrice(+e.target.value)}
										/>
										<button onClick={() => saveEditTodo(item._id!)}>
											save
										</button>
										<button onClick={() => setisOpen(null)}>cancel</button>
									</div>
								</>
							) : (
								<>
									<div className={scss.todoCard}>
										<h1> name: {item.name}</h1>
										<img src={item.img} alt="" />
										<h1>price: {item.price}</h1>
										<button onClick={() => deleteTodoHandler(item._id!)}>
											delete
										</button>
										<button
											onClick={() => {
												setisOpen(item._id!);
												setEditImg(item.img);
												setEditName(item.name);
												setEditPrice(item.price);
											}}>
											edite
										</button>
									</div>
								</>
							)}
						</div>
					</>
				))
			)}
		</div>
		// </div>
	);
};

export default TodoItem;
