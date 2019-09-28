/**
 * Page example using classes
 * @constructor
 */

class Example extends React.Component {
  state = { message: "Hello People I'm an example" };
  render() {
    return <h1>{this.state.message}</h1>;
  }
}

export default Example;
