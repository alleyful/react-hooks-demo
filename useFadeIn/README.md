```jsx harmony
const App = () => {
  const fadeInH1 = useFadeIn(1, 2);
  const fadeInP = useFadeIn(1, 2);

  return (
    <div className="App">
      <h1 {...fadeInH1}>Hello</h1>
      <p {...fadeInP}>Lorem is Some...</p>
    </div>
  );
};
```