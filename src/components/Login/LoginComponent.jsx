import React, { Component } from "react";
import "./login.css"

export default class Login extends Component {

    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log('The form was submitted with the following data:');
        console.log(this.state);
    }


    render() {
        return (
            <div className="Con">
            <div className="auth-wrapper">
            <div className="auth-inner">
            <form  onSubmit={this.handleSubmit}>
                <h3>تسجيل الدخول</h3>

                <div className="form-group">
                    <label>البريد الالكترونى</label>
                    <input type="email" id="email" className="form-control" placeholder="ادخل البريد الالكترونى الخاص بك" name="email" value={this.state.email} onChange={this.handleChange} />
                </div>

                <div className="form-group">
                    <label>كلمة المرور</label>
                    <input type="password" id="password" className="form-control" placeholder="ادخل كلمة المرور الخاص بك"  name="password" value={this.state.password} onChange={this.handleChange}/>
                </div>

              
                <button type="submit" className="btn btn-primary btn-block">تسجيل الدخول</button>
                
            </form>
            </div>
            </div>
            </div>
        );
    }
}
