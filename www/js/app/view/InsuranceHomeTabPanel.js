Ext.define("MyApp.view.InsuranceHomeTabPanel",{
		extend:"Ext.tab.Panel",
		alias:"widget.insuranceHomeTabPanel",
	
		config:{
			items:[
			       {
			    	   title:"保险之家",
			    	   id:"ihTab",
			    	   layout:"card",
			    	   iconCls:"favorites",
			    	   items:[
			    	          {
			    	        	xtype:"panel",
			    	        	id:"insurancePanel",
			    	        	items:[
			    	        	       {
					                        xtype: 'list',
					                        centered: false,
					                        height: '100%',
					                        hidden: false,
					                        id: 'insurancePanelList',
					                        style: '',
					                        width: '100%',
					                        itemTpl: [
					                            '<table class=\'cheyouhui_text\'>',
					                            '<tr><td><img height="50" src={imageUrl}></td></tr>',
					                            '    <tr><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{introduce}</td></tr>',
					                            '<tr><td><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>{monthCount}</b></td></tr>    ',
					                            '    ',
					                            '</table>',
					                        ],
					                        store: 'insuranceComponys'
			    	        	       	}
			    	        	       ]
			    	          }
			    	         ]
			       },
			       {
			    	   title:"呼叫中心",
			    	   iconCls:"mobileCenter",
			    	   id:'ihMobileCenterTab',
			    	   items:[
								{
								    xtype: 'panel',
								    height: '100%',
								    id: 'ihMobileCenterPanel',
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
								            id: 'ihcallMore',
								            margin: '0 auto',
								            width: 200,
								            text: '重拨'
								        }
								    ]
								}
			    	          ]
			    		   
			       },
			       {
			    	   title:"快速预订",
			    	   iconCls:"service",
			    	   id:"ihFastOrderTab",
			    	   items:[
			    	          {
			    	        	  xtype:"formpanel",
			    	        	  height:"100%",
			    	        	  scrollable:"vertical",
			    	        	  items:[
			    	        	         {
			    	        	        	 xtype:"fieldset",
			    	        	        	 title:"快速预订",
			    	        	        	 defaults:{
			                                 	labelWidth:"35%"
			                                 },
			    	        	        	 items:[
														{
															 xtype:"textfield",
															 id:"ihFastOrderTabUserName",
															 name:"username",
															 placeHolder:"请输入联系人",
															 label:"联系人"
														},
														{
															 xtype:"textfield",
															 id:"ihFastOrderTabMobile",
															 name:"mobile",
															 placeHolder:"请输入联系方式",
															 label:"联系方式"
														},
														{
															 xtype:"selectfield",
															 name:"serviceClass",
															 id:"ihFastOrderTabMobileServiceClass",
															 label:"服务类型",
															 options:[
																		{
																			  text:"请选择服务类别",
																			  value:"Master"
																		},
															          {
															        	  text:"Master",
															        	  value:"Master"
															          },
															          {
															        	  text:"Master1",
															        	  value:"Master1"
															          }
															          
															          ]
														},
														{
															 xtype:"selectfield",
															 name:"serviceProject",
															 id:"ihFastOrderTabMobileServiceProject",
															 placeHolder:"请选择服务项目",
															 label:"服务项目",
															 options:[
																	{
																		  text:"请选择服务项目",
																		  value:"Master"
																	},
															          {
															        	  text:"Master",
															        	  value:"Master"
															          },
															          {
															        	  text:"Master1",
															        	  value:"Master1"
															          }
															          
															          ]
														},
														{
															 xtype:"textfield",
															 name:"serviceAddress",
															 id:"ihFastOrderTabMobileserviceAddress",
															 label:"服务地址",
															 placeHolder:"请输入地址"
														},
														{
															 xtype:"datepickerfield",
															 id:"ihFastOrderTabMobileServiceTime",
															 name:"serviceTime",
															 label:"服务时间",
															 placeHolder:"请选择服务时间",
															 value:new Date(),
															 destroypickerOnHide:"true",
															 picker:{
																 disabled: true,
														           id: 'picker',
														           itemId: 'mydatepicker1',
														           useTitles: true,
														           dayText: '日',
														           monthText: '月',
														           slotOrder: [
														               'year',
														               'month',
														               'day'
														           ],
														           yearFrom: 2000,
														           yearText: '年',
														           yearTo: 2050
															 }
														},
														{
															 xtype:"textareafield",
															 name:"description",
															 id:"ihFastOrderTabMobileServiceDescription",
															 label:"备注：",
															 placeHolder:"请描述你所需服务的详细信息"
														},
														{
															 xtype:"img",
															 src:""
														},
														{
															 xtype:"textfield",
															 name:"volidateNum",
															 id:"ihFastOrderTabMobileServiceVolidateNum",
															 label:"验证码"
														},
														{
															 xtype:"button",
															text:"提交",
															 id:"ihFastOrderTabMobileSubmitButton"
														},
														{
															 xtype:"button",
															 text:"取消",
															 id:"ihFastOrderTabMobileCancleButton"
														}
			    	        	        	        ]
			    	        	         }
			    	        	        ]
			    	          }
			    	          ]
			       },
			       {
			    	   title:"论坛",
			    	   iconCls:"bbs",
			    	   id:"ihBBSTab",
			    	   layout:"card",
			    	   items:[
			    	          {
			    	        	  xtype: 'panel',
			    	              id: 'insuranceForumPanel',
			    	              items:[
			    	                     {
					                        xtype: 'list',
					                        height: '100%',
					                        id: 'insuranceForumList',
					                        itemTpl: [
					                                  '<table>',
					                                  '<tr>',
					                                  '<td width="25">',
					                                  '<img src={url} />',
					                                  '</td>',
					                                  '<td>',
					                                  '{name}',
					                                  '</td>',
					                                  '</tr>',
					                                  '</table>'
					                        ],
					                        store: 'insuranceForumJsonStore'
			    	                     }
			    	                    ]
			    	          },
			    	          {
			                        xtype: 'panel',
			                        height: '100%',
			                        id: 'ihBBSLeaveMessagePanel',
			                        items: [
			                            {
			                                xtype: 'formpanel',
			                                docked: 'bottom',
			                                id: 'ihBBSTabCarFormPanel',
			                                items: [
			                                    {
			                                        xtype: 'button',
			                                        docked: 'bottom',
			                                        id: 'ihBBSTabCarPanelConfirm',
			                                        ui: 'action',
			                                        text: '留言'
			                                    },
			                                    {
			                                        xtype: 'textfield',
			                                        docked: 'bottom',
			                                        id: 'ihBBSTabCarPanelLeaveMessage',
			                                        label: '留言'
			                                    }
			                                ]
			                            },
			                            {
			                                xtype: 'list',
			                                height: '100%',
			                                id: 'ihBBSTabPaneCarlList',
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
			                                scrollToTopOnRefresh: true,
			                                store: 'checkCarBBSLMPS'
			                            },
			                            {
			                                xtype: 'label',
			                                docked: 'top',
			                                id: 'ihBBSTabCalPanelTheamName',
			                                height:"10%",
			                                readOnly: true
			                            }
			                        ]
			                    }
			    	         ]
			    	
			       },
			       {
			    	   title:"我的私家车",
			    	   iconCls:"myCar",
			    	   id:"ihMyCarTab",
			    	   layout:{
			    		   type:"card"
			    	   },
			    	   items:[
			    	          {
			    	        	  xtype:"panel",
			    	        	  id:"ihMyCarTabPanel",
			    	        	  height:"100%",
			    	        	  items:[
			    	        	         {
			    	        	        	xtype:"button",
			    	        	        	id:"ihMyCarTabPaneltoLogin",
			    	        	        	text:"登录"
			    	        	         },
			    	        	         {
			    	        	        	 xtype:"button",
				    	        	         id:"ihMyCarTabPanelToZhuCe",
				    	        	         text:"注册"
			    	        	         }
			    	        	         
			    	        	         ]
			    	          }
			    	          
			    	          ]
			    		   
			       },
			       {
			    	   title:"更多",
			    	   iconCls:"more",
			    	   id:"ihMoreTab"
			       },
			       {
		                xtype: 'titlebar',
		                docked: 'top',
		                title: '保险之家',
		                items: [
		                    {
		                        xtype: 'button',
		                        id: 'ihBack',
		                        ui: 'back',
		                        text: '返回'
		                    },
		                    {
		                        xtype: 'button',
		                        align: 'right',
		                        id: 'ihShouYe',
		                        ui: 'plain',
		                        iconCls: 'home'
		                    }
		                ]
		            }
			       ],
			       tabBar: {
			            docked: 'bottom',
			            id: 'insuranceHomeTabBar',
			            scrollable: 'horizontal',
			            layout: {
			                pack: 'center',
			                type: 'hbox'
			            }
			        }
		       

		}
});