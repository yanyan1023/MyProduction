import {ajax1Index,ajax2Index} from './mutation_type.js';
export default {
    state:{
        num:1,
        data1:null,
        data2:null
    },
    mutations:{
        addfn(state){
            state.num++;
        },
        [ajax1Index.mutationsType](state,rs){
            state.data1=rs;
        },
        [ajax2Index.mutationsType](state,rs){
            state.data2=rs;
        }
    },
    actions:{
        addAction({dispatch,commit}){
            commit("addfn")
        },
        [ajax1Index.actionsType]({dispatch,commit},_this){
                return new Promise(resolve=>{
                _this.axios.get("/index").then((rs)=>{
                    commit(ajax1Index.mutationsType,rs.data);
                    resolve("ok");
                })
            })
        },
        [ajax2Index.actionsType]({dispatch,commit},_this){
            dispatch(ajax1Index.actionsType,_this).then(()=>{
                _this.axios.get("/index1").then((rs)=>{
                    commit(ajax2Index.mutationsType,rs.data);
                })
        })
            
        
    }
  }
}
