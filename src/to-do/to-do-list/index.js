import React from "react"

var TodoList = React.createClass({
    render:function(){
        var that = this;
        var items = this.props.list.map(function(o,i){
                return (
                    <ToDoItem delete={that.props.ondelete} o={o} sure={that.props.sure}  changeType={that.props.changeType}/>
                )
            })
        return (
            <ul>
                {items}
            </ul>
        )
    },
})
var ToDoItem = React.createClass({
    getInitialState:function () {
        return {
            value : this.props.o.item
        }
    },
    render:function(){
        return (
            <li key={this.props.o.id}>
                {this.props.o.item}
                <button onClick={this.delete}>删除</button>
                <button onClick={this.changeType} style={{background:this.props.o.type=="active"?"red":"blue"}}>
                    {this.props.o.type=="active"?"activ--->complete":"complete-->active"}
                </button>
                <br/>
                <input type="text" value={this.state.value} onChange={this.Edit}/>
                <button onClick={this.handEdit}>确定</button>
                <button onClick={this.handfail}>取消</button>
            </li>
        )
    },
    changeType:function(){
        var o = this.props.o,
            type = this.props.o.type=="active"?"noactive":"active";
            this.props.changeType(o,type)
    },
    delete:function(){
        var obj = this.props.o;
        this.props.delete(obj)
    },
    Edit:function(e){
        this.setState({
            value:e.target.value
        })
    },
    handfail:function(){
        this.setState({
            value:this.props.o.item
        })
    },
    handEdit:function(){
       var obj ={
            item:this.state.value,
            id:this.props.o.id
       }
       this.props.sure(obj)
    }

})
module.exports = TodoList
























// import React from 'react'


// var TodoItem = React.createClass({
//     getInitialState:function () {
//         return {
//             value : this.props.text
//         }
//     },
//     render:function () {
//         return (
//             <li>
//                 {this.props.text}<button onClick={(e)=>this.props.delete(this.props.o)}>删除</button><br/>
//                 <input value={this.state.value} onChange={this.handleChange}/>
//                 <button onClick={this.handleEdit}>确定</button>
//                 <button onClick={this.handeCancel}>取消</button>
//                 <br/><br/>
//             </li>
//         )
//     },
//     handeCancel:function () {
//         this.setState({
//             value:this.props.text
//         })
//     },
//     handleChange:function (e) {
//         this.setState({
//             value:e.target.value
//         })
//     },
//     handleEdit:function () {
//         var obj = {
//             id:this.props.id,
//             text:this.state.value
//         }
//         this.props.edit(obj)
//     }
// })

// var TodoList = React.createClass({
//     render:function () {
//         var that = this
//         var nodes = this.props.items.map(function (o) {
//             return (
//                 <TodoItem id={o.id} edit={that.props.onEdit} o={o} key={o.id} text={o.text} delete={that.props.onDelete}/>
//             )
//         })
//         return (
//           <ul>{nodes}</ul>
//         )
//     }
// })
// module.exports = TodoList