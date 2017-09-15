import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Dojo Mail';
	emails = [
		{'email':"bill@gates.com", 'Importance':'High', 'Subject':'Python', 'Content':'aodsfjapsjdof'},
		{'email':"ping@gmail.com", 'Importance':'Medium', 'Subject':'Javscript', 'Content':'asdfasdfasdwhatever'},
		{'email':"pong@gmail.com", 'Importance':'Okish', 'Subject':'Kobal', 'Content':'4joti4843535'}
	];
}
