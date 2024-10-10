import { observable } from "mobx";

const store = observable({
    value: {},
    handleSearch(e){
        this.value= e.target
    }
})

export default store