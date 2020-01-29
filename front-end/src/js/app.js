class Main extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    return (
      <main>
        <h1>Welcome</h1>
        <p>This is a start...</p>
      </main>
    )
  }
}

ReactDOM.render(<Main />, document.getElementById('main'));