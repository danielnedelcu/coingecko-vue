# coin-challenge

## Basic
```
const loadInitialState = async (state) => {
  const user = await getUser(state, 'email@email.com');
  const settings = await getUserSettings(state, user.id);
  const role = await setRole(state, user.id, "ADMIN");
  const notify = await notifyUser(state, "USER_ROLE_UPDATED");

  return notifyAdmins("USER_ROLE_UPDATED");
}

loadInitialState()
  .then(doSomething)
```

## Practical
Requirements:
1. Retrieve the top 100 coins from Coingecko API.
2. Implements state management
3. State data must be localStorage persistent as the user refreshes browser. Please use the chrome dev tools to delete localStorage data if you need the entire original list again. (Will implement localStorage clear with a button next)
4. Sort list based on market cap ranking 


Direct link: https://621986b483b7b20e39e5d909--gracious-nobel-68ccdf.netlify.app/

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
