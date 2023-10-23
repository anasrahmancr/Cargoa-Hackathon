import bcrypt from 'bcrypt';

 const hashing = async(password) => {
    const hashingPass = await bcrypt.hash(password, 12);
    return hashingPass;
}

export default hashing;
