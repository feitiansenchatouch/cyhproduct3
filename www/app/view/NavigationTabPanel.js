Ext.define("MyApp.view.NavigationTabPanel",{
	extend:"Ext.tab.Panel",
	alias:"widget.navigationTabPanel",
    config:{
    	items:[
    	       {
    	    	   title:"一键导航",
    	    	   layout:"card",
    	    	   id:"navigationTab",
    	    	   iconCls:"search",
    	    	   items:[
							{
								xtype:"panel",
								layout:"vbox",
								items:[
											{
											    xtype: 'formpanel',
											    flex: 1,
											    height: '',
											    html: '',
											    id: 'navigationFormPanel',
											    items: [
											        {
											            xtype: 'selectfield',
											            id: 'destinationField',
											            label: '目的地',
											            options: [
											                {
											                    text: '清华大学',
											                    value: '清华大学'
											                },
											                {
											                    text: '故宫',
											                    value: '故宫'
											                },
											                {
											                    text: '天安门',
											                    value: '天安门'
											                },
											                {
											                    text: '故宫博物馆',
											                    value: '故宫博物馆'
											                },
											                {
											                    text: '郑州大学',
											                    value: '郑州大学'
											                }
											            ]
											        },
											        {
											            xtype: 'button',
											            docked: 'bottom',
											            id: 'destinationSelectButton',
											            margin: '',
											           // ui: 'confirm-round',
											            width: '',
											            text: '确认'
											        }
											    ]
											},
											{
												 xtype: 'panel',
												 flex: 4,
											     border: 3,
											     centered: false,
											     id: 'mapPanel',
											     margin: '0 auto',
											     style: 'border-color: black; border-style: solid;',
											     width: ''
											}  	       
								       ]
							}
    	    	          ]
    	       },
    	       {
    	    	   title:"呼叫中心",
    	    	   id:"nMobileCenterTab",
    	    	   iconCls:"mobileCenter",
    	    	   items:[
							{
							    xtype: 'panel',
							    height: '100%',
							    id: 'nMobileCenterPanel',
							    style: 'background-color:rgba(2,200,200,0.1);',
							    items: [
							        {
							            xtype: 'label',
							            height: 80,
							            html: '<span style="font-size:20pt;font-weight:bold;">呼叫中心</span>',
							            margin: '0 auto',
							            padding: '10 20',
							            style: '',
							            styleHtmlContent: true,
							            width: 205
							        },
							        {
							            xtype: 'button',
							            id: 'ncallMore',
							            margin: '0 auto',
							            width: 200,
							            text: '重拨'
							        }
							    ]
							}
    	    	          
    	    	          ]
    	       },
    	       {
    	    	   title:"我的私家车",
    	    	   id:"nMyCarTab",
    	    	   iconCls:"myCar"
    	       },
    	       {
    	    	   title:"更多",
    	    	   id:"nMore",
    	    	   iconCls:"more"
    	    		   
    	       },
    	       {
    	    	   xtype:"titlebar",
    	    	   title:'一键导航',
    	    	   docked:"top",
    	    	   items:[
    	    	          {
		                        xtype: 'button',
		                        id: 'nBack',
		                        ui: 'back',
		                        text: '返回'
		                    },
		                    {
		                        xtype: 'button',
		                        align: 'right',
		                        id: 'nShouYe',
		                        ui: 'plain',
		                        iconCls: 'home'
		                    }
    	    	          ]
    	       }
    	       ],
    	       tabBar: {
    	           docked:'bottom',
    	           id: 'navigationTabBar',
    	           scrollable: 'horizontal',
    	           layout: {
    	               pack: 'center',
    	               type: 'hbox'
    	           }
    	       }
    }
    
    
	
});