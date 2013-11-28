/*
 * File: app.js
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

//@require @packageOverrides
Ext.Loader.setConfig({

});

Ext.application({
    models: [
        'LoginLocalModel',
        'CarBrand',
        'CarSeriese',
        'ServiceBusiness',
        'CarBBS',
        'KnowledgeBase',
        'CarInfo',
        'CarBBSTabPaneCarModel',
        'mainPanelModel',
        'CheckCar',
        'CheckCarBBSLMP',
        'CheckCarBBS',
        'InsuranceCompony',
        'MerchantModel',
        'BBSMainListModel',
        'MechantServiceMainPanelModel'
    ],
    stores: [
        'LoginLocalStore',
        'CarBrands',
        'CarSerieses',
        'ServiceBusinesses',
        'CarBBSs',
        'KnowledgeBases',
        'CarInfos',
        'CarBBSTabPaneCars',
        'MainPanels',
        'CheckCars',
        'CheckCarDetails',
        'CheckCarBBSLMPS',
        'CheckCarBBSs',
        'InsuranceComponys',
        'InsuranceForumJsonStore',
        'MechantStore',
        'WashCars',
        'KnowledgeBases',
        'BBSMainListStore',
        'MechantServiceMainPanelStore'
    ],
    views: [
        'CarBasePanel',
        'CarHomeTabPanel',
        'CheckCarTabPanel',
        'InsuranceHomeTabPanel',
        'NavigationTabPanel',
        'MerchantServicesTabPanel',
        'BBSTabPanel'
    ],
    controllers: [
        'MainPanelControler',
        'CarHomeTabPanelController',
        'CheckCarTabPanelController',
        'InsuranceHomeController',
        'NavigationTabPanelController',
        'MerchantServiceTabPanelController',
        'BBSTabPanelController'
    ],
    name: 'MyApp',
    launch: function() {
        Ext.create('MyApp.view.CarBasePanel', {fullscreen: true});
    }

});
