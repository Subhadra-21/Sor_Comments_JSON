# Task Instructions

Install [node/npm](https://nodejs.org/en/)

`npm install` to get started.

`npm start` to start the dev server and the JSON server. This will start the dev server on port 3000, and you can see your application in a browser at `http://localhost:3000`.

## Scaffolding

We have provided you with this React skeleton, along with a mock backend.

We are using [json-server](https://github.com/typicode/json-server) to mock a backend for this task. When running locally, the json-server will run at `http://localhost:3001`.

The following API endpoints are available:

* `/api/comments/` (**GET**) - Get all comments

  * Response code: `200 OK`

  * Response format:

    ```json
    [
        {
            "id": 1,
            "text": "This is a comment."
        },
        {
            "id": 2,
            "text": "This is a second comment."
        },
        ...
    ]
    ```

* `/api/comments/<id>` (**GET**) - Gets a single comment

  * Response code: `200 OK`

  * Response format:

    ```json
    {
        "id": 1,
        "text": "This is a comment."
    }
    ```

* `/api/comments/` (**POST**) - Add a comment

  * Response code: `201 Created`

  * Response format:

    ```json
    {
        "id": 3,
        "text": "Another comment"
    }
    ```

* `/api/comments/<id>` (**DELETE**) - Delete comment with the given id

  * Response code: `200 OK`

  * Response format:

    ```
    {}
    ```
* `/api/reset-comments/` (**POST**) - Reset the database to the initial state

  * Response code: `204 No Content`
  * Response format: **No data**

* `/api/comments?q=<string>` (**GET**) - searches for the comments with given string

  * Response code: `200 OK`

  * Response format:

    ```
    [{
        "id": 3,
        "text": "searched comment"
    }]
    ```

## Task

Please build a comment feed with the following functionality:

* Ability to display an ordered list of comments
* Ability to delete comments
* Ability to add comments
* Ability to search comments such that all the previous api requests get cancelled. for ex. if i type `second` in search box, it will send requests for all letters typed `s`, `se`, `sec` and so on. what we need to do here is, when `second` is typed in searchbox. all api request went for `s`, `se`, `sec`... should get cancelled and only last one (`second`) will be kept and processed

For ease of development, we have provided the following functionality:
* Ability to reset the comments to the initial state

Your comment feed should look something like this, but it doesn't need to be exact.
![](goal.png)
