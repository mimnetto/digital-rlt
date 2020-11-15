import React, {Component} from 'react';
import Typist from 'react-typist';

export default class Type extends React.Component {
  constructor(props) {
  super(props)
  this.state = {
   visible:false,
   value: ''};

       this.handleChange = this.handleChange.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
     }

     handleChange(event) {
       this.setState({value: event.target.value});
     }
     handleSubmit(event) {
       alert('A name was submitted: ' + this.state.value);
       event.preventDefault();
     }
  render() {
    return (
      <Typist >
        ... Hello ... ?
          <Typist.Delay ms={1200}  />
          <br />
          <br />
          Can you see this?
          <Typist.Delay ms={2500}  />
          <br />
          <br />
          ...Finally connected.
          <Typist.Delay ms={1200}  />
          <br />
          <br />
          Thank god.
          <Typist.Delay ms={1200}  />
          <br />
          <br />
            <form onSubmit={this.handleSubmit}>
              <label>
                Password:
                <input type="text" value={this.state.value} className={this.state.visible?'fadeIn':'fadeOut'} onChange={this.handleChange} />
              </label>
                <input type="submit" value="Submit" />
              </form>
      </Typist>
    );
  }
}
