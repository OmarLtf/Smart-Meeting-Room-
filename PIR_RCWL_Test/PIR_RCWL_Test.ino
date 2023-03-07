#include <WiFi.h>
#include <HTTPClient.h>

const char* ssid = "NWA_Guest";
const char* password = "WelcomeToNWA";



// Set up PIR sensor and RCWL-0516 sensor
const int PIR_PIN = 26;
const int RCWL_PIN = 25;

// Set up interrupt handlers
volatile bool pirDetected = false;
volatile bool rcwlDetected = false;

void IRAM_ATTR pirInterrupt() {
  pirDetected = true;
}

void IRAM_ATTR rcwlInterrupt() {
  rcwlDetected = true;
}

void setup() {
  pinMode(PIR_PIN, INPUT);
  attachInterrupt(digitalPinToInterrupt(PIR_PIN), pirInterrupt, RISING);

  pinMode(RCWL_PIN, INPUT);
  attachInterrupt(digitalPinToInterrupt(RCWL_PIN), rcwlInterrupt, RISING);

  Serial.begin(9600);

  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }

  Serial.println("WiFi connected.");
}

void loop() {
  static bool personDetected = false;
  static unsigned long entryTime;
  static unsigned long exitTime;
  int var = digitalRead(RCWL_PIN);
  Serial.print(var);
  delay(500);
  if (pirDetected) {
    pirDetected = false;
    entryTime = millis();
  }

  if (rcwlDetected) {
    rcwlDetected = false;
    unsigned long duration = millis() - entryTime;

    if (duration < 5000) {
      // Person just passed through the room
      return;
    }

    if (!personDetected) {
      // Person just entered the room
      personDetected = true;
      Serial.print("\nPerson entered the room : ");
      Serial.print(entryTime);
      Serial.println("");
  
    }
  }

  if (personDetected && !digitalRead(PIR_PIN)) {
    // Person left the room
    personDetected = false;
    exitTime = millis();
    unsigned long duration = exitTime - entryTime;
    Serial.println("Person left the room.");
    Serial.print("Duration: ");
    Serial.println(duration);

  }
}