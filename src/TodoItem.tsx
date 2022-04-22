export type Todo = {
  readonly id: number;
  text: string;
  checked: boolean;
};

type Props = {
  todo: Todo;
  onCheckTodo: Function;
};

const TodoItem: React.FC<Props> = ({ todo, onCheckTodo }) => (
  <div>
    <input
      type="checkbox"
      id={todo.id.toString()}
      defaultChecked={todo.checked}
      onChange={() => onCheckTodo(todo.id)}
    />
    <label htmlFor={todo.id.toString()}>{todo.text}</label>
  </div>
);

export default TodoItem;
