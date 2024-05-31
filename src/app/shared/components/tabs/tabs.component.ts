import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  tabArr = [
    {
      title : "html",
      content : `<Strong>React</Strong> Lorem ipsum dolor sit amet, consectetur 
                adipisicing elit. Cum distinctio natus corrupti ab ut vitae perferendis, 
                adipisci tempora molestias amet eos! Sit consequatur accusantium tempora!`
    },
    {
      title : "css",
      content : `<Strong>CSS</Strong> Lorem ipsum dolor sit amet, consectetur 
                adipisicing elit. Cum distinctio natus corrupti ab ut vitae perferendis, 
                adipisci tempora molestias amet eos! Sit consequatur accusantium tempora!`
    },
    {
      title : "javascript",
      content : `<Strong>Javascript</Strong> Lorem ipsum dolor sit amet, consectetur 
                adipisicing elit. Cum distinctio natus corrupti ab ut vitae perferendis, 
                adipisci tempora molestias amet eos! Sit consequatur accusantium tempora!`
    }
  ]
  num : number = 5;
  selectedSkill : string = 'html';
  selectedFramework : string = "angular";
  constructor() { }

  ngOnInit(): void {
  }
  showFrameWork(val: string) {
    this.selectedFramework = val
  }
}
