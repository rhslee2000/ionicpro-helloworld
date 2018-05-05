import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'app-vibe-form',
  templateUrl: './vibe-form.component.html'
})
export class VibeFormComponent implements OnInit {

	private options: CameraOptions;

	private base64Image: string;

	form = this.fb.group({
		tagline: ['']
	});
	
	constructor(private fb: FormBuilder, private camera: Camera) { }

  ngOnInit() {
	  this.options = {
		  quality: 50,
		  destinationType: this.camera.DestinationType.DATA_URL,
		  encodingType: this.camera.EncodingType.JPEG,
		  mediaType: this.camera.MediaType.PICTURE,
		  correctOrientation: true
	  }
  }

  onChanged() {
	  console.log('login' + this.form.value.tagline);
  }

	onSnap() {
		this.camera.getPicture(this.options).then((imageData) => {
			// imageData is either a base64 encoded string or a file URI
			// If it's base64:
			this.base64Image = 'data:image/jpeg;base64,' + imageData;
			console.log(this.base64Image);
		}, (err) => {
			// Handle error
			console.log('Failed to take photo:', err);
		});
	}

	onSubmit() {
		console.log('submit');
	}

}
