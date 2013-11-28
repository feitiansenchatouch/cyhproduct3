Ext.define('MyApp.store.MechantServiceMainPanelStore', {
    extend: 'Ext.data.Store',
    alias: 'store.mechantServiceMainPanelStore',

    requires: [
        'MyApp.model.MechantServiceMainPanelModel'
    ],
    config: {
    	
        model: 'MyApp.model.MechantServiceMainPanelModel',
        storeId: 'mechantServiceMainPanelStore',
        proxy: {
            type: 'ajax',
            url: 'mechantServiceMainPanel.json',
            reader: {
                type: 'json'
            }
        }
    }
});