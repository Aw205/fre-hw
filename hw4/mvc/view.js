export const View = (() => {
    const domstr = {
        inputBox: "todolist-input",
        listContainer: "todolist-container",
        deleteBtn: "delete-btn",
    };

    const createTmp = (todoArr) => {
        let tmp = "";
        todoArr.forEach((todo) => {

            const completeStyle = (todo.completed) ? "todo-complete" : "";
            tmp += `
        	<li class="${completeStyle}">
				<span>${todo.id}-${todo.title}</span>
				<button class='delete-btn' id='${todo.id}'>X</button>
			</li>`;
        });
        return tmp;
    };

    const render = (ele, tmp) => {
        ele.innerHTML = tmp;
    };

    return { domstr, render, createTmp };
})();