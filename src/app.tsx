import * as React from 'react';
import { Header, Questionaire } from './components';

export const App: React.StatelessComponent<{}> = () => {
  return (
    <div className='container-fluid'>
      <Header />
      <Questionaire />
    </div>
  );
};
