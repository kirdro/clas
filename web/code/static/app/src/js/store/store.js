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
    secondNews: null,
    projectsItem: null,
    indexGallery: 0,
    statusGellary: ''
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
                    state.favoriteProject['index'] = i;
                    // console.log('store', data[i]);
                }
                else if (data[i].project_type === 'future') {
                    state.futureProject = data[i];
                    state.futureProject['index'] = i;
                }
            }
            state.projects = data;
            if (state.statusGellary === 'project') {
                console.log('!!!!!', state.indexGallery);
                state.projectsItem = state.projects[state.indexGallery];
            }
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
            if (state.statusGellary === 'gallery') {
                state.projectsItem = state.gallery[state.indexGallery];
            }
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
    getIdGallery: function (index, status) {
        if (status === 'project') {
            state.projectsItem = state.projects[index];
        }
        else {
            state.projectsItem = state.gallery[index];
        }
        state.statusGellary = status;
        state.indexGallery = index;
        this.emitChangeToModuleListeners();
    },
    getState: function() {
        return state;
    }
});
export default AppStore;
