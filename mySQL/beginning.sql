-- SELECT * FROM my_db_01.users;
-- SELECT password FROM my_db_01.users;

-- INSERT
-- INSERT INTO users (username, password) VALUES ("tony stark", 098123);
-- SELECT * FROM users;

-- UPDATE
-- UPDATE users SET password="new" WHERE id=4
-- UPDATE users SET password="admin123", status=1 WHERE id=2
-- SELECT * FROM users;

-- DELETE
-- DELETE FROM users WHERE id=4;
-- SELECT * FROM users

-- WHERE
-- SELECT * FROM users WHERE status=1;
-- SELECT * FROM users WHERE id>2;
-- SELECT * FROM users WHERE username != "ls"

-- AND, OR
-- SELECT * FROM users WHERE status=0 AND id<3;
-- SELECT * FROM users WHERE status=1 OR username="zs";


-- ORDER BY: ASC, DESC
-- SELECT * FROM users ORDER BY status;
-- SELECT * FROM users ORDER BY status ASC;
-- SELECT * FROM users ORDER BY id DESC;
-- 先按照status进行降序排序（大范围排序），再按照id进行升序排序(小范围排序)
-- SELECT * FROM users ORDER BY status DESC, id ASC;
-- SELECT * FROM users ORDER BY status DESC, username ASC;

-- COUNT(*)
-- SELECT COUNT(*) FROM users
-- SELECT COUNT(*) FROM users WHERE status=0;

-- AS
-- SELECT COUNT(*) AS total FROM users WHERE status=0










