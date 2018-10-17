import { Component, Prop, State } from '@stencil/core';

@Component({
  tag: 'nextflow-counter',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {

  @Prop() beginAt:number = 0;
  @Prop() maximum:number
 
  @State() counter;

  increase(){
    this.counter += 1; 
  }

  reset(){
    this.counter = 0;
  }

  componentWillLoad(){
    console.log('begin at', this.beginAt);
    this.counter = this.beginAt;
  }

  render(){
    return ([
      <h1>{this.counter}</h1>,
      <button onClick={() => this.increase()}>Add</button>,
      <button onClick={() => this.reset()}>Reset</button>
    ]);
  }
}
