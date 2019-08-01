import * as React from 'react';
import '../css/site.css';

export const Questionaire: React.StatelessComponent<{}> = () => {
  return (
    <div className='row questionaire col-8'>
      <div className='left-head'>
        <strong>Question</strong>
      </div>
      <div className='right-head'>
        <strong>
          Question Settings&nbsp;
          <i className='fa fa-exclamation-circle' />
        </strong>
      </div>
      <hr className='divider' />
    </div>
  );
};
