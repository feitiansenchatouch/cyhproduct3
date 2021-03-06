/*
 * File: app/view/CarHomeTabPanel.js
 *
 * This file was generated by Sencha Architect version 2.2.3.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */
Ext.define("MyApp.view.CheckCarTabPanel",{
	 extend: 'Ext.tab.Panel',
	 alias: 'widget.checkCarTabPanel',
	 config:{
		 id:'checkCarTabPanel',
		 items:[
		        {
		        	xtype:'container',
		        	title:'审车服务',
		        	iconCls:'service',
		        	id:'ccCheckCarTab',
		        	layout:{
		        		type:'card'
		        	},
		        	items:[
		        	       {
		        	    	   xtype:'panel',
		        	    	   id:'checkCarListPanel',
		        	    	   height:'100%',
		        	    	   items:[
		        	    	          {
		        	    	        	  xtype:'list',
		        	    	        	  id:'checkCarMainList',
		        	    	        	  height:'100%',
		        	    	        	  store:'checkCars',
		        	    	        	  itemTpl:[
		        	    	        	           '<div>{checkText}</div>'
		        	    	        	           ]
		        	    	   		  }
		        	    	          ]
		        	    		   
		        	       },
		        	       {
		                        xtype: 'panel',
		                        id: 'checkCarDetailListPanel',
		                        items: [
		                            {
		                                xtype: 'list',
		                                height: '100%',
		                                id: 'checkCarDetailList',
		                                itemTpl: [
		                                    '<div>{text}</div>'
		                                ],
		                                store: 'checkCarDetails'
		                            }
		                        ]
		                    }
		        	       ]
		        	
		        },
		        {
		        	xtype:'container',
		        	title:'呼叫中心',
		        	iconCls:'mobileCenter',
		        	id:'ccMobileCenterTab',
		        	layout:{
		        		type:'card'
		        	},
		        	items:[
		        	       	{
		                        xtype: 'panel',
		                        height: '100%',
		                        id: 'mobileCenterPanel',
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
		                                id: 'cccallMore',
		                                margin: '0 auto',
		                                width: 200,
		                                text: '重拨'
		                            }
				        	       ]
		        	       	}
		        	      ]
		        },
		        
		        {
		        	xtype:'container',
		        	title:'论坛',
		        	iconCls:'bbs',
		        	id:'ccBBSTab',
		        	layout:{
		        		type:'card'
		        	},
		        	items:[
							{
							    xtype: 'panel',
							    id: 'checkCarBBSPanel',
							    items: [
							        {
							            xtype: 'list',
							            height: '100%',
							            id: 'checkCarBBSPanelList',
							            itemTpl: [
							                '<div>{theamName}</div>'
							            ],
							            store: 'checkCarBBSs'
							        }
							    ]
							},
							{
		                        xtype: 'panel',
		                        height: '100%',
		                        id: 'checkCarBBSLeaveMessagePanel',
		                        layout: {
		                            type: 'vbox'
		                        },
		                        items: [
		                            {
		                                xtype: 'panel',
		                                bottom: '',
		                                docked: 'bottom',
		                                id: 'checkCarBBSLMPFormPanel',
		                                items: [
		                                    {
		                                        xtype: 'textfield',
		                                        id: 'checkCarBBSLMPTextAreaField',
		                                        label: '留言',
		                                        maxRows:2,
		                                        length:200,
		                                        placeHolder:'请输入留言'
		                                    },
		                                    {
		                                        xtype: 'button',
		                                        id: 'checkCarBBSLMPConfirm',
		                                        ui: 'confirm',
		                                        text: '确认'
		                                    }
		                                ]
		                            },
		                            {
		                                xtype: 'label',
		                                id: 'checkCarBBSLMPTheamName',
		                                height:'10%',
		                                readOnly: true
		                            },
		                            {
		                                xtype: 'list',
		                                height: '100%',
		                                id: 'checkCarBBSLMPList',
		                                style: 'background-color: rgba(0,0,0,0.5);',
		                                itemTpl: [
		                                    '<table>',
		                                    '    <tr>',
		                                    '        <td>',
		                                    '            <b>{username}:</b>',
		                                    '        </td>',
		                                    '        <td>',
		                                    '            {text}',
		                                    '        </td>',
		                                    '    </tr>',
		                                    '</table>'
		                                ],
		                                store: 'checkCarBBSLMPS'
		                            }
		                        ]
		                    }
		        	       ]
		        },
		        {
		        	xtype:'container',
		        	title:'我的私家车',
		        	iconCls:'myCar',
		        	id:'ccMyCarTab',
		        	layout:{
		        		type:'card'
		        	}
		        },
		        {
		        	xtype:'container',
		        	title:'更多',
		        	iconCls:'more',
		        	id:'ccMoreTab',
		        	layout:{
		        		type:'card'
		        	}
		        },
		        {
		        	xtype:'titlebar',
			    	id:'checkCarTitleBar',
			    	title:'审车服务',
			    	docked:'top',
			    	items:[
			    	       {
			    	    	   xtype:'button',
			    	    	   id:'ccBack',
			    	    	   text:'返回',
			    	    	   ui:'back',
			    	       },
			    	       {
			    	    	   xtype:'button',
			    	    	   id:'ccShouYe',
			    	    	   ui:'plain',
			    	    	   iconCls:'home',
			    	    	   align:'right'
			    	       }
			    	      ]
			    		
			    	
			    }
		     ],
		    tabBar: {
			    docked: 'bottom',
			    id: 'checkCarTabBar',
			    scrollable: 'horizontal',
			    layout: {
			        pack: 'center',
			        type: 'hbox'
			    }
		    }
		   
	 }
	
	
});