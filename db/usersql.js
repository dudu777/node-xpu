

const UserSQL = {
    // 插入用户信息
    insertInfo:'INSERT INTO USER_INFO(NICKNAME,AVATARURL,OPENID,GENDER,AUTH) VALUES(?,?,?,?,?)',
    insertAuth:'INSERT INTO USER_AUTH(OPENID,USERNAME,STUDENTID,ACADEMY,CLASS) VALUES(?,?,?,?,?)',
    queryAll:'SELECT *FROM user',
    getUserById:'SELECT * FROM user WHERE id = ?'
};
module.exports = UserSQL