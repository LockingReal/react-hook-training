import React from 'react';
import { withRouter } from 'react-router-dom';
import './home.css';
import PageHoc from '../comp/hoc';
import GrandComp from '../comp/render-props';
import UseEffect from '../hooks/useEffect';
import UseState from '../hooks/useState';
import HooksGet from '../buff/hooks_get';
import UserContext from '../hooks/useContext';
class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    render(){
        return(
            <div>
                <h1>常用组件书写形式与ReactHook学习</h1>
                <div className="card_demo">
                    <PageHoc></PageHoc>
                </div>
                <div className="card_demo">
                    <GrandComp></GrandComp>
                </div>
                <div className="card_demo">
                    <UseEffect></UseEffect>
                </div>
                <div className="card_demo">
                    <UseState></UseState>
                </div>
                <div className="card_demo">
                    <HooksGet></HooksGet>
                </div>
                <div className="card_demo">
                    <UserContext></UserContext>
                </div>
            </div>
        )
    }
}
export default withRouter(Home);