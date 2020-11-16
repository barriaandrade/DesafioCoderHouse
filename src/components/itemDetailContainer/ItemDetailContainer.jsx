import React, {useEffect, useState} from 'react'

import ItemDetail from './itemDetail/ItemDetail';
import { useParams } from 'react-router-dom';


const getItem = (itemId) => {

    return new Promise((res, rej) => {
        setTimeout(() =>{
            const items= [{id: 1, title: "SuperMario 3", price: 1000, pictureUrl: "https://media.vandal.net/m/22729/super-mario-bros-3-cv-2013122414722_1.jpg", description: "El Mundo Champiñón es atacado por el Rey de los Koopas. Esta vez, Bowser ha enviado a sus siete hijos, conocidos como Koopalings (コクッパ Ko Kuppa?, lit. Niños Koopa), para hacer lo que se les antoje en cada reino, robando los cetros (varitas mágicas) de los siete reyes que gobiernan en dicho mundo y convirtiéndolos en animales y plantas." },
            {id: 2, title: "Zelda ", price: 2000, pictureUrl: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2017/02/legend-zelda-caratula.jpg?itok=v7YayVPx", description: "Entre las leyendas que nos llegan del pasado remoto, hay una que dice así Hace mucho tiempo existió un reino que ocultaba el poder dorado de los dioses. Era un lugar hermoso, de verdes bosques y enormes montañas, donde reinaba la paz. Pero un día fue presa de la ambición de un villano que le arrebató el poder dorado. El reino cayó en las tinieblas. Y cuando el pueblo había perdido casi toda esperanza... apareció como de la nada un joven vestido con ropas verdes. Con su misteriosa espada, el joven sepultó al villano y le devolvió al reino la luz. Como venía de otra época, el pueblo le llamó Héroe del Tiempo. Muchos años después, cuando la historia del joven se había convertido en leyenda, en el reino volvieron a soplar vientos de tragedia..."}];
            
            // res(items.find( i => i.id == itemId));
            res(items);

            },2000)
        
    });
};

const ItemDetailContainer = () => {

    const [item, setItem] = useState({})
    const { itemId } = useParams();

    useEffect(() => {
        getItem(itemId).then(res => {
            const array = res;
            const arrayFilter = array.filter(i => i.id == itemId);
            setItem(arrayFilter[0]);
        })
    }, [itemId]);


    return (
   
            <div className="container" style={{paddingTop: 30}}>
                <div className="row">
                    <div className="col-md-12">
                        {/* <h3 style={{marginBottom: 30}}>{title}</h3> */}
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