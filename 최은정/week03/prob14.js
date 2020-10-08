Promise.all([
  new Promise((resolve) => setTimeout(() => resolve("This"), 1000)),
  new Promise((resolve) => setTimeout(() => resolve("is"), 2000)),
  new Promise((resolve) => setTimeout(() => resolve("EJ"), 3000)),
]).then(console.log);
