import {Template} from 'meteor/templating';
import {Tasks} from '../api/tasks.js';

import './body.html';


Template.body.helpers({

// **To show task list in bullet form**
// tasks:[
// 	{text:'This is task 1'},
// 	{text:'This is task 2'},
// 	{text:'This is task 3'},
// 	],


		tasks(){
			return Tasks.find({});

		},
 
	});



