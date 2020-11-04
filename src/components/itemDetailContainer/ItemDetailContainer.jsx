import React, {useEffect, useState} from 'react'
import ItemDetail from '../itemDetail/ItemDetail';


const getItem = () =>{
    return new Promise((res, rej) => {
        setTimeout(() =>{
            res({id: 1, title: "SuperMario 3", price: 1000, pictureUrl: "https://media.vandal.net/m/22729/super-mario-bros-3-cv-2013122414722_1.jpg", description: "El Mundo Champiñón es atacado por el Rey de los Koopas. Esta vez, Bowser ha enviado a sus siete hijos, conocidos como Koopalings (コクッパ Ko Kuppa?, lit. Niños Koopa), para hacer lo que se les antoje en cada reino, robando los cetros (varitas mágicas) de los siete reyes que gobiernan en dicho mundo y convirtiéndolos en animales y plantas.3​ Mario y Luigi son llamados nuevamente y en cada uno de estos mundos se infiltran en las naves de los Koopalings, derrotándolos y recuperando las varitas que custodian, para con ello devolver a la normalidad a los reyes y sus reinos." })
        },2000)
        
    });
}

const ItemDetailContainer = ({title}) => {

    const [item, setItem] = useState({})

    useEffect(() => {
        getItem().then(item => {
            setItem(item);
            console.log(setItem);
        })
    }, []);

    return (
   
            <div className="container" style={{paddingTop: 30}}>
                <div className="row">
                    <div className="col-md-12">
                        <h3 style={{marginBottom: 30}}>{title}</h3>
                        <div className="row">
                            <div className="col-md-12">
                            <ItemDetail id={item.id} title={item.title} price={item.price} pictureUrl={item.pictureUrl} description={item.description}></ItemDetail>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
    )
}

export default ItemDetailContainer