import React from 'react';
import ReactDOM from "react-dom";
import Modal from 'react-modal';

// import './App.css';

class Register extends React.Component {
  state = { show: true };

  showModal = () => {
	  console.log('showModal', this)
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
	  console.log('render', this.state)
    return (
      <main>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <div class="modal fade" id="register" role="dialog">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h3 class="modal-title w-100 text-center">Register</h3>
						<button type="button" class="close" data-dismiss="modal">&times;</button>
					</div>
					<div class="modal-body">
						<div class="container-fluid">
							<form>
								<div class="form-row">
									<div class="form-group col-12">
										<label class="sr-only" for="firstName">First Name</label>
										<input type="text" class="form-control form-control-sm text-center" id="firstName" placeholder="First Name"></input>
									</div>
									<div class="form-group col-12">
										<label class="sr-only" for="lastName">Last Name</label>
										<input type="text" class="form-control form-control-sm text-center" id="lastName" placeholder="Last Name"></input>
									</div>
									<div class="form-group col-12">
										<label class="sr-only" for="registerEmail">Email address</label>
										<input type="email" class="form-control form-control-sm text-center" id="registerEmail" placeholder="Email Address"></input>
									</div>
									<div class="form-group col-12">
										<label class="sr-only" for="registerPassword">Password</label>
										<input type="password" class="form-control form-control-sm text-center" id="registerPassword" placeholder="Password"></input>
									</div>
									<div class="col">
											<div class="custom-control custom-checkbox">
											  <input type="checkbox" class="custom-control-input" id="customCheckone" name="customCheckone"></input>
											  <label class="custom-control-label" for="customCheckone">Remember Me</label>
											</div>
									</div>
								</div>
								<div class="form-row">
									<button type="button" class="btn btn-sm ml-auto" data-dismiss="modal">Cancel</button>
									<button type="submit" class="btn btn-sm ml-1">Create Account</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
        </Modal>
        <button type="button" onClick={this.showModal}>
          open
        </button>
      </main>
    );
  }
}

const container = document.createElement("div");
document.body.appendChild(container);
ReactDOM.render(<Register />, container);

export default Register;
