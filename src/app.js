const root = document.getElementById("root");

function App() {
  const [activities, setActivities] = React.useState("");
  const [edit, setEdit] = React.useState({});
  const [todos, setTodos] = React.useState([]);
  const [message, setMessage] = React.useState("");

  function generateId() {
    return Date.now();
  }

  function saveTodoHandler(event) {
    event.preventDefault();

    if (!activities) {
      return setMessage("Aktifitas tidak boleh kosong");
    }

    if (edit.id) {
      const updateTodo = {
        id: edit.id,
        activities,
      };

      const editTodoIndex = todos.findIndex(function (todo) {
        return todo.id === edit.id;
      });

      const updatedTodos = [...todos];
      updatedTodos[editTodoIndex] = updateTodo;

      setTodos(updatedTodos);
      return cancelEditHandler();
    }

    setTodos([
      ...todos,
      {
        id: generateId(),
        activities,
      },
    ]);
    setActivities("");
    setMessage("");
    // console.log(todos);
  }

  function removeTodoHandler(todoId) {
    const filteredTodos = todos.filter(function (todo) {
      return todo.id !== todoId;
    });
    setTodos(filteredTodos);
    if (edit.id) cancelEditHandler();
  }

  function editTodoHandler(todo) {
    setActivities(todo.activities);
    setEdit(todo);
    // console.log(todo);
  }

  function cancelEditHandler() {
    setEdit({});
    setActivities("");
  }

  return (
    <>
      <h1>Simple Todo List</h1>

      {message && <div style={{ color: "red" }}>{message}</div>}

      <form action="" onSubmit={saveTodoHandler}>
        <input
          type="text"
          placeholder="Nama Aktifitas"
          value={activities}
          onChange={(event) => {
            setActivities(event.target.value);
          }}
        />
        <button type="submit">{edit.id ? "Simpan Perubahan" : "Tambah"}</button>
        {edit.id && <button onClick={cancelEditHandler}>Batal Edit</button>}
      </form>
      {todos.length > 0 ? (
        <ul>
          {todos.map((todo) => {
            return (
              <li key={todo.id}>
                {todo.activities}
                <button onClick={editTodoHandler.bind(this, todo)}>Edit</button>
                <button onClick={removeTodoHandler.bind(this, todo.id)}>
                  Hapus
                </button>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>
          <i>Belum ada aktifitas</i>
        </p>
      )}
    </>
  );
}

ReactDOM.render(<App />, root);
