```jsx harmony
const App = () => {
  const onFullS = isFull => {
    console.log(isFull ? "We are Full" : "We are small");
  };
  const { element, triggerFull, exitFull } = useFullscreen();
  return (
    <div className="App">
      <div ref={element}>
        <img src="https://raw.githubusercontent.com/alleyful/algorithm-solutions/master/HackerRank/ProblemSolving/images/drawingBook-01.png" />
        <button onClick={exitFull}>Exit Full Screen</button>
      </div>
      <button onClick={triggerFull}>Make full screen</button>
    </div>
  );
};
```