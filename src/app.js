const root = document.getElementById("root");

function App() {
  const [activities, setActivities] = React.useState("");
  const [todos, setTodos] = React.useState([]);

  function generateId() {
    return Date.now();
  }

  function addTodoHandler(event) {
    event.preventDefault();

    setTodos([
      ...todos,
      {
        id: generateId(),
        activities: activities,
      },
    ]);
    setActivities("");
    console.log(todos);
  }

  return (
    <>
      <h1>Simple Todo List</h1>
      <form action="" onSubmit={addTodoHandler}>
        <input
          type="text"
          placeholder="Nama Aktifitas"
          value={activities}
          onChange={(event) => {
            setActivities(event.target.value);
          }}
        />
        <button type="submit">Tambah</button>
      </form>
      <ul>
        {todos.map((todo) => {
          return <li key={todo.id}>{todo.activities}</li>;
        })}
      </ul>
    </>
  );
}

ReactDOM.render(<App />, root);
