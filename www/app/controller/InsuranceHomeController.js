Ext.define("MyApp.controller.InsuranceHomeController",{
	extend:"Ext.app.Controller",
	alias:"insuranceHomeController",
	config:{
		refs:{
			ihShouYe:"#ihShouYe",
			ihBack:"#ihBack",
			insuranceHomeTabPanel:"#insuranceHomeTabPanel",
			ihcallMore:"#ihcallMore",
			insuranceForumList:"#insuranceForumList",
			ihBBSTabCarPanelConfirm:"#ihBBSTabCarPanelConfirm",
			ihMyCarTabPaneltoLogin:"#ihMyCarTabPaneltoLogin",
			ihMyCarTabPanelToZhuCe:"#ihMyCarTabPanelToZhuCe"
		},
		control:{
			ihShouYe:{
				tap:"onihShouYeButtonTap"
			},
			ihBack:{
				tap:"onihBackButtonTap"
			},
			insuranceHomeTabPanel:{
				activeitemchange:"oninsuranceHomeTabPanelactiveItemChange"
			},
			ihcallMore:{
				tap:"onihcallMoreButtonTap"
			},
			insuranceForumList:{
				itemsingletap:"oninsuranceForumListitemsingleTap"
			},
			ihBBSTabCarPanelConfirm:{
				tap:"onihBBSTabCarPanelConfirmButtonTap"
			},
			ihMyCarTabPaneltoLogin:{
            	tap:"onihMyCarTabPaneltoLoginTap"
            },
            ihMyCarTabPanelToZhuCe:{
            	tap:"ontoZhuceButtonTap"
            }
		}
	},
	onihShouYeButtonTap:function(button,e,eOpts){
		back.splice(0,back.length);//���back����
		button.getParent().getParent().getParent().getParent().setActiveItem(0);
	},
	onihBackButtonTap:function(button,e,eOpts){
		var backValue = back.pop();
		if(back.length==0){
			button.hide();
		}
		button.getParent().getParent().getParent().getActiveItem().setActiveItem("#"+backValue);
	},
	oninsuranceHomeTabPanelactiveItemChange:function(container, value, oldValue, eOpts){
		if(value.id=="ihTab"){
			var insuranceComponysStore = Ext.getStore("insuranceComponys");
			if(!(insuranceComponysStore.isLoaded())){
				insuranceComponysStore.load();
			}
		}else if(value.id=="ihMobileCenterTab"){
			location.href="tel:"+037188888880;
		}else if(value.id=="ihBBSTab"){
			var insuranceForumJsonStore = Ext.getStore("insuranceForumJsonStore");
			if(!(insuranceForumJsonStore.isLoaded())){
				insuranceForumJsonStore.load();
			}
			insuranceForumJsonStore.load();
			
		}
		Ext.get("ihBack").hide();
        value.setActiveItem(0);
	},
	onihcallMoreButtonTap:function(button,e,eOpts){
		location.href="tel:"+037188888880;
	},
	oninsuranceForumListitemsingleTap:function(dataview, index, target, record, e, eOpts){
		Ext.getStore("checkCarBBSLMPS").load();
		Ext.getCmp("ihBBSTabCalPanelTheamName")
		.setHtml("<table align='center' ><tr><td width='25%' " +
				"style='font-size:16pt;font-weight:bold'>" +
				"主题：</td><td>"+record.get("name")+"</td></tr></table>");
		dataview.getParent().getParent().setActiveItem("#ihBBSLeaveMessagePanel");
		back.push(dataview.getParent().getId());
		Ext.getCmp("ihBack").show();
	},
	onihBBSTabCarPanelConfirmButtonTap:function(button,e,eOpts){
		var store = Ext.getStore("checkCarBBSLMPS");
    	var textField = Ext.getCmp("ihBBSTabCarPanelLeaveMessage");
    	var model = Ext.create("MyApp.model.CheckCarBBSLMP",{
    		"username":"xiaoxiao",
    		"text":textField.getValue()
    	});
    	store.add(model);
    	textField.setValue('');
	},
	onihMyCarTabPaneltoLoginTap:function(button,e,eOpts){
    	Ext.getCmp("carBasePanel").setActiveItem("#loginPanel");
    }
});