Ext.define("MyApp.controller.BBSTabPanelController",{
	extend:"Ext.app.Controller",
	alias:"widget.BBSTabPanelController",
	config:{
				refs:{
					bbsBack:"#bbsBack123",
					bbsShouYe:"#bbsShouYe123",
					BBSServiceBusinessList:"#BBSServiceBusinessList",
					bbsMainList:"#bbsMainList",
					BBSTabPanel:"#BBSTabPanel",
					BBSTabCarPanelConfirm:"#BBSTabCarPanelConfirm",
					bbscccallMore:"#bbscccallMore"
				},
				control:{
					bbsBack:{
						tap:"onbbsBackButtonTap"
					},
					bbsShouYe:{
						tap:"onbbsShouYeButtonTap"
					},
					BBSServiceBusinessList:{
						itemsingletap:"onBBSServiceBusinessListitemsingletap"
					},
					bbsMainList:{
						itemsingletap:"onbbsMainListitemsingletap"
					},
					BBSTabPanel:{
						activeitemchange:"onBBSTabPanelactiveitemchange"
					},
					
					BBSTabCarPanelConfirm:{
						tap:"onBBSTabCarPanelConfirmButtonTap"
					},
					bbscccallMore:{
						tap:"onbbscccallMoreButtonTap"
					}
				}
			},
	onbbsBackButtonTap:function(button,e,eOpts){
		var backValue = back.pop();
		Ext.ComponentQuery.query('#bbsTab')[0].setActiveItem("#"+backValue);
		if(back.length==0){
			Ext.getCmp("bbsBack123").setHidden(true);
		}
	},
	onbbsShouYeButtonTap:function(button,e,eOpts){
		Ext.ComponentQuery.query('#carBasePanel')[0].setActiveItem(0);
	},
	onBBSServiceBusinessListitemsingletap:function(dataview, index, target, record, e, eOpts){
		Ext.ComponentQuery.query('#bbsTab')[0].setActiveItem("#BBSLeaveMessage");
		 back.push(dataview.getParent().getId());
	     var carBBSTabPaneCars = Ext.getStore("carBBSTabPaneCars");
	     carBBSTabPaneCars.load();
	     Ext.getCmp("BBSTabCalPanelTheamName").
	     setHtml("<table align='center' ><tr><td width='25%' style='font-size:16pt;font-weight:bold'>主题</td><td>"+record.get("serviceBusinessName")+"</td></tr></table>");
	},
	onbbsMainListitemsingletap:function(dataview, index, target, record, e, eOpts){
		var name = record.get("name");
		Ext.getCmp("bbsBack123").setHidden(false);
		if(name=="商家服务"){
			Ext.getCmp("bbsTab").setActiveItem("#BBSServiceBusinessList");
			var store = Ext.getStore("serviceBusinesses");
			if(!(store.isLoaded())){
				store.load();
			}
		}else if(name=="车辆论坛"){
			Ext.getCmp("bbsTab").setActiveItem("#bbscarBBSListPanel");
			var store = Ext.getStore("carBBSs");
			if(!(store.isLoaded())){
				store.load();
			}
		}else{
			Ext.getCmp("bbsTab").setActiveItem("#bbsknowledgeBaseListPanel");
			var store = Ext.getStore("knowledgeBases");
			if(!(store.isLoaded())){
				store.load();
			}
		}
		back.push(dataview.getParent().getId());
	},
	onBBSTabPanelactiveitemchange:function(container, value, oldValue, eOpts){
		if(value.id=="bbsMobileCenter"){
			location.href="tel:"+037188888880;
		}
		value.setActiveItem(0);
		Ext.getCmp("bbsBack123").setHidden(true);
	},
	onBBSTabCarPanelConfirmButtonTap:function(button,e,eOpts){
		var store = Ext.getStore("carBBSTabPaneCars");
    	var textField = Ext.getCmp("BBSTabCarPanelLeaveMessage");
    	var model = Ext.create("MyApp.model.CarBBSTabPaneCarModel",{
    		"username":"xiaoxiao",
    		"text":textField.getValue()
    	});
    	store.add(model);
    	textField.setValue('');
	},
	onbbscccallMoreButtonTap:function(button,e,eOpts){
		location.href="tel:"+037188888880;
	}
		
	
});