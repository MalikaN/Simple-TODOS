import {Template} from 'meteor/templating';
import {Tasks} from '../api/tasks.js';

import './task.js';
import './body.html';


Template.body.helpers({

// **To show task list in bullet form**
// tasks:[
// 	{text:'This is task 1'},
// 	{text:'This is task 2'},
// 	{text:'This is task 3'},
// 	],


		tasks(){
			return Tasks.find({},{sort:{createdAt:-1} });

		},
 
	});

Template.body.events({
	'submit .new-task'(event){

	//prevent default browser form submit
	event.preventDefault();

	//Get value from form element
	const target = event.target;
	const text = target.text.value;

	// Insert a task into the collection
	Tasks.insert({

		text,
		createdAt:new Date(),

	});

//clear form

target.text.value='';

},
});

	

