import React from 'react';
import { withRouter } from 'react-router-dom';

function filterHOC(Comp){
    return class showComp extends React.Component{
        constructor(...args){
            super(...args);
            this.state = {
                randomNumber:undefined,
                isLoading:false
            }
            this.handleClick = this.handleClick.bind(this);
            this.handleDocumentScroll = this.handleDocumentScroll.bind(this);
            this.onNameChange = this.onNameChange.bind(this);
            this.wrapperedChild = React.createRef();
        }
        componentDidMount(){
            console.log('filter componentDidMouted');
        }
        handleClick(ov){
            let nv = 2;
            let tnum =  nv + ov;
            console.log(this.props);
            this.props.pcomp.getNum(tnum);
        }
        handleDocumentScroll(e){
            console.log('handleDd');
        }
        onNameChange(event){
            this.setState({
                name:event.target.value
            })
        }
        render(){
            let newProps = {
                message: "add props",
                wrapperDom:this,
                name:{
                    value:this.state.name,
                    onChange:this.onNameChange
                },
                handleClick:this.handleClick
            };
            return(
                <div style={this.props.tnum>10?{color:'red'}:{color:'blue'}}>
                    <Comp ref ={this.wrapperedChild} {...this.props} {...newProps}></Comp>
                </div>
            )
        }
    }
}

class orgComp extends React.Component{
    constructor(...args){
        super(...args);
        this.state = {};
    }
    orgCompClick=()=>{
        let orgNumValue = this.props.tnum +1;
        console.log("orgNumValue",orgNumValue);
        this.props.handleClick(orgNumValue);
    }
    componentDidMount(){
        console.log('orgComp componentDidMount');
        console.log(this.props);
    }
    render(){
        return(
            <div onClick={this.orgCompClick}>
                <h1>hoc组件书写</h1>
            </div>
        )
    }
}

class PageHoc extends React.Component{
    constructor(...args){
        super(...args);
        this.state = {
            tnum:0,
        }
    }
    componentDidMount(){
        console.log('pageHoc componentDidMount');
    }
    getNum=(v)=>{
        console.log('v',v);
        this.setState({
            tnum:v
        })
    }
    render(){
        const {tnum} = this.state;
        const PageComp = filterHOC(orgComp);
        return(
            <>
                <h2>{tnum}</h2>
                <PageComp tnum={this.state.tnum} pcomp={this} />
            </>
        )
    }
}

export default withRouter(PageHoc);