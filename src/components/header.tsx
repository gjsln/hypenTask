import * as React from 'react';

export const Header: React.StatelessComponent<{}> = () => {
  return (
    <div className='row'>
      <h2>Custom questions</h2>
      <h6>You must add at least one question to launch a survey</h6>
    </div>
  );
};
