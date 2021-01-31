import React, { Component } from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import socket from './socket';
import '../index.scss';
import Button from '../../../elements/Button';
import PeerConnection from './PeerConnection';
import CallModal from './CallModal';
import CallWindow from './CallWindow';
import Hero from './hero.js';
import TableModal from './TableModal';


export default class DashContent extends Component {
    
    constructor(props) {

        super(props);
        this.state = {
          clientId: '',
          callWindow: '',
          callModal: '',
          callFrom: '',
          friend: '',
          callingModal: false,
          localSrc: null,
          peerSrc: null
        };
        this.pc = {};
        this.config = null;
        this.startCallHandler = this.startCall.bind(this);
        this.endCallHandler = this.endCall.bind(this);
        this.rejectCallHandler = this.rejectCall.bind(this);
        this.showModalHandler = this.showModal.bind(this);
        this.hideModalHandler = this.hideModal.bind(this);
        this.callModalButtonHandler = this.callModalButton.bind(this);
      }
      
      componentDidMount() {
        socket
          .on('init',  (id) => {
            this.setState({ clientId : id});
          })
          .on('request', ({ from: callFrom }) => {
            this.setState({ callModal: 'active', callFrom });
          })
          .on('call', (data) => {
            console.log(data);
            if (data.sdp) {
              this.pc.setRemoteDescription(data.sdp);
              if (data.sdp.type === 'offer') this.pc.createAnswer();
            } else this.pc.addIceCandidate(data.candidate);
          })
          .on('end', this.endCall.bind(this, false))
          .emit('init', this.props.username);
          
      }
      callModalButton(e){
        const config = { audio: true, video:true };
        const friendID = e.target.dataset.value;
        const isCaller = true;
        friendID && this.startCall(isCaller, friendID, config );
      }
    
    
      startCall(isCaller, friendID, config) {        
        this.config = config;
        this.pc = new PeerConnection(friendID)
          .on('localStream', (src) => {
            const newState = { callWindow: 'active', localSrc: src };
            if (!isCaller) newState.callModal = '';
            this.setState(newState);
          })
          .on('peerStream', (src) => this.setState({ peerSrc: src }))
          .start(isCaller, config);
      }
      callModalButton(e){
        const config = { audio: true, video:true };
        const friendID = e.target.dataset.value;
        const isCaller = true;
        friendID && this.startCall(isCaller, friendID, config );
      }

      rejectCall() {
        const { callFrom } = this.state;
        socket.emit('end', { to: callFrom });
        this.setState({ callModal: '' });
      }
    
      endCall(isStarter) {
        if (_.isFunction(this.pc.stop)) {
          this.pc.stop(isStarter);
        }
        this.pc = {};
        this.config = null;
        this.setState({
          callWindow: '',
          callModal: '',
          localSrc: null,
          peerSrc: null
        });
      }
    showModal(){
      this.setState({callingModal: true});
    }
    hideModal(){
      this.setState({callingModal: false});
    }
  
    
 


   

    render = () => {
      const { clientId, callFrom, callModal, callWindow, localSrc, peerSrc } = this.state;
      let date ;
      let data =  this.props.role ==="User" ? (!(this.props.userData === 0) && !(this.props.bookingList.length ===0) ?
      this.props.bookingList.map((b)=>
        this.props.userData.booking.map((p, index) =>
           (b._id === p) && ( date = new Date(b.date)) && ( 
            
                <tr>
                  <td key={index}>{date.toDateString() }</td>
                  <td key={index}>{b.time}</td>
                   <td key={index}>{b.consultant}</td>
  
                  <td key={index}>{b.subject}</td>
                  <td  ><Button className="btn-sm" data-value={b.consultant} onClick={this.callModalButtonHandler} >Call</Button></td>
                </tr>
            
            )
          )) : <tr><td>No Bookings</td></tr> ): (
            !(this.props.bookingList.length ===0) ?
          this.props.bookingList.map((b, index)=>
               (b.consultant === this.props.username) && ( date = new Date(b.date)) && ( 
                
                    <tr>
                      <td key={index}>{date.toDateString() }</td>
                      <td key={index}>{b.time}</td>
                      
                        <td key={index}>{b.user}</td>
          
                      <td key={index}>{b.subject}</td>
                      <td  ><Button className="btn-sm" data-value={b.user} onClick={this.callModalButtonHandler} >Call</Button></td>
                    </tr>
                
                )
              ) : <tr><td>No Bookings</td></tr>
          );

        return (      
            <div className="page-content">
                <h5>Hi {this.props.username.toUpperCase()}, Welcome to ICS Dashboard.</h5>
                
                
                <Hero topDivider userData = {this.props.userData} username={this.props.username} upcoming={this.props.upcoming} role={this.props.role} />
               { this.props.role !== "Admin" && (
                <TableModal role={this.props.role}>
                  <tbody>
                  {data}
                  </tbody>
               
                </TableModal>
               )} 
                {!_.isEmpty(this.config) && (
                  <CallWindow
                    status={callWindow}
                    localSrc={localSrc}
                    peerSrc={peerSrc}
                    config={this.config}
                    mediaDevice={this.pc.mediaDevice}
                    endCall={this.endCallHandler}
                  />
                ) }
                <CallModal
                  status={callModal}
                  startCall={this.startCallHandler}
                  rejectCall={this.rejectCallHandler}
                  callFrom={callFrom}
                />

                {/* <Button
                 onClick={this.showModalHandler}
                >Call
                </Button> */}
            </div>
        )
    }
}
