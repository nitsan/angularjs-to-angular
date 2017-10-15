angular.module('todoApp')
  .component('todo', {
    // templateUrl: 'src/old-app/components/todo.comp.html',
    template: `
<h1>I'm AngularJs 1</h1>
<div>
    <span>{{$ctrl.remaining()}} of {{$ctrl.todos.length}} remaining</span>
    [ <a href="" ng-click="$ctrl.archive()">archive</a> ]
    <ul class="unstyled">
        <li ng-repeat="todo in $ctrl.todos">
            <label class="checkbox">
                <input type="checkbox" ng-model="todo.done">
                <span class="done-{{todo.done}}">{{todo.text}}</span>
            </label>
        </li>
    </ul>
    <form ng-submit="$ctrl.addTodo()">
        <input type="text" ng-model="$ctrl.todoText"  size="30"
               placeholder="add new todo here">
        <input class="btn-primary" type="submit" value="add">
    </form>
</div>`,
    controller: function () {
      var todoList = this;
      todoList.todos = [
        {text: 'learn AngularJS', done: true},
        {text: 'build an AngularJS app', done: false}];

      todoList.addTodo = function () {
        todoList.todos.push({text: todoList.todoText, done: false});
        todoList.todoText = '';
      };

      todoList.remaining = function () {
        var count = 0;
        angular.forEach(todoList.todos, function (todo) {
          count += todo.done ? 0 : 1;
        });
        return count;
      };

      todoList.archive = function () {
        var oldTodos = todoList.todos;
        todoList.todos = [];
        angular.forEach(oldTodos, function (todo) {
          if (!todo.done) todoList.todos.push(todo);
        });
      };
    }
  });

