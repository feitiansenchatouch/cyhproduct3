Ext.define("MyApp.controller.MerchantServiceTabPanelController",{
	extend:"Ext.app.Controller",
	alias:"widget.merchantServiceTabPanelController",
	config:{
		refs:{
			merchantShouYe:"#merchantShouYe",
			washCarList:"#washCarList",
			merchantBack:"#merchantBack",
			mscallMore:"#mscallMore",
			merchantServicesTabPanel:"#merchantServicesTabPanel",
			merchantServiceMainPanelList:"#merchantServiceMainPanelList",
			washCarList:"#washCarList"
		},
		control:{
			merchantShouYe:{
				tap:"onmerchantShouYeButtonTap"
			},
			washCarList:{
				itemsingletap:"onwashCarListitemSingleTap"
			},
			merchantBack:{
				tap:"onmerchantBackButtonTap"
			},
			mscallMore:{
				tap:"onmscallMoreButtonTap"
			},
			merchantServicesTabPanel:{
				activeitemchange:"onmerchantServicesTabPanelactiveitemchange"
			},
			merchantServiceMainPanelTb:{
				activeitemchange:"onmerchantServiceMainPanelTbactiveitemchange"
			},
			merchantServiceMainPanelList:{
				itemsingletap:"onmerchantServiceMainPanelListitemsingletap"
			},
			washCarList:{
				itemsingletap:"onwashCarListitemsingletap"
			}
		}
	},
	onmerchantShouYeButtonTap:function(button,e,eOpts){
		back.splice(0,back.length);
		Ext.getCmp("carBasePanel").setActiveItem(0);
	},
	onwashCarListitemSingleTap:function(dataview, index, target, record, e, eOpts){
		dataview.getParent().getParent().setActiveItem(1);
		Ext.getCmp("merchantBack").show();
		back.push([dataview.getParent().getParent().getId(),dataview.getParent().getId()]);
	},
	onmerchantBackButtonTap:function(button,e,eOpts){
		var backValue = back.pop();
		if(back.length==0){
			Ext.getCmp("merchantBack").setHidden(true);
		}
		Ext.getCmp("merchantServicesTabPanel").getActiveItem().setActiveItem("#"+backValue);
	},
	onmscallMoreButtonTap:function(button,e,eOpts){
		location.href="tel:"+037188888880;
	},
	onmerchantServicesTabPanelactiveitemchange:function(container, value, oldValue, eOpts){
		if(value.id=="msTab"){
			var merchantServicesTabPanel=value;
			merchantServicesTabPanel.setActiveItem(0);
        	merchantServicesTabPanel.getActiveItem().setActiveItem(0);
        	merchantServicesTabPanel.getActiveItem().getActiveItem().setActiveItem(0);
        	merchantServicesTabPanel.getActiveItem().getActiveItem().getActiveItem().setActiveItem(0);
		}else if(value.id=="msMobileCenter"){
			location.href="tel:"+037188888880;
		}
	},
	onmerchantServiceMainPanelTbactiveitemchange:function(container,value,oldvalue,eOpts){
		if(value.id=="xiche"){
			var store = Ext.getStore("washCars");
			if(!(store.isLoaded())){
				store.load();
			}
		}
	},
	onmerchantServiceMainPanelListitemsingletap:function(dataview, index, target, record, e, eOpts){
		
		var name = record.get("name");
		if(name=="洗车"){
			var store = Ext.getStore("washCars");
			if(!(store.isLoaded())){
				store.load();
			}
			Ext.getCmp("msTab").setActiveItem("#washCarListPanel");
		}else if(name=="商品"){
			var store = Ext.getStore("mechantStore");
			if(!(store.isLoaded())){
				store.load();
			}
			Ext.getCmp("msTab").setActiveItem("#merchantListPanel");
		}
		back.push(
			dataview.getParent().getId()
		);
		Ext.getCmp("merchantBack").setHidden(false);
	},
	onwashCarListitemsingletap:function(dataview, index, target, record, e, eOpts){
		back.push(dataview.getParent().getId());
		Ext.getCmp("msTab").setActiveItem("#merchantServiceWashCarDetail");
	}
	
	
});