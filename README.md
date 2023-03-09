# RestApi-NodeJS

This is a simple RestAPI made in NodeJs with Typescript, PostgreSql and Express

## Installation

For this project I used [npm](https://www.npmjs.com/) to manage libraries..

#### 1. Clone or download this project

```bash
git clone git@github.com:Camilo-J/RestAPI-Node.git
```

#### 2. Install all the project's dependencies

```bash
npm install
```

#### 3. Raise the server.That's all, Enjoy the project!! 😀

```bash
npm start
or
npm run dev
```

## API Reference

### Projects

#### Get all Projects

```http
  GET /api/v1/projects
```

| Parameter     | Type     | Description                      |
| :------------ | :------- | :------------------------------- |
| `name`        | `string` | Project's name                   |
| `priority`    | `number` | Priority of the project          |
| `description` | `string` | Some description for the project |

##### Example

```json
[
  {
    "id": 1,
    "name": "test project",
    "priority": 10,
    "description": "some description for project 3",
    "createdAt": "2023-03-05T12:38:16.814Z",
    "updatedAt": "2023-03-05T18:17:39.910Z"
  },
  {
    "id": 2,
    "name": "test task",
    "priority": null,
    "description": null,
    "createdAt": "2023-03-05T23:13:10.343Z",
    "updatedAt": "2023-03-05T23:13:10.343Z"
  }
]
```

#### Get Project

```http
  GET /api/v1/projects/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

##### Example

```json
{
  "id": 2,
  "name": "test task",
  "priority": null,
  "description": null,
  "createdAt": "2023-03-05T23:13:10.343Z",
  "updatedAt": "2023-03-05T23:13:10.343Z"
}
```

#### Create Project

```http
  POST /api/v1/projects
```

| Parameter     | Type     | Description                      |
| :------------ | :------- | :------------------------------- |
| `name`        | `string` | Project's name                   |
| `priority`    | `number` | Priority of the project          |
| `description` | `string` | Some description for the project |

##### Example

```json
{
  "name": "test project",
  "priority": 10,
  "description": "some description for project 3"
}
```

#### Update Project

```http
  PACTH /api/v1/projects/:id
```

| Parameter     | Type     | Description                      |
| :------------ | :------- | :------------------------------- |
| `name`        | `string` | Project's name                   |
| `priority`    | `number` | Priority of the project          |
| `description` | `string` | Some description for the project |

##### Example

```json
{
  "name": "test project",
  "priority": 10,
  "description": "some description for project 3"
}
```

#### Destroy Project

```http
  DELETE /api/v1/projects/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Get all Task of a Project

```http
  GET /api/v1/projects/:id/tasks
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

##### Example

```json
[
  {
    "id": 3,
    "name": "test task",
    "done": false,
    "projectId": 1,
    "createdAt": "2023-03-05T23:10:23.414Z",
    "updatedAt": "2023-03-05T23:28:17.591Z"
  }
]
```

### Tasks

#### Get all Tasks

```http
  GET /api/v1/tasks
```

| Parameter   | Type      | Description                       |
| :---------- | :-------- | :-------------------------------- |
| `name`      | `string`  | Project's name                    |
| `done`      | `boolean` | For default is false              |
| `projectId` | `number`  | project's id that the task belong |

##### Example

```json
[
  {
    "id": 1,
    "name": "test task",
    "done": false,
    "projectId": 2,
    "createdAt": "2023-03-05T23:13:23.414Z",
    "updatedAt": "2023-03-05T23:21:17.591Z"
  }
]
```

#### Get Task

```http
  GET /api/v1/tasks/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

##### Example

```json
{
  "id": 1,
  "name": "test task",
  "done": false,
  "projectId": 2,
  "createdAt": "2023-03-05T23:13:23.414Z",
  "updatedAt": "2023-03-05T23:21:17.591Z"
}
```

#### Create Task

```http
  POST /api/v1/tasks
```

| Parameter   | Type      | Description                       |
| :---------- | :-------- | :-------------------------------- |
| `name`      | `string`  | Project's name                    |
| `done`      | `boolean` | For default is false              |
| `projectId` | `number`  | project's id that the task belong |

##### Example

```json
{
  "id": 1,
  "name": "Create router for Api",
  "done": false,
  "projectId": 3
}
```

#### Update Task

```http
  PACTH /api/v1/tasks/:id
```

| Parameter   | Type      | Description                       |
| :---------- | :-------- | :-------------------------------- |
| `name`      | `string`  | Project's name                    |
| `done`      | `boolean` | For default is false              |
| `projectId` | `number`  | project's id that the task belong |

##### Example

```json
{
  "id": 1,
  "name": "Create router for Api",
  "done": false,
  "projectId": 3
}
```

#### Destroy Task

```http
  DELETE /api/v1/tasks/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

## Helpful Links

- [Version Control](https://en.wikipedia.org/wiki/Version_control)
- [Node](https://nodejs.org/en/about/)
- [Express](https://expressjs.com/es/)
- [Typescript](https://www.typescriptlang.org/)
- [PostgreSql](https://www.postgresql.org/)
