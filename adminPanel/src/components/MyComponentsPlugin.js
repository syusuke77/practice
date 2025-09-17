import navigationBar from './breadcrumb/index.vue';
import selectForm from './selectForm/index.vue';
import pagination from './pagination/index.vue';

export default {
  install(app) {
    app.component('navigationBar', navigationBar);
    app.component('selectForm', selectForm);
    app.component('paginationComponent', pagination);
  }
}