import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Scoreboard = ({ teamA, teamB, scoreA, scoreB, onIncrease, onDecrease, onReset }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>🏆 Futsal Match</Text>
            
            {/* Tim A */}
            <View style={styles.teamContainer}>
                <Text style={styles.teamName}>{teamA}</Text>
                <Text style={styles.score}>{scoreA}</Text>
                <View style={styles.buttonRow}>
                    <Button title="+" onPress={() => onIncrease('A')} color="#4CAF50" />
                    <Button title="-" onPress={() => onDecrease('A')} color="#F44336" />
                </View>
            </View>

            {/* Tim B */}
            <View style={styles.teamContainer}>
                <Text style={styles.teamName}>{teamB}</Text>
                <Text style={styles.score}>{scoreB}</Text>
                <View style={styles.buttonRow}>
                    <Button title="+" onPress={() => onIncrease('B')} color="#4CAF50" />
                    <Button title="-" onPress={() => onDecrease('B')} color="#F44336" />
                </View>
            </View>

            {/* Pemenang */}
            {(scoreA === 10 || scoreB === 10) && (
                <Text style={styles.winner}>
                    🎉 {scoreA === 10 ? teamA : teamB} Wins! 🎉
                </Text>
            )}

            {/* Tombol Reset */}
            <Button title="Reset Match" onPress={onReset} color="#FF9800" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: 'center',
        backgroundColor: '#f0f8ff',
        borderRadius: 10,
        margin: 20,
        elevation: 5, // Untuk bayangan di Android
        shadowColor: '#000', // Untuk bayangan di iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    teamContainer: {
        marginBottom: 20,
        alignItems: 'center',
    },
    teamName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#555',
    },
    score: {
        fontSize: 48,
        fontWeight: 'bold',
        marginVertical: 10,
        color: '#333',
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: 150,
        marginTop: 10,
    },
    winner: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'green',
        marginVertical: 20,
    },
});

export default Scoreboard;
