import { Component } from '@angular/core';
import { Content } from '../content'
import { ContentService } from '../services/content.service'
import { AppRoutingModule } from '../app-routing.module'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-component-detail',
  templateUrl: './component-detail.component.html',
  styleUrls: ['./component-detail.component.scss']
})
export class ComponentDetailComponent {
  id: number;
  content: Content;

  constructor(private route: ActivatedRoute,
    private contentService: ContentService) {}

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
    this.id = +(params.get('id') ?? 0); // uses the +unary operator

    this.route.paramMap.subscribe((params) => {
      this.id = Number(params.get("id") ?? 0);
      this.contentService.getContentItem(this.id)
      .subscribe((c) => {
      this.content = c;
      
      });
    });

    });
    }

    clickHandler(){
      console.log('item id is:' + this.content.id);
      console.log('item title is:' + this.content.title);
    };
}
