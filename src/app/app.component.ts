import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
title = 'Dojo Mail';
emails = [
{'email':"bill@gates.com"},{'email':"hello@gmail.com"},{'email':"hello@gmail.com"},{'email':"hello@gmail.com"}
];
}
