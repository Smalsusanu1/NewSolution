import * as React from 'react';
import type { IHelloWorldProps } from './IHelloWorldProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class HelloWorld extends React.Component<IHelloWorldProps> {
  public render(): React.ReactElement<IHelloWorldProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName
    } = this.props;

    return (
      <> <h1> Hello Vivek</h1></>
    );
  }
}
