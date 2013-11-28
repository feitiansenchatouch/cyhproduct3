Ext.define("MyAPP.controller.LoginPanelController",{
	extend:'Ext.app.Controller',
	alias:'loginPanelController',
	config:{
		refs:{
			loginButton:"#loginButton"
		},
		control:{
			loginButton:{
				tap:"onloginButtonTap"
			}
		},
	},
	onloginButtonTap:function(button,e,eOpts){
		 var usernameField =  Ext.getCmp("username");
	        var pwdField = Ext.getCmp("pwd");
	        var savePwdField = Ext.getCmp("savepwd");
	        var isSavePwd = savePwdField.getChecked();
	        var username = usernameField.getValue();
	        var pwd =  pwdField.getValue();
	        usernameField.setValue("");
	        pwdField.setValue("");

	        //判断是否保存用户名密码到本地
	        if(isSavePwd){
	            var loginLocalStore = Ext.getStore("loginLocalStore");
	            loginLocalStore.removeAll();
	            loginLocalStore.getProxy().clear();
	            loginLocalStore.sync();
	            loginLocalStore.add({"username":username,
	                "pwd":pwd,
	            "myTags":'123'});
	            loginLocalStore.sync();
	        }
	        var loginFormPanel = Ext.getCmp("loginFormPanel");
	        loginFormPanel.submit(
	        		{
	        		
	        			method:"post",
	        			success:function(form,result,data){
	        				
	        			},
	        			failure:function(form,result){
	        				
	        			}
	        		}
	        
	        );
	        login = true;
	        Ext.getCmp("carBasePanel").setActiveItem(0);
	}
	
});