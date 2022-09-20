### Installation

- execute `yarn`

### Run

- `yarn dev`

### Build

- `yarn build`


BEST PRACTICES FOR REACT
Keep components small and reusable
Use props to pass data to components
Comment only where necessary
Use state to store data
All files related to a page should be in a single folder.
Use samentic elements to make your code more readable
Use functional components to make your code more readable
Avoid Repetitive Code
Use Object Destructuring For Props
Always use camelCase for variable, functions, and componentsNames (handleClick, setState, getUsers, etc. BlogCard, userLists, etc.)
Always use kebab-case for CSS classes, IDs, and files names (user-list, list-group, card-header, search-input, etc.)
Use arrow functions for callbacks
Use React fragments to reduce the amount of HTML
Use const for variables that won't change
Always use key props for mapping
Use spread operator for arrays
Always include a single space in your self-closing tag. <UserList />
With event handlers funtions, use handle keyword before the event name. (handleClick, handleInputChange, handleSubmit, handleIncrement, etc.)
With api calls functions, use fetch or get keyword before the api call. (fetchUsers, getUsers, etc.)

Use plural names for arrays (users, posts, cars etc.)
Use singular names for objects, string, number, functions (user, post, car etc.)
always use === for comparison
validate your data before sending it to the server (validateEmail, validatePassword, etc.)
Use ternary operator for small if/else statements
Use and/or for simple if statements
always follow the same convention for your components (UserList, UserCard, etc.)
always follow the same convention for your files (user-list.js, user-card.js, etc.)
Add line breaks after each section of code

React Folder structure
components
    --- reuseable
             -- Avatar.tsx
             -- Dropdown.tsx
             -- Input-file.tsx
            -- Tweet-Card.tsx
    --- dashboard
            -- Upload-Tweet.tsx
            -- Tweet-List.tsx
types
    --- card.type.ts
    --- user.type.ts
    --- store
            -- user.store.type.ts
routes
    --- index.ts
config
    --- routes.config.tsx
    --- server.config.tsx
utils
    --- api.utils.ts
    --- validation.utils.ts
    --- strings.utils.ts
store
    --- reducers
                 -- user.reducer.ts
                 -- tweets.reducer.ts
                 -- auth.reducer.ts
    --- actions
                 -- user.actions.ts
                 -- tweets.actions.ts
    --- store.ts
JSON
    --- users.json
    --- tweets.json
    --- auth.json
pages/views
    --- auth
            -- login.tsx
            -- register.tsx
    --- public
            -- home.tsx
            -- profile.tsx
    --- private
            -- dashboard.tsx
            -- user-profile.tsx
            -- bookmarks.tsx