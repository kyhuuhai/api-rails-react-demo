class NewItem extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     name: '',
  //     description: ''
  //   };

  //   this.handleNameChange = this.handleNameChange.bind(this);
  //   this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
  //   this.handleSubmitForm = this.handleSubmitForm.bind(this);
  // }

  // handleNameChange(event) {
  //   this.setState({ name: event.target.value });
  // }

  // handleDescriptionChange(event) {
  //   this.setState({ description: event.target.value });
  // }

  // handleSubmitForm(e) {
  //   e.preventDefault();
  //   item = { name: this.state.name, description: this.state.description };

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
  //       this.props.navigation.navigate('Main');
  //     });
  // }

  render() {
    return (
      <div />
      // <form onSubmit={this.handleSubmitForm}>
      //   <div className="form-group">
      //     <input
      //       type="text"
      //       className="form-control"
      //       placeholder="Enter the name of the item"
      //       onChange={this.handleNameChange}
      //     />
      //   </div>
      //   <div className="form-group">
      //     <input
      //       type="text"
      //       className="form-control"
      //       placeholder="Enter the description of the item"
      //       onChange={this.handleDescriptionChange}
      //     />
      //   </div>
      //   <button type="submit">Submit</button>
      // </form>
    );
  }
}
