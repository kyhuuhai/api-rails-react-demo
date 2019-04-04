class RouterLink extends React.Component {
  render() {
    return (
      <div>
        <Router history={browserHistory}>
          <Route exact path="/" Component={Main} />
          <Route path="/new" Component={NewItem} />
        </Router>
      </div>
    );
  }
}
