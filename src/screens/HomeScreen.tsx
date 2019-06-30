import * as React from 'react';
import { RouteComponentProps } from '@reach/router';
import { Typography } from '@material-ui/core';

function HomeScreen(props: RouteComponentProps) {

  return (
    <Typography variant="h4">My Library</Typography>
  )
}

export default HomeScreen;
