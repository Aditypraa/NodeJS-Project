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
    setMessage("");
    if (edit.id) {
      const updateTodo = {
        ...edit,
        activities
      };
      const editTodoIndex = todos.findIndex(function (todo) {
        return todo.id === edit.id;
      });
      const updatedTodos = [...todos];
      updatedTodos[editTodoIndex] = updateTodo;
      setTodos(updatedTodos);
      return cancelEditHandler();
    }
    setTodos([...todos, {
      id: generateId(),
      activities,
      done: false
    }]);
    setActivities("");
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
  function doneTodoHandler(todo) {
    const updatedTodo = {
      ...todo,
      done: todo.done ? false : true
    };
    const editTodoIndex = todos.findIndex(function (currentTodo) {
      return currentTodo.id === todo.id;
    });
    const updatedTodos = [...todos];
    updatedTodos[editTodoIndex] = updatedTodo;
    setTodos(updatedTodos);
    console.log(updatedTodos);
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Simple Todo List"), message && /*#__PURE__*/React.createElement("div", {
    style: {
      color: "red"
    }
  }, message), /*#__PURE__*/React.createElement("form", {
    action: "",
    onSubmit: saveTodoHandler
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Nama Aktifitas",
    value: activities,
    onChange: event => {
      setActivities(event.target.value);
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, edit.id ? "Simpan Perubahan" : "Tambah"), edit.id && /*#__PURE__*/React.createElement("button", {
    onClick: cancelEditHandler
  }, "Batal Edit")), todos.length > 0 ? /*#__PURE__*/React.createElement("ul", null, todos.map(todo => {
    return /*#__PURE__*/React.createElement("li", {
      key: todo.id
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: todo.done,
      onChange: doneTodoHandler.bind(this, todo)
    }), todo.activities, "(", todo.done ? "Selesai" : "Belum Selesai", ")", /*#__PURE__*/React.createElement("button", {
      onClick: editTodoHandler.bind(this, todo)
    }, "Edit"), /*#__PURE__*/React.createElement("button", {
      onClick: removeTodoHandler.bind(this, todo.id)
    }, "Hapus"));
  })) : /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("i", null, "Belum ada aktifitas")));
}
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);