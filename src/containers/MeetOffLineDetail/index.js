import React, { Component } from 'react';
import style from './index.css';
import {hashHistory} from 'react-router';
import {Icon, WhiteSpace, Carousel, ActivityIndicator ,Button, Tabs} from 'antd-mobile';
import url from "api_url/index.js";
import {connect} from "react-redux";
import MeetInfo from "components/MeetDetailItem/MeetInfo";
import MeetPlan from "components/MeetDetailItem/MeetPlan";
import Responder from "components/MeetDetailItem/Responder";
import DoctorList from "components/DoctorList";
import moment from 'moment';
moment.lang('zh-cn');
const TabPane = Tabs.TabPane;

class MeetOffLineDetail extends Component {
	state = {
		loading:false,
		meeting:null
	}
	componentDidMount(){
		this.getDetail();
	}
	getDetail = () =>{
		return fetch(url.meetings +'/' + this.props.routeParams.id +"?token=" + this.props.userInfo.token)
		.then((response)=>response.json())
		.then((data)=>{
			this.setState({
				meeting:data.meeting
			})
		})
	}
	render() {
		let {meeting} = this.state;
		return (
			<div className={style.meetOffLineDetail}>
				{
					meeting &&
					<div className={style.meetPoster}>
						<img src={meeting.cover_data.size_700} alt="img" />
						{
							meeting.attendee_status === 'attendee' &&
							<div className={style.btnWrap}>
								<Button
									className={style.payBtn}
									size="small"
									type="primary"
									inline
								>{Number(meeting.price) ?`会议报名／¥${meeting.price}` : '会议报名／免费'}</Button>
								<p>报名截止时间</p>
								<h5>{moment(meeting.last_enter_time).format('MM月DD日 HH:mm')}</h5>
							</div>
						}
						{
							meeting.attendee_status === 'purchase' &&
							<div className={style.btnWrap}>
								<Button
									className={style.payBtn}
									size="small"
									type="primary"
									inline
									disabled
									style={{color:"#666"}}
								>订单号:{meeting.meeting_order_no}</Button>
								<h5>报名成功!</h5>
							</div>
						}
						{
							meeting.attendee_status === 'outnumber' &&
							<div className={style.btnWrap}>
								<Button
									className={style.payBtn}
									size="small"
									type="primary"
									inline
									disabled
									style={{color:"#666"}}
								>名额已满</Button>
								<h5>已截止报名</h5>
							</div>
						}
						{
							meeting.attendee_status == 'outtime' &&
							<div className={style.btnWrap}>
								<Button
									className={style.payBtn}
									size="small"
									type="primary"
									inline
									disabled
									style={{color:"#666"}}
								>报名结束</Button>
								<h5>已截止报名</h5>
							</div>
						}
					</div>
				}

				{
					meeting &&
					<Tabs swipeable={false} defaultActiveKey="1" className={style.tabWrap}>
						<TabPane tab="会议简介" key="1" className={style.tabItemWrap}>
							<MeetInfo {...meeting}/>
						</TabPane>
						<TabPane tab="会议日程" key="2" className={style.tabItemWrap}>
							<MeetPlan {...meeting}/>
						</TabPane>
						<TabPane tab="专家列表" key="3" className={style.tabItemWrap}>
							<DoctorList experts={meeting.experts} />
						</TabPane>
						{
							this.props.location.query.meeting === "iscvd" &&
							<TabPane tab="现场互动" key="4" className={style.tabItemWrap}>
								<Responder {...meeting}/>
							</TabPane>
						}
					</Tabs>
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
)(MeetOffLineDetail);