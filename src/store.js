import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store =  new Vuex.Store(
{
    state:
    {
        numero: 10,
        cursos: [],
        url: "http://loacalhost:8080/public/cursos.json",
        url2:"http://jsonplaceholder.typicode.com/posts"
    },
    mutations:
    {
        ShowCursos(state, cursosAction)
        {
            state.cursos = cursosAction;
        }
    },
    actions:
    {
        async GetCursos({commit})
        {
            //let url = "http://loacalhost:8080/cursos.json";
            let url2 = "http://jsonplaceholder.typicode.com/posts";
            const data = await fetch(url2); //./assets/cursos.json -- http://jsonplaceholder.typicode.com/posts
            console.log(data);
            const cursos = await data.json();
            console.log(cursos);
            commit('ShowCursos', cursos);
        
        }

        
    },
    getters:
    {
        
    }
});

export default store;