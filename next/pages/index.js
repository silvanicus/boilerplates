import List from '../components/List';

const Index = () => {
  const array = ['apples', 'oranges', 'bananas'];
  return (
    <div>
      <List items={array} />
      <p>This is the main app file.</p>
    </div>
  );
};

export default Index;
