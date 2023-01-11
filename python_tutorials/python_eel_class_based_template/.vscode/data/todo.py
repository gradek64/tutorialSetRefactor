class Todo:
    tasks = []

    def add(self, task):
        self.tasks.append(task)
        print(self.tasks)

    def remove(self, task):
        self.tasks.remove(task)
        print(self.tasks)
