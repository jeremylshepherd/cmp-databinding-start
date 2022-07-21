import { Component, Input, Output, OnInit, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  newServerName: string;
  newServerContent: string;
  @ViewChild('serverContentInput', { static: true }) serverContentInput: ElementRef;
  

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(serverName: string) {
    console.log('cockpit.onAddServer triggered: ', this.serverContentInput);
    
    this.serverCreated.emit({
      serverName: serverName,
      serverContent: this.serverContentInput.nativeElement.value
    });
    this.resetForm();
  }

  onAddBlueprint(serverName: string) {
    console.log('cockpit.onAddServer triggered: ', this.serverContentInput);
    this.blueprintCreated.emit({
      serverName: serverName,
      serverContent: this.serverContentInput.nativeElement.value
    });
    this.resetForm();
  }

  resetForm() {
    this.newServerName = '';
    this.newServerContent = '';
  }

}
