class Item extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editable: false,
      editName: '',
      editDescription: ''
    };

    this.editName = this.editName.bind(this);
    this.editDescription = this.editDescription.bind(this);
  }

  handleEdit() {
    this.setState({ editable: !this.state.editable });

    if (this.state.editable) {
      this.props.updateItem({
        id: this.props.item.id,
        name: this.state.editName,
        description: this.state.editDescription
      });
    }
  }

  editName(event) {
    this.setState({ editName: event.target.value });
  }

  editDescription(event) {
    this.setState({ editDescription: event.target.value });
  }

  submitRemoveItem(id) {
    this.props.removeItem(id);
  }

  render() {
    if (this.state.editable) {
      var name = (
        <input
          type="text"
          className="form-control"
          placeholder="Edit the name of the item"
          onChange={this.editName.bind(this)}
        />
      );

      var description = (
        <input
          type="text"
          className="form-control"
          placeholder="Edit the description of the item"
          onChange={this.editDescription.bind(this)}
        />
      );

      var buttonText = 'Submit';
      var removeButton = '';
    } else {
      var name = <h3>{this.props.item.name}</h3>;
      var description = <p>{this.props.item.description}</p>;
      var removeButton = (
        <button onClick={this.submitRemoveItem.bind(this, this.props.item.id)}>
          Remove
        </button>
      );
      var buttonText = 'Edit';
    }

    return (
      <div>
        {name}
        {description}
        <button onClick={this.handleEdit.bind(this)}>{buttonText}</button>
        {removeButton}
      </div>
    );
  }
}
