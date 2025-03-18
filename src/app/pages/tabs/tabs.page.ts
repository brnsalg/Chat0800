import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonTabBar,
  IonTabs,
  IonTabButton,
  IonIcon,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  call,
  callOutline,
  chatbubble,
  chatbubbleOutline,
  chatbubbles,
  chatbubblesOutline,
  cog,
  cogOutline,
} from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [
    IonIcon,
    IonTabButton,
    IonTabs,
    IonTabBar,
    IonTabBar,
    IonIcon,
    CommonModule,
    FormsModule,
  ],
})
export class TabsPage implements OnInit {
  selectedTab = signal<string>('chats');

  constructor() {
    addIcons({
      chatbubbleOutline,
      cogOutline,
      callOutline,
      chatbubblesOutline,
      chatbubble,
      call,
      chatbubbles,
      cog,
    });
  }

  ngOnInit() {}

  getSelected(event: any) {
    this.selectedTab.set(event?.tab);
  }
}
