import VueRouter from 'vue-router';
import Home from './Views/Home';
import About from './Views/About';


const paths =
[
    { path : '/', component : Home},
    { path : '/About', component : About}
];

const router = new VueRouter(
{
    routes : paths,
    mode : 'history'
}
);

export default router;