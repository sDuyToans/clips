import { Component, ContentChildren, AfterContentInit, QueryList  } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.css']
})
export class TabsContainerComponent implements AfterContentInit {

  @ContentChildren(TabComponent) tabs: QueryList<TabComponent> = new QueryList()
  constructor(){

  }

  selectTab(tab: TabComponent) {
    this.tabs?.forEach(tab => {
      tab.active = false;
    })

    tab.active = true;

    return false; // cach 2 cua preventDefault()
  }

  ngAfterContentInit(): void {
    const activeTab = this.tabs?.filter(
      tab => tab.active
    )
    if(!activeTab || activeTab.length === 0){
      this.selectTab(this.tabs?.first);
    }
  }
}
