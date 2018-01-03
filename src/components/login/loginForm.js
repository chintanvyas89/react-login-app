"use strict";

var React = require('react');

var LoginForm = React.createClass({
    render: function() {
        return (
            <div className="col-sm-4">
                <form>
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="text"
                            name="username"
                            className="form-control"
                            placeholder="Username"
                            ref="username"
                            onChange={this.props.onChange}
                            value={this.props.user.username} />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password"
                            name="pass"
                            className="form-control"
                            placeholder="Password"
                            ref="pass"
                            onChange={this.props.onChange}
                            value={this.props.user.pass} />
                    </div>
                    <input type="submit" name="login" className="login modal-submit btn btn-primary" value="Login" onClick={this.props.onSave} />
                </form>
            </div>
        );
    }
});

module.exports = LoginForm;


