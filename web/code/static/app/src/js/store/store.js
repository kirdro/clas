/**
 * Created by kirilldrozdov on 23.03.17.
 */
// var AppDispatcher = require('../dispatcher/dispatcher.js');
// var AppConstants = require('../constants/constants.js');
var EventEmitter = require('events').EventEmitter;
// var assign = require('object-assign');


var state = {
    about: [],
    projects: [],
    news: [],
    events: [],
    gallery:[],
    partner:[]
};


var AppStore = Object.assign({}, EventEmitter.prototype, {
    moduleChangeStoreListeners: [],
    addChangeStoreModuleListener: function(callback) {
        if (this.moduleChangeStoreListeners.indexOf(callback) == -1) {
            this.moduleChangeStoreListeners.push(callback);
        }
    },
    removeChangeStoreModuleListener: function (callback) {
        if (this.moduleChangeStoreListeners.indexOf(callback) != -1) {
            this.moduleChangeStoreListeners.splice(this.moduleChangeStoreListeners.indexOf(callback), 1);
        }
    },
    emitChangeToModuleListeners: function () {
        for (var i = 0; i < this.moduleChangeStoreListeners.length; i++) {
            this.moduleChangeStoreListeners[i](state);
        }
    },
    update: function (status, data) {
        if (status === 'about') {
            state.about = data;
        }
        else if (status === 'projects') {
            state.projects = data;
        }
        else if (status === 'news') {
            state.news = data;
        }
        else if (status === 'events') {
            state.events = data;
        }
        else if (status === 'gallery') {
            state.gallery = data;
        }
        else if (status === 'partner') {
            state.partner = data;
        }
        this.emitChangeToModuleListeners();
    },
    getState: function() {
        return state;
    }
});
export default AppStore;
