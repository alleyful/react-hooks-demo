```
const App = () => {
  const beforeLife = () => console.log("pls dont leave");
  useBeforeLeave(beforeLife);
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
};
```