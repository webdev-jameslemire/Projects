angular
  .module('app')
  .service('projectsSrvc', function($http) {

    this.projects = [];

    this.getProjects = function(id) {
      return $http({
        method: 'GET',
        url: 'http://localhost:3000/api/projects/' + id,
      });
    };

    this.addProject = function(data) {
      return $http({
        method: 'POST',
        url: 'http://localhost:3000/api/projects',
        data: data
      });
    };

    this.deleteProject = function(id) {
        return $http({
          method: 'DELETE',
          url: 'http://localhost:3000/api/project/' + id
        });
    };

    this.addTask = function(data) {
      return $http({
        method: 'POST',
        url: 'http://localhost:3000/api/task',
        data: data
      });
    };

    this.getTasks = function(id) {
      return $http({
        method: 'GET',
        url: 'http://localhost:3000/api/task/' + id
      });
    };

    this.deleteAllTasks = function(id) {
      return $http({
        method: 'DELETE',
        url: 'http://localhost:3000/api/tasks/' + id
      });
    };

    this.getCompletedTasks = function(project_id) {
      return $http({
        method: 'GET',
        url: 'http://localhost:3000/api/completed/' + project_id
      });
    };

    this.addCompleted = function(task) {
      return $http({
        method: 'POST',
        url: 'http://localhost:3000/api/completed',
        data: task
      });
    };

    this.deleteCompletedTask = function(task) {
      return $http({
        method: 'DELETE',
        url: 'http://localhost:3000/api/completed/' + task.id + '/' + task.project_id,
      });
    };
  });
