import React from 'react'
import AddMember from '../components/AddMember';
import TeamMembers from '../components/TeamMembers';
import Modal from '../components/Modal';
import Logout from '../components/Logout';

const HomePage = () => {
    // const {user} = useSelector(state => state.custom)
    return (
        <div className='App'>
            <div className='app-header'>
                <div style={{display: "flex"}}>
                    <h2 className='title'>Team Members</h2>
                    <AddMember />
                </div>
                <Logout/>
            </div>
            <hr />
            <TeamMembers />
            <Modal />
        </div>
    );
}

export default HomePage
