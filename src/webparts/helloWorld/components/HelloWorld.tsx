import * as React from 'react';
import type { IHelloWorldProps } from './IHelloWorldProps';

export default class HelloWorld extends React.Component<IHelloWorldProps> {
  public render(): React.ReactElement<IHelloWorldProps> {

    return (
      <> <h1> Hello Vivek and Kamal , bye bye deployer</h1></>
    );
  }
}
