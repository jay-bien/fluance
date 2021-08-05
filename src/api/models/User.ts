import mongoose from 'mongoose';
import { Password } from '../services/password'


const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    genderID:{
        type: Number,
        required: false
    },
    givenName:{

    },
    familyName:{

    },
    preferredName:{

    },
    city:{

    },
    zip:{

    },
    photo:{

    },
    membershipActive:{

    },
    membershipLevel:{

    },
    permissions:{
        
    }


});

userSchema.pre('save', async function( done ){

    if( this.isModified( 'password' )){
        const hashed = await Password.toHash( this.get( 'password' ));

        this.set('password', hashed);
    }

    done();
})

interface UserAttrs {
    email: string;
    password: string;
}
interface UserDoc extends mongoose.Document{
    email: string,
    password: string
}

userSchema.statics.build = ( attrs: UserAttrs ) => {
    return new User( attrs )
};
interface UserModel extends mongoose.Model< any > {
    build( attrs: UserAttrs ): UserDoc;
}

const User =  mongoose.model< UserDoc , UserModel >( 'User', userSchema ); 

export { User }