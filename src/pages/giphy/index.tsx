import React, {useContext, useEffect, useState} from 'react';
import css from './Giphy.module.scss';
import {Form, Formik} from 'formik';
import GifList from '../../assets/components/giphy/GifList/Giflist';
import GifFavoritesList from '../../assets/components/giphy/GifFavoritesList/GifFavoritesList';
import {gifDetails} from './[reference]';

type GiphyProps = {
    gifDetails: gifDetails;
}
const Giphy = ({gifDetails}: GiphyProps) => {
    const [searchTerm, setSearchTerm] = useState('');

    const [gifList, setGifList] = useState([]);

    const [favoriteList, setFavoriteList] = useState([]);

    const [selectedGif, setSelectedGif] = useState({id: '', title: ''});

    const handleSelectedGif = (id, title) => {
        setSelectedGif({id: id, title: title});
    };

    const isItemIsFavorite = (selectedGif) => {
        // check if item is in favoriteList
        if (favoriteList.some((item) => item.id === selectedGif.id)) {
            onDeleteItem(selectedGif.id);
        } else {
            return onAddItem(selectedGif);

        }
    };

    const onAddItem = (selectedGif) => {
        // add item in farivoriteList
        setFavoriteList([...favoriteList, selectedGif]);
        setFavoriteList((favoriteList) => {
            const newItems = [...favoriteList];
            window.localStorage.setItem("array", JSON.stringify(newItems));
            return newItems;
            let storage = window.localStorage.getItem('selectedGif' + (selectedGif.id) || 'O');
            if (storage !== null) {
                window.localStorage.setItem('storage', JSON.stringify(storage));
            }
        });
    };

    const onDeleteItem = (id) => {
        // remove item in farivoriteList
        const newListOfFavorites = favoriteList.filter((item) => item.id !== id);
        return setFavoriteList(newListOfFavorites);
    };

    const handleChange = (event) => {
        event.preventDefault();
        const searchTerm = event.target.value;
        setSearchTerm(searchTerm);
    };

    const API = {
        base: 'https://api.giphy.com/v1/gifs/search?',
        key: 'api_key=u6M1Y42dEd2Lh817mQguBv31NMYrvvzR',
        q: `&q=${searchTerm}`,
        limit: '&limit=10',
    };

    const URL = `${API.base}${API.key}${API.q}${API.limit}`;
    const handleSubmit = () => {
        fetch(URL)
            .then((response) => response.json())
            .then((list) => {
                setGifList(list.data);
                setSearchTerm(list);
            })
            .then(() => {
            })
            .catch((err) => err);
    };

    const getInitialValues = () => {
        return {
            searchTerm: '',
            id: '',
            title: '',
        };
    };

    return (
        <section className={css.giphy}>
            <header>
                <h1> Gif Search </h1>
                <Formik
                    initialValues={getInitialValues()}
                    onSubmit={handleSubmit}
                    render={() => {
                        return (
                            <Form className={css.giphy__search}>
                                <input id="searchTerm" name="searchTerm" onChange={handleChange}/>
                                <button type="submit">submit</button>
                            </Form>
                        );
                    }}
                />
            </header>
            <main className={css.giphy__main}>
                <GifList
                    list={gifList}
                    isItemIsFavorite={(item) => isItemIsFavorite(item)}
                    onSelectedGif={(id, title) => handleSelectedGif(id, title)}
                />
                <GifFavoritesList favoriteList={favoriteList}/>

            </main>
        </section>
    );
};
export default Giphy;

