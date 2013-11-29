Ext.define("MyApp.view.BBSTabPanel",{
	extend:"Ext.tab.Panel",
	alias:"widget.BBSTabPanel",
	config:{
				items:[
				       
				       	{
				       		title:"论坛",
				       		id:"bbsTab",
				       		iconCls:"bbs",
				       		layout:"card",
				       		items:[
				       		       {
				       		    	   xtype:"panel",
				       		    	   id:"bbsMainListPanel",
				       		    	   items:[
				       		    	          {
				       		    	        	xtype: 'list',
											    height: '100%',
											    id: 'bbsMainList',
											    itemTpl: [
											        '<table >',
											        '    <tr >',
											        '        <td>{name}<td>',
											        '    </tr>',
											        '</table>'
											    ],
											    store: 'bbsMainListStore'
				       		    	          }
				       		    	          ]
				       		       },
				       		    {
				       		    	   xtype:"panel",
				       		    	   id:"BBSServiceBusinessList",
				       		    	   layout:"vbox",
				       		    	   items:[
												{
												    xtype: 'list',
												    height: '100%',
												    id: 'BBSServiceBusinessList',
												    itemTpl: [
												        '<table >',
												        '    <tr>',
												        '        <td><img height="50%" src="{serviceBusinessImageUrl}" /></td>',
												        '    </tr>',
												        '    <tr >',
												        '        <td><span class="cheyouhui_text">.{serviceBusinessName}</span><td>',
												        '    </tr>',
												        '    <tr >',
												        '        <td ><span class="cheyouhui_text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{serviceBusinessIntroduce}</span></td><td></td> ',
												        '    </tr>',
												        '</table>',
												        '',
												        ''
												    ],
												    store: 'serviceBusinesses'
												}
				       		    	          
				       		    	          ]
				       		    },
				       		    {
				       		    	xtype:"panel",
				       		    	height:"100%",
				       		    	id:"bbscarBBSListPanel",
				       		    	layout:"vbox",
				       		    	items:[
											{
											    xtype: 'list',
											    height: '100%',
											    id: 'bbscarBBSList',
											    itemTpl: [
											        '<table>',
											        '    <tr>',
											        '        <td><img src="{url}" />&nbsp; </td><td><span>{name}</span></td>',
											        '    </tr>',
											        '</table>'
											    ],
											    store: 'carBBSs'
											}
				       		    	       
				       		    	       ]
				       		    },
				       		    {
				       		    	xtype:"panel",
				       		    	height:"100%",
				       		    	id:"bbsknowledgeBaseListPanel",
				       		    	items:[
											{
											    xtype: 'list',
											    height: '100%',
											    id: 'bbsknowledgeBaseList',
											    itemTpl: [
											        '',
											        '<table>',
											        '    <tr>',
											        '    	<td><img src="{repositoryImageurl}" /> </td>',
											        '    </tr>',
											        '    <tr>',
											        '        <td><span class="cheyouhui_text">{repositoryName}</span></td>',
											        '    </tr>',
											        '</table>'
											    ],
											    store: 'knowledgeBases'
											}
				       		    	       ]
				       		    },
				       		    {
				                        xtype: 'panel',
				                        height: '100%',
				                        id: 'BBSLeaveMessage',
				                        layout:"vbox",
				                        items: [
				                            {
				                                xtype: 'formpanel',
				                                docked: 'bottom',
				                                id: 'BBSTabCarFormPanel',
				                                items: [
				                                    {
				                                        xtype: 'button',
				                                        docked: 'bottom',
				                                        id: 'BBSTabCarPanelConfirm',
				                                        ui: 'action',
				                                        text: '留言'
				                                    },
				                                    {
				                                        xtype: 'textfield',
				                                        docked: 'bottom',
				                                        id: 'BBSTabCarPanelLeaveMessage',
				                                        label: '留言'
				                                    }
				                                ]
				                            },
				                            {
				                                xtype: 'list',
				                                height: '100%',
				                                id: 'BBSTabPaneCarlList',
				                                style: 'background-color: rgba(0,0,0,0.5);',
				                                itemCls: '',
				                                itemTpl: [
				                                    '<table>',
				                                    '    <tr>',
				                                    '        <td><b>{username}:</b></td>',
				                                    '        <td>{text}<td>',
				                                    '    </tr>',
				                                    '</table>'
				                                ],
				                                scrollToTopOnRefresh: false,
				                                store: 'carBBSTabPaneCars'
				                            },
				                            {
				                                xtype: 'label',
				                                docked: 'top',
				                                id: 'BBSTabCalPanelTheamName',
				                                height:"10%",
				                                readOnly: true
				                            }
				                        ]
				                    }
								 ]
				       	},
				       	{
				       		title:"呼叫中心",
				       		id:"bbsMobileCenter",
				       		iconCls:"mobileCenter",
				       		items:[
										{
										    xtype: 'panel',
										    height: '100%',
										    id: 'bbsmobileCenterPanel',
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
										            id: 'bbscccallMore',
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
				       		id:"bbsMyCar",
				       		iconCls:"myCar"
				       	},
				       	{
				       		title:"更多",
				       		id:"bbsMoreTab",
				       		iconCls:"more"
				       	},
				       	{
				       		xtype:"titlebar",
				       		title:"论坛",
				       		id:"bbssaTitleBar",
				       		docked:"top",
				       		items:[
									{
									    xtype: 'button',
									    id: 'bbsBack123',
									    ui: 'back',
									    text: '返回'
									},
									{
									    xtype: 'button',
									    align: 'right',
									    id: 'bbsShouYe123',
									    ui: 'plain',
									    iconCls: 'home'
									}
				       		       ]
				       	}
				       ],
		       tabBar: {
		            docked: 'bottom',
		            id: 'BBSTabBar',
		            scrollable: 'horizontal',
		            layout: {
		                pack: 'center',
		                type: 'hbox'
		            }
		        }
	}
});
