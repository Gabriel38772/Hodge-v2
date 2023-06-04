import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';


// register user
export const register = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      picturePath,
      friends,
      location,
      occupation,
    }
      = req.body; //Grupperar dessa från frontend??

    //Encryptar lösenord
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({ //??
      firstName,
      lastName,
      email,
      password: passwordHash,
      picturePath,
      friends,
      location,
      occupation,
      viewedProfile: Math.floor(Math.random() * 10000), //Dessa ska uppdateras??
      impressions: Math.floor(Math.random() * 10000),
    });
    const savedUser = await newUser.save(); 
    // send 201 created status code and saved user json version
    res.status(201).json(savedUser); //Statuskoden 201 betyder att något har skapats. Frontend använder json.savedUser för att kommunicera detta.
  } catch (err) {
    res.status(500).json({//Statuskod 500 betyder att det inte funkade
      error: err.message,
    });
  }
};

// log in
export const login = async (req, res) => {
  try {
    const {email, password} = req.body;
    const user = await User.findOne({email: email});

    if (!user) return res.status(400).json({msg: 'User does not exist.'}); //Kollar om mailen finns

    const isMatch = await bcrypt.compare(password, user.password); //Kollar så lösenordet matchar
    if (!isMatch) return res.status(400).json({msg: 'Invalid credentials.'});

    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET); //Ger användaren en webtoken
    delete user.password; //Ser till så lösenordet inte skickas tillbaka till front end igen.
    res.status(200).json({token, user});

  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};