CREATE TABLE category (
  id_category int(11) PRIMARY KEY AUTO_INCREMENT,
  name_category varchar(255) NOT NULL,
  status varchar(255) DEFAULT NULL
);

CREATE TABLE news (
  id_news int(11) PRIMARY KEY AUTO_INCREMENT,
  title text NOT NULL,
  id_category int(11) NOT NULL,
  content text NOT NULL,
   FOREIGN KEY (id_category) REFERENCES category(id_category)
	ON DELETE CASCADE
    ON UPDATE CASCADE
);

CREATE TABLE comment (
  id_comment int(11) PRIMARY KEY AUTO_INCREMENT,
  id_news int(11) NOT NULL,
  id_category int(11) NOT NULL,
  name_user varchar(255) NOT NULL,
  content_comment text NOT NULL,
  FOREIGN KEY (id_news) REFERENCES news(id_news)
  	ON DELETE CASCADE
    ON UPDATE CASCADE,
  FOREIGN KEY (id_category) REFERENCES category(id_category)
  	ON DELETE CASCADE
    ON UPDATE CASCADE
);


-- Thêm dữ liệu vào bảng "category"
INSERT INTO category (name_category, status)
VALUES ('Category 1', 'Active'),
       ('Category 2', 'Inactive'),
       ('Category 3', 'Active');

-- Thêm dữ liệu vào bảng "news"
INSERT INTO news (title, id_category, content)
VALUES ('News Title 1', 1, 'Content of News 1'),
       ('News Title 2', 2, 'Content of News 2'),
       ('News Title 3', 1, 'Content of News 3');

-- Thêm dữ liệu vào bảng "comment"
INSERT INTO comment (id_news, id_category, name_user, content_comment)
VALUES (1, 1, 'User 1', 'Comment 1 for News 1'),
       (2, 2, 'User 2', 'Comment 1 for News 2'),
       (1, 1, 'User 3', 'Comment 2 for News 1');