// import ListGroup from "./Components/ListGroup";

// let items = ["bangalore", "delhi", "chennai", "Lucknow", "Jaipur"];

// const handleSelectItem = (item: string) => {
//   console.log(item);
// };

// function App() {
//   return (
//     <div>
//       <ListGroup
//         items={items}
//         heading="New heading"
//         onSelectItem={handleSelectItem}
//       />
//     </div>
//   );
// }

// export default App;

import { Button } from "./Components/Button";
import Alert from "./Components/Alert";
import { useState } from "react";

function App() {
  const [clicked, setClicked] = useState(false);
  return (
    <div>
      {clicked && <Alert onClose={() => setClicked(false)}>Hello World</Alert>}
      <Button colour="secondary" onClickfunction={() => setClicked(true)}>
        My Button
      </Button>
    </div>
  );
}

export default App;

// import { Button } from "./Components/Button";

// const handleOnclick = () => {
//   console.log("clicked");
// };
// function App() {
//   return (
//     <div>
//       <Button colour="secondary" onClickfunction={handleOnclick}>
//         My Button
//       </Button>
//     </div>
//   );
// }

// export default App;
