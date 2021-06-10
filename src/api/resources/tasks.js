import ApiService from '../api.service';

const Tasks = {
  lists: () => ApiService.get('tasks/v1/users/@me/lists?key=AIzaSyBaHbARUVpZzYwcy0C6E2ZMgJjAN4ip_JY'),
  listItems: (tasklistId) => ApiService.get(`tasks/v1/lists/${tasklistId}/tasks?key=AIzaSyBaHbARUVpZzYwcy0C6E2ZMgJjAN4ip_JY`),
  insertItem: (params) => ApiService.post(`tasks/v1/lists/${params.tasklistId}/tasks?key=AIzaSyBaHbARUVpZzYwcy0C6E2ZMgJjAN4ip_JY`, params)
};

export default Tasks;