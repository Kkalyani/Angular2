import {Component} from 'angular2/core';
import {LikeComponent} from './like.component';

@Component({
    selector: 'my-app',
    template: `
    <like [totallikes]="tweet.totallikes" [iLike]="tweet.iLike"></like>
    `,
    directives : [LikeComponent]
})
export class AppComponent {
     tweet = {
        totallikes:10,
        iLike:false
     }
     
}