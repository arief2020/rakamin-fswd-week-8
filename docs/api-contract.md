# Category

- Category object

```
{
    category_id: 1,
    name: "Action",
    last_update: "2006-02-15T02:46:27.000Z"
}
```

## **GET /api/category**

Returns all category in the system.

- **URL Params**  
  None
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:**

```
[
    {<category_object>},
    {<category_object>},
    {<category_object>}
]
```

## **GET /api/category/:id**

Returns the specific category.

- **URL Params**  
  _Required:_ `id=[integer]`
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:** `{ <category_object> }`
- **Error Response:**
- **Code:** 404  
  **Content:** `{ error: "category not found" }`

# Film

- film object

```
    {
        film_id: 1,
        title: "Academy Dinosaur",
        description: "A Epic Drama of a Feminist And a Mad Scientist who must Battle a Teacher in The Canadian Rockies",
        release_year: 2006,
        language_id: 1,
        rental_duration: 6,
        rental_rate: "0.99",
        length: 86,
        replacement_cost: "20.99",
        rating: "PG",
        last_update: "2013-05-26T07:50:58.951Z",
        special_features: [
            "Deleted Scenes",
            "Behind the Scenes"
        ],
        fulltext: "'academi':1 'battl':15 'canadian':20 'dinosaur':2 'drama':5 'epic':4 'feminist':8 'mad':11 'must':14 'rocki':21 'scientist':12 'teacher':17"
    }

```

## **GET /api/film**

Returns all category in the system.

- **URL Params**  
  None
- **Query Parameters**
  category (optional): Filter films by category.
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:**

```
[
    {<film_object>},
    {<film_object>},
    {<film_object>}
]
```

## **GET /api/film/:id**

Returns the specific film.

- **URL Params**  
  _Required:_ `id=[integer]`
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:** `{ <film_object> }`
- **Error Response:**
- **Code:** 404  
  **Content:** `{ error: "film not found" }`

## **GET /api/film/:id/category**

Returns the specific category.

- **URL Params**  
  _Required:_ `id=[integer]`
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:**

```
[
    {
        <film_object>,
        category: [
            {
                category_id: 1,
                category_name: "Action"
            }
        ]
    },
    {
        <film_object>,
        category: [
            {
                category_id: 1,
                category_name: "Action"
            }
        ]
    },
    {
        <film_object>,
        category: [
            {
                category_id: 1,
                category_name: "Action"
            }
        ]
    },
]
```

- **Error Response:**
- **Code:** 404  
  **Content:** `{ error: "category for this film not found" }`

# Actor

- Actor object

```
{
    actor_id: 1,
    first_name: "Penelope",
    last_name: "Guiness",
    last_update: "2013-05-26T07:47:57.620Z",
    age: null
}
```

## **GET /api/actor**

Returns all actor in the system.

- **URL Params**  
  None
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:**

```
[
    {<actor_object>},
    {<actor_object>},
    {<actor_object>}
]
```

## **GET /api/actor/:id**

Returns the specific actor.

- **URL Params**  
  _Required:_ `id=[integer]`
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:** `{ <actor_object> }`
- **Error Response:**
- **Code:** 404  
  **Content:** `{ error: "actor not found" }`
