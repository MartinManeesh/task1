import { Component, OnInit, Input, ElementRef, Output ,EventEmitter, ViewChild} from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
@Input('parentData') parentMessage; 
@ViewChild('inputElement',{static:false}) ie:ElementRef;
constructor() { }
@Output() textEvent=new EventEmitter();
  ngOnInit() {
  }
  fireEvent(){
console.log(this.ie)
    this.textEvent.emit(this.ie.nativeElement.value)
  }

}
