import List from '../components/ui/List';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

/**
 * Index page
 * @function
 */

const Index = () => {
  const array = ['apples', 'oranges', 'bananas'];
  return (
    <div>
      <Header />
      <main>
        <List items={array} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
