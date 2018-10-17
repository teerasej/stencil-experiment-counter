import { Component, Prop, State } from '@stencil/core';

@Component({
  tag: 'pon-component',
  styleUrl: 'my-component.css',
  shadow: true
})        
export class MyComponent {
  @Prop() first: string;
  @Prop() middle: string;
  @Prop() last: string;

  @State() currentCalorie: number = 200;

  format(): string {
    return (
      (this.first || '') +
      (this.middle ? ` ${this.middle}` : '') +
      (this.last ? ` ${this.last}` : '') +
      (this.currentCalorie)
    );
  }

  addCalorieClicked(e){
    console.log(e);
    console.log('ปุ่มเพิ่มแคลอรี่ถูกกด');
    this.currentCalorie += 10;
    console.log(this.currentCalorie);
  }

  removeCalorieClicked(e){
    console.log(e);
    console.log('ปุ่มลดแคลอนี่ถูกกด');
    this.currentCalorie -= 10;  
    console.log(this.currentCalorie);
  }

  render() {
    // return <div>Hello, World! I'm {this.format()}</div>;
    return ([
      <div>Hello, World! I'm {this.first} {this.middle} {this.last} {this.currentCalorie}</div>,
      <button type="button" class="btn btn-primary" onClick={(e) => this.addCalorieClicked(e)}>เพิ่มแคลอรี่</button>,
      <button type="button" class="btn btn-primary" onClick={(e) => this.removeCalorieClicked(e)}>ลดแคลอรี่</button>
      ]);
  }

  componentWillLoad(){
    console.log('จะโหลดแล้วนะ นะ นะ');
    console.log(this.first);
    console.log(this.currentCalorie);
  }

  componentDidLoad(){
    console.log('โหลดเสร็จ (render) ไปแล้ว นะ นะ นะ');
  }
}
