import {createStore} from 'vuex';
import productmodule from './modules/product.js';
import cartmodule from './modules/cart.js';
const store =createStore({
modules:{
	prods:productmodule,
	cart:cartmodule
},
state(){
	return {
      isLoggedIn: false,
     
    };

},
mutations:{
	login(state){console.log('login');
		state.isLoggedIn=true;
	},
	logout(state){
		state.isLoggedIn=false;
	}
},
actions:{
	login(context){
		context.commit("login");
	},
	logout(context){
		context.commit("logout");
	}
},
getters:{
	AuthLoggedIn(state){
		return  state.isLoggedIn;
	}
}
});
export default store;