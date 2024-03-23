import mongoose from 'mongoose';



export const Connection = async(username, password) => {
    const URL = `mongodb+srv://${username}:${password}@cluster0.olxtnan.mongodb.net/?retryWrites=true&w=majority`;
    try {
       await mongoose.connect(URL, { useNewUrlParser: true});
       console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
}

export default Connection;