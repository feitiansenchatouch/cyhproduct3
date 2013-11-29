Ext.define("MyApp.controller.NavigationTabPanelController",{
	extend:"Ext.app.Controller",
	alias:"widget.navigationTabPanelController",
	config:{
		refs:{
			destinationSelectButton:"#destinationSelectButton",
			navigationTab:"#navigationTab",
			ncallMore:"#ncallMore",
			nShouYe:"#nShouYe"
		},
		control:{
			destinationSelectButton:{
				tap:"ondestinationSelectButtonTap"
			},
			navigationTab:{
				activeitemchange:"onactiveitemchangeactiveItemChange"
			},
			ncallMore:{
				tap:"onncallMoreButtonTap"
			},
			nShouYe:{
				tap:"onnShouYeButtonTap"
			}
		}
	},
	ondestinationSelectButtonTap:function(button,e,eOpts){
		 map = new BMap.Map('mapPanel');
	        map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
	        var driving = new BMap.DrivingRoute(map, {renderOptions:{map: map, autoViewport: true}});

	        map.addControl(new BMap.NavigationControl({anchor: BMAP_ANCHOR_BOTTOM_RIGHT, type: BMAP_NAVIGATION_CONTROL_ZOOM})); 

	        var destination=Ext.getCmp('destinationField').getValue();
	        driving.search("天安门",destination);
	},
	onactiveitemchangeactiveItemChange:function(container, value, oldValue, eOpts){
		if(value.id=="nMobileCenterTab"){
			location.href="tel:"+037188888880;
		}
	},
	onncallMoreButtonTap:function(button,e,eOpts){
		location.href="tel:"+037188888880;
	},
	onnShouYeButtonTap:function(button,e,eOpts){
		back.splice(0,back.length);
		button.getParent().getParent().getParent().getParent().setActiveItem(0);
	}
		
});