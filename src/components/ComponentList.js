import React, { useState, useEffect } from 'react'; 
import { FlatList, StyleSheet } from 'react-native'; 
import { useQuery } from '@apollo/client';

import { REGISTERED_TIMES } from '../graphql/requests';

import ListItem from './ListItem';
import { Spinner } from '../components/commons';

const ComponentList = ({ userId, admin }) => { 
    const [dynamicList, setDynamicList] = useState([]);
    const { data, loading } = useQuery(REGISTERED_TIMES, {
        fetchPolicy: 'network-only'
    });

    useEffect(() => {
        if (data && userId) {
            const id = JSON.stringify(userId);
            const { registeredTimes } = data;

            setDynamicList(registeredTimes
                .filter(reg => reg.user.id === JSON.parse(id)));
        } else if (data && admin) {
            const { registeredTimes } = data;
            setDynamicList(registeredTimes);
        }
    }, [data, userId]);

    if (loading) return <Spinner />;

    const renderItem = ({ item }) => {
        return (
            <ListItem
                name={item.user.name}
                timeRegistered={item.timeRegistered}
                role={item.user.role.name}
            />
        );
    };

    return ( 
        <FlatList
            data={dynamicList}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
        />
    );
};

const styles = StyleSheet.create({});

export default ComponentList;
