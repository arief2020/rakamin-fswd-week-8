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
