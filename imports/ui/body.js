import {Meteor} from 'meteor/meteor';
import {Template} from 'meteor/templating';
import {ReactiveDict} from 'meteor/reactive-dict';




import {Tasks} from '../api/tasks.js';

import './task.js';
import './body.html';



Template.body.onCreated(function bodyOnCreated(){
this.state = new ReactiveDict();

});




Template.body.helpers({

// **To show task list in bullet form**
// tasks:[
// 	{text:'This is task 1'},
// 	{text:'This is task 2'},
// 	{text:'This is task 3'},
// 	],


		tasks(){
			const instance = Template.instance();
			if(instance.state.get('hideCompleted'))
			{
				//if hide completed is checked,filter tasks
				return Tasks.find({ checked:{ $ne:true } },{ sort:{createdAt:-1 } });

			}
			//otherwise return all of the tasks
			return Tasks.find({},{sort:{createdAt:-1} });

		},

		incompleteCount(){

			return Tasks.find({ checked: {$ne: true } }).count();
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

	Meteor.call('tasks.insert',text);
// 	Tasks.insert({

// 		text,
// 		createdAt:new Date(),
// s
// 	});

// Tasks.insert({
// 	text,
// 	createdAt:new Date(),
// 	owner:Meteor.userId(),
// 	username: Meteor.user().username,

// });



//clear form

target.text.value='';

},

'change .hide-completed input'(event, instance){
	instance.state.set('hideCompleted',event.target.checked);

},



});

	

