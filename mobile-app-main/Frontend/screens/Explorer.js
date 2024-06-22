import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView } from 'react-native';

const questions = [
  {
    question: 'What is the value of pi (π)?',
    answer: '3.14159',
    options: ['3.14', '3.141', '3.14159'],
  },
  {
    question: 'What is the formula to calculate the area of a rectangle?',
    answer: 'Length × Width',
    options: ['Length × Length', 'Length + Width', 'Length × Width'],
  },
  {
    question: 'What is the sum of the angles in a triangle?',
    answer: '180 degrees',
    options: ['90 degrees', '120 degrees', '180 degrees'],
  },
  {
    question: 'What is the smallest unit of matter?',
    answer: 'Atom',
    options: ['Molecule', 'Cell', 'Atom'],
  },
  {
    question: 'What is the force that pulls objects towards the center of the Earth?',
    answer: 'Gravity',
    options: ['Friction', 'Magnetism', 'Gravity'],
  },
  {
    question: 'What type of energy is stored in a battery?',
    answer: 'Chemical energy',
    options: ['Electrical energy', 'Mechanical energy', 'Chemical energy'],
  },
  {
    question: 'Who was the first President of the United States?',
    answer: 'George Washington',
    options: ['Abraham Lincoln', 'Thomas Jefferson', 'George Washington'],
  },
  {
    question: 'In which year did World War II end?',
    answer: '1945',
    options: ['1943', '1945', '1950'],
  },
  {
    question: 'Who wrote the Declaration of Independence?',
    answer: 'Thomas Jefferson',
    options: ['George Washington', 'Thomas Jefferson', 'John Adams'],
  },
  {
    question: 'Which word is a synonym for "happy"?',
    answer: 'Joyful',
    options: ['Sad', 'Joyful', 'Angry'],
  },
  {
    question: 'What is the past tense of "go"?',
    answer: 'Went',
    options: ['Goed', 'Went', 'Gone'],
  },
];

const Explorer = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [userResponses, setUserResponses] = useState([]);
  const [answerStatus, setAnswerStatus] = useState([]);

  useEffect(() => {
    if (currentQuestion < questions.length) {
      const timer = setInterval(() => {
        if (timeLeft > 0) {
          setTimeLeft(timeLeft - 1);
        } else {
          setUserResponses([...userResponses, null]);
          setCurrentQuestion(currentQuestion + 1);
          setTimeLeft(15);
        }
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [currentQuestion, timeLeft, userResponses]);

  const handleAnswer = (option) => {
    const correctAnswer = questions[currentQuestion].answer;
    if (option === correctAnswer) {
      setScore(score + 1);
      setAnswerStatus([...answerStatus, 'Correct']);
    } else {
      setAnswerStatus([...answerStatus, 'Incorrect']);
    }
    setUserResponses([...userResponses, option]);
    setCurrentQuestion(currentQuestion + 1);
    setTimeLeft(15);
  };

  const buttonStyle = (option) => {
    const correctAnswer = questions[currentQuestion].answer;
    if (option === correctAnswer && answerStatus[currentQuestion] === 'Correct') {
      return styles.buttonCorrect;
    } else if (option === correctAnswer && answerStatus[currentQuestion] === 'Incorrect') {
      return styles.buttonCorrect;
    } else if (option !== correctAnswer && answerStatus[currentQuestion] === 'Incorrect') {
      return styles.buttonIncorrect;
    } else {
      return styles.button;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {currentQuestion < questions.length ? (
        <>
          <Text style={styles.question}>{questions[currentQuestion].question}</Text>
          <Text style={styles.timer}>Time Left: {timeLeft} seconds</Text>
          {questions[currentQuestion].options.map((option, index) => (
            <View key={index} style={styles.choiceBox}>
              <Button
                title={option}
                onPress={() => handleAnswer(option)}
                style={buttonStyle(option)}
              />
            </View>
          ))}
        </>
      ) : (
        <>
          <Text style={styles.result}>You scored {score} out of {questions.length}</Text>
          <Button title="Restart Quiz" onPress={() => {setCurrentQuestion(0); setScore(0); setTimeLeft(15); setUserResponses([]); setAnswerStatus([]);}} />
          <Text>User Responses: {userResponses.join(', ')}</Text>
          <Text>Answer Status: {answerStatus.join(', ')}</Text>
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  question: {
    fontSize: 20,
    marginBottom: 15,
  },
  timer: {
    fontSize: 16,
    marginBottom: 10,
    color: 'red',
  },
  result: {
    fontSize: 18,
    marginBottom: 15,
  },
  button: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#eee',
  },
  buttonCorrect: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: 'green',
  },
  buttonIncorrect: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: 'red',
  },
  choiceBox: {
    marginBottom: 3,
    width: 100,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});

export default Explorer;
