```jsx harmony
const App = () => {
  const triggerNotif = useNotification("It's Notification", {
    body: "oh! OK"
  });
  return (
    <div className="App">
      <button onClick={triggerNotif}>Hello</button>
    </div>
  );
};
```