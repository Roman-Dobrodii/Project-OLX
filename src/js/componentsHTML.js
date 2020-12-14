import { Modal } from 'bootstrap';
const header = require('../partials/header.handlebars')
const addModal = require('../partials/add-modal.handlebars');
const authModal = require('../partials/auth-modal.handlebars');
const myCalls = require('../partials/my-calls.handlebars');
const footer = require('../partials/footer.handlebars');
const productModal = require('../partials/product-modal.handlebars');

export default [header,authModal, addModal, myCalls, productModal,footer]
