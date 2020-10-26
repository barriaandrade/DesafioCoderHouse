import React from 'react'

const ItemListContainer = ({title}) => {
    return (
   
            <div className="container" style={{paddingTop: 30}}>
                <div className="row">
                    <div className="col-md-12">
                       <h3>{title}</h3> 
                    </div>
                </div>
            </div>
            
    )
}

export default ItemListContainer
