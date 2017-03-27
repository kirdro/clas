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
    partner:[],
    favoriteProject: null,
    futureProject: null,
    secondNews: null
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
            // console.log('store', data);
            for (var i = 0; i < data.length; i++) {
                if (data[i].project_type === 'favorite') {
                    state.favoriteProject = data[i];
                    // console.log('store', data[i]);
                }
                else if (data[i].project_type === 'future') {
                    state.futureProject = data[i];
                }
            }
            state.projects = data;
        }
        else if (status === 'news') {
            state.secondNews = data[data.length - 1];
            // console.log('store', data);
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
    onClickNews: function (index) {
        state.secondNews = state.news[index];
        this.emitChangeToModuleListeners();
    },
    getState: function() {
        return state;
    }
});
export default AppStore;
