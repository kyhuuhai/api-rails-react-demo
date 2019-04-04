class AllItems extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };
  }

  componentDidMount() {
    fetch('/api/v1/items.json', {
      method: 'GET'
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ items: data.items });
      });
  }

  loadItems() {
    let items = this.state.items.map((item, index) => {
      return (
        <div key={item.id}>
          <Item
            item={item}
            removeItem={this.removeItem.bind(this)}
            updateItem={this.updateItem.bind(this)}
          />
        </div>
      );
    });
    return items;
  }

  // handleSubmit(item) {
  //   fetch('/api/v1/items', {
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({ item: item })
  //   })
  //     .then(res => {
  //       return res.json();
  //     })
  //     .then(data => {
  //       this.resetStateWhenCreateItem(data.item);
  //     });
  // }

  resetStateWhenCreateItem(item) {
    this.state.items.unshift(item);

    this.setState({ items: this.state.items });
  }

  removeItem(id) {
    debugger;
    fetch(`/api/v1/items/${id}`, {
      method: 'DELETE'
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        var newItems = this.state.items.filter(item => {
          return item.id != data.id;
        });

        this.setState({ items: newItems });
      });
  }

  updateItem(newItem) {
    fetch(`/api/v1/items/${newItem.id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ item: newItem })
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        var newItems = this.state.items.filter(item => {
          return item.id != newItem.id;
        });

        newItems.push(newItem);

        this.setState({ items: newItems });
      });
  }

  render() {
    return (
      <div>
        <RouterLink />
        <Link to="/new">New Item</Link>
        {this.loadItems()}
      </div>
    );
  }
}
