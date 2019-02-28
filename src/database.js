import Dexie from "dexie";

const todoData = new Dexie('todo_list');

todoData.version(1).stores({
    tasks: "id++, value"
});

export default todoData;