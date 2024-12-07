import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Scoreboard from '../components/Scoreboard';

const FutsalScoreApp = () => {
    const [scoreA, setScoreA] = useState(0);
    const [scoreB, setScoreB] = useState(0);

    const handleIncrease = (team) => {
        if (team === 'A' && scoreA < 10) setScoreA(scoreA + 1);
        if (team === 'B' && scoreB < 10) setScoreB(scoreB + 1);
    };

    const handleDecrease = (team) => {
        if (team === 'A' && scoreA > 0) setScoreA(scoreA - 1);
        if (team === 'B' && scoreB > 0) setScoreB(scoreB - 1);
    };

    const handleReset = () => {
        setScoreA(0);
        setScoreB(0);
    };

    return (
        <View style={styles.container}>
            <Scoreboard
                teamA="Team A"
                teamB="Team B"
                scoreA={scoreA}
                scoreB={scoreB}
                onIncrease={handleIncrease}
                onDecrease={handleDecrease}
                onReset={handleReset}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e0f7fa',
    },
});

export default FutsalScoreApp;
