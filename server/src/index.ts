import express, {Application} from 'express';

class Server {
    public app: Application;

    constructor(){
        this.app=express();
    }

    config():void {
        this.app.set('port', 3000)
    }

    routes():  void{

    }
    

    start(): void{
        this.app.listen()
    }
}

new Server();