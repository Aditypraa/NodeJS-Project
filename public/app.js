const root = document.getElementById("root");
function App() {
  const [activities, setActivities] = React.useState("");
  const [todos, setTodos] = React.useState([]);
  function generateId() {
    return Date.now();
  }
  function addTodoHandler(event) {
    event.preventDefault();
    setTodos([...todos, {
      id: generateId(),
      activities: activities
    }]);
    setActivities("");
    // console.log(todos);
  }
  function removeTodoHandler(todoId) {
    const filteredTodos = todos.filter(function (todo) {
      return todo.id !== todoId;
    });
    setTodos(filteredTodos);
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Simple Todo List"), /*#__PURE__*/React.createElement("form", {
    action: "",
    onSubmit: addTodoHandler
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Nama Aktifitas",
    value: activities,
    onChange: event => {
      setActivities(event.target.value);
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Tambah")), /*#__PURE__*/React.createElement("ul", null, todos.map(todo => {
    return /*#__PURE__*/React.createElement("li", {
      key: todo.id
    }, todo.activities, /*#__PURE__*/React.createElement("button", {
      onClick: removeTodoHandler.bind(this, todo.id)
    }, "Hapus"));
  })));
}
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);