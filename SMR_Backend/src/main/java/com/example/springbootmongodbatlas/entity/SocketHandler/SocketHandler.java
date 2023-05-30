package com.example.springbootmongodbatlas.entity.SocketHandler;

import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

public class SocketHandler extends TextWebSocketHandler {

    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        // Connection established logic
        System.out.println("New WebSocket connection established: " + session.getId());

        // Send initial message to the client
        String initialMessage = "Welcome to the WebSocket server!";
        session.sendMessage(new TextMessage(initialMessage));
    }

    @Override
    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
        // Message received logic
        String clientMessage = message.getPayload();
        System.out.println("Received message from client: " + clientMessage);

        // Process the message, perform necessary actions
        // ...

        // Send a response back to the client
        String responseMessage = "Received your message: " + clientMessage;
        session.sendMessage(new TextMessage(responseMessage));
    }

    @Override
    public void handleTransportError(WebSocketSession session, Throwable exception) throws Exception {
        // Error handling logic
        System.out.println("WebSocket transport error occurred for session: " + session.getId());
        exception.printStackTrace();

        // Perform any necessary error handling or cleanup
        // ...
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
        // Connection closed logic
        System.out.println("WebSocket connection closed: " + session.getId());

        // Perform any necessary cleanup or update server state
        // ...
    }

    @Override
    public boolean supportsPartialMessages() {
        // Indicate whether partial messages are supported
        return false;
    }
}
