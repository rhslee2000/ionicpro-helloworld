import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-vibe-form',
  templateUrl: './vibe-form.component.html'
})
export class VibeFormComponent implements OnInit {

	@Output()
	submit = new EventEmitter<FormGroup>();

	form = this.fb.group({
		title: ['', Validators.required],
		comment: [''],
		rating: [0, '']
	});
	
	constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

	onSubmit() {
		let invalid = this.form.invalid;
		if (invalid) {
			console.log('form is invalid!');
			return;
		}
		console.log('submit', this.form.value);
		this.submit.emit(this.form.value);
	}

}
