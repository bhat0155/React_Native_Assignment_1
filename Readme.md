# Train of Thought

## For Navigation
- I created 2 Navigators, kept the Tab navigator as the main navigator and passed the Stack Navigator as the component inside tab navigator.

## In HomeScreen
- I checked if data exists in the local storage, if no, fetch the data and save it in local storage.

## In List Page
- I checked if data in persistent storage exist. If yes, store value in state variable. If no, redirect to HomePage.
- Display the list on Screen, make each Item Pressable and pass id as a prop.
- For refresh control feature, as soon as spinner loads, I deleted the existing data in the local storage, made a new fetch call
and stored new data in the storage.
- This would also update the state variable of different beers.

## In Detail Page
- Get all the items from the storage in an array.
- From id which I got as a prop from list page, I found the particular drink from the given array and displayed the details on detail page.
