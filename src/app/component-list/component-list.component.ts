import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Content } from '../content';
import { ContentService } from '../services/content.service'


@Component({
  selector: 'app-component-list',
  templateUrl: './component-list.component.html',
  styleUrls: ['./component-list.component.scss']
})

export class ComponentListComponent {
  contentListItems: Content[]=[];

  constructor(private contentService: ContentService){
  }

  clickHandler(index:number){
    console.log('item id is:' + this.contentListItems[index].id);
    console.log('item title is:' + this.contentListItems[index].title);
  };

  ngOnInit() {

    this.contentService.getContent().subscribe(content => this.contentListItems = content);
    }
  
  addContentToList(newContentItem: Content): void {
    this.contentService.addContent(newContentItem)
    .subscribe(newContentFromServer =>
    this.contentListItems.push(newContentFromServer)
    );
  }
    
  updateContentInList(contentItem: Content): void {
    this.contentService.updateContent(contentItem)
    .subscribe(() =>
    console.log("Content updated successfully")
    );
  }   
  
  clickEvent(v:string){
    alert(v);
  }
}


