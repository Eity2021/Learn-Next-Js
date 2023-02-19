import React from 'react';
import {useRouter} from 'next/router';

const postDetails = () => {
    const router = useRouter();
    const {id} = router.query;
    return (
        <div>
            <h1>this is dynamic page is {id}</h1>
        </div>
    );
};

export default postDetails;