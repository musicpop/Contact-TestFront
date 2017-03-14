import App from '../App.vue';
import Index from '../page/index'; 
import AddContact from '../page/addcontact';
import Contact from '../page/contact';

export default {
	path: '/', component: App,
         children: [
	          { path: '/', name:'index', component: Index },
	          { path: 'contact/add', name:'add', component: AddContact },
	          { path: 'contact/:id', name:'edit', component: Contact }
	]
}