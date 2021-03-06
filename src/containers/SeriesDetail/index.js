import React, { Component } from 'react';
import style from './index.css';
import {ActivityIndicator, Tabs, Badge, Button} from 'antd-mobile';
import {connect} from "react-redux";
import url from "api_url/index.js";

import DoctorInfo from "components/DoctorInfo";
import SeriesDetailList from "components/SeriesDetailList";
import SeriesInfo from "components/SeriesInfo";

import LiveVideo from "components/LiveVideo";
import Comment from "components/Comment";
import MiniNav from "components/MiniNav";

const TabPane = Tabs.TabPane;

class SeriesDetail extends Component {
	state = {
		loading:false,
		series:null,
	}
	componentDidMount(){
		this.setState({
			loading:true
		})
		fetch(url.videos + "/"+ this.props.routeParams.id + "?token=" + this.props.userInfo.token)
		.then((response)=>response.json())
		.then((data)=>{
			console.log(data);
			this.setState({
				loading:false,
				series:data.course
			})
		})
	}
	render() {
		let {series} = this.state;
		return (
			<div className={style.seriesDetailWrap}>
				{
					series &&
					<div className={style.seriesDetail}>
						<div className={style.seriesEnded}>
							<img src={series.cover_data.size_700} alt="img" />
						</div>
						<Tabs swipeable={false} defaultActiveKey="1" className={style.tabWrap}>
							<TabPane tab="课程目录" key="1" className={style.tabItemWrap}>
								<SeriesDetailList {...series}/>
							</TabPane>
							<TabPane tab="课程简介" key="2" className={style.tabItemWrap}>
								<SeriesInfo {...series} />
							</TabPane>
							<TabPane tab="医生详情" key="3" className={style.tabItemWrap}>
								<DoctorInfo {...series.doctor}/>
							</TabPane>
						</Tabs>
						<ActivityIndicator toast  animating={this.state.loading}/>
						<MiniNav/>
					</div>
				}
			</div>
		);
	}
}

export default connect (
	(state)=>{
		return {
			userInfo:state.userInfo
		}
	},
	()=>{
		return {
		}
	}
)(SeriesDetail);










