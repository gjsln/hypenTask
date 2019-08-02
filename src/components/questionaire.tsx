import * as React from 'react';
import '../css/site.css';
import { CreateEditQuestionaire } from './createEditQuestionaire';


const answerArray:Array<any> = [
  {
    id:'k1',
    candidateId:'d4545',
    assignment:'React Test'
  },
  {
    id:'k2',
    candidateId:'d5458',
    assignment:'Angular Test'
  },
  {
    id:'k3',
    candidateId:'d5858',
    assignment:'Full Stack Test'
  }
]

export class Questionaire extends React.Component {
  state = {
    data: answerArray
  };

  render() {
    const items = this.state.data.map((item) =>
    <div  className="questionaire-list col-12" >
      <div>{item.assignment}</div>
      <div><h6>Custom: {item.candidateId}</h6></div>
      </div>
    );
    return (
    <div className='row questionaire col-12'>

      <div className='left-head col-6'>
        <strong>Question</strong>
      </div>

      <div className='right-head col-6'>
        <strong>
          Question Settings&nbsp;
          <i className='fa fa-exclamation-circle' />
        </strong>
      </div>

      <div className='divider' />
      {items.length === 0 ? <div className="no-data col-12">
        <i className="fa fa-folder"></i>
          No Data
      </div> :
      <div className="col-12">
      {items}
      </div>}
      <div className="col-12 space-container">
        <CreateEditQuestionaire />
      </div>
    </div>
  );
    }
};
