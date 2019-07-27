```
const App = () => {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("HOME"));
  return <div className="App" />;
};
```