```
const App = () => {
  const sayHello = () => console.log("say Hello");
  const title = useClick(sayHello);

  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  );
};
```