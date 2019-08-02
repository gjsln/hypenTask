import * as React from "react";
import "../css/site.css";

export class CreateEditQuestionaire extends React.Component {
  state = {
    show: false
  };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div>
        <ModalShow show={this.state.show} handleClose={this.hideModal} />
        <button
          type="button"
          onClick={this.showModal}
          className="btn btn-primary"
        >
          Add Question
        </button>
      </div>
    );
  }
}

const ModalShow = ({ handleClose, show }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <h3>Add a custom question</h3>
        <button onClick={handleClose} className="btn btn-position">
          <i className="fa fa-times" />
        </button>
        <div className="modal-container">
        <div className="row">
          <div className="form-group">
                <label>Question</label>
                <div><input type="text" className="form-control" placeholder="Questions"/></div>
            </div>
        </div>
        <div className="row">
          <div className="form-group">
                <label>Answers</label>
                <input type="text" className="form-control" placeholder="Answers"/>
                <input type="text" className="form-control" placeholder="Answers"/>
                <input type="text" className="form-control" placeholder="Answers"/>
            </div>
        </div>
        <button
          type="button"
          className="btn btn-primary"
        >
          Add Answers
        </button>
        </div>
        <div>
        <button
          type="button"
          className="btn btn-primary btn-save"
        >
          Save Changes
        </button>
        </div>
      </section>
    </div>
  );
};
