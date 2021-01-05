import HelloWorld from './../components/HelloWorld.vue';
import Home from './../Views/Home';
import About from './../Views/About';

export default 
{
  name: 'App',
  data()
  {
    return {
      currentComponent: "Home"
    };
  },
  components: 
  {
    HelloWorld,
    Home,
    About
  }
};

