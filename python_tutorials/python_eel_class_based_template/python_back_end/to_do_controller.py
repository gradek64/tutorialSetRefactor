import eel

from data.todo import Todo

todo_app = Todo()


@eel.expose
def add(task):
    # pyton way of calling shell
    todo_app.add(task)


@eel.expose
def remove(task):
    # pyton way of calling shell
    todo_app.remove(task)
