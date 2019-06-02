import React from 'react'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'
import Loading from './Loading'
import { withRoomConsumer } from '../context'

function RoomContainer({context}){
    const { loading, sortedRooms, rooms } = context;
    if(loading){
        return <Loading/>;
    }
    return (
        <div>
            <RoomFilter rooms={rooms}/>
            <RoomList rooms={sortedRooms}/>
        </div>
    )
}

export default withRoomConsumer(RoomContainer);





// import React from 'react'
// import RoomFilter from './RoomFilter'
// import RoomList from './RoomList'
// import Loading from './Loading'
// import { RoomConsumer } from '../context'

// export default function RoomsContainer() {
//     return (
//         <RoomConsumer>
//             {
//                 value => {
//                     const { loading, sortedRooms, rooms } = value;
//                     if(loading){
//                         return <Loading/>;
//                     }
//                     return (
//                         <div>
//                             <RoomFilter rooms={rooms}/>
//                             <RoomList rooms={sortedRooms}/>
//                         </div>
//                     )
//                 }
//             }
//         </RoomConsumer>
//     )
// }
