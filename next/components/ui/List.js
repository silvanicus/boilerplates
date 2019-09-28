/**
 * Returns a List of elements
 * @function
 * @param {array} items list of items
 */

const List = ({ items }) => {
  return items.length ? (
    <ul>
      {items.map(i => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  ) : (
    'no items'
  );
};

export default List;
