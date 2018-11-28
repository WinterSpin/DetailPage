import React, { Component } from 'react';
import { Rate, Button, Radio} from 'antd';
import './Detail.css';
import 'antd/dist/antd.css';


class Detail extends Component {

    constructor(props) {
        super(props);
        this.state = {Watched: "0", value: 0};
    }

    CreateTags = () =>{
        let ret = []
        for (let i = 0; i < 3; i++){
            ret.push(<Button>{this.props.Tags[i]}</Button>)
        }
        return ret
    }

    SwitchStatus = (a) =>{
        this.setState({Watched: a});
        console.log(this.state)
    }

    handleChange = (value) => {
        this.setState({ value });
    }



        render(){

            const { value } = this.state;

            return (

                <div>

                        <img className = "center"
                             src ='http://duncansensei.com/dir/wp-content/uploads/2015/05/37745_nichijou-1024x640.jpg'
                             alt = "No Anime Pic"
                             width = '500'
                        />

                    <div>
                        <h2 className="center-text">{this.props.Title}</h2>

                        <ul className="info">
                            <li> <strong>Japanese Name:</strong> {this.props.JapName}</li>
                            <li> <strong>Released:</strong> {this.props.Released}</li>
                            <li> <strong>Rating:</strong> {this.props.Rating}</li>
                            <li> <strong>Director:</strong> {this.props.Director}</li>
                            <li> <strong>Studio:</strong> {this.props.Studio}</li>
                        </ul>
                    </div>


                    <h3 className="text" >Watch Status: <Radio.Group defaultValue = {this.props.WatchStatus} buttonStyle="solid">
                        <Radio.Button onClick={this.SwitchStatus.bind(this, "0")} value="0">Interested</Radio.Button>
                        <Radio.Button onClick={this.SwitchStatus.bind(this, "1")} value="1">Watched</Radio.Button>
                        <Radio.Button onClick={this.SwitchStatus.bind(this, "2")} value="2">Aborted</Radio.Button>
                        <Radio.Button onClick={this.SwitchStatus.bind(this, "3")} value="3">Watching</Radio.Button>
                    </Radio.Group></h3>

                    <h3 className="text" >Tags: {this.CreateTags()} </h3>

                    <h3 className="text" >Rate: <Rate onChange={this.handleChange} value={value} /> </h3>

                    <div>
                        <h3 className="text" >Plot:</h3>
                        <p className="text" >{this.props.Plot}</p>
                    </div>


                </div>

            );

        }
}

Detail.defaultProps = {
    WatchStatus : "1",
    Tags : ["love", "school", "youth"],
    Title : "Title",
    JapName : 2,
    Released : 3,
    Rating : 4,
    Director : 5,
    Studio : 6,
    Plot : "The protagonist Beowulf, a hero of the Geats, comes to the aid of Hrothgar, king of the Danes, whose great hall, Heorot, is plagued by the monster Grendel. Beowulf kills Grendel with his bare hands and Grendel's mother with a giant's sword that he found in her lair."
}

export default Detail;
