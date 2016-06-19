import {Meteor} from 'meteor/meteor';
import {Template} from 'meteor/templating';
// import {Tasks} from '../api/tasks.js';

import './task.html';


Template.task.events({
	'click .toggle-checked'(){

		// Set the checked property to the opposite of its current value
		Meteor.call('tasks.setChecked',this._id, !this.checked);
		// Tasks.update(this._id,{
		// 	$set:{checked: !this.checked},
		// });
	},
	'click .delete'(){
		// Tasks.remove(this._id);
		Meteor('tasks.remove',this._id);

	},

});