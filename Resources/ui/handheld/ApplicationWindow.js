function ApplicationWindow(title) {
	var self = Ti.UI.createWindow({
		title : 'TitanTodo',
		backgroundColor : 'white'
	});

	var newTaskText = Ti.UI.createTextField({
		borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		color : '#336699',
		hintText : 'What needs to be done?',
		returnKeyType : Titanium.UI.RETURNKEY_DONE,
		top : 20,
		width : '90%',
		height : 44
	});

	self.add(newTaskText);
	
	var taskRow = require('ui/common/TaskRow');

	var tableData = [];
	tableData.push(new taskRow('Titulo de la tarea'));
	
	var table = Ti.UI.createTableView({
		data : tableData,
		top : 80
	});

	self.add(table);

	newTaskText.addEventListener('return', function() {
		table.appendRow(new taskRow(newTaskText.value));
		newTaskText.setValue('');
	});

	return self;
};

module.exports = ApplicationWindow;
