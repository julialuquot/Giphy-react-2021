import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import AuthContext from '@components/dashboard/context/auth/AuthContext';

const Stats = () => {
    const router = useRouter();
    const authContext = useContext(AuthContext);
    const { user, isFetching } = authContext;

    useEffect(() => {
        !user && router.push('/dashboard/connexion');
    }, [router, user]);

    return <>{!isFetching && user && <div>STATS COMPONENT</div>}</>;
};

export default Stats;
