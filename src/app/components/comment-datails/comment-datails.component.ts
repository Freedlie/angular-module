import { Component, OnInit } from '@angular/core';
import {IComment} from "../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-comment-datails',
  templateUrl: './comment-datails.component.html',
  styleUrls: ['./comment-datails.component.css']
})
export class CommentDatailsComponent implements OnInit {

  comment: IComment;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(({id})=>{
      this.comment = this.router.getCurrentNavigation()?.extras.state?.['comment']
    })
  }

  ngOnInit(): void {
  }

}
