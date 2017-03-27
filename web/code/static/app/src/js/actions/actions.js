/**
 * Created by kirilldrozdov on 25.03.17.
 */
import AppStore from '../store/store';
import Api from '../api/api';
var Actions = {
    getData: function () {
        Api.getData(
            function (params, data) {
                // console.log('actions', data, params);
                // if (params === 'about') {
                //     AppStores.getAbout(data);
                // }
                // else if (params === 'projects') {
                //     AppStores.getComments(data);
                // }
                // else if (params === 'news') {
                //     AppStores.getNews(data);
                // }
                // else if (params === 'events') {
                //     AppStores.getWork(data);
                // }
                // else if (params === 'gallery') {
                //     AppStores.getIndicator(data);
                // }
                // else if (params === 'partner') {
                //     AppStores.getVideo(data);
                // }
                AppStore.update(params, data);
            },
            function (err) {
                console.error(err);
            }
        );
    },
    onClickNews: function (index) {
        AppStore.onClickNews(index);
    }
};
export default Actions;
