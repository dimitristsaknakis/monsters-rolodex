# Monsters Rolodex 

This is an exercise [React](https://reactjs.org/) app (created using [Create React App](https://github.com/facebook/create-react-app)), made while following along the first chapters of the '[Complete React Developer in 2021 (w/ Redux, Hooks, GraphQL)](https://www.udemy.com/course/complete-react-developer-zero-to-mastery)' Udemy course by [Yihua Zhang](https://www.udemy.com/user/yihua-zhang-5/) and [Andrei Neagoie](https://www.udemy.com/user/andrei-neagoie/).

It uses class and functional components to create a card view with cards in it, and populates each card with API data fetched from [\{JSON\} Placeholder](https://jsonplaceholder.typicode.com/) and avatars from [Robohash](https://robohash.org/).  
Card styling is implemented via plain CSS.  

If someone types inside the search input then the cards are filtered by name, showing only the ones whose name includes what the user has typed. For example, if one types "*clem*" then they get both "*Clementine*" and "*Clementina*".

A working demo can be found at [https://dimitristsaknakis.github.io/monsters-rolodex](https://dimitristsaknakis.github.io/monsters-rolodex).  
Alternatively if you want a local copy on your machine, then you can clone or download the repository, navigate to the project folder ('monsters-rolodex/' if you haven't renamed it), install all dependencies, and finally run the app on his localhost's port 3000 (in the browser's [http://localhost:3000](http://localhost:3000) or [http://127.0.0.1:3000](http://127.0.0.1:3000)):

```zsh
cd monsters-rolodex  # or what you renamed the directory to, if you did
npm install   # installs all dependencies
npm start     # starts the app on "http://localhost:3000"
```

---

By the way, all credits for the course contents go to Yihua and Andrei, and I thank them for giving me the opportunity to learn so much from them by following it.  




