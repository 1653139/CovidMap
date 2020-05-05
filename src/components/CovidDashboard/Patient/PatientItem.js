import React from 'react'
import PropTypes  from 'prop-types'

const PatientItem = ({item, onClickPatient}) =>{
    
    return (
        <>
            <div className="patient-item" onClick={()=>onClickPatient(item)}>
                <h5>{item.name}</h5>
            </div>
        </>
    )
}

PropTypes .PatientItem = {
    item: PropTypes.object.required,
    onClickPatient: PropTypes.func.required
}

export default PatientItem