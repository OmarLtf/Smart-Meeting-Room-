#include <WiFi.h>
#include <Firebase_ESP_Client.h>

//Provide the token generation process info.
#include "addons/TokenHelper.h"
//Provide the RTDB payload printing info and other helper functions.
#include "addons/RTDBHelper.h"

// Insert your network credentials
#define WIFI_SSID "NWA-STAFF-WIFI"
#define WIFI_PASSWORD "Nwa$2022"

// Insert Firebase project API Key
#define API_KEY "AIzaSyCiNhZaSeb_6GklMV_gf-9-cNXeBjuqKJs"

// Insert RTDB URLefine the RTDB URL */
#define DATABASE_URL "https://smart-meeting-room-cc563-default-rtdb.europe-west1.firebasedatabase.app/"

//Define Firebase Data objet
FirebaseData fbdo;
FirebaseJson jsonData, Avalability;

FirebaseAuth auth;
FirebaseConfig config;

const char* Equipments[] = { "White Board", "Talbets", "Data Show" };

unsigned long sendDataPrevMillis = 0;
int count = 0;
bool signupOK = false;

void setup() {
  Serial.begin(115200);
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Connecting to Wi-Fi");
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(300);
  }
  Serial.println();
  Serial.print("ESP Board MAC Address: ");
  Serial.println(WiFi.macAddress());
  Serial.println();
  Serial.print("Connected with IP: ");
  Serial.println(WiFi.localIP());
  Serial.println();

  /* Assign the api key (required) */
  config.api_key = API_KEY;

  /* Assign the RTDB URL (required) */
  config.database_url = DATABASE_URL;

  /* Sign up */
  if (Firebase.signUp(&config, &auth, "", "")) {
    Serial.println("ok");
    signupOK = true;
  } else {
    Serial.printf("%s\n", config.signer.signupError.message.c_str());
  }

  /* Assign the callback function for the long running token generation task */
  config.token_status_callback = tokenStatusCallback;  //see addons/TokenHelper.h

  Firebase.begin(&config, &auth);
  Firebase.reconnectWiFi(true);

  jsonData.add("ID", "MR-01");
  jsonData.add("Status", "Available");
  jsonData.add("Capacity", 7);
  // jsonData.add("Equipments", Equipments);
  jsonData.add("Temperature");
  jsonData.add("Humidity");

  Avalability.add("RoomID", "MR-01");
  Avalability.add("TimeStamp/Time");
  Avalability.add("TimeStamp/Date");
  Avalability.add("Status");
}

void loop() {
  int Temp = random(10000) / 100.0;
  int Hum = random(10000) / 100.0;
  jsonData.set("Temperature", Temp);
  jsonData.set("Humidity", Hum);
  long int Time = millis(); 
  char* Date = "10/03/2023";

  Avalability.set("TimeStamp/Time", Time);
  Avalability.set("TimeStamp/Date", Date); 
  Avalability.set("Status", "Occupied");


  if (Firebase.ready() && signupOK && (millis() - sendDataPrevMillis > 5000 || sendDataPrevMillis == 0)) {
    sendDataPrevMillis = millis();
    // Write an Int number on the database path test/int
    if (Firebase.RTDB.set(&fbdo, "MeetingRooms/Room1", &jsonData) && Firebase.RTDB.push(&fbdo, "Occupency", &Avalability)) {
      Serial.println("PASSED");
      Serial.println("PATH: " + fbdo.dataPath());
      Serial.println("TYPE: " + fbdo.dataType());
    } else {
      Serial.println("FAILED");
      Serial.println("REASON: " + fbdo.errorReason());
    }

  }
}
