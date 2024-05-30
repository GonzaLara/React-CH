import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import Carousel from "./Carousel";
import ItemList from "./ItemList";
import Loading from "./Loading";
import Temporada from "./Temporada";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [visible, setVisible] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const queryCollection = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
        getDocs(queryCollection).then(snapShot => {
            if (snapShot.size > 0) {
                setItems(snapShot.docs.map(item => ({id:item.id, ...item.data()})));
                setVisible(false);
            }
        });
    }, [id])

    return (
        <div className="container-fluid">
            <div className="row">
                <Carousel />
                {visible ? <Loading /> : <ItemList items={items} />}
                <Temporada />
            </div>
        </div>
    )
}

export default ItemListContainer;