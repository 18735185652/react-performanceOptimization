import React from 'react';

class Home extends React.Component{
   state = {list:[]} 

//    handleClick =()=>{
//         let startTime = Date.now();
//         this.setState({
//             list:new Array(30000).fill(0)
//         },()=>{
//             console.log(Date.now() - startTime);
//         })
//    }
handleClick =()=>{
   this.timeSlice(50000)
}
timeSlice = (times) =>{
    requestIdleCallback(()=>{
        let minus = times > 100 ? 100 : times;
        this.setState({
            list: [...this.state.list,...new Array(minus).fill(0)]
        },()=>{
            times -= minus;
            if(times > 0){
                console.log('times: ', times);
                // console.log(111);
                this.timeSlice(times)
            }
        })
    })
}
   render(){
    return (
        <div>
            <input />
            <button onClick={this.handleClick}>加载</button>
            <ul>
                {
                    this.state.list.map((item,index)=>(
                        <li key={index}>{item}</li>
                    ))
                }
            </ul>
        </div>
    )
   }
}

 export default Home