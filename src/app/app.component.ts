import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Dojo Mail';
	emails = [
		{'email':"BILL@gates.com", 'Importance':true, 'Subject':'Python', 'Content':'aodsfjapsjdof'},
		{'email':"ping@gmail.com", 'Importance':false, 'Subject':'Javscript', 'Content':'asdfasdfasdwhatever'},
		{'email':"pong@gmail.com", 'Importance': true, 'Subject':'Kobal', 'Content':'4joti4843535'},
	];
}
