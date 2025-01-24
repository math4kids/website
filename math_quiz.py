import random

def get_user_input():
    name = input("What is your name? ")
    while True:
        try:
            num_questions = int(input("How many questions would you like? "))
            if num_questions > 0:
                break
            print("Please enter a positive number")
        except ValueError:
            print("Please enter a valid number")
    
    while True:
        try:
            multiplication_number = int(input("Which number would you like to practice (1-12)? "))
            if 1 <= multiplication_number <= 12:
                break
            print("Please enter a number between 1 and 12")
        except ValueError:
            print("Please enter a valid number")
    
    return name, num_questions, multiplication_number

def main():
    print("Welcome to the Math Quiz!")
    name, num_questions, multiplication_number = get_user_input()
    
    score = 0
    for i in range(num_questions):
        num2 = random.randint(1, 12)
        answer = multiplication_number * num2
        
        print(f"\nQuestion {i + 1}:")
        user_answer = int(input(f"What is {multiplication_number} x {num2}? "))
        
        if user_answer == answer:
            print("Correct!")
            score += 1
        else:
            print(f"Sorry, the correct answer was {answer}")

    print(f"\nQuiz completed! Your score: {score}/{num_questions}")

if __name__ == "__main__":
    main() 