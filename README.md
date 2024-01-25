<p align="center">
  <a href="https://legal-doctrine.com/"><img height="100" src="./src/assets/LD-logo.png"></a>
</p>

# LD Frontend Challenge

## Initialization

Install dependencies
```bash
yarn install
```
Run the project
```bash
yarn run dev
```

## Project Description

This project involves fetching data from the provided `pokemon.json` file in the `public` folder and using the data to render a table. The table includes custom functionality for searching, filtering, and pagination. The main features are:

1. **Fetch Data and Render Table:**
   - Fetch data from the `pokemon.json` file.
   - Render a table displaying Pokémon information, including columns like ID, name, type, health (hp), attack, defense, special attack, special defense, speed, and a custom column "Power."

2. **Calculate Power Column:**
   - Add a custom column named "Power" that represents the accumulation of stats (hp + attack + defense + special attack + special defense + speed) for each Pokémon.

3. **Pagination:**
   - Implement pagination to handle page changes.
   - Allow users to specify the number of rows per page.

4. **Search by Pokémon Name:**
   - Implement a search functionality that filters Pokémon by name.

5. **Search by Threshold:**
   - Allow users to search Pokémon based on a custom threshold. For example, typing "400" should display all Pokémon with a cumulative Power greater than or equal to 400.

6. **Min & Max Power Labels:**
   - Display labels for Min Power and Max Power, representing the minimum and maximum Power values found on the current page of the table.

## Checklist
- [X] Project configuration
- [X] Design implementation
- [X] Fetch data from file `pokemon.json` and render a simple table.
- [X] Add a custom column "Power" that accumulates specific stats for each Pokémon.
- [X] Add a search functionality to filter Pokémon by name.
- [X] Enable searching by threshold, allowing users to filter Pokémon by a custom cumulative Power value.
- [X] Implement pagination with controls for page and size changes.
- [X] Update Min and Max Power labels according to the data displayed on the current page.

## Improvements

1. **Project Structure:**
   Using a whole boilerplate for such a small task seemed unnecessary to me. To showcase my development skills better, I focused on readability and logic. However, there's room for improvement, such as:
   - **Adding a `types` folder to store:** consolidating all types related to the data we're handling, promoting a clearer separation of concerns.

2. **Type-Safety:**
   Incorporating TypeScript into our project is a great way to enhance the developer experience. With TypeScript, we can catch potential errors early in the development process, making the code more reliable and easier to maintain.

3. **Data:**
   Since we're working with a mock API, we lack some conditions present in a real API, such as loading and error handling. To address this:
   - **Handling pagination and filtering on the server:** This approach optimizes resource usage and improves overall system efficiency.
   - **Using React Query library to fetch data:** it simplifies the process of fetching, caching, and managing data.
   - **Using URL queries** to store query parameters.