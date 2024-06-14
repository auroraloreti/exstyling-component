import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; 

function Welcome() {
    return (
        <div className="welcome">
            <h1>Welcome to My Website</h1>
            <p>This is a simple welcome component with styled background and border.</p>
        </div>
    );
}

ReactDOM.render(<Welcome />, document.getElementById('root'));