import React from 'react';
import { StyleSheet, View, Text, ViewProps } from 'react-native';
import { Colors } from '../theme/colors';

type HeaderProps = {
    title: string;
} & ViewProps;

export const Header: React.FC<HeaderProps> = props => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: Colors.bottom_top_bar,
    },
    header: {
        paddingHorizontal: 10,
        position: 'absolute',
        zIndex: 1,
        backgroundColor: Colors.bottom_top_bar,
        width: '100%',
        height: 70,
        borderWidth: 1,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        borderColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    text: {
        flex: 1,
        textAlign: 'center',
        fontSize: 24,
        fontWeight: '500',
        color: Colors.white,
        alignSelf: 'center',
    },
});