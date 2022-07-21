import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [
    {
      name: 'server1',
      type: 'server',
      content: 'Server 1 content'
    },
    {
      name: 'server2',
      type: 'blueprint',
      content: 'Server 2 content'
    }];
  newServerName = '';
  newServerContent = '';

  onServerAdded(serverData: { serverName: string, serverContent: string}) {
    console.log('app.onServerAdded triggered' + JSON.stringify(serverData));
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: { serverName: string, serverContent: string}) {
    console.log('app.onBlueprintAdded triggered' + JSON.stringify(blueprintData));
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  onChangeFirst() {
    this.serverElements[0].name = 'Changed';
  }
  
  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }
}
