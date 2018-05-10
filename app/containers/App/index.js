import React from 'react';
import { Switch, Route } from 'react-router-dom';

import EntryPage from 'containers/EntryPage/Loadable';
import ViewPage from 'containers/ViewPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import NavBar from 'components/NavBar';
import CenteredDiv from 'components/CenteredDiv';

export default function App() {
  return (
    <CenteredDiv>
      <NavBar />
      <Switch>
        <Route exact path="/" component={EntryPage} />
        <Route path="/view" component={ViewPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
    </CenteredDiv>
  );
}
