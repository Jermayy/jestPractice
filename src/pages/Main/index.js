// @flow
import * as React from 'react';

// type Props = {
//     item: {
//         id: Date,
//         text: string,
//     }
// }

const Main = (): React.Node => {
  const [items, setItems] = React.useState([]);
  const [text, setText] = React.useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(text);
    const newItem = {
      text,
      id: Date.now(),
    };
    setItems(items.concat(newItem));
    console.log(newItem.text);
    setText('');
  };

  return (
    <div>
      <h1>
        TODOs
      </h1>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.text}

          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <label htmlFor="new-todo">
          What needs to be done?

          <br />

          <input id="new-todo" onChange={handleChange} value={text} />
        </label>

        <button type="submit">
          Add #
          {items.length + 1}
        </button>
      </form>

    </div>
  );
};

export default Main;
