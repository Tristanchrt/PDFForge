import * as io from 'socket.io-client';

export class WebSocketTestHelper {
  private clientSocket: io.Socket;

  constructor(private readonly url: string) {}

  connect() {
    this.clientSocket = io.connect(this.url, {
      transports: ['websocket'],
    });
    return new Promise<void>((resolve, reject) => {
      this.clientSocket.on('connect', resolve);
      this.clientSocket.on('connect_error', reject);
    });
  }

  disconnect() {
    if (this.clientSocket) {
      this.clientSocket.disconnect();
    }
  }

  emit(event: string, data: any) {
    this.clientSocket.emit(event, data);
  }

  on(event: string, callback: (data: any) => void) {
    this.clientSocket.on(event, callback);
  }
}