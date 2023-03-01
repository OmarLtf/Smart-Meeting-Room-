
#include "WiFi.h"
#include <Firebase_ESP_Client.h>

//Provide the token generation process info.
#include "addons/TokenHelper.h"
//Provide the RTDB payload printing info and other helper functions.
#include "addons/RTDBHelper.h"

#define WIFI_SSID "NWA_Guest"
#define WIFI_PASSWORD "WelcomeToNWA"

// Insert Firebase project API Key
#define API_KEY "AIzaSyCiNhZaSeb_6GklMV_gf-9-cNXeBjuqKJs"

// Insert RTDB URLefine the RTDB URL */
#define DATABASE_URL "https://smart-meeting-room-cc563-default-rtdb.europe-west1.firebasedatabase.app/"

FirebaseData fbdo;

FirebaseAuth auth;
FirebaseConfig config;


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

char* convertMillisToStr(unsigned long millis) {
    int hours, minutes, seconds;
    hours = (millis / (1000 * 60 * 60)) % 24;
    minutes = (millis / (1000 * 60)) % 60;
    seconds = (millis / 1000) % 60;

    // Allocate memory for the output string
    char* result = (char*)malloc(12 * sizeof(char));
    if (result == NULL) {
        return NULL;
    }
    // Convert the hours, minutes, and seconds values into a string and concatenate them
    sprintf(result, "%02d:%02d:%02d\n", hours, minutes, seconds);

    return result;
}

unsigned long sendDataPrevMillis = 0;
int count = 0;
bool signupOK = false;


void setup() {
  Serial.begin(9600);
  
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Connecting to Wi-Fi");
  while (WiFi.status() != WL_CONNECTED){
    Serial.print(".");
    delay(300);
  }
  Serial.println();
  Serial.print("Connected with IP: ");
  Serial.println(WiFi.localIP());
  Serial.println();

  /* Assign the api key (required) */
  config.api_key = API_KEY;

  /* Assign the RTDB URL (required) */
  config.database_url = DATABASE_URL;

  /* Sign up */
  if (Firebase.signUp(&config, &auth, "", "")){
    Serial.println("ok");
    signupOK = true;
  }
  else{
    Serial.printf("%s\n", config.signer.signupError.message.c_str());
  }

  /* Assign the callback function for the long running token generation task */
  config.token_status_callback = tokenStatusCallback; //see addons/TokenHelper.h
  
  Firebase.begin(&config, &auth);
  Firebase.reconnectWiFi(true);


  pinMode(PIR_PIN, INPUT);
  attachInterrupt(digitalPinToInterrupt(PIR_PIN), pirInterrupt, RISING);

  pinMode(RCWL_PIN, INPUT);
  attachInterrupt(digitalPinToInterrupt(RCWL_PIN), rcwlInterrupt, RISING);

  

}

void loop() {
  static bool personDetected = false;
  static unsigned long entryTime;
  static unsigned long exitTime;

  if (pirDetected) {
    pirDetected = false;
    entryTime = millis();
    Serial.println("\nPIR_Monitor : HIGH : Entry_Time : ");
    Serial.print(convertMillisToStr(entryTime));
  }

  if (rcwlDetected) {
    rcwlDetected = false;
    unsigned long duration = millis() - entryTime;
    Serial.print("\nRCWL_Monitor : HIGH , Duration : ");
    Serial.print(convertMillisToStr(duration));
    if (duration < 5000) {
      // Person just passed through the room
      return;
    }

    if (!personDetected) {
      // Person just entered the room
      personDetected = true;
      Serial.println("Person entered the room.");
    }
  }

  if (personDetected && !digitalRead(PIR_PIN)) {
    // Person left the room
    personDetected = false;
    exitTime = millis();
    unsigned long duration = exitTime - entryTime;
    Serial.println("Person left the room.");
    Serial.print("Duration: ");
    Serial.println(convertMillisToStr(duration));
    
    if (Firebase.ready() && signupOK && (millis() - sendDataPrevMillis > 15000 || sendDataPrevMillis == 0)){
    sendDataPrevMillis = millis();
    // Write an Int number on the database path test/int
    if (Firebase.RTDB.setInt(&fbdo, "test/duration", Duration)){
      Serial.println("PASSED");
      Serial.println("PATH: " + fbdo.dataPath());
      Serial.println("TYPE: " + fbdo.dataType());
    }
    else {
      Serial.println("FAILED");
      Serial.println("REASON: " + fbdo.errorReason());
    }
  }


  }



}