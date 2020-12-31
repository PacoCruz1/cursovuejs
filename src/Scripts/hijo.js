import Vuex from 'vuex';

export default 
{
    
    name: 'hijo',
    data()
    {
        return{
            title: "Soy el Hijo"
        };
    },
    computed:
    {
        ...Vuex.mapState(['numero'])
    }
};