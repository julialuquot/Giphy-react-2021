import React from 'react';
import Avatar from '../src/components/common/Avatar/Avatar';
import avatarImage from '../public/images/no-avatar.png';

export default {
    title: 'Avatar',
    component: Avatar,
};

const styles = {
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '20px',
    },
    row: {
        display: 'flex',
        alignItems: 'space-around',
        width: '90vw',
        marginBottom: '20px',
    },
};

export const Simple = () => (
    <div style={styles.wrapper}>
        <div style={styles.row}>
            <Avatar imageSrc={avatarImage} color="brand-primary" label="John Doe" />
        </div>
    </div>
);
