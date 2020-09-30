int input1 = A0;

void setup()
{
   pinMode(input1, INPUT);
}

void loop()
{
    String value = String(getSensorValue());
    String data = String::format(
        "{ \"VALUE\":\"%s\" }",
        value.c_str()
    );
    Particle.publish("sendToFunction",data);
    delay(1000);
}

int getSensorValue() {
    return analogRead(input1);
}

void PushMessage(String msg)
{
    String color = "#FF4500";
    String data = String::format(
        "{ \"text\":\"%s\", \"color\": \"%s\" }",
        msg.c_str(),color.c_str()
    );
    Particle.publish("SlackMessage", data, PRIVATE);
}
