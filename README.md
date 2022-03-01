# coin-challenge

## Basic
A:
```
const randomArray = (length, max) => [...new Array(length)]
    .map(() => Math.round(Math.random() * max));
    
const numbers = [...new Set(randomArray(20, 40))];
numbers.sort((a, b) => a - b);
```

### Time estimate
```
let performance = window.performance;
const times = 1000;     

let sortNumbers = async (numArr) => {
	let r = await numArr.sort((a, b) => a - b);
	return r;
};

// Start timer
const t0 = performance.now();

for(var i = 0; i < times; i++){
    sortNumbers(numbers);
}

//End Timer
const t1 = performance.now();
const duration = t1 - t0;
// To calculate to 10b, you multiply the milliseconds total by 10million.
// At 240ms per 1000 function calls X 10million = 40 minutes aprox.
```



B:
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
