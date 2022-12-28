import { Component, OnInit } from '@angular/core';
import {IPost} from "../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  post:IPost;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(({id}) => {
      this.post = this.router.getCurrentNavigation()?.extras.state?.['post']
    })
  }

  ngOnInit(): void {
  }

}
