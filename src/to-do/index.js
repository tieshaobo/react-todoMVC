import React from "react"
import TodoList from "./to-do-list"
function id(){
    return Math.random().toString().replace(/\./,"");
}
var TodoMVC = React.createClass({
    getInitialState:function(){
        return {
            list:[
                {item:"aaa",id:id(),type:"active"},
                {item:"bbb",id:id(),type:"noactive"},
                {item:"ccc",id:id(),type:"active"},
                {item:"ddd",id:id(),type:"noactive"}
            ],
            inp:"",
            type:"active"
        }
    },
    handChange:function(e){
        this.setState({
            inp:e.target.value
        })
    },
    add:function(){
        var value = this.state.inp;
        var list = this.state.list;
        list.push({item:value,id:id()})
        this.setState({
            list:list,
            inp:"",

        })
    },
    delete:function(o){
        var list = this.state.list;
        var arr = [];
        for(var i=0;i<list.length;i++){
            if(o.id !== list[i].id && o.item !== list[i].item){
                arr.push(list[i])
            }
        }
        this.setState({
            list:arr
        })
    },
    sure:function(obj){
         var list = this.state.list;
        list = list.map(function(o){
            if(o.id == obj.id){
                o.item = obj.item
            }
            return o;
        })
        this.setState({
            list:list
        }) 
    },
    render:function(){
        var list = this.state.list;
        var type = this.state.type;
        var json = [];
        list.map(function(obj){
            if(obj.type == type|| type == "all"){
                json.push(obj)
            }
        })
        return (
            <div className="todoMVC">
                <h3>ToDoList</h3>
                <input type="text" 
                    onChange={this.handChange} 
                    value={this.state.inp}/>
                <button onClick={this.add}>提交</button>
                <TodoList list={json} ondelete={this.delete} sure={this.sure} fail={this.fail} changeType={this.changeType}/>
                <button onClick={this.active} style={{background:this.state.type=="active"?"red":"#0f0"}}>active</button>
                <button onClick={this.noActive} style={{background:this.state.type=="noactive"?"red":"#0f0"}}>complete</button>
                <button onClick={this.all} style={{background:this.state.type=="all"?"red":"#0f0"}}>all</button>
            </div>
        )
    },
    changeType:function(obj,type){
        console.log(obj,type)
        var list = this.state.list;
        list = list.map(function(o){
            if(o.id == obj.id){
                o.type = type;
            }
            return o;
        })
        this.setState({
            list:list
        })        
    },
    active:function(){
        this.setState({
            type:"active"
        })
    },
    noActive:function(){
        this.setState({
            type:"noactive"
        })
    },
    all:function(){
        this.setState({
            type:"all"
        })
    }
})



module.exports = TodoMVC;



















































// import React from 'react'

// import TodoList from './to-do-list'

// function id() {
//     return Math.random().toString().replace(/\./,'')+'-'+Math.random().toString().replace(/\./,'')
// }

// var TodoMVC = React.createClass({
//     getInitialState:function () {
//         return {
//             items : [
//                 {text:'aaa',id:id(),type:'active'},
//                 {text:'bbb',id:id(),type:'no-active'},
//                 {text:'ccc',id:id()}
//             ],
//             value:'inp'
//         }
//     }
//     ,
//     render:function () {
//         return (
//             <div className="todo-mvc">
//                 <h3>todos</h3>

//                 <p>
//                     <input value={this.state.value} onChange={this.handleChange}/>
//                     <button onClick={this.handleAdd}>提交</button>
//                 </p>
//                 <TodoList
//                     items={this.state.items}
//                     onDelete={this.handleDelete}
//                     onEdit={this.handleEdit}
//                 />
//             </div>
//         )
//     },
//     handleEdit:function (obj) {
//         alert(obj.text)
//         var items = this.state.items;


//         items = items.map(function (o) {
//             console.log(obj.id,o.id)
//             if(o.id == obj.id){

//                 o.text = obj.text
//             }
//             return o
//         })
//         console.log(items)
//         this.setState({items:items})
//     },

//     handleDelete:function (obj) {

//         var items = this.state.items,
//             json = []
//         for(var i=0;i<items.length;i++){
//             if(items[i].id != obj.id){
//                 json.push(items[i])
//             }
//         }
//         this.setState({items:json})
//     },
//     handleAdd:function () {
//         var items = this.state.items,
//             text = this.state.value
//         items.push({
//             text:text,
//             id:id()
//         })
//         this.setState({
//             items:items,
//             value : ''
//         })
//     },
//     handleChange:function (e) {
//         this.setState({
//             value:e.target.value
//         })
//     }
// })
// module.exports = TodoMVC