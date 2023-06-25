import Marquee, { Wrapper } from './marquee.js'

const DATA_LIST = [
  "Marquee Text Test 1",
  "Marquee Text Test 2",
  "Marquee Text Test 3"
];


const DATA_LIST2 = ["A", "B", "C"];

function App() {
  return (
    <Wrapper>
      <Marquee list={DATA_LIST} time={5} />
      <Marquee list={DATA_LIST2} time={5} />
      <Marquee list={DATA_LIST} time={2.5} toRight />
    </Wrapper>
  );
}

export default App;
