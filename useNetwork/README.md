```jsx harmony
const App = () => {
  const handleNetworkChange = online => {
    console.log(online ? "Online" : "Offline");
  };
  const onLine = useNetwork(handleNetworkChange);
  return (
    <div className="App">
      <h1>{onLine ? "Online" : "Offline"}</h1>
    </div>
  );
};
```