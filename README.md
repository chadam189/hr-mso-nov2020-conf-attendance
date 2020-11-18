# Attendance Microservice

The Attendance microservice for the Conference App

## Table of Contents

These are the list of active endpoints for the `/api/v2` endpoints.

* [Getting Started](#getting-started)
* [API Docs](#api-docs)
* [Prompt](#prompt)

## Getting Started

1. Ensure you are running node v12 (or later)
1. node inex.js [optional param for port number]
1. Server will listen on port 3301 by default

## API Documents

1. GET `/api/presentation/:presentation/record`

    **Purpose**: (WIP)

    **URL Parameters**:
    1. `:presentation`: (WIP)

    **Example Request (using ID)**:
    ```js
      axios({
        method: 'get',
        url: '/api/presentation/42/record',
      });
    ```

    **Example Response**:
    ```json
      [
        {
          "badgeId": 1,
          "entryTime": 1605736224929
        },
        {
          "badgeId": 2,
          "entryTime": 1605736224000
        },
      ]
    ```

1. GET `/api/presentation/:presentation/averages`

  **Purpose**: (WIP)

  **URL Parameters**: (WIP)

  **Example Request (using ID)**:
  ```js
    (WIP)
  ```

  **Example Response**:
  ```json
    (WIP)
  ```

1. GET `/api/badge-location`

  **Purpose**: (WIP)

  **URL Parameters**: (WIP)

  **Example Request (using ID)**:
  ```js
    (WIP)
  ```

  **Example Response**:
  ```json
    (WIP)
  ```

1. GET `/api/badge/:badge/history`

  **Purpose**: (WIP)

  **URL Parameters**: (WIP)

  **Example Request (using ID)**:
  ```js
    (WIP)
  ```

  **Example Response**:
  ```json
    (WIP)
  ```

1. POST `/api/badge-scan`

**Purpose**: (WIP)

**URL Parameters**: (WIP)

**Example Request (using ID)**:
```js
  (WIP)
```

**Example Response**:
```json
  (WIP)
```

## Prompt

[W2C2 - Running a Concference](https://class.mimir.io/assignments/f037d55a-cb05-4ba9-9b88-839ce456faa5/do/58229d94-8f6c-40ea-9fe7-24b6c6785fcb)

#### Dependencies

Presentations, Locations

#### Required APIs

* Report the attendance record for a presentation (what badge showed up at what time)
* Report the maximum, minimum, and average attendance for a presentation
* Report the location of all scanned badges at a specific moment (badge, room, time scanned)
* Report the attendance of a specific badge (what room at what time)
* The Attendance Bounded Context records a badge number scanned at a specific time in a specific room. (The scanners will make an API call that contains the badge identifer, the room number, and the time scanned.) It can report attendance in a room for any given time during the conference, report maximum/minimum/average attendance for a presentation, and report the presentations that a badge attended.
