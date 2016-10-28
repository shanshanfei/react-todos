import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
	render() {
		return (
			<div>
	    		<h1>Hello</h1>
	    		<h4><p></p></h4>
	    		<div class="w"></div>
	    		<div className="eee">{this.props.title}</div>
	    		<div class="aaa">{this.props.children}</div>

	    		<div className="qwqw">{this.props.children}</div>
	    	</div>
		);
	}
}

ReactDOM.render(<Hello />, document.getElementById('hello'));