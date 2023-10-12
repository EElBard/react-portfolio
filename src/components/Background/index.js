import React from 'react';
import './index.scss';

function MyCodeComponent() {
  return (
    <div className="code-background">
      <code className="code-text">
        {`
          for (let i = 0; i < 10; i++) {
            console.log("Hello, World!");
          }
        `}
      </code>
    </div>
  );
}

export default MyCodeComponent;
