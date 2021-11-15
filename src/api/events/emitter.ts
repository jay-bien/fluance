const Events = require( 'events' );

class Emitter extends Events {


    removeEmitter = ( event: String ) => {
        console.warn( 'remove emitter');
        return this.emitter.removeListener( event );
    }


    constructor( event: String, listener: Function ){
        super(  event, listener );

        this.emitter = new Emitter.EventEmitter();
        this.emitter.on( event, listener     );

        console.error({ event });

        let emit = this.emitter;

    
        return emit;2
    }


}

export default Emitter;