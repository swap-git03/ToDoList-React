/* eslint-disable no-case-declarations */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const initialState = {
    todos:[]
}

function reducer(state, action){
    switch (action,type) {
        case 'ADD_TODO':
            const { name, description} = action.payload;
            if(!name?.trim()) return state; 
            const newTodo ={
                id: Date.now(),
                name: name.trim(),
                description: (description || "").trim(),
                isComplete: false,
            };
            return { ...state, todos: [newTodo, ...state.todos] };
           
            // case 'LOAD_TODOS':
            



        default:
            return state;
    }
}

// state ={
    // working:true,
    // todos=[{id:1,name:"empty", description="sasss"; isComplete:false}]
// }
// newTodo -{id:2,name:"empty-wsx", description="sassssx"; isComplete:false}
