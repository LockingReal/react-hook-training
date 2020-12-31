import React, { useState} from 'react';
import { withRouter } from 'react-router-dom';

function Bar(libox){
    let arr = useState(libox);
    return (
        <div>
            {
                arr.map((item,index)=><span key={index}> yeah</span>)
            }
        </div>
    )

}

class FatherComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        title: '我是一个state的属性',
        libox:[]
     };
  }
  componentDidMount(){

    let a = this.state.libox;
    a.push({});
    this.setState({
        libox:a
    })

    setInterval(()=>{
        this.setState({
            showTime:new Date().toLocaleString()
        })
    },1000)
  }
  render() {

    const { renderFoo } = this.props;
    const { title,showTime,libox } = this.state;
    return (
        <>
        <h3>{title}</h3>
        <div>{showTime}</div>
        <div className="renderFoo_wrap">
            {renderFoo(libox)}
        </div>
        </>
    )
  }
}

class GrandComp extends React.Component {
  // 单独创建一个渲染函数
  renderFoo(libox) {
    return <Bar libox={libox} />;
  }

  render() {
    return (
      <div>
        <FatherComp renderFoo={this.renderFoo} />
      </div>
    );
  }
}

export default withRouter(GrandComp);
