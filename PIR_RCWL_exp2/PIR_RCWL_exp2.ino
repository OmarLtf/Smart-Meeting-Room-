const int PIR_PIN = 26;   // PIR sensor pin
const int RCWL_PIN = 25;  // RCWL sensor pin
const int LED_PIN = 27;   // LED pin to indicate room availability
const int MOTION_DELAY = 5000;  // motion delay in milliseconds


bool personInTheRoom = false;   // flag to indicate person in the room
unsigned long lastMotionTime = 0;  // last time RCWL detected motion

void setup() {
  Serial.begin(115200);
  pinMode(PIR_PIN, INPUT);
  pinMode(RCWL_PIN, INPUT);
  pinMode(LED_PIN, OUTPUT);
}

void loop() {
  Serial.print(digitalRead(PIR_PIN));
  Serial.print(" | ");
  Serial.print(digitalRead(RCWL_PIN));
  Serial.println();
  delay(500);

  // PIR sensor detects person
  if (digitalRead(PIR_PIN) == HIGH) {
    Serial.print("PIR detects motion : ");
    delay(500);
    // RCWL detects motion for more than 5 seconds
    if (RCWLdetectMotion()) {
      if(!personInTheRoom){      
      Serial.println("Room Occupied");
      personInTheRoom = true;
      //Send room status to the cloud 
      }else{
        Serial.println("Person still in the room | From PIR");
      }
  } 
  // PIR sensor doesn't detect person
  else {
    // RCWL detects motion and person was previously detected
    if (RCWLdetectMotion() && personInTheRoom) {
      Serial.println("Person still in the room | From RCWL");
      lastMotionTime = millis();  // update last motion time
    } 
    // RCWL doesn't detect motion for more than 10 seconds
    else if (!RCWLdetectMotion() && personInTheRoom && millis() - lastMotionTime > 10000) {
      Serial.println("Room Available");
      personInTheRoom = false;
      //Send room status to the cloud 
    }
  }
}

// Function to detect motion with RCWL sensor for at least 5 seconds
bool RCWLdetectMotion() {
  unsigned long motionStartTime = millis();
  while (digitalRead(RCWL_PIN) == HIGH) {
    if (millis() - motionStartTime >= MOTION_DELAY) {
      return true;
    }
    delay(100);  // wait for 100 milliseconds before checking again
  }
  return false;
}