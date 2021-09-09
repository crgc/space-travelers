/* eslint-disable */
const DisplayMissions = (props) =>{
    const {missions} = props 
    return (
        <div>
            {
                missions.map( mission => {
                    return(
                        <div key={mission.mission_id}className="missions">
                            <div>Name: {mission.mission_name}</div>
                            <div style={{fontSize: "8px"}}>Discription:{mission.description}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default DisplayMissions;