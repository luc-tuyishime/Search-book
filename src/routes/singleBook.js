import ViewBook from '../page/ViewBook';

export default {
    exact: true,
    name: 'View Book',
    protected: true,
    path: '/book/:id',
    component: ViewBook
}