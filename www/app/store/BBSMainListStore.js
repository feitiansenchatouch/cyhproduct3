Ext.define('MyApp.store.BBSMainListStore', {
    extend: 'Ext.data.Store',
    alias: 'store.bbsMainListStore',

    requires: [
        'MyApp.model.BBSMainListModel'
    ],
    
    config: {
        model: 'MyApp.model.BBSMainListModel',
        storeId: 'bbsMainListStore',
        proxy: {
            type: 'ajax',
            url: 'bbsMainList.json',
            reader: {
                type: 'json'
            }
        }
    }
});