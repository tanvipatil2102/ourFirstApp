import { Component } from "@angular/core";

@Component({
    selector : "app-list",
    templateUrl : "./list.component.html",
    styleUrls : ["./list.component.scss"]
})
export class ListComponent {
    skills : Array<string> = ["JS", "TS", "CSS", "SASS"]
    constructor(){
        
    }
}