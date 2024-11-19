use prj20241114;

CREATE TABLE auth(
    member_id varchar(20) REFERENCES member(id),
    auth VARCHAR(20) NOT NULL,
    PRIMARY KEY (member_id,auth)
);

#
INSERT INTO auth(member_id, auth)
VALUES ('leedero','admin');
INSERT INTO auth(member_id, auth)
VALUES ('leedero','manager');

DESC member;

DESC auth;
