const loginTokenModal = require("../../modals/login_token/login_token");
const userModal = require("../../modals/user/user");
const {
  getErrorSendData,
  getDateTimeString,
  addTimeToDate,
  isEmail,
  getSuccessSendData,
} = require("../common");

module.exports = {
  LOGIN: async function (data, callback) {
    let sendData = getErrorSendData(); //response data
    const { email, password } = data || {};

    try {
      if (!isEmail(email)) {
        sendData.msg = "Please enter valid email address";
        return callback(sendData);
      }

      const cond = {
        email,
        password: md5(password),
      };

      let user = await userModal.findOne(cond);
      if (!user) {
        sendData.msg = "Invalid email or password";
        return callback(sendData);
      }

      const { _id, name } = user || {};
      const expireDate = addTimeToDate(new Date(), 24, "hours");
      const payload = {
        _id,
        name,
        email,
      };

      const resData = {
        Userdata: payload,
        Token: jwt.sign(payload, env.SECRET_KEY, { expiresIn: "24h" }),
        TokenType: "Bearer",
        TokenExpire: getDateTimeString(expireDate),
      };

      const tokenData = {
        user_id: _id,
        token: resData.Token,
      };
      await loginTokenModal.create(tokenData);

      sendData = getSuccessSendData(resData, "Login successful");
    } catch (err) {
      sendData = getErrorSendData(err);
    }
    callback(sendData);
  },

  LOGOUT: async function (data, callback) {
    let sendData = getErrorSendData(); //response data
    const { user_data, token } = data || {};
    let { _id } = user_data || {};

    try {
      _id = new ObjectId(_id);
      const user = await userModal.findOne({ _id });
      if (!user) {
        sendData = "User does not exist";
        return callback(sendData);
      }

      const delete_login_token = {
        user_id: _id,
        token,
      };
      await loginTokenModal.deleteOne(delete_login_token);

      sendData = getSuccessSendData({}, "You are logout");
    } catch (err) {
      sendData = getErrorSendData(err);
    }
    callback(sendData);
  },

  CREATE: async function (data, callback) {
    let sendData = getErrorSendData(); //response data
    const { email, password } = data || {};

    try {
      if (!isEmail(email)) {
        sendData.msg = "Please enter valid email address";
        return callback(sendData);
      }

      data.password = md5(password);
      data.created_at = new Date();
      data.updated_at = new Date();

      const user = await userModal.create(data);

      const { _id, name } = user || {};
      const expireDate = addTimeToDate(new Date(), 24, "hours");
      const payload = {
        _id,
        name,
        email,
      };

      let newUser = JSON.parse(JSON.stringify(user));
      delete newUser.password;

      const resData = {
        Userdata: newUser,
        Token: jwt.sign(payload, env.SECRET_KEY, { expiresIn: "24h" }),
        TokenType: "Bearer",
        TokenExpire: getDateTimeString(expireDate),
      };

      const tokenData = {
        user_id: _id,
        token: resData.Token,
      };
      await loginTokenModal.create(tokenData);

      sendData = getSuccessSendData(resData, "User created successfully");
    } catch (err) {
      sendData = getErrorSendData(err);
    }
    callback(sendData);
  },

  UPDATE: async function (data, callback) {
    let sendData = getErrorSendData(); //response data
    const { userData, email } = data || {};
    const { _id: user_id } = userData || {};

    try {
      const cond = { _id: new ObjectId(user_id) };
      const user = await userModal.findOne(cond);
      if (!user) {
        sendData.msg = `User does not exist`;
        return callback(sendData);
      }

      if (!isEmail(email)) {
        sendData.msg = "Please enter valid email address";
        return callback(sendData);
      }

      delete data.password;
      data.updated_at = new Date();
      await userModal.updateOne(cond, data);
      const newUser = await userModal
        .findOne(cond)
        .select("-password") // Exclude the user_id field from the query result
        .exec();

      sendData = getSuccessSendData(newUser, "User updated successfully");
    } catch (err) {
      sendData = getErrorSendData(err);
    }
    callback(sendData);
  },

  GET_SINGLE: async function (data, callback) {
    let sendData = getErrorSendData(); //response data
    const { userData } = data || {};
    const { _id: user_id } = userData || {};

    try {
      const userId = new ObjectId(user_id);
      const user = await userModal
        .findOne({ _id: userId })
        .select("-password") // Exclude the user_id field from the query result
        .exec();
      if (!user) {
        sendData.msg = "User does not exist";
        return callback(sendData);
      }

      // let userData = JSON.parse(JSON.stringify(user));
      // delete userData.password;
      sendData = getSuccessSendData(user, "User Profile");
    } catch (err) {
      sendData = getErrorSendData(err);
    }
    callback(sendData);
  },
};
