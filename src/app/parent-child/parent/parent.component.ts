import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  channelNameInParent = ""
  isReceived = "";

  constructor(){}

  ngOnInit(): void {
  }

  receiveMessage(msg:any){
    console.log(msg)
    this.isReceived = msg;
  }
}
