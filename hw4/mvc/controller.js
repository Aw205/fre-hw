import { Model } from './model.js';
import { View } from './view.js';

export const Controller = ((model, view) => {
    const state = new model.State();
    const todoContainer = document.querySelector(
        `.${view.domstr.listContainer}`
    );
    const inputbox = document.querySelector(`.${view.domstr.inputBox}`);
    // const addButton = document.querySelector(`#${view.domstr.addBtn}`);

    const deleteTodo = () => {
        todoContainer.addEventListener("click", (e) => {

            if (e.target.className === view.domstr.deleteBtn) {
                state.todolist = state.todolist.filter(
                    (todo) => +todo.id !== +e.target.id
                );
                model.deleteTodo(e.target.id);
            }
            else {
                let parent = e.target;
                if (parent.tagName == "SPAN") { // want to get the li element
                    parent = parent.parentElement;
                }
                parent.classList.toggle("todo-complete");
                let todoItem = state.todolist.find((item)=> item.id == parent.children[1].id);
                todoItem.completed = !todoItem.completed;
            }

        });
    };

    const addTodo = () => {
        inputbox.addEventListener("keyup", (e) => {
            if (e.key === "Enter" && e.target.value.trim() !== '') {
                const newtodo = new model.Todo(e.target.value);
                model.addTodo(newtodo).then((todo) => {
                    state.todolist = [todo, ...state.todolist];
                });
                e.target.value = '';
            }
        });
        // addButton.addEventListener("click", (e) => {

        //     let inputText = inputbox.value;
        //     if (inputText.trim() !== '') {
        //         const newtodo = new model.Todo(inputText);
        //         model.addTodo(newtodo).then((todo) => {
        //             state.todolist = [todo, ...state.todolist];
        //         });
        //         inputbox.value = '';
        //     }
        // });
    };

    const init = () => {
        model.getTodos().then((todolist) => {
            state.todolist = todolist.reverse();
        });
    };

    const bootstrap = () => {
        init();
        deleteTodo();
        addTodo();
    };

    return { bootstrap };
})(Model, View);