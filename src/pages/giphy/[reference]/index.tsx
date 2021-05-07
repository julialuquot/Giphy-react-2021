import React from 'react';

export interface gifDetails {
    data: {
        id: string;
        title: string;
    }
}

type GifDetailsTypeProps = {
    gifDetails: gifDetails;
};

const gifDetailsPage = ({gifDetails}: GifDetailsTypeProps) => {
    console.log('gifDetails', gifDetails);

    return (
        <ul>
            {gifDetails && (

                <li key={gifDetails?.data.id}>
                    <h5>
                        {gifDetails?.data.title}
                    </h5>
                    <div>
                        <p><b>id:</b>{gifDetails?.data.id}</p>
                        <p><b>title:</b>{gifDetails?.data.title}</p>
                    </div>

                </li>
            )}
        </ul>
    )
}

export default gifDetailsPage;

export const getServerSideProps = async (ctx) => {
    const id = ctx.query.reference;

    const API = {
        base: 'http://api.giphy.com/v1/gifs/',
        id: `${id}`,
        key: '?api_key=u6M1Y42dEd2Lh817mQguBv31NMYrvvzR',
    };

    const URL = `${API.base}${API.id}${API.key}`;
    console.log('URL', URL);
    const gifDetails = await fetch(URL, {
        method: "get",
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
        },
    })
        .then((res) => res.json());
    return {
        props: {
            gifDetails,
        }
    };
};
