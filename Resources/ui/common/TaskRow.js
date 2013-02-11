function TaskRow(title) {
	self = Titanium.UI.createTableViewRow(); 
	var active = 1;
	
	var taskView = Titanium.UI.createView({
		backgroundColor : '#fefefe',
		width : '90%',
		height : 44
	});
	
	var stateImg = Ti.UI.createImageView({
		image: '/images/pending.jpg',
		left:1,
		width: 50,
		height: 44
	});
	
	var tachadoImg = Ti.UI.createImageView({
		image: '/images/tachado.jpg',
		width: 200,
		left: 55,
		height: 2
	});
	
	var removeImg = Ti.UI.createImageView({
		image: '/images/remove.jpg',
		right:1,
		width: 27,
		height: 44
	});
	
	
	var taskTitle = Ti.UI.createLabel({
		text : title,
		color: '#000',
		left: 60
	});
	taskView.add(taskTitle);
	
	self.add(taskView);
	self.add(removeImg)
	self.add(stateImg);
	
	self.height = 'auto';
	
	stateImg.addEventListener('click', function() {
		if (active == 1){
			stateImg.image= '/images/done.jpg';
			taskTitle.color = '#a8a8a8';
			taskView.add(tachadoImg);
			active = 0;
		}
		else {
			stateImg.image= '/images/pending.jpg';
			taskView.remove(tachadoImg);
			taskTitle.color = '#000';
			active = 1;
		}
		
	});
	return self;
};

module.exports = TaskRow;
