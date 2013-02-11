function ApplicationTabGroup(Window) {
	//create module instance
	var self = Ti.UI.createTabGroup();
	
	//create app tabs
	var allWin = new Window('All'),
		activeWin = new Window('Active'),
		doneWin = new Window('Done');
	
	var allTab = Ti.UI.createTab({
		title: 'All',
		icon: '/images/KS_nav_ui.png',
		window: allWin
	});
	allWin.containingTab = allTab;
	
	var activeTab = Ti.UI.createTab({
		title: 'Active',
		icon: '/images/KS_nav_views.png',
		window: activeWin
	});
	activeWin.containingTab = activeTab;
	
	var doneTab = Ti.UI.createTab({
		title: 'Done',
		icon: '/images/KS_nav_views.png',
		window: doneWin
	});
	doneWin.containingTab = doneTab;
		
	
	self.addTab(allTab);
	self.addTab(activeTab);
	self.addTab(doneTab);
	
	return self;
};

module.exports = ApplicationTabGroup;
