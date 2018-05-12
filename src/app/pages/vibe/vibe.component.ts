import { Component, OnInit } from '@angular/core';
import { VibeService } from './vibe.service';
import { HttpErrorResponse } from '@angular/common/http/public_api';

@Component({
  selector: 'app-vibe',
  templateUrl: './vibe.component.html',
  providers: [VibeService]
})
export class VibeComponent implements OnInit {

	constructor(private vibeService : VibeService) { }


  ngOnInit() {
  }

  submitVibe($event): void {
	  console.log('sending vibe:', JSON.stringify($event));
	  this.vibeService.postVibe($event).subscribe(
	  	result=> {
				console.log('success!');
	  	},
	  	(error: HttpErrorResponse) => console.log(error)
	  )
  }
}
