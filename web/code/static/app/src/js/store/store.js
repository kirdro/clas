/**
 * Created by kirilldrozdov on 23.03.17.
 */
// var AppDispatcher = require('../dispatcher/dispatcher.js');
// var AppConstants = require('../constants/constants.js');
// var EventEmitter = require('events').EventEmitter;
// var assign = require('object-assign');


var state = {
    about: {
    },
    works: [],
    newWorks: [],
    news: [],
    newsTop: [],
    reviews: [],
    reviewsTop: [],
    statusShowModal: false,
    dataModal: {
        status: '',
        data: {}
    },
    statusLoadCalc: 'false',
    route: '/',
    video: [],
    videoTop: [],
    routerParamsId: 0,
    dataParamItems: {}
}


var AppStore = assign({}, EventEmitter.prototype, {
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
    getState: function() {
        return state;
    }
});
exports default AppStore;
