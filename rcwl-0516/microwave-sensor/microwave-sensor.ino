unsigned long lastMotionTime = 0 ; 

int ledPinBlue = 32;                // choose the pin for the LED
int ledPinRed = 33;                // choose the pin for the LED

int inputPin = 25;               // choose the input pin (for Radar sensor)
int motionState = LOW;          // we start, assuming no motion detected
int val = 0;                    // variable for reading the pin status
 
void setup() {
  pinMode(ledPinRed, OUTPUT);      // declare LED as output
  pinMode(ledPinBlue, OUTPUT);      // declare LED as output
  pinMode(inputPin, INPUT);     // declare sensor as input
 
  Serial.begin(9600);
}
 
void loop() {
  val = digitalRead(inputPin);  // read input value
  Serial.print(val);
  delay(500);
  
  if (val == HIGH) {  // check if the input is HIGH
    digitalWrite(ledPinRed, HIGH);  // turn LED ON
    digitalWrite(ledPinBlue, LOW);  // turn LED ON
    
    if (motionState == LOW) {
      Serial.println("\nMotion detected!"); // print on output change
      motionState = HIGH;
    }
    lastMotionTime = millis();
  }
  else {
    digitalWrite(ledPinRed, LOW); // turn LED OFF
    digitalWrite(ledPinBlue, HIGH); // turn LED OFF
    
    if (motionState == HIGH && millis() - lastMotionTime >= 10000) {
      Serial.println("\nMotion ended!");  // print on output change
      motionState = LOW;
    }
  }
}