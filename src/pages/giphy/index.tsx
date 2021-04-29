import React, { useState } from 'react';
import css from './Giphy.module.scss';
import { Form, Formik } from 'formik';
import GifList from './GifList/Giflist';
import GifFavoritesList from './GifFavoritesList/GifFavoritesList';

const Giphy = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const [gifList, setGifList] = useState([]);

    const [favoriteList, setFavoriteList] = useState([]);

    const [selectedGif, setSelectedGif] = useState({ id: '', title: '' });

    const handleSelectedGif = (id, title) => {
        setSelectedGif({ id: id, title: title });
    };

    const isItemIsFavorite = (id) => {
        // check if item is in favoriteList
        if (favoriteList.some((item) => item.id === selectedGif.id)) {
            onDeleteItem(id);
        } else {
            return onAddItem(selectedGif);
        }
    };

    const onAddItem = (selectedGif) => {
        // add item in farivoriteList
        setFavoriteList([...favoriteList, selectedGif]);
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

    const URL = [API.base, API.key, API.q, API.limit].join('');

    const handleSubmit = () => {
        fetch(URL)
            .then((response) => response.json())
            .then((list) => {
                setGifList(list.data);
                setSearchTerm(list);
            })
            .then(() => {})
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
                                <input id="searchTerm" name="searchTerm" onChange={handleChange} />
                                <button type="submit">submit</button>
                            </Form>
                        );
                    }}
                />
            </header>
            <main className={css.giphy__main}>
                <GifList
                    list={gifList}
                    isItemIsFavorite={(id) => isItemIsFavorite(id)}
                    onSelectedGif={(id, title) => handleSelectedGif(id, title)}
                />
                <GifFavoritesList isItemIsFavorite={(id) => isItemIsFavorite(id)} favoriteList={favoriteList} />
            </main>
        </section>
    );
};
export default Giphy;
