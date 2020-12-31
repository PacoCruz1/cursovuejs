import Vuex from 'vuex';
import Hijo from './../components/Hijo.vue'

export default 
{   
    name: 'padre',
    data()
    {
        return{
            title: "Soy el Padre"
        };
    },
    components:
    {
        Hijo
    },
    computed:
    {
        ...Vuex.mapState(['numero', 'cursos'])
    },
    methods:
    {
        ...Vuex.mapActions(['GetCursos'])
    }
};

