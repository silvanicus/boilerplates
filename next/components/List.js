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
