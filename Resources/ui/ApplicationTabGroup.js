function ApplicationTabGroup(Window) {
	//create module instance
	var self = Ti.UI.createTabGroup();
	
	//create app tabs
	var mainWin = new Window('All');
	var mainTab = Ti.UI.createTab({
		title: 'All',
		icon: '/images/KS_nav_ui.png',
		window: mainWin
	});
	mainWin.containingTab = mainTab;	
	
	self.addTab(mainTab);
	
	return self;
};

module.exports = ApplicationTabGroup;
