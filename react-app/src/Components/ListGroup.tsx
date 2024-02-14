import { MouseEvent, useState } from "react";

interface props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: props) {
  const [SelectedIndex, setSelectedIndex] = useState(-1);

  //   items = [];

  //   const getMessage = () => {
  //     return items.length === 0 && <p>No item found</p>;
  //   };

  //   const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>{heading}</h1>
      {/* {getMessage()} */}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              SelectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
