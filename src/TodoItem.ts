import Tag from "./Tag";

type TodoItemId = number;

interface CreateTodoItemParam {
    content: TodoItem["content"];
    category?: TodoItem["category"];
    tags?: TodoItem["tags"];
}

interface UpdateTodoItemParam {
    content?: TodoItem["content"];
    category?: TodoItem["category"];
    isFinished?: TodoItem["isFinished"];
    tags?: TodoItem["tags"];
}

let todoItemId: TodoItemId = 0;

export default class TodoItem {
    readonly id: TodoItemId;
    content: string;
    category: string;
    isFinished: boolean;
    tags: Tag[];

    constructor({content, category, tags}: CreateTodoItemParam) {
        this.id = todoItemId++;
        this.content = content;
        this.category = category;
        this.isFinished = false;
        this.tags = tags;
    }

    updateTodoItem({content, category, tags}: UpdateTodoItemParam) {
        if (content) this.content = content;
        if (category) this.category = category;
        if (tags) this.tags = tags;
    }
}
