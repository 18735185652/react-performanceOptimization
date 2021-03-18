import React from 'react';

const Loading = ()=><div>loading</div>

export function dynamic(loadComponent){
    const LazyComponent = lazy(loadComponent);
    return ()=>{
        return (
            <React.Suspense fallback={<Loading />}>
                 <LazyComponent />
            </React.Suspense>
        )
    }

}

function lazy(loadComponent){
    return class extends React.Component{
        state = {Component:null}
        componentDidMount(){
            loadComponent().then(res=>{
                this.setState({Component:res.default})
            })
          
        }
        render(){
            const {Component} = this.state;
            return (
                Component && <Component />
            )
        }
    }
}
